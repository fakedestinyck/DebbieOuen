@extends('layouts.app')

@section('content')
    <div class="site-content">
        <div class="mdl-grid site-max-width">
            <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                <div class="mdl-card__title">
                    <h1 class="mdl-card__title-text">注册</h1>
                </div>

                <div class="mdl-grid site-copy">
                    <div class="mdl-cell mdl-cell--12-col"><div class="mdl-card__supporting-text">
                            <p>请输入注册信息</p>
                            <form action="{{ route('register') }}" method="POST" class="form-contact">
                                {{ csrf_field() }}

                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                    <input class="mdl-textfield__input form-control" type="email" id="email" name="email" value="{{ old('email') }}" required>
                                    <label class="mdl-textfield__label" for="email">邮箱</label>
                                    @if ($errors->has('email'))
                                        <span class="mdl-textfield__error">{{ $errors->first('email') }}</span>
                                    @endif
                                </div>

                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group{{ $errors->has('username') ? ' has-error' : '' }}">
                                    <input class="mdl-textfield__input form-control" type="text" id="username" name="username" value="{{ old('username') }}" required>
                                    <label class="mdl-textfield__label" for="username">用户名</label>
                                    @if ($errors->has('username'))
                                        <span class="mdl-textfield__error">{{ $errors->first('username') }}</span>
                                    @endif
                                </div>

                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <input class="mdl-textfield__input form-control" type="password" id="password" name="password" required>
                                    <label class="mdl-textfield__label" for="password">密码</label>
                                    @if ($errors->has('password'))
                                        <span class="mdl-textfield__error">{{ $errors->first('password') }}</span>
                                    @endif
                                </div>

                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <input class="mdl-textfield__input form-control" type="password" id="password-confirm" name="password_confirmation" required>
                                    <label class="mdl-textfield__label" for="password-confirm">再次输入密码</label>
                                    {{--@if ($errors->has('password'))--}}
                                        {{--<span class="mdl-textfield__error">{{ $errors->first('password') }}</span>--}}
                                    {{--@endif--}}
                                </div>

                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group{{ $errors->has('qq') ? ' has-error' : '' }}">
                                    <input class="mdl-textfield__input form-control" type="number" id="qq" name="qq" value="{{ old('qq') }}" min="10000" max="9999999999" step="1">
                                    <label class="mdl-textfield__label" for="qq">QQ号</label>
                                    @if ($errors->has('qq'))
                                        <span class="mdl-textfield__error">{{ $errors->first('qq') }}</span>
                                    @endif
                                </div>

                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group{{ $errors->has('weibo') ? ' has-error' : '' }}">
                                    <input class="mdl-textfield__input form-control" type="text" id="weibo" name="weibo" value="{{ old('weibo') }}" required>
                                    <label class="mdl-textfield__label" for="weibo">微博用户名</label>
                                    @if ($errors->has('weibo'))
                                        <span class="mdl-textfield__error">{{ $errors->first('weibo') }}</span>
                                    @endif
                                </div>


                                <div class="form-group">
                                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">
                                        注册
                                    </button>
                                </div>
                            </form>
                        </div></div>
                </div>
            </div>
        </div>
    </div>
@endsection
