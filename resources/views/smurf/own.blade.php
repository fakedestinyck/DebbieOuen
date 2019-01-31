@extends('layout.app')

@section('title')
    我的账号数据
@endsection

@section('content')
    <script>
        var state = {title:'',url:window.location.href};
        history.pushState(state,'','own');
    </script>
    <div id="ownsmurf">
        <ownsmurf :own-smurf-data="{{ json_encode($uaps) }}"></ownsmurf>
    </div>

@endsection

@section('Vue-script')
    <script src="{{ asset('js/ownsmurf.js') }}"></script>
@endsection