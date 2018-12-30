<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WyscwController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function get() {
        $path = dirname( __FILE__ ).'/../../../../getWyscwData/data';
        $files = preg_grep('~\.(json)$~', scandir($path));
        $filenames = array();
        foreach ($files as $file) {
            $filenames[] = str_replace(".json","",$file);
        }
        return ($filenames);
    }

    public function makeUpdateTime($timeString) {
        $year = substr($timeString,0,4);
        $month = substr($timeString,4,2);
        $day = substr($timeString,6,2);
        $hour = substr($timeString,8,2);
        $minute = substr($timeString,10,2);
        return "$year.$month.$day $hour:$minute";
    }

    public function getLatest() {
        $files = $this->get();
        return $this->getSpecific(end($files));
    }

    public function getSpecific($timestamp) {
        $path = dirname( __FILE__ ).'/../../../../getWyscwData/data/';
        $file_base_name = $path.$timestamp;
        $file = $file_base_name.'.json';
        if (file_exists($file)) {
            $handle = fopen($file, 'r') or die('Cannot open file: '.$timestamp.".json");
            $data = fread($handle,filesize($file));
            $data = json_decode($data);
            $arr = array('status'=>"200",'data'=>$data);
            return $arr;
        } else {
            $arr = array('status'=>"404","msg"=>"无法找到文件：".$timestamp.".json");
            return $arr;
        }
    }

    public function getAll() {
        $dataArray = array();
        $files = $this->get();
        $lastPoint = 0;
        foreach ($files as $file) {
            $data = $this->getSpecific($file);
            if ($data["status"] == "200") {
                $fileArray = json_decode(json_encode($data['data']),true);
                usort($fileArray, function($a, $b) {
                    $al = $a['v'];
                    $bl = $b['v'];
                    if ($al == $bl)
                        return 0;
                    return ($al > $bl) ? -1 : 1;
                });
                $rank = 0;
                foreach ($fileArray as $datum) {
                    $rank ++;
                    if ($datum["t"] == "歌舞表演《寄明月》") {
                        $uniChanged = null;
                        if ($lastPoint != 0) {
                            $uniChanged = $datum["v"] - $lastPoint;
                        }
                        $lastPoint = $datum["v"];
                        $dataArray[] = [
                            "updateTime" => $this->makeUpdateTime($file),
                            "charts" => [
                                "v" => $datum["v"],
                                "r" => $rank,
                                "u" => $uniChanged
                            ]
                        ];
                    }
                }
            } else {
                return response("无法找到文件：".$file.".json",500);
                break;
            }
        }
        return response($dataArray,200);
    }
}
