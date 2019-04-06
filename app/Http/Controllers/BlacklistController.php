<?php

namespace App\Http\Controllers;

use App\Blacklist;
use Illuminate\Http\Request;

class BlacklistController extends Controller
{
    private function isEmpty($value) {
        return !(isset($value) && $value != null && $value != "");
    }

    private function store($type,$user_id,$reason) {
        Blacklist::create([
            "type" => $type,
            "user_id" => $user_id,
            "reason" => $reason
        ]);
        return array(
            "status" => 1,
            "message" => "成功"
        );
    }

    public function parseForm(Request $request) {
        $type = $request["type"];
        $user_id = $request["id"];
        $reason = $request["r"];
        $token = $request["token"];
        if ($this->isEmpty($type) || $this->isEmpty($user_id) || $this->isEmpty($reason)) {
            return array(
                "status" => -400,
                "err_msg" => "缺少参数"
            );
        }
        if ($this->isEmpty($token)) {
            return array(
                "status" => -401,
                "err_msg" => "缺少校验参数"
            );
        }

        $md5_qq_type = strtolower(md5(strval(intval($user_id)*2).$type));
        $md5_reason = strtolower(md5($reason));

        $correct_token = $md5_reason[3].$md5_qq_type[11].$md5_qq_type[14].$md5_qq_type[30].$md5_reason[17].$md5_qq_type[23].
            $md5_reason[9].$md5_reason[25].$md5_qq_type[24].$md5_reason[0];

        if ($correct_token != $token) {
            return array(
                "status" => -403,
                "err_msg" => "参数校验失败"
            );
        }

        return $this->store($type,$user_id,$reason);
    }

    public function isBlacklisted() {
        if ((!isset($_GET["id"]) || $_GET["id"] == null) || (!isset($_GET["type"]) || $_GET["type"] == null)) {
            return array(
                "status" => -400,
                "err_msg" => "缺少参数"
            );
        }
        $blocked_list = Blacklist::where('type',$_GET["type"])->where('user_id',$_GET["id"])->limit(1)->get();
        return array(
            "status" => 1,
            "result" => count($blocked_list) == 1
        );

    }
}
