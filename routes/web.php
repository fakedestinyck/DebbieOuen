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
    return view('welcome');
});

Route::get('/ranks/ranking', function () {
    return view('ranks/ranking');
});

Route::get('/weibo', function () {
    return view('weibo/index');
})->middleware('admin');

Route::post('/ranks/30', 'YouniController@getSomeRanks');


Auth::routes();

Route::prefix('api')->group(function () {
    Route::post('isAdmin','WeiboController@isAdmin');
    Route::get('weibo/getRankData','WeiboController@getRankData');
    Route::get('weibo/getRecent/all','WeiboController@getRecentAll')->middleware('admin');
});

//Route::get('/home', 'HomeController@index')->name('home');
