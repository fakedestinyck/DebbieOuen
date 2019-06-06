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

    public function getHourData() {
        $all_filenames = $this->getAllFileNames();
        rsort($all_filenames);
        $timestamps = array_slice($all_filenames,0,60);
        $hour_data = array();
        foreach ($timestamps as $timestamp) {
            $hour_data[] = $this->getEachData($timestamp);
        }
        $instant_delta = $this->getLatest($hour_data[0]);


        return array(
            "instant_delta" => $instant_delta
        );
    }
}
