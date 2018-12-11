<?php

namespace App\Http\Controllers;

use App\WeiboAnli;
use App\WeiboDailyRank;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WeiboController extends Controller
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

    public function sendDayX(Request $request) {
        $content = $request->all();
        $id = $content["id"];
        $day_x = $content["day_x"];
        $this_tweets = WeiboAnli::find($id);
        if ($day_x != 0) {
            $this_tweets->has_day_num = true;
        }
        $this_tweets->day_num = $day_x;
        $this_tweets->save();

        return response('success',200);
    }

    public function getAnliByDay($day){
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
            if (in_array('爱心时刻',$tags)) {
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
            'top_tweet' => $top_tweet
        ];
    }
}
