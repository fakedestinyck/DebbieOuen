<?php

namespace App\Http\Controllers;

use App\Test;
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

    public function pythontest(Request $request) {
        $randomNumber = rand(1,10);
        if ($randomNumber <= 5) {
            return response("请求超时",408);
        }

        $ip = $_SERVER['REMOTE_ADDR'];
        $oldip = Test::where("ca",$ip)->orderBy("created_at","desc")->limit(1)->get();
        if (count($oldip) != 0) {
            $lasttime =  $oldip[0]->created_at->timestamp;
            $nowtime = time();
            $timediff = $nowtime - $lasttime;
            Test::create([
                "ca"=>$ip
            ]);
            if ($timediff <= 3) {
                return array(
                    "error_code" => -8,
                    "message" => "请求过于频繁！请再过3秒再试！"
                );
            }
        }

        $randomNumber = rand(11,20);
        if ($randomNumber <= 15) {
            return array(
                "error_code" => -503,
                "message" => "暂时无法提供服务，请重试"
            );
        }


        if (!isset($request["username"]) || $request["username"] == "" || $request["username"] == null) {
            return array(
                "error_code"=>-1,
                "message" => "你是谁啊？"
            );
        }
        $token = $request->header("token");
        if ($token == "" || $token == null) {
            return array(
                "error_code"=>-2,
                "message" => "缺少校验参数"
            );
        }

        $header = $request->header();
        if ($request->header("user-agent") == "" || $request->header("user-agent") == null) {
            return array(
                "error_code"=>-500,
                "message" => "请不要使用爬虫模拟登陆"
            );
        }
        $ua = $request->header("user-agent");
        if (strpos($ua,"Safari") === false && strpos($ua,"safari") === false && strpos($ua,"hrome") === false &&
            strpos($ua,"Mozilla") === false) {
            return array(
                "error_code"=>-500,
                "message" => "请不要使用爬虫模拟登陆"
            );
        }

        if (base64_encode($request["username"]) != $token) {
            return array(
                "error_code"=> - 10,
                "message" => "参数校验失败"
            );
        }

        if ($request["username"] != "testuser") {
            return array(
                "error_code"=>-403,
                "message" => "你没有权限查看数据"
            );
        }

        return array(
            "error_code" => 0,
            "message" => "0XkuEpBFo7FxP5AxNeEcf4OpeO6tTTHSm78F4GVqhYM80RK9ZHCDbM85Rm+aCu9SFWVRcRD32STseSeTrgYphfrDqVI8lc76ZWuj5lXKdbnt8MEgaSU0yUK5W4RwodhU",
            "encode_type" => "DES"
        );

    }
}
