<?php

namespace App\Http\Controllers;

use App\Modian;
use Illuminate\Http\Request;

class ModianController extends Controller
{

    public function getRankAndDetail($pro_id,$user_id) {
        $my_total = Modian::where('pro_id',$pro_id)->where('user_id',$user_id)->sum('money');
        $modian_highers = Modian::where('pro_id',$pro_id)
            ->groupBy('user_id')
            ->selectRaw('sum(money) as sum, user_id')
            ->havingRaw("sum > $my_total")
            ->orderByRaw('sum DESC')
            ->pluck('sum','user_id');
        $higher_count = count($modian_highers);
        if ($higher_count == 0) {
            return array(
                "myRank" => 1,
                "moneyToPrev" => 0,
                "myTotal" => round($my_total,2)
            );
        } else {
            $modian_highers_array = $modian_highers->toArray();
            return array(
                "myRank" => $higher_count+1,
                "moneyToPrev" => round(end($modian_highers_array) - $my_total , 2),
                "myTotal" => round($my_total,2)
            );
        }

    }

    public function storeData($pro_id,$user_id,$money,$timestamp) {
        $timestamp = date('Y-m-d H:i:s', $timestamp);
        $exist_same = Modian::where('pro_id',$pro_id)
            ->where('user_id',$user_id)
            ->where('money',$money)
            ->where('pay_success_time',$timestamp)
            ->get();
        if (count($exist_same) != 0) {
            return array(
                "status" => -1,
                "msg" => "Duplicate"
            );
        }
        $new_modian=Modian::create([
            "pro_id" => $pro_id,
            "user_id" => $user_id,
            "money" => $money,
            "pay_success_time" => $timestamp
        ]);
        $new_modian_id = $new_modian->id;
        if ($new_modian_id != 0) {
            return array(
                "status" => 1,
                "data" => $this->getRankAndDetail($pro_id,$user_id)
            );
        } else {
            return array(
                "status" => -1,
                "msg" => "Insert failed"
            );
        }

    }


    public function store() {
        if (!isset($_GET["p"]) || $_GET["p"] == null) {
            return response("不合法的请求！", 403);
        }
        if (!isset($_GET["u"]) || $_GET["u"] == null) {
            return response("不合法的请求！", 403);
        }
        if (!isset($_GET["m"]) || $_GET["m"] == null) {
            return response("不合法的请求！", 403);
        }
        if (!isset($_GET["t"]) || $_GET["t"] == null) {
            return response("不合法的请求！", 403);
        }
        if (!isset($_GET["token"]) || $_GET["token"] == null) {
            return response("不合法的请求！", 403);
        }

        $pro_id = $_GET["p"];
        $user_id = $_GET["u"];
        $money = $_GET["m"];
        $timestamp = $_GET["t"];
        $signature = $_GET["token"];

        $md5item = strtolower(md5($pro_id));
        $md5qqid = strtoupper(md5(strtolower(md5($user_id))));
        $md5count = strtolower(md5($money));
        $md5timestamp = strtolower(md5($timestamp));

        $beforehash = $md5item.$md5count.$md5qqid.$md5timestamp;
        $myhashed = strtolower(hash('sha512', $beforehash));
        $mysignature = "";

        for ($i=0;$i<128;$i=$i+2) {
            $mysignature .= $myhashed[$i];
        }

        if ($mysignature != $signature) {
            return response("参数校验失败！", 403);
        }

        $result = $this->storeData($pro_id,$user_id,$money,$timestamp);
        if ($result["status"] == -1) {
            return response($result["msg"],409);
        } else if ($result["status"] == 1) {
            return response($result["data"],200);
        } else {
            return response('something went wrong',500);
        }
    }
}
