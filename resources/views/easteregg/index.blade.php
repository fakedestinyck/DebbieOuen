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
    <script src="{{ asset('js/easteregg.js') }}"></script>
@endsection