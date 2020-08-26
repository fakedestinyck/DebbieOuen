@extends('layout.app')

@section('title')
    SING什么时候解散
@endsection

@section('content')
    <div id="easteregg">
        <easteregg></easteregg>
    </div>
@endsection

@section('Vue-script')
    <script>document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");</script>
    <link href="/strip/css/vendors.css" rel="stylesheet">
    <link href="/strip/css/www.jsdaima.com.css" rel="stylesheet">
    <script src="{{ asset('js/easteregg.js') }}"></script>
{{--    <script type="text/javascript" src="/strip/js/vendors.js"></script>--}}
    <script type="text/javascript" src="/strip/js/www.jsdaima.com.js"></script>
{{--    <canvas width="2688" height="832" style="position: absolute; top: 0px; left: 0px; z-index: -1; width: 1680px; height: 520px;"></canvas>--}}
@endsection