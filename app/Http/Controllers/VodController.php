<?php

namespace App\Http\Controllers;

use App\Test;
use Illuminate\Http\Request;

class VodController extends Controller
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

    private function do_get($url, $params, $headers) {
        $url = "{$url}?" . http_build_query ( $params );
        $ch = curl_init ();
        curl_setopt ( $ch, CURLOPT_URL, $url );
        curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt ( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );
        curl_setopt ( $ch, CURLOPT_HTTPHEADER, $headers );
        curl_setopt ( $ch, CURLOPT_TIMEOUT, 60 );
        curl_setopt ( $ch, CURLOPT_POSTFIELDS, $params );
        $result = curl_exec ( $ch );
        curl_close ( $ch );
        return $result;
    }

    public function callback(Request $request) {
        if ($request->EventType != 'ProcedureStateChanged') {
            return ['code' => 1];
        }
        $data = $request->ProcedureStateChangeEvent;
        $status = $data['Status'];
        if ($status != 'FINISH') {
            return ['code' => 2];
        }
//        $outFileUrl = $data['FileUrl'];
        $MediaProcessResultSet = $data['MediaProcessResultSet'];
        if (count($MediaProcessResultSet) < 1) {
            return ['code' => 1];
        }
        $resultUrl = '';
        foreach ($MediaProcessResultSet as $MediaProcessResult) {
            $resultTaskType = $MediaProcessResult['Type'];
            if ($resultTaskType != 'Transcode') {
                continue;
            }
            $task = $MediaProcessResult['TranscodeTask'];
            if ($task['Status'] != 'SUCCESS') {
                return ['code' => 0];
            }
            $resultUrl = $task['Output']['Url'];
        }
        if ($resultUrl == '') {
            return ['code' => 0];
        }


        $url="http://1.116.29.188:5700/send_group_msg";
        $params=array('group_id'=>'708617599', 'message'=>'直播视频处理完成。地址：'.$resultUrl);
        $headers=array(
            "Content-Type:application/json",
            "Accept-Encoding:gzip",
            'Authorization:Bearer aslkfdjie32df'
        );
        $result=$this->do_get($url,$params, $headers);
        return json_decode($result, true);

    }

}
