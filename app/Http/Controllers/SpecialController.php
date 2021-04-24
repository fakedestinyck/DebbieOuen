<?php

namespace App\Http\Controllers;

use App\Confess;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SpecialController extends Controller
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

    public function upload() {
        $message = $_GET["m"];
        $duplicate = Confess::where('confess', $message)->get();
        if (count($duplicate) == 0) {
            Confess::create([
                "confess" => $message
            ]);
            return array(
                "status" => 1
            );
        } else {
            return array(
                "status" => -400,
                "err_msg" => "已存在"
            );
        }
    }

    public function sendEmail() {
//        $ups = '[{"qqid": 99396114, "pwd": "PNE9YaSiuk"}, {"qqid": 120674232, "pwd": "BVw3GcHRFE"}, {"qqid": 157489309, "pwd": "i4bPHgoS1F"}, {"qqid": 171790347, "pwd": "2U0tk8ZYRx"}, {"qqid": 259338979, "pwd": "QkLntTi3WS"}, {"qqid": 272291814, "pwd": "uSCRAdcPK9"}, {"qqid": 295276654, "pwd": "vBP5QnzSAU"}, {"qqid": 306322897, "pwd": "mHzu58a3go"}, {"qqid": 316140046, "pwd": "fkFj7qwv4W"}, {"qqid": 379936577, "pwd": "GIHkj8DrZu"}, {"qqid": 417509621, "pwd": "dRYmxgaLB6"}, {"qqid": 464665023, "pwd": "vG5xMrTLq4"}, {"qqid": 544727775, "pwd": "XBpAE4haHv"}, {"qqid": 827060350, "pwd": "cnrsKQR75H"}, {"qqid": 869765593, "pwd": "3eOz8vmqDa"}, {"qqid": 947275992, "pwd": "E4Fm7iqSLN"}, {"qqid": 983696926, "pwd": "nM1h0ySKHo"}, {"qqid": 1013985351, "pwd": "6TIASzxK9F"}, {"qqid": 1106634899, "pwd": "sgA6W7ydUT"}, {"qqid": 1160294714, "pwd": "yokf30QTDC"}, {"qqid": 1171922974, "pwd": "xsaM6ITJED"}, {"qqid": 1440891061, "pwd": "rI5Bto9abA"}, {"qqid": 1483559384, "pwd": "Anmec6W7pk"}, {"qqid": 1727651710, "pwd": "aA1JdhT4HZ"}, {"qqid": 2256893294, "pwd": "o0vVwHMClj"}, {"qqid": 2432076214, "pwd": "JM3pWAYeKz"}, {"qqid": 2433175751, "pwd": "U1pvA7mNVf"}, {"qqid": 2541872920, "pwd": "DNv9GXUiWd"}, {"qqid": 2581715602, "pwd": "mt2fKRgG6b"}]';
//        $ups = '[{"qqid": 1634164756, "pwd": "PNE9YaSiuk"}]';
//        $ups = '[{"qqid": 544727775, "pwd": "XBpAE4haHv"}, {"qqid": 827060350, "pwd": "cnrsKQR75H"}, {"qqid": 869765593, "pwd": "3eOz8vmqDa"}, {"qqid": 947275992, "pwd": "E4Fm7iqSLN"}, {"qqid": 983696926, "pwd": "nM1h0ySKHo"}, {"qqid": 1013985351, "pwd": "6TIASzxK9F"}, {"qqid": 1106634899, "pwd": "sgA6W7ydUT"}, {"qqid": 1160294714, "pwd": "yokf30QTDC"}, {"qqid": 1171922974, "pwd": "xsaM6ITJED"}, {"qqid": 1440891061, "pwd": "rI5Bto9abA"}, {"qqid": 1483559384, "pwd": "Anmec6W7pk"}, {"qqid": 1727651710, "pwd": "aA1JdhT4HZ"}, {"qqid": 2256893294, "pwd": "o0vVwHMClj"}, {"qqid": 2432076214, "pwd": "JM3pWAYeKz"}, {"qqid": 2433175751, "pwd": "U1pvA7mNVf"}, {"qqid": 2541872920, "pwd": "DNv9GXUiWd"}, {"qqid": 2581715602, "pwd": "mt2fKRgG6b"}]';

//        $ups = '[{"qqid": 1634164756, "pwd": "fb8nvDZaJU"}]';

        // 454924089
        $ups = '[{"o": "JM20210327203519oC80430", "qqid": "642746148", "n": "呆家馄饨", "a": "1830"}]';
//        $ups = '{}';
        $ups = json_decode($ups, true);
        foreach ($ups as $up) {
            $qqid = $up['qqid'];
            $qrcode = $up['o'];
            $nickname = $up['n'];
            $args = [
                'qqid' => $qqid,
                'qrcode' => $qrcode,
                'nickname' => $nickname
            ];
            Mail::send('emails.jzqrcode', ['args' => $args], function ($m) use ($qqid) {
                $m->to($qqid.'@qq.com')->subject('蒋申毕业应援活动二维码');
            });
            echo $qqid;
        }

        return response()->success(['data' => 'success']);
    }
}
