<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class YouniController extends Controller
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
        $path = dirname( __FILE__ ).'/../../../../getYouniData/data';
        $files = preg_grep('~\.(json)$~', scandir($path,1));
        $filenames = array();
        foreach ($files as $file) {
            $filenames[] = str_replace(".json","",$file);
        }
        return ($filenames);
    }

    public function getSpecific($timestamp) {
        $path = dirname( __FILE__ ).'/../../../../getYouniData/data/';
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

    public function getLatest() {
        $files = $this->get();
        return $this->getSpecific($files[0]);
    }

    public function getAll() {
        $dataArray = array();
        $files = $this->get();
        foreach ($files as $file) {
            $data = $this->getSpecific($file);
            if ($data["status"] == "200") {
                $dataArray[] = $data["data"];
            } else {
                return array('status'=>'404', 'msg'=>"无法找到文件：".$file.".json");
                break;
            }
        }
        return array('status'=>"200", 'data'=>$dataArray);
    }
}