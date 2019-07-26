<?php

namespace App\Http\Controllers;

use App\ChangbaPunch;
use Illuminate\Http\Request;

class ChangbaController extends Controller
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
        if (!isset($data["qqid"]) || !isset($data["sign"]) || !isset($data["num"])) {
            return array(
                "status" => "-1",
                "errmsg" => "参数错误"
            );
        } else {
            $qqid = $data["qqid"];
            $num = $data["num"];
            $sign = $data["sign"];
            $md5qqidnum = md5(strtolower(md5($qqid.$num)));
            $md5qqid = $md5qqidnum;
            $mySign = strtolower($md5qqid[8].$md5qqid[30].$md5qqid[0].$md5qqid[7].$md5qqid[14].$md5qqid[28]);
            if ($sign != $mySign) {
                return array(
                    "status" => -1,
                    "errmsg" => "签名校验错误"
                );
            } else {
                ChangbaPunch::create($request->except("sign"));
                return $this->getPunchDataByDay();
            }
        }
    }

    public function getPunchDataByDay() {
        $today = date("Y-m-d");
        $punches = ChangbaPunch::whereDate('created_at',$today)->sum("num");
        if ($punches == 0) {
            return array(
                "status"=>0
            );
        } else {
//            $users = array();
//            foreach ($punches as $punch) {
//                if (array_key_exists($punch->qqid,$users)) {
//                    $users[$punch->qqid] += 1;
//                } else {
//                    $users[$punch->qqid] = 1;
//                }
//            }
//            arsort($users);
            return array(
                "status" => 1,
                "total" => $punches
            );
        }
    }
}
