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

    private function getEachData($timestamp,$front_name,$behind_name) {
        $path = dirname( __FILE__ ).'/../../../../doki/data/';
        $file_base_name = $path.$timestamp;
        $file = $file_base_name.'.json';
        if (file_exists($file)) {
            $handle = fopen($file, 'r') or die('Cannot open file: '.$timestamp.".json");
            $file_size = filesize($file);
            if ($file_size < 4000) {
                return "文件错误";
            }
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
                }
                if ($dokis[$i]["name"] == $front_name) {
                    $front = $dokis[$i];
                }
                if ($dokis[$i]["name"] == $behind_name) {
                    $behind = $dokis[$i];
                }
                if (!empty($front) && !empty($debbie) && !empty($behind)) {
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
            "d_popularity" => intval($delta_popularity),
            "d_sign" => intval($delta_sign)
        );
    }

    private function getLatest($data) {
        return array(
            "front" => $this->calcDelta($data["first"],$data["front"],$data["debbie"]),
            "behind" => $this->calcDelta($data["first"],$data["debbie"],$data["behind"])
        );
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

    private function calcHourDelta($data, $allDelta=false, $futureMins=30) {
        $delta_arr = array();
        for ($i = 0; $i < count($data)-1; ++$i) {
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

        if ($allDelta) {
            return $delta_arr;
        }

        if ($futureMins<=10) {
            return array_sum($valid_arr)*($futureMins-1)/count($delta_arr);
        } else {
            return array_sum($valid_arr)*($futureMins-1)/count($valid_arr);
        }


    }


    private function getHourDelta($data, $allDelta=false, $futureMins=30) {
        $first_p = array();
        $first_s = array();
        $front_p = array();
        $front_s = array();
        $debbie_p = array();
        $debbie_s = array();
        $behind_p = array();
        $behind_s = array();
        foreach ($data as $datum) {
            $first_p[] = $datum["first"]["popularity"];
            $first_s[] = $datum["first"]["sign_num"];
            $front_p[] = $datum["front"]["popularity"];
            $front_s[] = $datum["front"]["sign_num"];
            $debbie_p[] = $datum["debbie"]["popularity"];
            $debbie_s[] = $datum["debbie"]["sign_num"];
            $behind_p[] = $datum["behind"]["popularity"];
            $behind_s[] = $datum["behind"]["sign_num"];
        }
        $first_d_p = $this->calcHourDelta($first_p,false,$futureMins);
        $first_d_s = $this->calcHourDelta($first_s,false,$futureMins);
        $front_d_p = $this->calcHourDelta($front_p,false,$futureMins);
        $front_d_s = $this->calcHourDelta($front_s,false,$futureMins);
        $behind_d_p = $this->calcHourDelta($behind_p,false,$futureMins);
        $behind_d_s = $this->calcHourDelta($behind_s,false,$futureMins);

        if ($allDelta) {
//            $debbie_d_p = $this->calcHourDelta($debbie_p);
            $debbie_d_s = $this->calcHourDelta($debbie_s, true);
            return $debbie_d_s;
        }

        $first_new_p = $data[0]["first"]["popularity"]+$first_d_p;
        $first_new_s = $data[0]["first"]["sign_num"]+$first_d_s;

        $front_new_p = $data[0]["front"]["popularity"] + $front_d_p;
        $front_new_s = $data[0]["front"]["sign_num"] + $front_d_s;

        $front_new_p_score = 50*log($front_new_p)/log($first_new_p);
        $front_new_s_score = 50*log($front_new_s)/log($first_new_s);

        $behind_new_p = $data[0]["behind"]["popularity"]+$behind_d_p;
        $behind_new_s = $data[0]["behind"]["sign_num"]+$behind_d_s;

        $behind_new_p_score = 50*log($behind_new_p)/log($first_new_p);
        $behind_new_s_score = 50*log($behind_new_s)/log($first_new_s);

        return array(
            "delta" => array(
                "front" => $this->calcDelta(
                    array(
                        "popularity" => $first_new_p,
                        "sign_num" => $first_new_s
                    ),
                    array(
                        "score" => $front_new_p_score + $front_new_s_score
                    ),
                    $data[0]["debbie"]
                ),
                "behind" => $this->calcDelta(
                    array(
                        "popularity" => $first_new_p,
                        "sign_num" => $first_new_s
                    ),
                    array(
                        "score" => 50*log($data[0]["debbie"]["popularity"])/log($first_new_p)
                            + 50*log($data[0]["debbie"]["sign_num"])/log($first_new_s),
                    ),
                    array(
                        "score" => $behind_new_p_score + $behind_new_s_score,
                        "popularity" => $behind_new_p,
                        "sign_num" => $behind_new_s
                    )
                )
            ),
            "front_self_delta" => array(
                "popularity" => round($front_d_p,0),
                "sign" => round($front_d_s,0)
            ),
            "behind_self_delta" => array(
                "popularity" => round($behind_d_p,0),
                "sign" => round($behind_d_s,0)
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
                    return array(
                        "rank" => $i+1,
                        "front_name" => $dokis[$i-1]["name"],
                        "behind_name" => $dokis[$i+1]["name"]
                    );
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
        $timestamps = array_slice($all_filenames,0,min(160,count($all_filenames)));
        $hour_data = array();
        $rank_data = $this->getRank($timestamps[0]);
        $rank = $rank_data["rank"];
        $front_name = $rank_data["front_name"];
        $behind_name = $rank_data["behind_name"];
        foreach ($timestamps as $timestamp) {
            $hour_data[] = $this->getEachData($timestamp,$front_name,$behind_name);
        }
        $instant_delta = $this->getLatest($hour_data[0]);

        $forecast = $this->getHourDelta($hour_data);
        return array(
            "rank" => $rank,
            "instant_delta" => $instant_delta,
            "forecast" => $forecast
        );
    }

    public function forecastFiveMinutes() {
        $all_filenames = $this->getAllFileNames();
        rsort($all_filenames);
        $timestamps = array_slice($all_filenames,0,min(8,count($all_filenames)));
        $hour_data = array();
        $rank_data = $this->getRank($timestamps[0]);
        $rank = $rank_data["rank"];
        $front_name = $rank_data["front_name"];
        $behind_name = $rank_data["behind_name"];
        foreach ($timestamps as $timestamp) {
            $hour_data[] = $this->getEachData($timestamp,$front_name,$behind_name);
        }
//        $instant_delta = $this->getLatest($hour_data[0]);

        $forecast = $this->getHourDelta($hour_data,false,5);
        return array(
            "rank" => $rank,
            "forecast" => $forecast
        );
    }

    public function getAllDataDelta() {
        $all_filenames = $this->getAllFileNames();
        rsort($all_filenames);
        $timestamps = $all_filenames;
        $timestamp_str = array();
        $hour_data = array();
        $rank_data = $this->getRank($timestamps[0]);
        $front_name = $rank_data["front_name"];
        $behind_name = $rank_data["behind_name"];
        foreach ($timestamps as $timestamp) {
            $each_data = $this->getEachData($timestamp,$front_name,$behind_name);
            if (!is_array($each_data)) {
                continue;
            }
            $hour_data[] = $each_data;
            $timestamp_str[] = substr((string)$timestamp,0,4).".".substr((string)$timestamp,4,2).".".substr((string)$timestamp,6,2)." ".substr((string)$timestamp,8,2).":".substr((string)$timestamp,10,2);
        }

        return response(
            array(
                "timestamps" => array_reverse($timestamp_str),
                "delta" => array_reverse($this->getHourDelta($hour_data,true))
            ),
            200
        );
    }
}
