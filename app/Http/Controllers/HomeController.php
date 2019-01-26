<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = file_get_contents("https://space.bilibili.com/ajax/member/getSubmitVideos?mid=295679074&page=1&pagesize=3");
        $data = json_decode($response,true)["data"];
        $vlist = $data["vlist"];

        return view('home', compact('vlist'));
    }
}
