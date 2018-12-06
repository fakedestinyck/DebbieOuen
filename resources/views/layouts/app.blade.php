<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
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

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - @yield("title")</title>

    <!-- Fonts -->
    <link href="{{ asset('resources/fonts.css') }}" rel="stylesheet">
    <!-- CSS -->
    <!-- Add Material font (Roboto) and Material icon as needed -->
    {{--<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">--}}
    <link href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.min.css" rel="stylesheet">
    {{--<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />--}}
    <link href="https://cdn.bootcss.com/material-design-lite/1.3.0/material.indigo-pink.min.css" rel="stylesheet">
</head>
<body>
    <div id="app">

        <!-- Always shows a header, even in smaller screens. -->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">{{ config('app.name', 'Laravel') }}</span>
                </div>
            </header>
            {{--<div class="mdl-layout__drawer">--}}
                {{--<span class="mdl-layout-title">导航</span>--}}
                {{--<nav class="mdl-navigation">--}}
                    {{--<a class="mdl-navigation__link show-dialog" href="#">敬请期待</a>--}}
                    {{--<a class="mdl-navigation__link" href="{{ url('ranks/ranking') }}">打榜数据</a>--}}
                    {{--<a class="mdl-navigation__link show-dialog" href="#">敬请期待</a>--}}
                {{--</nav>--}}
            {{--</div>--}}
            {{--<main class="mdl-layout__content">--}}
                {{--<div class="flex-center position-ref full-height">--}}
                    {{--<div class="content">--}}
                        {{--<div class="title m-b-md">--}}
                            {{--银河以北，<span style="color: deepskyblue;">蒋申</span>最美<br>SING Fighting!--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</main>--}}
            <footer style="text-align: center;">
                <a href="http://www.miibeian.gov.cn/" style="text-decoration: none;color: darkgray">沪ICP备16029354号-2</a>
            </footer>
        </div>

        @yield('content')

        <footer style="text-align: center;">
            <a href="http://www.miibeian.gov.cn/" style="text-decoration: none;color: darkgray">沪ICP备16029354号-2</a>
        </footer>
    </div>

    <!-- Scripts -->
    {{--<script src="{{ asset('js/app.js') }}"></script>--}}
    <script src="https://cdn.bootcss.com/material-design-lite/1.3.0/material.min.js"></script>
</body>
</html>
