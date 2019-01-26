@extends('layouts.app')

@section('content')
    <div class="site-content">
        <div class="mdl-grid site-max-width">
            <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                <div class="mdl-card__title">
                    <h1 class="mdl-card__title-text">护申符登录</h1>
                </div>

                <div class="mdl-grid site-copy">
                    <div class="mdl-cell mdl-cell--12-col"><div class="mdl-card__supporting-text">
                            <p>请输入邮箱和密码：</p>
                            <form action="{{ route('login') }}" method="POST" class="form-contact">
                                {{ csrf_field() }}
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                    <input class="mdl-textfield__input form-control" type="text" id="email" name="email" value="{{ old('email') }}" required autofocus>
                                    <label class="mdl-textfield__label" for="email">邮箱</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <input class="mdl-textfield__input form-control" type="password" id="password" name="password" value="{{ old('password') }}" required>
                                    <label class="mdl-textfield__label" for="password">密码</label>
                                    @if ($errors->has('email'))
                                        <span class="mdl-textfield__error">用户名或密码错误错误</span>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">
                                        登录
                                    </button>
                                </div>
                            </form>
                        </div></div>
                </div>
            </div>
        </div>
    </div>
@endsection
