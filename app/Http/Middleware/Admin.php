<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::check()) {
            if (Auth::user()->isAdmin()){
                return $next($request);
            } else {
                return response("403 Forbidden 身份校验失败！如果你是管理员，请尝试重新登录！",403);
            }
        } else {
            return response("401 Unauthorized 身份校验失败！请先登录！",401);
        }

    }
}
