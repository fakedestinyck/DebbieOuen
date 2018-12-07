@extends('layouts.app')

@section('content')
    <div class="site-content">
        <div class="mdl-grid site-max-width">
            <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                <div class="mdl-card__title">
                    <h1 class="mdl-card__title-text">管理员登录</h1>
                </div>

                <div class="mdl-grid site-copy">
                    <div class="mdl-cell mdl-cell--12-col"><div class="mdl-card__supporting-text">
                            <p>请输入用户名和密码：</p>
                            <form action="{{ route('login') }}" method="POST" class="form-contact">
                                {{ csrf_field() }}
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group{{ $errors->has('username') ? ' has-error' : '' }}">
                                    <input class="mdl-textfield__input form-control" type="text" id="username" name="username" value="{{ old('username') }}" required autofocus>
                                    <label class="mdl-textfield__label" for="username">用户名</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <input class="mdl-textfield__input form-control" type="password" id="password" name="password" value="{{ old('password') }}" required>
                                    <label class="mdl-textfield__label" for="password">密码</label>
                                    @if ($errors->has('username'))
                                        <span class="mdl-textfield__error">用户名或密码错误错误</span>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div></div>
                </div>
            </div>
        </div>
    </div>
@endsection
