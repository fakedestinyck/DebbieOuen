<!DOCTYPE html>
<html>
    <head>
        <!-- Site made with Mobirise Website Builder v4.3.0, https://mobirise.com -->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="generator" content="Mobirise v4.3.0, mobirise.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="assets/images/logo-128x128.png" type="image/x-icon">
        <meta name="description" content="">
        <title>Home</title>
        <!--<link rel="stylesheet" href="assets/web/assets/mobirise-icons/mobirise-icons.css">-->
        <link href="https://cdn.bootcss.com/tether/1.4.4/css/tether.min.css" rel="stylesheet">
        <link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap-grid.min.css" rel="stylesheet">
        <link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap-reboot.min.css" rel="stylesheet">
        <!--<link rel="stylesheet" href="assets/socicon/css/styles.css">-->
        <!--<link rel="stylesheet" href="assets/theme/css/style.css">-->
        <!--<link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">-->
        <link rel="stylesheet" href="css/libs.css">



    </head>
    <body>
    <section class="header1 cid-rcfCVkx06l mbr-parallax-background" id="header1-8" data-rv-view="24">



        <div class="mbr-overlay" style="opacity: 0; background-color: rgb(0, 0, 0);">
        </div>

        <div class="container">
            <div class="row justify-content-md-center">
                <div class="mbr-white col-md-10">
                    <h1 class="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">蒋申的非官方应援站</h1>

                    <p class="mbr-text align-center pb-3 mbr-fonts-style display-5"><strong>蒋心独具，不负此申</strong></p>
                    <div class="mbr-section-btn align-center"><a class="btn btn-md btn-secondary display-7" href="https://mobirise.com"><span class="mbri-login mbr-iconfont mbr-iconfont-btn" style="color: rgb(255, 255, 255);"></span>
                            护申符登陆</a></div>
                </div>
            </div>
        </div>

    </section>

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
                                    <div class="mbr-section-btn text-center"><a href="https://mobirise.com" class="btn btn-danger display-4">前往观看</a></div>
                                    <img src="{{ "http:".$veach["pic"] }}" alt="封面图" media-simple="true">
                                </div>
                                <div class="card-box">
                                    <h4 class="card-title mbr-fonts-style display-7">
                                        {{ $veach["title"] }}
                                    </h4>
                                    <p class="mbr-text mbr-fonts-style align-left display-7">
                                        {{ $veach["description"] }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @endif
                {{--<div class="card p-3 col-12 col-md-6 col-lg-4">--}}
                    {{--<div class="card-wrapper">--}}
                        {{--<div class="card-img">--}}
                            {{--<div class="mbr-overlay"></div>--}}
                            {{--<div class="mbr-section-btn text-center"><a href="https://mobirise.com" class="btn btn-danger display-4">--}}
                                    {{--前往观看</a></div>--}}
                            {{--<img src="assets/images/024.jpg" alt="Mobirise" media-simple="true">--}}
                        {{--</div>--}}
                        {{--<div class="card-box">--}}
                            {{--<h4 class="card-title mbr-fonts-style display-7">--}}
                                {{--Mobile Friendly--}}
                            {{--</h4>--}}
                            {{--<p class="mbr-text mbr-fonts-style display-7">--}}
                                {{--All sites you make with Mobirise are mobile-friendly. You don't have to create a special mobile version of your site.--}}
                            {{--</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}

                {{--<div class="card p-3 col-12 col-md-6 col-lg-4">--}}
                    {{--<div class="card-wrapper">--}}
                        {{--<div class="card-img">--}}
                            {{--<div class="mbr-overlay"></div>--}}
                            {{--<div class="mbr-section-btn text-center"><a href="https://mobirise.com" class="btn btn-danger display-4">--}}
                                    {{--前往观看</a></div>--}}
                            {{--<img src="assets/images/035.jpg" alt="Mobirise" media-simple="true">--}}
                        {{--</div>--}}
                        {{--<div class="card-box">--}}
                            {{--<h4 class="card-title mbr-fonts-style display-7">--}}
                                {{--Unique Styles--}}
                            {{--</h4>--}}
                            {{--<p class="mbr-text mbr-fonts-style display-7">--}}
                                {{--Mobirise offers many site blocks in several themes, and though these blocks are pre-made, they are flexible.--}}
                            {{--</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}


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

    <section class="counters1 counters cid-rcfIDKQ3Xf" id="counters1-f" data-rv-view="30">





        <div class="container">
            <h2 class="mbr-section-title pb-3 align-center mbr-fonts-style display-2">魅力瞬间</h2>
            <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                尚在施工中……</h3>

            {{--<div class="container pt-4 mt-2">--}}
                {{--<div class="media-container-row">--}}
                    {{--<div class="card p-3 align-center col-12 col-md-6 col-lg-4">--}}
                        {{--<div class="panel-item p-3">--}}
                            {{--<div class="card-img pb-3">--}}
                                {{--<span class="mbr-iconfont mbri-close" media-simple="true"></span>--}}
                            {{--</div>--}}

                            {{--<div class="card-text">--}}
                                {{--<h3 class="count pt-3 pb-3 mbr-fonts-style display-2">--}}
                                    {{--0--}}
                                {{--</h3>--}}
                                {{--<h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7">我也不知道写什么</h4>--}}
                                {{--<p class="mbr-content-text mbr-fonts-style display-7">2015年8月，蒋申随S.I.N.G发行首支单曲《青春的告白》，正式出道；2017年9月，随S.I.N.G推出EDM曲风的单曲《寄明月》11月，随S.I.N.G获得第一届亚洲音乐盛典年度人气飙升女团奖。2018年1月，随S.I.N.G获得NOW直播年度之星颁奖盛典最佳突破组合奖；4月，参加腾讯视频女团青春成长节目《创造101》。</p>--}}
                            {{--</div>--}}
                        {{--</div>--}}
                    {{--</div>--}}


                    {{--<div class="card p-3 align-center col-12 col-md-6 col-lg-4">--}}
                        {{--<div class="panel-item p-3">--}}
                            {{--<div class="card-img pb-3">--}}
                                {{--<span class="mbr-iconfont mbri-close" media-simple="true"></span>--}}
                            {{--</div>--}}
                            {{--<div class="card-text">--}}
                                {{--<h3 class="count pt-3 pb-3 mbr-fonts-style display-2">--}}
                                    {{--0--}}
                                {{--</h3>--}}
                                {{--<h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7">--}}
                                    {{--就复制百度百科吧</h4>--}}
                                {{--<p class="mbr-content-text mbr-fonts-style display-7">--}}
                                    {{--2015年8月，蒋申随S.I.N.G发行首支单曲《青春的告白》，正式出道；2017年9月，随S.I.N.G推出EDM曲风的单曲《寄明月》11月，随S.I.N.G获得第一届亚洲音乐盛典年度人气飙升女团奖。2018年1月，随S.I.N.G获得NOW直播年度之星颁奖盛典最佳突破组合奖；4月，参加腾讯视频女团青春成长节目《创造101》。--}}
                                {{--</p>--}}
                            {{--</div>--}}
                        {{--</div>--}}
                    {{--</div>--}}

                    {{--<div class="card p-3 align-center col-12 col-md-6 col-lg-4">--}}
                        {{--<div class="panel-item p-3">--}}
                            {{--<div class="card-img pb-3">--}}
                                {{--<span class="mbr-iconfont mbri-close" media-simple="true"></span>--}}
                            {{--</div>--}}
                            {{--<div class="card-text">--}}
                                {{--<h3 class="count pt-3 pb-3 mbr-fonts-style display-2">--}}
                                    {{--0--}}
                                {{--</h3>--}}
                                {{--<h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7">--}}
                                    {{--维基百科也行</h4>--}}
                                {{--<p class="mbr-content-text mbr-fonts-style display-7">--}}
                                    {{--2015年8月，蒋申随S.I.N.G发行首支单曲《青春的告白》，正式出道；2017年9月，随S.I.N.G推出EDM曲风的单曲《寄明月》11月，随S.I.N.G获得第一届亚洲音乐盛典年度人气飙升女团奖。2018年1月，随S.I.N.G获得NOW直播年度之星颁奖盛典最佳突破组合奖；4月，参加腾讯视频女团青春成长节目《创造101》。--}}
                                {{--</p>--}}
                            {{--</div>--}}
                        {{--</div>--}}
                    {{--</div>--}}



                {{--</div>--}}
            {{--</div>--}}
        </div>
    </section>

    <section class="cid-rcfM2t8yR8" id="footer1-i" data-rv-view="33">





        <div class="container">
            <div class="media-container-row content text-white">
                <div class="col-12 col-md-3">
                    <div class="media-wrap">
                        <img src="assets/images/images-259x194.png" alt="Mobirise" title="" media-simple="true">
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
                        进入数据站<br></p>
                </div>
                <div class="col-12 col-md-3 mbr-fonts-style display-7">
                    <h5 class="pb-3">
                        友情链接
                    </h5>
                    <p class="mbr-text">SING-蒋申微博<br>后援会微博<br></p>
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


    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    {{--<script src="https://cdn.bootcss.com/popper.js/1.14.6/esm/popper.min.js"></script>--}}
    <script src="https://cdn.bootcss.com/tether/1.4.4/js/tether.min.js"></script>
    <script src="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.bootcss.com/smoothscroll/1.4.8/SmoothScroll.js"></script>
    <script src="https://cdn.bootcss.com/jarallax/1.10.7/jarallax.min.js"></script>
    <script src="https://cdn.bootcss.com/jQuery-viewport-checker/1.8.8/jquery.viewportchecker.min.js"></script>
    <!--<script src="assets/theme/js/script.js"></script>-->
    <script src="js/libs.js"></script>



    </body>
</html>
