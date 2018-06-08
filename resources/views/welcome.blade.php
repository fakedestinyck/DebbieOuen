<!DOCTYPE html>
<html lang="zh-Hans">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link href="{{ asset('resources/fonts.css') }}" rel="stylesheet">
        <!-- CSS -->
        <!-- Add Material font (Roboto) and Material icon as needed -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
        {{--<!-- Styles -->--}}
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
                height: calc(100vh - 64px);
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

            .title {
                font-size: 84px;
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
        </style>
    </head>
    <body>
        {{--<div class="flex-center position-ref full-height">--}}
            {{--@if (Route::has('login'))--}}
                {{--<div class="top-right links">--}}
                    {{--@if (Auth::check())--}}
                        {{--<a href="{{ url('/home') }}">Home</a>--}}
                    {{--@else--}}
                        {{--<a href="{{ url('/login') }}">Login</a>--}}
                        {{--<a href="{{ url('/register') }}">Register</a>--}}
                    {{--@endif--}}
                {{--</div>--}}
            {{--@endif--}}

            {{--<div class="content">--}}
                {{--<div class="title m-b-md">--}}
                    {{--Laravel--}}
                {{--</div>--}}

                {{--<div class="links">--}}
                    {{--<a href="https://laravel.com/docs">Documentation</a>--}}
                    {{--<a href="https://laracasts.com">Laracasts</a>--}}
                    {{--<a href="https://laravel-news.com">News</a>--}}
                    {{--<a href="https://forge.laravel.com">Forge</a>--}}
                    {{--<a href="https://github.com/laravel/laravel">GitHub</a>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}

        <!-- Optional JavaScript -->
        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

        <!-- Always shows a header, even in smaller screens. -->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">姐姐的小房间</span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation. We hide it in small screens. -->
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                        <a class="mdl-navigation__link" href="{{ url('course/ve280') }}">VE280</a>
                    </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Navigation</span>
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="{{ url('course/ve280') }}">VE280</a>
                    <a class="mdl-navigation__link show-dialog" href="#">敬请期待</a>
                    <a class="mdl-navigation__link show-dialog" href="#">敬请期待</a>
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div class="flex-center position-ref full-height">
                    <div class="content">
                        <div class="title m-b-md">
                            你好呀233
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <dialog class="mdl-dialog">
            <h5 class="mdl-dialog__title">敬请期待！</h5>
            <div class="mdl-dialog__content">
                <p>
                    Still working on it...
                </p>
            </div>
            <div class="mdl-dialog__actions">
                <button type="button" class="close mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Dismiss</button>
                {{--<button type="button" class="mdl-button close">Disagree</button>--}}
            </div>
        </dialog>

        {{--<script src="{{ asset('js/app.js') }}"></script>--}}
        <script>
            var dialog = document.querySelector('dialog');
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
//            showDialogButton.addEventListener('click', function() {
//                dialog.showModal();
//            });
            dialog.querySelector('.close').addEventListener('click', function() {
                dialog.close();
            });
        </script>
    </body>
</html>
