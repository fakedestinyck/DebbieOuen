<?php

namespace App\Http\Controllers;

use App\Test;
use Illuminate\Http\Request;

class LotteryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Test::where('cb','lottery')->where('cc','1')->orderBy('id')->select('cd')->get();
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
        if (!isset($request->qqid)) {
            return response("缺少参数",400);
        } else {
            $exist = Test::where('cb','lottery')->where('cc','1')->where('cd',$request->qqid)->get();
            if (count($exist) != 0) {
                return response("你已经报过名了，无需重复报名",200);
            }
            Test::create([
                "cb" => "lottery",
                "cc" => "1",
                "cd" => $request->qqid
            ]);
            return response("报名参加抽奖成功",200);
        }
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
}
