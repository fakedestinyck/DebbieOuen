@extends('layout.app')

@section('title')
    FanClub注册
@endsection

@section('content')
    <div id="fanclub">
        <fanclub></fanclub>
    </div>
@endsection

@section('Vue-script')
    <script src="{{ asset('js/fanclub.js') }}"></script>
@endsection