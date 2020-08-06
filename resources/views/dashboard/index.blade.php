@extends('layout.app')

@section('title')
    个人面板
@endsection

@section('content')
    @if(Auth::User()->isAdmin())
        <div id="admindashboard">
            <admindashboard></admindashboard>
        </div>
    @else
        <div id="userdashboard">
            <userdashboard></userdashboard>
        </div>
    @endif

@endsection

@section('Vue-script')
    @if(Auth::User()->isAdmin())
        <script src="{{ asset('js/admindashboard.js') }}"></script>
    @else
        <script src="{{ asset('js/userdashboard.js') }}"></script>
    @endif
@endsection