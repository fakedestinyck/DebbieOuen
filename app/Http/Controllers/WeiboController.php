<?php

namespace App\Http\Controllers;

use App\WeiboDailyRank;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WeiboController extends Controller
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


    public function downloadFile(Request $request)
    {
        #header("Content-type: text/plain; charset=utf-8");
        if ('http://'.$_SERVER['HTTP_HOST'] == env('APP_URL','localhost')) {
            $prefix = "/Users/Fakedestinyck/miniconda3/bin/python3.5 ";
        } else {
            $prefix = "python3.5 ";
        }
        $dir = dirname( __FILE__ ).'/../../../../getWeiboData/';
        $a =  exec($prefix.$dir."getFullList.py 2>&1");
        if ($a == "success") {
            return response("all.txt",200);
        } else {
            return response($a,500);
        }
    }

    public function isAdmin()
    {
        if (Auth::check()) {
            return 'true';
        } else {
            return 'false';
        }
    }

    public function getRankData(){
        if (Auth::check()) {
            $allData = WeiboDailyRank::all();
            return $allData;
        } else {
            return response('客户端身份校验失败！请尝试重新登录！',403);
        }
    }

    public function storeAttendanceData(Request $request)
    {
        $content = $request->all();
        $number = $content["number"];

        return response('Success!', 200);
    }
}
