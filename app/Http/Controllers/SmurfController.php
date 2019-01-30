<?php

namespace App\Http\Controllers;

use App\Helpers\RsaUtil;
use App\Smurf;
use App\SmurfEvent;
use App\SmurfTicket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SmurfController extends Controller
{

    private static function rsa_encode($data){
        return urldecode(
            RsaUtil::privateEncrypt(
                $data ,
                file_get_contents( base_path('keys/private.pem') )
            )
        );
    }

    private static function rsa_decode($data){
        return urldecode(
            RsaUtil::privateDecrypt(
                $data ,
                file_get_contents( base_path('keys/private.pem') )
            )
        );
    }

    public function upload(Request $request) {
        $success_num = 0;
        $fail_num = 0;
        $uaps_list = array();
        $wholeString = $request["wholeString"];
        if (strlen($wholeString) % 172 == 0) {
            while (strlen($wholeString) > 0) {
                $this_part = substr($wholeString,0,172);
                $wholeString = substr($wholeString,172);
                $this_decrypted = self::rsa_decode($this_part);
                if ($this_decrypted == null) {
                    $fail_num += 1;
                } else {
                    $test_length = strlen($this_decrypted); //算上||||的字符串长度
                    $this_modified = str_replace("||||","",$this_decrypted);
                    if (strlen($this_modified) != $test_length-4) { // 如果去掉||||之后的字符串长度 不等于算上||||的字符串长度+4，说明有问题
                        $fail_num += 1;
                    } else {
                        Smurf::create([
                            "uap" => $this_modified,
                            "item" => "weibo"
                        ]);
                        $success_num += 1;
                        $uaps_list[] = $this_modified;
                    }
                }
            }
            return response(array(
                "status" => 1,
                "msg" => "成功上传".$success_num."个账号数据，失败".$fail_num."个"
            ),200);
        } else {
            return response("提交的数据有误，请检查后重新提交", 500);
        }
    }

    public function getSmurf($item, $qqid, $count, $timestamp) {
        $duplicate = SmurfTicket::where('qqid',$qqid)->where('timestamp',date('Y-m-d H:i:s', $timestamp))->where('operation','get')->get();
        if (count($duplicate) >= 1) {
            $ticket_id = $duplicate[0]->id;
            $uaps = Smurf::join('smurf_events','smurves.id','=','smurf_events.smurf_id')->where('ticket_id',$ticket_id)->get();
            if (count($uaps) == 0) {
                $msg = "系统内部错误，请稍后再试或联系管理员";
            } else {
                $msg = "获取成功：\n";
                foreach ($uaps as $uap) {
                    $msg .= $uap->uap."\n";
                }
            }
        } else {
            $nowtime = time();
            $delta_time= $nowtime - $timestamp;
            if ($delta_time > 60 || $delta_time < 0) {
                $msg = "链接已经过期，请重新获取链接";
            } else {
                $uaps = Smurf::where('item',$item)->whereNull('last_operation')->orWhere(function($query){
                    $query->where('last_operation','<>','get')->where('last_operation','<>','delete');
                })->limit($count)->get();
                if (count($uaps) < $count) {
                    $msg = "获取失败，请联系管理员。\n错误代码： -001";
                } else {
                    $msg = "获取成功：\n";
                    $new_ticket=SmurfTicket::create([
                        "qqid" => $qqid,
                        "operation" => "get",
                        "count" => $count,
                        "timestamp" => date('Y-m-d H:i:s', $timestamp)
                    ]);
                    $new_ticket_id = $new_ticket->id;
                    foreach ($uaps as $uap) {
                        $uap->last_operation = "get";
                        $uap->last_qqid = $qqid;
                        $uap->save();
                        $msg .= $uap->uap."\n";

                        SmurfEvent::create([
                            "smurf_id" => $uap->id,
                            "operation" => "get",
                            "ticket_id" => $new_ticket_id
                        ]);
                    }

                }
            }

        }

        return $msg;
    }

    public function get() {
        if (!isset($_GET["i"]) || $_GET["i"] == null) {
            return "不合法的请求！";
        }
        if (!isset($_GET["q"]) || $_GET["q"] == null) {
            return "不合法的请求！";
        }
        if (!isset($_GET["c"]) || $_GET["c"] == null) {
            return "不合法的请求！";
        }
        if (!isset($_GET["t"]) || $_GET["t"] == null) {
            return "不合法的请求！";
        }
        if (!isset($_GET["token"]) || $_GET["token"] == null) {
            return "缺少校验参数！";
        }

        $item = $_GET["i"];
        $qqid = $_GET["q"];
        $count = $_GET["c"];
        $timestamp = $_GET["t"];
        $signature = $_GET["token"];

        $md5item = strtolower(md5($item));
        $md5qqid = strtoupper(md5(strtolower(md5($qqid))));
        $md5count = strtolower(md5($count));
        $md5timestamp = strtolower(md5($timestamp));

        $beforehash = $md5item.$md5count.$md5qqid.$md5timestamp;
        $myhashed = strtolower(hash('sha512', $beforehash));
        $mysignature = "";

        for ($i=0;$i<128;$i=$i+2) {
            $mysignature .= $myhashed[$i];
        }

        if ($mysignature != $signature) {
            return "参数校验失败！";
        }

        // 成功校验，开始返回账号密码
        return "<pre>".$this->getSmurf($item,$qqid,$count,$timestamp)."</pre>";

    }

    public function getAll() {
        $uaps = Smurf::whereNull('last_operation')->orWhere('last_operation','<>','delete')->get();
//        foreach ($uaps as $uap) {
//            $this_encrypted = self::rsa_encode($uap["uap"]);
//            if ($this_encrypted == null) {
//                return response('账号数据异常，请联系你们的大宝贝数据符',500);
//            } else {
//                $uap["uap"] = $this_encrypted;
//            }
//        }
        return response($uaps,200);
    }

    public function delete(Request $request) {
        $ids = $request->delete_ids;
        $uaps = Smurf::whereIn('id',$ids)->get();
        foreach ($uaps as $uap) {
            if ($uap->last_operation == "get") {
                return response("不能删除&nbsp;<i>最后一次操作</i>&nbsp;为&nbsp;<b><i>获取</i></b>&nbsp;的账号数据<br>请重新选择",400);
            }
        }
        foreach ($uaps as $uap) {
            $uap->last_operation = "delete";
            $uap->last_qqid = Auth::User()->id;
            $uap->save();
        }
        return response(array(
            "status" => 1,
            "msg" => "成功删除账号数据"
        ),200);
    }
}
