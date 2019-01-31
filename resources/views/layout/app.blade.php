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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.9/theme-chalk/index.css" rel="stylesheet">
    <!-- Fonts -->
    <link href="{{ asset('resources/fonts.css') }}" rel="stylesheet">
    <!-- CSS -->
    <!-- Add Material font (Roboto) and Material icon as needed -->
    {{--<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">--}}
    <link href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.min.css" rel="stylesheet">
    {{--<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />--}}
    <link href="https://cdn.bootcss.com/material-design-lite/1.3.0/material.blue-pink.min.css" rel="stylesheet">
    {{--<link rel="stylesheet" href="{{ asset('css/material.indigo-pink.min.css') }}" />--}}
    {{--<!-- Styles -->--}}
    {{--<link rel="stylesheet" href="{{ asset('css/codemirror.css') }}"/>--}}
    {{--<link rel="stylesheet" href="{{ asset('css/styles.css') }}" />--}}
    {{--<link rel="stylesheet" href="{{ asset('css/mdn-like.css') }}"/>--}}
    <link rel="stylesheet" href="{{ asset('css/libs.css') }}"/>

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
        <img src="https://wx3.sinaimg.cn/mw690/0077Moerly1fxqdyq7i71g3050050t9t.gif" class="img-responsive">
    </div>
</div>
<body class="scoll_dis">
@yield('content')



{{--<script src="{{ asset('js/libs.js') }}"></script>--}}
{{--<script src="{{ asset('js/codemirror.js') }}"></script>--}}
{{--<script src="{{ asset('js/clike.js') }}"></script>--}}
<!-- Optional JavaScript -->
{{--<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>--}}
<script src="https://cdn.bootcss.com/material-design-lite/1.3.0/material.min.js"></script>


<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>--}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.min.js"></script>
<script src="https://unpkg.com/element-ui@2.4.11/lib/index.js"></script>
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

<div id="demo-toast-example" class="mdl-js-snackbar mdl-snackbar">
    <div class="mdl-snackbar__text"></div>
    <button class="mdl-snackbar__action" type="button"></button>
</div>

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
