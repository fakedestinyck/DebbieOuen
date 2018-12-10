@extends('layout.app')

@section('title')
    微博相关
@endsection

@section('content')
    <div id="weibo">
        <weibo></weibo>
    </div>
@endsection

@section('Vue-script')
    <script src="{{ asset('js/weibo.js') }}"></script>
@endsection