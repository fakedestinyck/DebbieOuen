<?php

namespace App\Http\Controllers;

use App\Helpers\RsaUtil;
use App\Smurf;
use App\SmurfEvent;
use App\SmurfTicket;
use Illuminate\Http\Request;

class SmurfController extends Controller
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

    private static function rsa_decode($data){
        return urldecode(
            RsaUtil::privateDecrypt(
                $data ,
                file_get_contents( base_path('keys/private.pem') )
            )
        );
    }

    public function PostRsa($someword){
        $username = $someword;
        $user_name = self::rsa_decode($username);
        if ($user_name == null) {
            return "NULL!";
        } else {
            return $user_name;
        }

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
                $uaps = Smurf::where('item',$item)->whereNull('last_operation')->orWhere('last_operation','<>','get')->limit($count)->get();
                if (count($uaps) < $count) {
                    $msg = "获取失败，请联系管理员。\n错误代码 -001".count($uaps);
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
}
