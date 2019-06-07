<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DokiController extends Controller
{
    private function getAllFileNames() {
        $path = dirname( __FILE__ ).'/../../../../doki/data';
        $files = preg_grep('~\.(json)$~', scandir($path,1));
        $filenames = array();
        foreach ($files as $file) {
            $filenames[] = str_replace(".json","",$file);
        }
        return ($filenames);
    }

    private function getEachData($timestamp) {
        $path = dirname( __FILE__ ).'/../../../../doki/data/';
        $file_base_name = $path.$timestamp;
        $file = $file_base_name.'.json';
        if (file_exists($file)) {
            $handle = fopen($file, 'r') or die('Cannot open file: '.$timestamp.".json");
            $data = fread($handle,filesize($file));
            $data = json_decode($data,true);
            $time = $data["time"];
            $dokis = $data["list"];
            $first = $dokis[0];
            $front = array();
            $debbie = array();
            $behind = array();
            for ($i = 0; $i < count($dokis); ++$i) {
                if ($dokis[$i]["name"] == "蒋申") {
                    $debbie = $dokis[$i];
                    $front = $dokis[$i-1];
                    $behind = $dokis[$i+1];
                    break;
                }
            }
            return array(
                "time" => $time,
                "first" => $first,
                "front" => $front,
                "debbie" => $debbie,
                "behind" => $behind
            );
        } else {
            $arr = array('status'=>"404","msg"=>"无法找到文件：".$timestamp.".json");
            return $arr;
        }

    }

    private function calcDelta($first, $front, $behind) { //这里front和behind指 behind需要追上front
        $behind_popularity_score = 50*log($behind["popularity"])/log($first["popularity"]);
        $behind_sign_score = 50*log($behind["sign_num"])/log($first["sign_num"]);
        $t_popularity = round(exp((($front["score"]-$behind["score"])+$behind_popularity_score)/50*log($first["popularity"])),0);
        $t_sign = round(exp((($front["score"]-$behind["score"])+$behind_sign_score)/50*log($first["sign_num"])),0);

        $delta_popularity = $t_popularity - $behind["popularity"];
        $delta_sign = $t_sign - $behind["sign_num"];

        return array(
            "d_popularity" => $delta_popularity,
            "d_sign" => $delta_sign
        );
    }

    private function getLatest($data) {
        return $this->calcDelta($data["first"],$data["front"],$data["debbie"]);
    }

    private function mean($arr) {
        return array_sum($arr)/count($arr);
    }

    private function median($arr){
        $count = count($arr);
        sort($arr);
        if ($count % 2 == 1) {
            return $arr[intval(floor($count/2))];
        } else {
            return ($arr[intval(floor($count/2))-1]+$arr[intval(floor($count/2))])/2;
        }
    }

    private function stddev($arr,$mean) {
        $sum_of_square = 0;
        foreach ($arr as $item) {
            $sum_of_square += pow(($item-$mean),2);
        }
        return sqrt($sum_of_square/count($arr));
    }

    private function isIn2Delta($num, $median, $stddev) {
        if ($stddev > 100) {
            return ($num < $median + 1.5 * $stddev) and ($num > $median - 1.5 * $stddev);
        } else {
            return ($num < $median + 2.5 * $stddev) and ($num > $median - 2.5 * $stddev);
        }
    }

    private function calcHourDelta($data) {
        $delta_arr = array();
        for ($i = 0; $i < 159; ++$i) {
            $delta_arr[] = $data[$i] - $data[$i+1];
        }
        $mean = $this->mean($delta_arr);
        $median = $this->median($delta_arr);
        $stddev = $this->stddev($delta_arr,$mean);

        $valid_arr = array();
        foreach ($delta_arr as $item) {
            if ($this->isIn2Delta($item,$median,$stddev)) {
                $valid_arr[] = $item;
            }
        }

        return array_sum($valid_arr)*29/count($valid_arr);
    }


    private function getHourDelta($data) {
        $first_p = array();
        $first_s = array();
        $front_p = array();
        $front_s = array();
        $debbie_p = array();
        $debbie_s = array();
        foreach ($data as $datum) {
            $first_p[] = $datum["first"]["popularity"];
            $first_s[] = $datum["first"]["sign_num"];
            $front_p[] = $datum["front"]["popularity"];
            $front_s[] = $datum["front"]["sign_num"];
            $debbie_p[] = $datum["debbie"]["popularity"];
            $debbie_s[] = $datum["debbie"]["sign_num"];
        }
        $first_d_p = $this->calcHourDelta($first_p);
        $first_d_s = $this->calcHourDelta($first_s);
        $front_d_p = $this->calcHourDelta($front_p);
        $front_d_s = $this->calcHourDelta($front_s);
//        $debbie_d_p = $this->calcHourDelta($debbie_p);
//        $debbie_d_s = $this->calcHourDelta($debbie_s);

        $first_new_p = $data[0]["first"]["popularity"]+$first_d_p;
        $first_new_s = $data[0]["first"]["sign_num"]+$first_d_s;

        $front_new_p = $data[0]["front"]["popularity"] + $front_d_p;
        $front_new_s = $data[0]["front"]["sign_num"] + $front_d_s;

        $front_new_p_score = 50*log($front_new_p)/log($first_new_p);
        $front_new_s_score = 50*log($front_new_s)/log($first_new_s);

        return array(
            "delta" => $this->calcDelta(
                array(
                    "popularity" => $first_new_p,
                    "sign_num" => $first_new_s
                ),
                array(
                    "score" => $front_new_p_score + $front_new_s_score
                ),
                $data[0]["debbie"]
            ),
            "front_self_delta" => array(
                "popularity" => round($front_d_p,0),
                "sign" => round($front_d_s,0)
            )
        );
    }

    private function getRank($timestamp) {
        $path = dirname( __FILE__ ).'/../../../../doki/data/';
        $file_base_name = $path.$timestamp;
        $file = $file_base_name.'.json';
        if (file_exists($file)) {
            $handle = fopen($file, 'r') or die('Cannot open file: '.$timestamp.".json");
            $data = fread($handle,filesize($file));
            $data = json_decode($data,true);
            $dokis = $data["list"];
            for ($i = 0; $i < count($dokis); ++$i) {
                if ($dokis[$i]["name"] == "蒋申") {
                    return $i+1;
                    break;
                }
            }
        } else {
            $arr = array('status'=>"404","msg"=>"无法找到文件：".$timestamp.".json");
            return $arr;
        }
    }

    public function getHourData() {
        $all_filenames = $this->getAllFileNames();
        rsort($all_filenames);
        $timestamps = array_slice($all_filenames,0,160);
        $hour_data = array();
        $latest = "";
        $rank = 0;
        foreach ($timestamps as $timestamp) {
            if ($timestamp > $latest) {
                $rank = $this->getRank($timestamp);
                $latest = $timestamp;
            }
            $hour_data[] = $this->getEachData($timestamp);
        }
        $instant_delta = $this->getLatest($hour_data[0]);

        $forecast = $this->getHourDelta($hour_data);
        return array(
            "rank" => $rank,
            "instant_delta" => $instant_delta,
            "forecast" => $forecast
        );
    }
}
