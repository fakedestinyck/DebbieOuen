@extends('layout.app')

@section('title')
    FanClub注册
@endsection

@section('content')
    <div id="fcregister">
        <fcregister></fcregister>
    </div>
@endsection

@section('Vue-script')
    <script src="{{ asset('js/fanclubregister.js') }}"></script>
@endsection