@extends('layout.app')

@section('title')
    打榜数据
@endsection

@section('content')
    <div id="app">
        <example></example>
    </div>
@endsection

@section('Vue-script')
    <script src="{{ asset('js/app.js') }}"></script>
@endsection