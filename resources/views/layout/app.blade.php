<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <title>{{ config('app.name', 'Laravel') }} - @yield('title')</title>
    <link rel="stylesheet" href="https://unpkg.zhimg.com/element-ui/lib/theme-chalk/index.css">
    <!-- Fonts -->
    <link href="{{ asset('resources/fonts.css') }}" rel="stylesheet">
    <!-- CSS -->
{{--    <link href="https://cdn.bootcss.com/tether/1.4.4/css/tether.min.css" rel="stylesheet">--}}
{{--    <link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">--}}
{{--    <link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap-grid.min.css" rel="stylesheet">--}}
{{--    <link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap-reboot.min.css" rel="stylesheet">--}}
{{--    <!-- Add Material font (Roboto) and Material icon as needed -->--}}
{{--    --}}{{--<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">--}}
{{--    <link href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.min.css" rel="stylesheet">--}}
{{--    --}}{{--<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />--}}
{{--    <link href="https://cdn.bootcss.com/material-design-lite/1.3.0/material.blue-pink.min.css" rel="stylesheet">--}}
{{--    --}}{{--<link rel="stylesheet" href="{{ asset('css/material.indigo-pink.min.css') }}" />--}}
{{--    --}}{{--<!-- Styles -->--}}
{{--    --}}{{--<link rel="stylesheet" href="{{ asset('css/codemirror.css') }}"/>--}}
{{--    --}}{{--<link rel="stylesheet" href="{{ asset('css/styles.css') }}" />--}}
{{--    --}}{{--<link rel="stylesheet" href="{{ asset('css/mdn-like.css') }}"/>--}}
{{--    <link rel="stylesheet" href="{{ asset('css/libs.css') }}"/>--}}




    <link rel="stylesheet" href="/css/tether/tether.min.css">
    <link rel="stylesheet" href="/css/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="/css/bootstrap/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="/css/animate.css/animate.min.css">
    <link rel="stylesheet" href="/css/dropdown/css/style.css">
{{--    <link rel="stylesheet" href="/css/theme/css/style.css">--}}
{{--    <link rel="stylesheet" href="/css/mobirise/css/mbr-additional.css" type="text/css">--}}
    <link rel="stylesheet" href="/css/libs.css">
    <link rel="stylesheet" href="https://unpkg.zhimg.com/element-ui/lib/theme-chalk/index.css">

    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Raleway', 'fzlantingyuans-db1-gbregular', sans-serif;
            font-weight: 500;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: calc(100vh - 112px);
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }

        textarea {
            resize: none;
        }

        #loading_all {
            width:100%;
            height:100%;
            position:fixed;
            z-index:999;
            background-color:black;
        }
        #loading_all div {
            position:absolute;
            width:100%;
            height:60px;
            top:50%;
            margin-top:-60px;
        }
        /*滚动条禁用*/
        .scoll_dis {
            overflow:scroll;
            overflow-y:hidden;
        }
        #loading_all img {
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
        }

    </style>
</head>
<div id="loading_all">
    <div>
        <img src="https://lg-bus1kzl6-1251693677.file.myqcloud.com/images/0077Moerly1fxqdyq7i71g3050050t9t.gif" class="img-responsive">
    </div>
</div>
<body class="scoll_dis">
@yield('content')

<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script src="{{ asset('js/libs.js') }}"></script>
{{--<script src="{{ asset('js/codemirror.js') }}"></script>--}}
{{--<script src="{{ asset('js/clike.js') }}"></script>--}}
<!-- Optional JavaScript -->

{{--<script src="/js/web/assets/jquery/jquery.min.js"></script>--}}
{{--<script src="/js/popper/popper.min.js"></script>--}}
{{--<script src="/js/tether/tether.min.js"></script>--}}
{{--<script src="/js/bootstrap/js/bootstrap.min.js"></script>--}}
{{--<script src="/js/smooth-scroll/smooth-scroll.js"></script>--}}
{{--<script src="/js/jarallax/jarallax.min.js"></script>--}}
{{--<script src="/js/viewport-checker/jquery.viewportchecker.js"></script>--}}
{{--<script src="/js/touch-swipe/jquery.touch-swipe.min.js"></script>--}}
{{--<script src="/js/jquery-mb-vimeo_player/jquery.mb.vimeo_player.js"></script>--}}
{{--<script src="/js/dropdown/js/script.min.js"></script>--}}
{{--<script src="/js/bootstrap-carousel-swipe/bootstrap-carousel-swipe.js"></script>--}}
{{--<script src="/js/jquery-mb-ytplayer/jquery.mb.ytplayer.min.js"></script>--}}
{{--<script src="/js/theme/js/script.js"></script>--}}
{{--<script src="/js/mobirise-slider-video/script.js"></script>--}}



{{--<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>--}}
<script src="https://cdn.bootcss.com/material-design-lite/1.3.0/material.min.js"></script>


{{--<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>--}}
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
{{--<script src="https://cdn.jsdelivr.net/npm/vue"></script>--}}
{{--<script src="https://cdn.bootcss.com/vue-router/3.0.2/vue-router.js"></script>--}}
<script src="https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js"></script>
<script src="https://unpkg.zhimg.com/element-ui/lib/index.js"></script>
<script src="https://cdn.bootcss.com/jsencrypt/3.0.0-rc.1/jsencrypt.min.js"></script>

@yield('Vue-script')

{{--<dialog class="mdl-dialog" id="dialogDismiss">--}}
    {{--<h5 class="mdl-dialog__title">敬请期待！</h5>--}}
    {{--<div class="mdl-dialog__content">--}}
        {{--<p>--}}
            {{--Still working on it...--}}
        {{--</p>--}}
    {{--</div>--}}
    {{--<div class="mdl-dialog__actions">--}}
        {{--<button type="button" class="close mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Dismiss</button>--}}
        {{--<button type="button" class="mdl-button close">Disagree</button>--}}
    {{--</div>--}}
{{--</dialog>--}}

{{--<div id="demo-toast-example" class="mdl-js-snackbar mdl-snackbar">--}}
{{--    <div class="mdl-snackbar__text"></div>--}}
{{--    <button class="mdl-snackbar__action" type="button"></button>--}}
{{--</div>--}}

<script>
//    document.getElementsByClassName("title")[0]
//    var dialog = document.querySelector('#dialogDismiss');
//    //            var showDialogButton = document.querySelector('#show-dialog');
//    var showDialogButton = document.querySelectorAll('.show-dialog');
//    if (! dialog.showModal) {
//        dialogPolyfill.registerDialog(dialog);
//    }
//    for (var i = 0; i < showDialogButton.length; ++i) {
//        showDialogButton[i].addEventListener('click', function() {
//            dialog.showModal();
//        });
//    }
//    dialog.querySelector('.close').addEventListener('click', function() {
//        dialog.close();
//    });
    //阻止触摸事件
    document.addEventListener("touchmove", myFunction);
    function myFunction(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("touched");
        return false;
    }

    $('html, body, main').css({
        overflow: 'hidden',
        height: '100%'
    });

</script>
</body>
{{--<script src="https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts.common.min.js"></script>--}}
</html>
