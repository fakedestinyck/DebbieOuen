<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/data');
});

Route::get('/home', 'HomeController@index');

Route::get('/data', function () {
    return view('welcome');
});

Route::get('/ranks/ranking', function () {
    return view('ranks/ranking');
});

Route::group(['middleware' => ['admin']], function(){
    Route::prefix('weibo')->group(function () {
        Route::get('/', function () {
            return view('weibo/index');
        });

        Route::get('/nextThirtyDays','WeiboController@nextThirty');
        Route::get('/nextThirtyDays/bad','WeiboController@nextThirtyBad');
        Route::post('/sendDayX','WeiboController@sendDayX');
        Route::get('anli/day','WeiboController@getAnliByDay'); // 获得某一天的安利总数据
        Route::get('anli/stats/day/{day}','WeiboController@statsByDay'); // 获得某一天的安利统计数据
        Route::get('anli/stats/completeness/{endDay?}','WeiboController@statsByCompleteness'); // 获得每个人的完成情况
    });
});






Route::post('/ranks/30', 'YouniController@getSomeRanks');


Auth::routes();

Route::prefix('api')->group(function () {
    Route::post('isAdmin','WeiboController@isAdmin');
    Route::get('weibo/getRankData','WeiboController@getRankData');
    Route::get('weibo/getRecent/all','WeiboController@getRecentAll')->middleware('admin');
});

//Route::get('/home', 'HomeController@index')->name('home');
