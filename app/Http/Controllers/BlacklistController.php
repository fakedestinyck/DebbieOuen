<?php

namespace App\Http\Controllers;

use App\Blacklist;
use App\GroupBan;
use App\Test;
use Carbon\Carbon;
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

    private function getBanHistory($group_id, $qqid) {
        $bans = GroupBan::where('group_id',$group_id)->where('qqid',$qqid)->where('action','1')->whereYear('starttime',date('Y'))->whereMonth('starttime',date('n'))->whereDay('starttime',date('j'))->orderBy("id")->get();
        $ban_array = array();
        foreach ($bans as $ban) {
            $ban_array[] = array(
                "id" => $ban->id,
                "duration" => strtotime($ban->endtime)-strtotime($ban->starttime),
                "secsLeft" => max(strtotime($ban->endtime)-time(), 0)
            );
        }
        return $ban_array;
    }

    private function getRemoveHistory($group_id, $qqid) {
        return GroupBan::where('group_id',$group_id)->where('qqid',$qqid)->where('action','2')->whereYear('starttime',date('Y'))->whereMonth('starttime',date('n'))->whereDay('starttime',date('j'))->orderBy("id")->get();
    }

    private function removeBan($group_id, $qqid) {
        $bans = $this->getBanHistory($group_id,$qqid);
        $removes = $this->getRemoveHistory($group_id,$qqid);
        if (count($bans) == 0) {
            return array(
                "status" => -400,
                "err_msg" => "你当前没有被禁言，或被禁言剩余时间小于1分钟，不可以解禁哦~"
            );
        }
        $last_ban = end($bans);
        $secsLeft = $last_ban['secsLeft'];
        if ($secsLeft < 60) {
            return array(
                "status" => -400,
                "err_msg" => "你当前没有被禁言，或被禁言剩余时间小于1分钟，不可以解禁哦~"
            );
        }
        if (count($removes) != 0) {
            $removes_array = $removes->toArray();
            $last_remove = end($removes_array);
            if ($last_remove['id'] > $last_ban['id']) {
                return array(
                    "status" => -400,
                    "err_msg" => "你当前没有被禁言，或被禁言剩余时间小于1分钟，不可以解禁哦~"
                );
            }
            if (count($removes_array) >= 3) {
                return array(
                    "status" => -400,
                    "err_msg" => "您今天的三次自助解封已经用完了，无法再次自助解封。如有疑问请联系管理员。"
                );
            }
        }
        $new_remove = GroupBan::create([
            "group_id" => $group_id,
            "qqid" => $qqid,
            "action" => "2",
            "starttime" => date('Y-m-d H:i:s', time()),
        ]);

        if ($new_remove) {
            return array(
                "status" => 1,
                "remain" => 3-count($removes)-1
            );
        } else {
            return array(
                "status" => -500,
                "err_msg" => "插入数据失败"
            );
        }


    }

    private function addBan($group_id, $qqid, $starttime, $duration, $durationIndex = null) {
        $bans = $this->getBanHistory($group_id,$qqid);
        $removes = $this->getRemoveHistory($group_id,$qqid);
        $duration_array = explode(",",$duration);
        $this_index = 0;
        if ($durationIndex == null) {
            $this_index = min(count($bans)-count($removes),count($duration_array)-1);
        } else {
            $this_index = $durationIndex;
        }
        $new_duration = intval($duration_array[$this_index]);
        $endtime = intval($starttime)+$new_duration;

        $group_ban = GroupBan::create([
            "group_id" => $group_id,
            "qqid" => $qqid,
            "action" => "1",
            "starttime" => date('Y-m-d H:i:s', $starttime),
            "endtime" => date('Y-m-d H:i:s', $endtime)
        ]);

        if ($group_ban) {
            return array(
                "status" => 1,
                "duration" => $new_duration
            );
        } else {
            return array(
                "status" => -500,
                "err_msg" => "插入数据失败"
            );
        }


    }

    private function calculateAtTimesFirst($group_id, $qqid, $starttime,$duration) {
        Test::create([
            "cb" => "atPeopleCount",
            "cc" => $group_id,
            "cd" => $qqid
        ]);
        $data = Test::where('cc',$group_id)->where('cb','atPeopleCount')
            ->whereDate('created_at', '=', Carbon::today()->toDateString())
            ->where('cd',$qqid)->get();

        $timesAtPeopleToday = count($data);
        if ($timesAtPeopleToday <= 20) {
            return array(
                "status" => 1,
                "duration" => 0,
                "atCount" => $timesAtPeopleToday
            );
        }
        return $this->addBan($group_id,$qqid,$starttime,$duration,$timesAtPeopleToday-20-1);
    }

    public function parseBan(Request $request) {
//        $removes = $this->getRemoveHistory("234567889","2333333333")->toArray();
//        return end($removes);
        $group_id = $request["gid"];
        $qqid = $request["qid"];
        $action = $request["a"];
        $starttime = $request["st"];
        $duration = $request["d"];
        $token = $request["token"];
        if ($group_id == "" || $qqid == "" || $action == "" || $token == "" || $starttime == "") {
            return array(
                "status" => -400,
                "err_msg" => "缺少参数"
            );
        }

        if ($action == "1" || $action == "3") {
            if ($duration == "") {
                return array(
                    "status" => -400,
                    "err_msg" => "缺少参数"
                );
            }

        } else {
            $duration = "1031041050";
        }
        $delta_time = intval($starttime) - time();
        if (abs($delta_time) > 600) {
            return array(
                "status" => -401,
                "err_msg" => "链接已过期"
            );
        }

        $md5_gid_action_qid = strtolower(md5(strval(intval($group_id)*2).$action.strval(intval($qqid)*2)));
        $md5time = strtolower(md5($duration.$starttime));
        $md5_combine = "";
        for($i = 0 ; $i < 32; ++$i) {
            if ($i % 2 == 0) {
                $md5_combine .= $md5time[$i];
            } else {
                $md5_combine .= $md5_gid_action_qid[$i];
            }
        }

        $md5md5 = strtolower(md5($md5_combine));
        $correct_token = $md5md5[10].$md5md5[8].$md5md5[11].$md5md5[4].$md5md5[28].$md5md5[5].$md5md5[22].$md5md5[18];
        if ($correct_token != $token) {
            return array(
                "status" => -403,
                "err_msg" => "参数校验失败"
            );
        }

        if ($action == "1") {
            return $this->addBan($group_id,$qqid,$starttime,$duration);
        }
        if ($action == "2") {
            return $this->removeBan($group_id,$qqid);
        }
        if ($action == "3") {
            return $this->calculateAtTimesFirst($group_id,$qqid,$starttime,$duration);
            // 这个是每天at成员次数限制，先查询是否超过次数。因为要请求两次网络不方便，所以放一起了
        }
    }
}
