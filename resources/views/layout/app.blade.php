<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }} - @yield('title')</title>

    <!-- Fonts -->
    <link href="{{ asset('resources/fonts.css') }}" rel="stylesheet">
    <!-- CSS -->
    <!-- Add Material font (Roboto) and Material icon as needed -->
    {{--<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">--}}
    <link href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.min.css" rel="stylesheet">
    {{--<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />--}}
    <link href="https://cdn.bootcss.com/material-design-lite/1.3.0/material.indigo-pink.min.css" rel="stylesheet">
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
    </style>
</head>
<body>

<!-- Optional JavaScript -->
{{--<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>--}}
<script src="https://cdn.bootcss.com/material-design-lite/1.3.0/material.min.js"></script>


<div id="app">
<example></example>
</div>
<script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>

<script src="{{ asset('js/libs.js') }}"></script>
{{--<script src="{{ asset('js/codemirror.js') }}"></script>--}}
{{--<script src="{{ asset('js/clike.js') }}"></script>--}}
<script src="{{ asset('js/app.js') }}"></script>
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
    var dialog = document.querySelector('#dialogDismiss');
    //            var showDialogButton = document.querySelector('#show-dialog');
    var showDialogButton = document.querySelectorAll('.show-dialog');
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    for (var i = 0; i < showDialogButton.length; ++i) {
        showDialogButton[i].addEventListener('click', function() {
            dialog.showModal();
        });
    }
    dialog.querySelector('.close').addEventListener('click', function() {
        dialog.close();
    });


//    $(document).ready(function(){
//        $('#projectDdl').bootstrapMaterialDatePicker({ format : 'dddd DD MMMM YYYY - HH:mm' });
//    });
//(function() {
//    'use strict';
//    window['counter'] = 0;
//    var snackbarContainer = document.querySelector('#demo-toast-example');
//    var showToastButton = document.querySelector('#demo-show-toast');
//    showToastButton.addEventListener('click', function() {
//        'use strict';
//        var data = {message: '还在努力制作网页中……就先给你看着玩玩LOL'};
//        snackbarContainer.MaterialSnackbar.showSnackbar(data);
//    });
//}());
</script>
</body>
</html>
