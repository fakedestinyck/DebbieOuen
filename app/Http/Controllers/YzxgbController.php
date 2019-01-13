<?php

namespace App\Http\Controllers;

use App\YzxgbPunch;
use Illuminate\Http\Request;

class YzxgbController extends Controller
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

    public function punch(Request $request) {
        $data = $request->all();
        if (!isset($data["qqid"]) || !isset($data["sign"])) {
            return array(
                "status" => "-1",
                "errmsg" => "参数错误"
            );
        } else {
            $qqid = $data["qqid"];
            $sign = $data["sign"];
            $md5qqid = md5(strtolower(md5($qqid)));
            $mySign = strtolower($md5qqid[8].$md5qqid[30].$md5qqid[0].$md5qqid[7].$md5qqid[14].$md5qqid[28]);
            if ($sign != $mySign) {
                return array(
                    "status" => "-1",
                    "errmsg" => "签名校验错误"
                );
            } else {
                YzxgbPunch::create($request->except("sign"));
                return array(
                    "status" => "1",
                );
            }
        }
    }
}
