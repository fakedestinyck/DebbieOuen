@extends('layout.app')

@section('title')
    管理小号
@endsection

@section('content')
    <div id="smurf">
        <smurf></smurf>
    </div>
@endsection

@section('Vue-script')
    <script src="{{ asset('js/smurf.js') }}"></script>
@endsection