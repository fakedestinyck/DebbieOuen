<?php

namespace App\Http\Controllers;

use App\WeiboAnli;
use App\WeiboDailyRank;
use App\WeiboFlower;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WeiboController extends Controller
{

    public function downloadFile(Request $request)
    {
        #header("Content-type: text/plain; charset=utf-8");
        if ('http://'.$_SERVER['HTTP_HOST'] == env('APP_URL','localhost')) {
            $prefix = "/Users/Fakedestinyck/miniconda3/bin/python3.5 ";
        } else {
            $prefix = "python3.5 ";
        }
        $dir = dirname( __FILE__ ).'/../../../../getWeiboData/';
        $a =  exec($prefix.$dir."getFullList.py 2>&1");
        if ($a == "success") {
            return response("all.txt",200);
        } else {
            return response($a,500);
        }
    }

    public function isAdmin()
    {
        if (Auth::check()) {
            return 'true';
        } else {
            return 'false';
        }
    }

    public function getRankData(){
        if (Auth::check()) {
            $allData = WeiboDailyRank::all();
            return $allData;
        } else {
            return response('客户端身份校验失败！请尝试重新登录！',403);
        }
    }

    public function storeAttendanceData(Request $request)
    {
        $content = $request->all();
        $number = $content["number"];

        return response('Success!', 200);
    }

    public function getRecentAll()
    {
        #header("Content-type: text/plain; charset=utf-8");
        if ('http://'.$_SERVER['HTTP_HOST'] == env('APP_URL','localhost')) {
            $prefix = "/Users/Fakedestinyck/miniconda3/bin/python3.5 ";
        } else {
            $prefix = "python3.5 ";
        }
        $dir = dirname( __FILE__ ).'/../../../../getWeiboData/';
        $a =  shell_exec($prefix.$dir."getAllWeibo.py 2>&1");

        return $a;
    }

    public function nextThirty() {
        return WeiboAnli::where('is_anli','1')->where('has_day_num',0)->whereNull('day_num')->orderBy('id')
            ->select('id','text','tweets_time','tweets_id')->first();
    }

    public function nextThirtyBad() {
        return WeiboAnli::where('is_anli','0')->where('has_day_num',0)->whereNull('day_num')->orderBy('id')
            ->select('id','text','tweets_time','tweets_id')->first();
    }

    public function sendDayX(Request $request) {
        $content = $request->all();
        $id = $content["id"];
        $day_x = $content["day_x"];
        $this_tweets = WeiboAnli::find($id);
        if ($day_x != 0) {
            $this_tweets->has_day_num = true;
            $this_tweets->is_anli = true;
        }
        $this_tweets->day_num = $day_x;
        $this_tweets->save();

        return response('success',200);
    }

    public function getAnliByDay(){
        $day = date("d")-1;
        if ($day == 0) {
            $day = 31;
        }
        $tweets = WeiboAnli::whereDay('tweets_time',$day)->orderBy('tweets_time')->get();
        $user_count = 0;
        $max_zzp = 0;
        $tag_anli = 0;
        $tag_shiny = 0;
        $shiny_url = array();
        $user_id_array = array();
        $tag_user_id_array = array();
        foreach ($tweets as $tweet) {
            if (!in_array($tweet->user_id,$user_id_array)) {
                $user_count ++;
                $user_id_array[] = $tweet->user_id;
            }
            if ($tweet->is_anli) {
                if (!in_array($tweet->user_id,$tag_user_id_array)) {
                    $tag_anli++;
                    $tag_user_id_array[] = $tweet->user_id;
                }
                $zzp = $tweet->repost + $tweet->comment + $tweet->like;
                if ($max_zzp < $zzp) {
                    $max_zzp = $zzp;
                    $top_tweet = $tweet;
                }
            }
            $tags = json_decode($tweet->tags,true);
            if (in_array('祝福时刻',$tags)) {
                $shiny_url[] = "https://m.weibo.cn/$tweet->user_id/$tweet->tweets_id";
                $tag_shiny++;
            }
        }

        return [
            'user_count' => $user_count,
            'total' => count($tweets),
            'tag_anli' => $tag_anli,
            'tag_shiny' => $tag_shiny,
            'earliest' => $tweets[0],
            'max_zzp' => $max_zzp,
            'shiny_url' => $shiny_url,
            'top_tweet' => $top_tweet,
            'day' => $day
        ];
    }

    public function statsByDay($day) {
        $tweets = WeiboAnli::where('day_num',$day)->select('username','user_id','tweets_time','text',
            'repost','comment','like','tweets_id')->orderBy('tweets_time')->get();
        return $tweets;
    }

    public function statsByCompleteness($endDay = null) {
        if ($endDay != null) {
            $tweets = WeiboAnli::where('has_day_num',1)->where('day_num','<=',$endDay)->select('username','user_id','tweets_time','text','day_num',
                'repost','comment','like','tweets_id','user_reg_time')->orderBy('id')->get();
        } else {
            $tweets = WeiboAnli::where('has_day_num',1)->select('username','user_id','tweets_time','text','day_num',
                'repost','comment','like','tweets_id','user_reg_time')->orderBy('id')->get();
        }
        $users = array();
        foreach ($tweets as $tweet) {
            $users[$tweet->user_id]["tweets"][$tweet->day_num][] = [
                'comment' => $tweet->comment,
                'day_num' => $tweet->day_num,
                'like' =>$tweet->like,
                'repost' => $tweet->repost,
                'text' => $tweet->text,
                'tweets_id' => $tweet->tweets_id,
                'tweets_time' => $tweet->tweets_time,
            ];
            $users[$tweet->user_id]["username"] = $tweet->username;
            $users[$tweet->user_id]["user_reg_time"] = $tweet->user_reg_time;
        }

        $completeness = array();
        foreach ($users as $user) {
            $completeness[count($user["tweets"])][] = $user;
        }


        if ($endDay == 30) {
            for ($tmpi = 1; $tmpi < 30; ++$tmpi) {
                if (array_key_exists($endDay-$tmpi,$completeness)) {
                    echo ($endDay-$tmpi)."天：";
                    foreach ($completeness[$endDay-$tmpi] as $user_array) {
                        echo "@".$user_array["username"] . "，";
                    }
                    echo "<br>";
                }
            }
            echo "<br><br>";
            echo ($endDay)."天：";
            foreach ($completeness[$endDay] as $user_array) {
                echo "@".$user_array["username"] . "，";
            }



        } else {
            return $completeness;
        }

    }

    public function sendFlower(Request $request) {
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
            $md5qqid = md5(strtolower(md5($qqid)).strtolower(md5($num)));
            $mySign = strtolower($md5qqid[8].$md5qqid[30].$md5qqid[0].$md5qqid[7].$md5qqid[14].$md5qqid[28]);
            if ($sign != $mySign) {
                return array(
                    "status" => -1,
                    "errmsg" => "签名校验错误"
                );
            } else {
                WeiboFlower::create($request->except("sign"));
                return array(
                    "status" => 1,
                );
            }
        }
    }

    public function getFlowerByDay($day) {
        $flowers = WeiboFlower::whereMonth('created_at',date('n'))->whereDay('created_at',$day)->get();
        if (count($flowers) == 0) {
            return array(
                "status"=>0
            );
        } else {
            $users = array();
            $total = 0;
            foreach ($flowers as $flower) {
                if (array_key_exists($flower->qqid,$users)) {
                    $users[$flower->qqid] += $flower->num;
                } else {
                    $users[$flower->qqid] = $flower->num;
                }
                $total += $flower->num;
            }
            arsort($users);
            return array(
                "status" => 1,
                "qqids" => $users,
                "total" => $total
            );
        }
    }

    public function showIp() {
        echo '<h1>'.$_SERVER['REMOTE_ADDR'].'</h1>';
    }

    public function getDailyRank() {
        $yesterdayString = date("Y-m-d",time() - 60 * 60 * 24);
        $yesterdayRankData = WeiboDailyRank::whereDate('date', $yesterdayString)->get();
        if (count($yesterdayRankData) == 0) {
            return array(
                "status" => -1,
                "errmsg" => "暂未更新昨日数据"
            );
        } else {
            $yesterdayRankData = $yesterdayRankData[0];
            return array(
                "status" => 1,
                "data" => [
                    "myTotalRank" => $yesterdayRankData["myTotalRank"],
                    "interactionValue" => $yesterdayRankData["interactionValue"],
                    "interactionRank" => $yesterdayRankData["interactionRank"],
                    "interactionRepostCount" => $yesterdayRankData["interactionRepostCount"],
                    "interactionCommentCount" => $yesterdayRankData["interactionCommentCount"],
                    "interactionStoryCount" => $yesterdayRankData["interactionStoryCount"],
                    "flowerValue" => $yesterdayRankData["flowerValue"],
                    "flowerRank" => $yesterdayRankData["flowerRank"],
                    "flowerPersonCount" => $yesterdayRankData["flowerPersonCount"]
                ],
                "errmsg" => ""
            );
        }
    }

    public function gotoComment() {
        if (!isset($_GET["cid"]) || !isset($_GET["aid"]) || !isset($_GET["s"])) {
            return "<h1>页面不存在</h1>";
        }
        $cid = $_GET["cid"];
        $aid = $_GET["aid"];
        $s = $_GET["s"];
        $md5aidcid = md5(strtolower(md5($cid)).strtolower(md5($aid)));
        $my_s = $md5aidcid[1].$md5aidcid[3].$md5aidcid[21].$md5aidcid[6].$md5aidcid[15].$md5aidcid[13].$md5aidcid[19].$md5aidcid[27];

        if ($my_s != $s) {
            return "<h1>找不到对应页面惹</h1>";
        }

        return redirect("sinaweibo://detailbulletincomment?comment_id=$cid&anchor_id=$aid&is_show_bulletin=2");
    }

}
