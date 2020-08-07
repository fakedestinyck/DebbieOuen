<!DOCTYPE html>
<?php
phpinfo();
?>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="assets/images/logo-128x128.png" type="image/x-icon">
        <meta name="description" content="SING-蒋申应援站">
        <meta itemprop="name" content="SING-蒋申应援站"/>
        <meta itemprop="image" content="http://debbie.xiaogongju.xyz/favicon/ms-icon-310x310.png" />
        <meta name="description" itemprop="description" content="蒋心独具，不负此申" />
        <title>SING-蒋申应援站</title>
        <!--<link rel="stylesheet" href="assets/web/assets/mobirise-icons/mobirise-icons.css">-->
        <link href="https://cdn.bootcss.com/tether/1.4.4/css/tether.min.css" rel="stylesheet">
        <link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap-grid.min.css" rel="stylesheet">
        <link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap-reboot.min.css" rel="stylesheet">
        <!--<link rel="stylesheet" href="assets/socicon/css/styles.css">-->
        <!--<link rel="stylesheet" href="assets/theme/css/style.css">-->
        <!--<link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">-->
        <link rel="stylesheet" href="css/libs.css">
        <link rel="stylesheet" href="https://unpkg.zhimg.com/element-ui/lib/theme-chalk/index.css">

        <style>
            [v-cloak] {
                display: none;
            }
        </style>



    </head>
    <body>
    <div id="app" v-cloak>
    <section class="header1 cid-rcfCVkx06l mbr-parallax-background" id="header1-8" data-rv-view="24">



        <div class="mbr-overlay" style="opacity: 0; background-color: rgb(0, 0, 0);">
        </div>

        <div class="container">
            <div class="row justify-content-md-center">
                <div class="mbr-white col-md-10">
                    <h1 class="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">蒋申应援站</h1>

                    <p class="mbr-text align-center pb-3 mbr-fonts-style display-5"><strong>蒋心独具，不负此申</strong></p>
                    @if (Auth::check())
                        <div class="mbr-section-btn align-center"><a class="btn btn-md btn-secondary display-7" href="#"><span class="mbri-login mbr-iconfont mbr-iconfont-btn" style="color: rgb(255, 255, 255);"></span>
                                我的个人中心</a></div>
                    @else
                        <div class="mbr-section-btn align-center" v-on:click="showLogin"><a class="btn btn-md btn-secondary display-7" href="javascript:void(0)"><span class="mbri-login mbr-iconfont mbr-iconfont-btn" style="color: rgb(255, 255, 255);"></span>
                                护申符登陆</a></div>
                    @endif

                </div>
            </div>
        </div>

    </section>

        <el-dialog title="护申符登陆" :visible.sync="loginFormVisible">
            <p style="margin-bottom: 10px;">用户名</p>
            <el-input placeholder="请输入用户名" v-model="inputUsername"></el-input>
            <p style="margin-top: 20px; margin-bottom: 10px;">密码</p>
            <el-input placeholder="请输入密码" v-model="inputPassword" show-password></el-input>

            <el-button style="display: block; margin: auto; margin-top: 30px; text-align: center" type="primary">登陆</el-button>
        </el-dialog>



    <section class="features18 popup-btn-cards cid-rgiNlgWInX" id="features18-o" data-rv-view="54">




        <div class="container">
            <h2 class="mbr-section-title pb-3 align-center mbr-fonts-style display-2">蒋申cut视频</h2>
            <h3 class="mbr-section-subtitle display-5 align-center mbr-fonts-style mbr-light">点击以前往b站观看</h3>
            <div class="media-container-row pt-5 ">
                @if($vlist)
                    @foreach($vlist as $veach)
                        <div class="card p-3 col-12 col-md-6 col-lg-4">
                            <div class="card-wrapper ">
                                <div class="card-img">
                                    <div class="mbr-overlay"></div>
                                    <div class="mbr-section-btn text-center">
                                        <a href="https://www.bilibili.com/video/av{{ $veach["aid"] }}" target="_blank" class="btn btn-danger display-4">前往观看</a>
                                    </div>
                                    <span class="image_kill_referrer"></span>
{{--                                    <img src="{{ "https:".$veach["pic"] }}" alt="封面图" media-simple="true">--}}
                                </div>
                                <div class="card-box">
                                    <h4 class="card-title mbr-fonts-style display-7">
                                        {{ $veach["description"] }}
                                    </h4>
                                    <p class="mbr-text mbr-fonts-style align-left display-7">
                                        发布时间：{{ date("Y-m-d H:i:s", $veach["created"]) }}<br>
                                        时长：{{ $veach["length"] }}<br>
                                        播放量：{{ $veach["play"] }}<br>
                                        弹幕数：{{ $veach["video_review"] }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
    </section>

    {{--<section class="features12 cid-rcfInSUtIz" id="features12-d" data-rv-view="27">--}}





        {{--<div class="container">--}}
            {{--<h2 class="mbr-section-title pb-2 mbr-fonts-style display-2">近期行程</h2>--}}
            {{--<h3 class="mbr-section-subtitle pb-3 mbr-fonts-style display-5"></h3>--}}

            {{--<div class="media-container-row pt-5">--}}
                {{--<div class="block-content align-right">--}}
                    {{--<div class="card pl-3 pr-3 pb-5">--}}
                        {{--<div class="mbr-card-img-title">--}}
                            {{--<div class="card-img pb-3">--}}
                                {{--<span class="mbr-iconfont mbri-left" media-simple="true"></span>--}}
                            {{--</div>--}}
                            {{--<div class="mbr-crt-title">--}}
                                {{--<h4 class="card-title py-2 mbr-crt-title mbr-fonts-style display-7">--}}
                                    {{--不知道写什么rua</h4>--}}
                            {{--</div>--}}
                        {{--</div>--}}

                        {{--<div class="card-box">--}}
                            {{--<p class="mbr-text mbr-section-text mbr-fonts-style display-7">--}}
                                {{--舞台上的蒋申不但时而性感妖娆，时而帅气炸裂，而且魅力非凡，同时她还凭借自身的实力与不服输的拼劲，获得了观众的喜爱。--}}
                            {{--</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}

                    {{--<div class="card pl-3 pr-3 pb-5">--}}
                        {{--<div class="mbr-card-img-title">--}}
                            {{--<div class="card-img pb-3">--}}
                                {{--<span class="mbr-iconfont mbri-left" media-simple="true"></span>--}}
                            {{--</div>--}}
                            {{--<div class="mbr-crt-title">--}}
                                {{--<h4 class="card-title py-2 mbr-crt-title mbr-fonts-style display-7">--}}
                                    {{--不知道写什么rua--}}
                                {{--</h4>--}}
                            {{--</div>--}}
                        {{--</div>--}}
                        {{--<div class="card-box">--}}
                            {{--<p class="mbr-text mbr-section-text mbr-fonts-style display-7">--}}
                                {{--舞台上的蒋申不但时而性感妖娆，时而帅气炸裂，而且魅力非凡，同时她还凭借自身的实力与不服输的拼劲，获得了观众的喜爱。--}}
                            {{--</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}

                {{--<div class="mbr-figure" style="width: 50%;">--}}
                    {{--<img src="assets/images/download-2-1668x2224.jpg" alt="Mobirise" title="" media-simple="true">--}}
                {{--</div>--}}

                {{--<div class="block-content align-left  ">--}}
                    {{--<div class="card pl-3 pr-3 pb-5">--}}
                        {{--<div class="mbr-card-img-title">--}}
                            {{--<div class="card-img pb-3">--}}
                                {{--<span class="mbr-iconfont mbri-right" media-simple="true"></span>--}}
                            {{--</div>--}}
                            {{--<div class="mbr-crt-title">--}}
                                {{--<h4 class="card-title py-2 mbr-crt-title mbr-fonts-style display-7">--}}
                                    {{--不知道写什么rua--}}
                                {{--</h4>--}}
                            {{--</div>--}}
                        {{--</div>--}}

                        {{--<div class="card-box">--}}
                            {{--<p class="mbr-text mbr-section-text mbr-fonts-style display-7">--}}
                                {{--舞台上的蒋申不但时而性感妖娆，时而帅气炸裂，而且魅力非凡，同时她还凭借自身的实力与不服输的拼劲，获得了观众的喜爱。--}}
                            {{--</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}

                    {{--<div class="card pl-3 pr-3 pb-5">--}}
                        {{--<div class="mbr-card-img-title">--}}
                            {{--<div class="card-img pb-3">--}}
                                {{--<span class="mbr-iconfont mbri-right" media-simple="true"></span>--}}
                            {{--</div>--}}
                            {{--<div class="mbr-crt-title">--}}
                                {{--<h4 class="card-title py-2 mbr-crt-title mbr-fonts-style display-7">--}}
                                    {{--不知道写什么rua--}}
                                {{--</h4>--}}
                            {{--</div>--}}
                        {{--</div>--}}
                        {{--<div class="card-box">--}}
                            {{--<p class="mbr-text mbr-section-text mbr-fonts-style display-7">--}}
                                {{--舞台上的蒋申不但时而性感妖娆，时而帅气炸裂，而且魅力非凡，同时她还凭借自身的实力与不服输的拼劲，获得了观众的喜爱。--}}
                            {{--</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</section>--}}

    <div id="homepage">
        <homepage></homepage>

    </div>


{{--    <section class="counters1 counters cid-rcfIDKQ3Xf" id="counters1-f" data-rv-view="30">--}}





{{--        <div class="container">--}}
{{--            <h2 class="mbr-section-title pb-3 align-center mbr-fonts-style display-2">魅力瞬间</h2>--}}
{{--            --}}{{--<h3 class="mbr-section-subtitle mbr-fonts-style display-5">--}}
{{--                --}}{{--尚在施工中……</h3>--}}
{{--            <div class="media-container-row pt-5">--}}
{{--                <div>--}}
{{--                    <div id="video" style="width: 360px; height: 640px;"></div>--}}
{{--                </div>--}}
{{--            </div>--}}



{{--            --}}{{--<div class="container pt-4 mt-2">--}}
{{--                --}}{{--<div class="media-container-row">--}}
{{--                    --}}{{--<div class="card p-3 align-center col-12 col-md-6 col-lg-4">--}}
{{--                        --}}{{--<div class="panel-item p-3">--}}
{{--                            --}}{{--<div class="card-img pb-3">--}}
{{--                                --}}{{--<span class="mbr-iconfont mbri-close" media-simple="true"></span>--}}
{{--                            --}}{{--</div>--}}

{{--                            --}}{{--<div class="card-text">--}}
{{--                                --}}{{--<h3 class="count pt-3 pb-3 mbr-fonts-style display-2">--}}
{{--                                    --}}{{--0--}}
{{--                                --}}{{--</h3>--}}
{{--                                --}}{{--<h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7">我也不知道写什么</h4>--}}
{{--                                --}}{{--<p class="mbr-content-text mbr-fonts-style display-7">2015年8月，蒋申随S.I.N.G发行首支单曲《青春的告白》，正式出道；2017年9月，随S.I.N.G推出EDM曲风的单曲《寄明月》11月，随S.I.N.G获得第一届亚洲音乐盛典年度人气飙升女团奖。2018年1月，随S.I.N.G获得NOW直播年度之星颁奖盛典最佳突破组合奖；4月，参加腾讯视频女团青春成长节目《创造101》。</p>--}}
{{--                            --}}{{--</div>--}}
{{--                        --}}{{--</div>--}}
{{--                    --}}{{--</div>--}}


{{--                    --}}{{--<div class="card p-3 align-center col-12 col-md-6 col-lg-4">--}}
{{--                        --}}{{--<div class="panel-item p-3">--}}
{{--                            --}}{{--<div class="card-img pb-3">--}}
{{--                                --}}{{--<span class="mbr-iconfont mbri-close" media-simple="true"></span>--}}
{{--                            --}}{{--</div>--}}
{{--                            --}}{{--<div class="card-text">--}}
{{--                                --}}{{--<h3 class="count pt-3 pb-3 mbr-fonts-style display-2">--}}
{{--                                    --}}{{--0--}}
{{--                                --}}{{--</h3>--}}
{{--                                --}}{{--<h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7">--}}
{{--                                    --}}{{--就复制百度百科吧</h4>--}}
{{--                                --}}{{--<p class="mbr-content-text mbr-fonts-style display-7">--}}
{{--                                    --}}{{--2015年8月，蒋申随S.I.N.G发行首支单曲《青春的告白》，正式出道；2017年9月，随S.I.N.G推出EDM曲风的单曲《寄明月》11月，随S.I.N.G获得第一届亚洲音乐盛典年度人气飙升女团奖。2018年1月，随S.I.N.G获得NOW直播年度之星颁奖盛典最佳突破组合奖；4月，参加腾讯视频女团青春成长节目《创造101》。--}}
{{--                                --}}{{--</p>--}}
{{--                            --}}{{--</div>--}}
{{--                        --}}{{--</div>--}}
{{--                    --}}{{--</div>--}}

{{--                    --}}{{--<div class="card p-3 align-center col-12 col-md-6 col-lg-4">--}}
{{--                        --}}{{--<div class="panel-item p-3">--}}
{{--                            --}}{{--<div class="card-img pb-3">--}}
{{--                                --}}{{--<span class="mbr-iconfont mbri-close" media-simple="true"></span>--}}
{{--                            --}}{{--</div>--}}
{{--                            --}}{{--<div class="card-text">--}}
{{--                                --}}{{--<h3 class="count pt-3 pb-3 mbr-fonts-style display-2">--}}
{{--                                    --}}{{--0--}}
{{--                                --}}{{--</h3>--}}
{{--                                --}}{{--<h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7">--}}
{{--                                    --}}{{--维基百科也行</h4>--}}
{{--                                --}}{{--<p class="mbr-content-text mbr-fonts-style display-7">--}}
{{--                                    --}}{{--2015年8月，蒋申随S.I.N.G发行首支单曲《青春的告白》，正式出道；2017年9月，随S.I.N.G推出EDM曲风的单曲《寄明月》11月，随S.I.N.G获得第一届亚洲音乐盛典年度人气飙升女团奖。2018年1月，随S.I.N.G获得NOW直播年度之星颁奖盛典最佳突破组合奖；4月，参加腾讯视频女团青春成长节目《创造101》。--}}
{{--                                --}}{{--</p>--}}
{{--                            --}}{{--</div>--}}
{{--                        --}}{{--</div>--}}
{{--                    --}}{{--</div>--}}



{{--                --}}{{--</div>--}}
{{--            --}}{{--</div>--}}
{{--        </div>--}}
{{--    </section>--}}

    <section class="cid-rcfM2t8yR8" id="footer1-i" data-rv-view="33">





        <div class="container">
            <div class="media-container-row content text-white">
                <div class="col-12 col-md-3">
                    <div class="media-wrap">
                        <img src="assets/images/images-259x194.png" alt="" title="" media-simple="true">
                    </div>
                </div>
                {{--<div class="col-12 col-md-3 mbr-fonts-style display-7">--}}
                    {{--<h5 class="pb-3"></h5>--}}
                    {{--<p class="mbr-text"></p>--}}
                {{--</div>--}}
                <div class="col-12 col-md-3 mbr-fonts-style display-7">
                    <h5 class="pb-3">
                        网站功能
                    </h5>
                    <p class="mbr-text">
                        <a href="{{ url('/data') }}">进入数据站</a>
                    </p>
                </div>
                <div class="col-12 col-md-3 mbr-fonts-style display-7">
                    <h5 class="pb-3">
                        友情链接
                    </h5>
                    <p class="mbr-text">
                        <a href="https://www.weibo.com/u/2583858490">SING-蒋申微博</a><br>
                        <a href="https://www.weibo.com/u/6123063147">蒋申后援会微博</a><br>
                        <a href="https://www.weibo.com/u/6534389849">JJC微博</a>
                    </p>
                </div>
            </div>
            <div class="footer-lower">
                <div class="media-container-row">
                    <div class="col-sm-12">
                        <hr>
                    </div>
                </div>
                <div class="media-container-row mbr-white">
                    <div class="col-sm-6 copyright">
                        <p class="mbr-text mbr-fonts-style display-7">
                            © SING-蒋申后援会 - 版权所有
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div class="social-list align-right">
                            <div class="soc-item">
                                <a href="#" target="_blank">
                                    <span class="mbr-iconfont mbr-iconfont-social socicon-weibo socicon" media-simple="true"></span>
                                </a>
                            </div>
                            {{--<div class="soc-item">--}}
                                {{--<a href="#" target="_blank">--}}
                                    {{--<span class="mbr-iconfont mbr-iconfont-social socicon-douban socicon" media-simple="true"></span>--}}
                                {{--</a>--}}
                            {{--</div>--}}
                            <div class="soc-item">
                                <a href="#" target="_blank">
                                    <span class="mbr-iconfont mbr-iconfont-social socicon-qq socicon" media-simple="true"></span>
                                </a>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>







{{--    <script type="text/javascript">--}}
{{--        var videoObject = {--}}
{{--            logo: 'SING蒋申后援会',--}}
{{--            container: '#video', //容器的ID或className--}}
{{--            variable: 'player',--}}
{{--            volume: 0.6, //默认音量--}}
{{--//            poster: 'screenshot/wdm.jpg', //封面图片地址--}}
{{--            autoplay: false, //是否自动播放--}}
{{--            loop: false, //是否循环播放--}}
{{--            live: false, //是否是直播--}}
{{--            loaded: 'loadedHandler', //当播放器加载后执行的函数--}}
{{--            seek: 0, //默认需要跳转的时间--}}
{{--            drag: '', //在flashplayer情况下是否需要支持拖动，拖动的属性是什么--}}
{{--//            front: 'frontFun', //前一集按钮动作--}}
{{--//            next: 'nextFun', //下一集按钮动作--}}
{{--            //flashplayer: true, //强制使用flashplayer--}}
{{--            //html5m3u8:true,//是否使用hls，默认不选择，如果此属性设置成true，则不能设置flashplayer:true,--}}
{{--            chtrack: {--}}
{{--//                src: 'screenshot/srt.srt',--}}
{{--//                charset: 'utf-8'--}}
{{--            }, //字幕文件及编码--}}
{{--            preview: {--}}
{{--//                src: ['screenshot/mydream_en1800_1010_01.jpg', 'screenshot/mydream_en1800_1010_02.jpg'],--}}
{{--//                scale: 2--}}
{{--            }, //预览图片地址数组，src=图片地址数组，scale=图片截取时间间隔，单位：秒--}}
{{--            prompt: [--}}
{{--//                {--}}
{{--//                words: '小女孩跟外公学习弹钢琴',--}}
{{--//                time: 16,--}}
{{--//            },--}}
{{--//                {--}}
{{--//                    words: '女主离开家乡',--}}
{{--//                    time: 60,--}}
{{--//                },--}}
{{--//                {--}}
{{--//                    words: '女主奋斗',--}}
{{--//                    time: 120,--}}
{{--//                }--}}
{{--            ], //提示点，words=提示点的内容，time=提示点对应的时间--}}
{{--            video: [--}}
{{--                ['http://qqbot-{{ "1251693677" }}.file.myqcloud.com/add7ef753930c25273d8cd4a64618288/5cca7f47/douyin/6686282148741188875.mp4', 'video/mp4', '中文标清', 0],--}}
{{--            ]--}}
{{--            /*video:[--}}
{{--             ['http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8','','标清',0],--}}
{{--             ['http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8','','高清',10]--}}
{{--             ]*/--}}
{{--        };--}}
{{--        var player = new chplayer(videoObject);--}}
{{--//        function loadedHandler() {--}}
{{--//            changeText('.playerstate', '状态：播放器已加载，建立监听：监听元数据，监听其它状态');--}}
{{--//            player.addListener('error', errorHandler); //监听视频加载出错--}}
{{--//            player.addListener('loadedmetadata', loadedMetaDataHandler); //监听元数据--}}
{{--//            player.addListener('play', playHandler); //监听暂停播放--}}
{{--//            player.addListener('pause', pauseHandler); //监听暂停播放--}}
{{--//            player.addListener('timeupdate', timeUpdateHandler); //监听播放时间--}}
{{--//            player.addListener('seeking', seekingHandler); //监听跳转播放--}}
{{--//            player.addListener('seeked', seekedHandler); //监听跳转播放完成--}}
{{--//            player.addListener('volumechange', volumeChangeHandler); //监听音量改变--}}
{{--//            player.addListener('full', fullHandler); //监听全屏/非全屏切换--}}
{{--//            player.addListener('ended', endedHandler); //监听全屏/非全屏切换--}}
{{--//            player.addListener('videochange', videoChangeHandler); //监听视频地址改变--}}
{{--//        }--}}
{{--//        function errorHandler() {--}}
{{--//            changeText('.playerstate', '状态：视频加载错误，停止执行其它动作，等待其它操作');--}}
{{--//        }--}}
{{--//        function loadedMetaDataHandler() {--}}
{{--//            var metaData = player.getMetaDate();--}}
{{--//            var html = ''--}}
{{--//            if(parseInt(metaData['videoWidth']) > 0) {--}}
{{--//                changeText('.playerstate', '状态：获取到元数据信息，如果数据错误，可以使用延迟获取');--}}
{{--//                html += '总时间：' + metaData['duration'] + '秒，';--}}
{{--//                html += '音量：' + metaData['volume'] + '（范围0-1），';--}}
{{--//                html += '播放器的宽度：' + metaData['width'] + 'px，';--}}
{{--//                html += '播放器的高度：' + metaData['height'] + 'px，';--}}
{{--//                html += '视频的实际宽度：' + metaData['videoWidth'] + 'px，';--}}
{{--//                html += '视频的实际高度：' + metaData['videoHeight'] + 'px，';--}}
{{--//                html += '是否暂停状态：' + metaData['paused'];--}}
{{--//            } else {--}}
{{--//                changeText('.playerstate', '状态：未正确获取到元数据信息');--}}
{{--//                html = '您正在使用移动端或iPad观看本页面，该平台限制了视频加载，只有在点击了播放器后才能加载视频及获取元数据信息';--}}
{{--//            }--}}
{{--//            changeText('.metadata', html);--}}
{{--//        }--}}
{{--//        function playHandler() {--}}
{{--//            //player.animateResume();//继续播放所有弹幕--}}
{{--//            changeText('.playstate', '播放状态：播放');--}}
{{--//            window.setTimeout(function() {--}}
{{--//                loadedMetaDataHandler();--}}
{{--//            }, 1000);--}}
{{--//            loadedMetaDataHandler();--}}
{{--//        }--}}
{{--//        function pauseHandler() {--}}
{{--//            //player.animatePause();//暂停所有弹幕--}}
{{--//            changeText('.playstate', '播放状态：暂停');--}}
{{--//            loadedMetaDataHandler();--}}
{{--//        }--}}
{{--//        function timeUpdateHandler() {--}}
{{--//            changeText('.currenttimestate', '当前播放时间（秒）：' + player.time);--}}
{{--//        }--}}
{{--//        function seekingHandler() {--}}
{{--//            changeText('.seekstate', '跳转动作：正在进行跳转');--}}
{{--//        }--}}
{{--//        function seekedHandler() {--}}
{{--//            changeText('.seekstate', '跳转动作：跳转完成');--}}
{{--//        }--}}
{{--//        function volumeChangeHandler() {--}}
{{--//            changeText('.volumechangestate', '当前音量：' + player.volume);--}}
{{--//        }--}}
{{--//        function fullHandler() {--}}
{{--//            var html = player.getByElement('.fullstate').innerHTML;--}}
{{--//            if(player.full) {--}}
{{--//                html += '，全屏';--}}
{{--//            } else {--}}
{{--//                html += '，否';--}}
{{--//            }--}}
{{--//            changeText('.fullstate', html);--}}
{{--//        }--}}
{{--//        function endedHandler() {--}}
{{--//            changeText('.endedstate', '播放结束');--}}
{{--//        }--}}
{{--//        var videoChangeNum = 0;--}}
{{--//        function videoChangeHandler() {--}}
{{--//            videoChangeNum++;--}}
{{--//            changeText('.videochangestate', '视频地址改变了' + videoChangeNum + '次');--}}
{{--//        }--}}
{{--//        function seekTime() {--}}
{{--//            var time = parseInt(player.getByElement('.seektime').value);--}}
{{--//            var metaData = player.getMetaDate();--}}
{{--//            var duration = metaData['duration'];--}}
{{--//            if(time < 0) {--}}
{{--//                alert('请填写大于0的数字');--}}
{{--//                return;--}}
{{--//            }--}}
{{--//            if(time > duration) {--}}
{{--//                alert('请填写小于' + duration + '的数字');--}}
{{--//                return;--}}
{{--//            }--}}
{{--//            player.seek(time);--}}
{{--//        }--}}
{{--//        function changeVolume() {--}}
{{--//            var volume = player.getByElement('.changevolume').value;--}}
{{--//            volume = Math.floor(volume * 100) / 100--}}
{{--//            if(volume < 0) {--}}
{{--//                alert('请填写大于0的数字');--}}
{{--//                return;--}}
{{--//            }--}}
{{--//            if(volume > 1) {--}}
{{--//                alert('请填写小于1的数字');--}}
{{--//                return;--}}
{{--//            }--}}
{{--//            player.changeVolume(volume);--}}
{{--//        }--}}
{{--//        function changeSize() {--}}
{{--//            player.changeSize(w, h)--}}
{{--//        }--}}
{{--//        function frontFun() {--}}
{{--//            alert('点击了前一集');--}}
{{--//        }--}}
{{--//        function nextFun() {--}}
{{--//            alert('点击了下一集');--}}
{{--//        }--}}
{{--//        function newVideo() {--}}
{{--//            var videoUrl = player.getByElement('.videourl').value;--}}
{{--//            changeVideo(videoUrl);--}}
{{--//        }--}}
{{--//        function newVideo2() {--}}
{{--//            var videoUrl = player.getByElement('.videourl2').value;--}}
{{--//            changeVideo(videoUrl);--}}
{{--//        }--}}
{{--//        function changeVideo(videoUrl) {--}}
{{--//            if(player == null) {--}}
{{--//                return;--}}
{{--//            }--}}
{{--//            var newVideoObject = {--}}
{{--//                container: 'video', //容器的ID--}}
{{--//                variable: 'player',--}}
{{--//                autoplay: true, //是否自动播放--}}
{{--//                loaded: 'loadedHandler', //当播放器加载后执行的函数--}}
{{--//                video: videoUrl--}}
{{--//            }--}}
{{--//            //判断是需要重新加载播放器还是直接换新地址--}}
{{--//            if(player.playerType == 'html5video') {--}}
{{--//                if(player.getFileExt(videoUrl) == '.flv' || player.getFileExt(videoUrl) == '.m3u8' || player.getFileExt(videoUrl) == '.f4v' || videoUrl.substr(0, 4) == 'rtmp') {--}}
{{--//                    player.removeChild();--}}
{{--//                    player = null;--}}
{{--//                    player = new chplayer();--}}
{{--//                    player.embed(newVideoObject);--}}
{{--//                } else {--}}
{{--//                    player.newVideo(newVideoObject);--}}
{{--//                }--}}
{{--//            } else {--}}
{{--//                if(player.getFileExt(videoUrl) == '.mp4' || player.getFileExt(videoUrl) == '.webm' || player.getFileExt(videoUrl) == '.ogg') {--}}
{{--//                    player = null;--}}
{{--//                    player = new chplayer();--}}
{{--//                    player.embed(newVideoObject);--}}
{{--//                } else {--}}
{{--//                    player.newVideo(newVideoObject);--}}
{{--//                }--}}
{{--//            }--}}
{{--//        }--}}
{{--//        function newElement() {--}}
{{--//            var attribute = {--}}
{{--//                list: [{--}}
{{--//                    type: 'image',--}}
{{--//                    url: 'screenshot/logo.png',--}}
{{--//                    radius: 30, //圆角弧度--}}
{{--//                    width: 30, //定义宽，必需要定义--}}
{{--//                    height: 30, //定义高，必需要定义--}}
{{--//                    alpha: 0.9, //透明度--}}
{{--//                    marginLeft: 10,--}}
{{--//                    marginRight: 10,--}}
{{--//                    marginTop: 10,--}}
{{--//                    marginBottom: 10--}}
{{--//                },--}}
{{--//                    {--}}
{{--//                        type: 'text', //说明是文本--}}
{{--//                        text: '这里是一个普通的元件，不支持HTML', //文本内容--}}
{{--//                        fontColor: '#FFFFFF',--}}
{{--//                        fontSize: 14,--}}
{{--//                        fontFamily: '"Microsoft YaHei", YaHei, "微软雅黑", SimHei,"\5FAE\8F6F\96C5\9ED1", "黑体",Arial',--}}
{{--//                        lineHeight: 30,--}}
{{--//                        alpha: 1, //透明度--}}
{{--//                        //paddingLeft:10,//左边距离--}}
{{--//                        paddingRight: 10, //右边距离--}}
{{--//                        paddingTop: 0,--}}
{{--//                        paddingBottom: 0,--}}
{{--//                        marginLeft: 0,--}}
{{--//                        marginRight: 0,--}}
{{--//                        marginTop: 10,--}}
{{--//                        marginBottom: 0,--}}
{{--//                        //backgroundColor:'#000000',--}}
{{--//                        backAlpha: 0.5,--}}
{{--//                        backRadius: 30 //背景圆角弧度--}}
{{--//                    }--}}
{{--//                ],--}}
{{--//                x: 10, //x轴坐标--}}
{{--//                y: 10, //y轴坐标--}}
{{--//                //position:[1,1],//位置[x轴对齐方式（0=左，1=中，2=右），y轴对齐方式（0=上，1=中，2=下），x轴偏移量（不填写或null则自动判断，第一个值为0=紧贴左边，1=中间对齐，2=贴合右边），y轴偏移量（不填写或null则自动判断，0=紧贴上方，1=中间对齐，2=紧贴下方）]--}}
{{--//                alpha: 1,--}}
{{--//                backgroundColor: '#000000',--}}
{{--//                backAlpha: 0.5,--}}
{{--//                backRadius: 60 //背景圆角弧度--}}
{{--//            }--}}
{{--//            var el = player.addElement(attribute);--}}
{{--//        }--}}
{{--//        function newDanmu() {--}}
{{--//            //弹幕说明--}}
{{--//            var danmuObj = {--}}
{{--//                list: [{--}}
{{--//                    type: 'image',--}}
{{--//                    url: 'screenshot/logo.png',--}}
{{--//                    radius: 30, //圆角弧度--}}
{{--//                    width: 30, //定义宽，必需要定义--}}
{{--//                    height: 30, //定义高，必需要定义--}}
{{--//                    alpha: 0.9, //透明度--}}
{{--//                    marginLeft: 10,--}}
{{--//                    marginRight: 10,--}}
{{--//                    marginTop: 0,--}}
{{--//                    marginBottom: 0--}}
{{--//                },--}}
{{--//                    {--}}
{{--//                        type: 'text', //说明是文本--}}
{{--//                        text: '演示弹幕内容，弹幕只支持普通文本，不支持HTML', //文本内容--}}
{{--//                        fontColor: '#FFFFFF',--}}
{{--//                        fontSize: 14,--}}
{{--//                        fontFamily: '"Microsoft YaHei", YaHei, "微软雅黑", SimHei,"\5FAE\8F6F\96C5\9ED1", "黑体",Arial',--}}
{{--//                        lineHeight: 30,--}}
{{--//                        alpha: 1, //透明度--}}
{{--//                        paddingLeft: 10, //左边距离--}}
{{--//                        paddingRight: 10, //右边距离--}}
{{--//                        paddingTop: 0,--}}
{{--//                        paddingBottom: 0,--}}
{{--//                        marginLeft: 0,--}}
{{--//                        marginRight: 0,--}}
{{--//                        marginTop: 0,--}}
{{--//                        marginBottom: 0,--}}
{{--//                        backgroundColor: '#000000',--}}
{{--//                        backAlpha: 0.5,--}}
{{--//                        backRadius: 30 //背景圆角弧度--}}
{{--//                    }--}}
{{--//                ],--}}
{{--//                x: '100%', //x轴坐标--}}
{{--//                y: "50%", //y轴坐标--}}
{{--//                //position:[2,1,0],//位置[x轴对齐方式（0=左，1=中，2=右），y轴对齐方式（0=上，1=中，2=下），x轴偏移量（不填写或null则自动判断，第一个值为0=紧贴左边，1=中间对齐，2=贴合右边），y轴偏移量（不填写或null则自动判断，0=紧贴上方，1=中间对齐，2=紧贴下方）]--}}
{{--//                alpha: 1,--}}
{{--//                //backgroundColor:'#FFFFFF',--}}
{{--//                backAlpha: 0.8,--}}
{{--//                backRadius: 30 //背景圆角弧度--}}
{{--//            }--}}
{{--//            var danmu = player.addElement(danmuObj);--}}
{{--//            var danmuS = player.getElement(danmu);--}}
{{--//            var obj = {--}}
{{--//                element: danmu,--}}
{{--//                parameter: 'x',--}}
{{--//                static: true, //是否禁止其它属性，true=是，即当x(y)(alpha)变化时，y(x)(x,y)在播放器尺寸变化时不允许变化--}}
{{--//                effect: 'None.easeOut',--}}
{{--//                start: null,--}}
{{--//                end: -danmuS['width'],--}}
{{--//                speed: 10,--}}
{{--//                overStop: true,--}}
{{--//                pauseStop: true,--}}
{{--//                callBack: 'deleteChild'--}}
{{--//            };--}}
{{--//            var danmuAnimate = player.animate(obj);--}}
{{--//        }--}}
{{--//        function deleteChild(ele) {--}}
{{--//            if(player) {--}}
{{--//                player.deleteElement(ele);--}}
{{--//            }--}}
{{--//        }--}}
{{--//        function changeText(div, text) {--}}
{{--//            player.getByElement(div).innerHTML = text;--}}
{{--//        }--}}
{{--    </script>--}}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.zhimg.com/element-ui/lib/index.js"></script>
    <script src="{{ asset('js/homepage.js') }}"></script>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    {{--<script src="https://cdn.bootcss.com/popper.js/1.14.6/esm/popper.min.js"></script>--}}
    <script src="https://cdn.bootcss.com/tether/1.4.4/js/tether.min.js"></script>
    <script src="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.bootcss.com/smoothscroll/1.4.8/SmoothScroll.js"></script>
    <script src="https://cdn.bootcss.com/jarallax/1.10.7/jarallax.min.js"></script>
    <script src="https://cdn.bootcss.com/jQuery-viewport-checker/1.8.8/jquery.viewportchecker.min.js"></script>
    <!--<script src="assets/theme/js/script.js"></script>-->
    <script src="js/libs.js"></script>
    <script type="text/javascript">
        var app = new Vue({
            el: '#app',
            data() {
                return {
                    isLoaded: false,
                    loginFormVisible: false,
                    inputUsername: '',
                    inputPassword: '',
                }
            },
            mounted() {
                this.isLoaded = true
            },
            methods: {
                showLogin() {
                    this.loginFormVisible = true
                }
            }
        })
    </script>
    @for($i=0;$i<3;++$i)
        <script>
            document.getElementsByClassName('image_kill_referrer')[{{ $i }}].innerHTML = ReferrerKiller.imageHtml('{{ "https:".$vlist[$i]["pic"] }}');
        </script>
    @endfor
    </body>
</html>
