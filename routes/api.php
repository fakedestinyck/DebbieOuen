<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('img', 'FcController@getPic');
Route::get('test/send/email', 'FcController@sendEmail');
Route::post('test/jz/send/email', 'SpecialController@sendEmail');
Route::post('test/jz/send/emailsmall', 'SpecialController@sendEmailSmall');

// 注册相关
Route::post('register', 'PassportController@register');
Route::post('register_by_invitation', 'PassportController@register_by_invitation');
Route::post('login', 'PassportController@login')->name('login');
Route::post('logout', 'PassportController@logout')->name('logout');

Route::prefix('fc')->middleware('auth:api')->group(function() {
    Route::post('/postinfo', 'FcController@postInfo');
    Route::get('/getfid', 'FcController@getRandomFid');
    Route::get('/getpostlogin', 'FcController@getPostLogin');
    Route::get('/getletterpaper', 'FcController@getLetterPaper');
});

Route::prefix('billing')->group(function () {
    Route::get('/',function (){
        return abort(404);
    });
    Route::get('/get', 'BillingController@get');
    Route::post('/store','BillingController@store');



});

Route::post('python/test','HomeController@pythontest');

Route::prefix('youni')->group(function () {
    Route::get('/',function (){
        return abort(404);
    });
    Route::get('/get', 'YouniController@get');
    Route::get('/getLatest', 'YouniController@getLatest');
    Route::get('/get/all', 'YouniController@getAll');
    Route::get('/get/{timestamp}', 'YouniController@getSpecific');
    Route::post('/getOthers', 'YouniController@getSomeRanks')->middleware(['addHeader']);

});

Route::prefix('doki')->group(function () {
    Route::get('/',function (){
        return abort(404);
    });
    Route::get('/get', 'DokiController@getHourData');
    Route::get('/getalldelta', 'DokiController@getAllDataDelta');
    Route::get('/get/forecast5', 'DokiController@forecastFiveMinutes');
//    Route::get('/getLatest', 'YouniController@getLatest');
//    Route::get('/get/all', 'YouniController@getAll');
//    Route::get('/get/{timestamp}', 'YouniController@getSpecific');
//    Route::post('/getOthers', 'YouniController@getSomeRanks')->middleware(['addHeader']);

});

Route::prefix('wyscw')->group(function () {
    Route::get('/',function (){
        return abort(404);
    });
//    Route::get('/get', 'YouniController@get');
    Route::get('/getLatest', 'WyscwController@getLatest');
    Route::get('/get/all', 'WyscwController@getAll');
//    Route::get('/get/{timestamp}', 'YouniController@getSpecific');
//    Route::post('/getOthers', 'YouniController@getSomeRanks')->middleware(['addHeader']);

});



//Route::group(['middleware' => ['web']], function(){
    Route::prefix('weibo')->group(function () {
        Route::get('/',function (){
            return abort(404);
        });
        Route::post('attendance','WeiboController@storeAttendanceData');
        Route::post('flower/send','WeiboController@sendFlower');
        Route::get('flower/total/{day}','WeiboController@getFlowerByDay');
        Route::get('rank/yesterday','WeiboController@getDailyRank');

        Route::get('comment','WeiboController@gotoComment');
    });
//});

Route::prefix('yzxgb')->group(function () {
    Route::get('/',function (){
        return abort(404);
    });
    Route::post('/punch', 'YzxgbController@punch');
    Route::get('/punchData/{day}', 'YzxgbController@getPunchDataByDay');
//    Route::get('/get/all', 'WyscwController@getAll');

});

Route::prefix('changba')->group(function () {
    Route::get('/',function (){
        return abort(404);
    });
    Route::post('/punch', 'ChangbaController@punch');
    Route::get('/punchData', 'ChangbaController@getPunchDataByDay');
//    Route::get('/get/all', 'WyscwController@getAll');

});

Route::get('ip',"WeiboController@showIp");

Route::prefix('block')->group(function () {
    Route::post('/add', 'BlacklistController@parseForm');
    Route::get('/get', 'BlacklistController@isBlacklisted');
//    Route::get('/get/all', 'BlacklistController@getAll');

});

Route::prefix('ban')->group(function () {
    Route::post('/add', 'BlacklistController@parseBan');
//    Route::get('/get/all', 'BlacklistController@getAll');

});

Route::get('test',function (){
   return view('test');
});


//Route::post('/saveCode', "CodesController@storeCode");
//
//Route::get('/submitCode', "CodesController@compile");
//
//Route::get('/readCode/{fileName}',"CodesController@show");
//
//Route::post('/runCode',"CodesController@run");
//
//Route::post('/uploadTarFile',"CodesController@upTar");$_SERVER['SERVER_NAME']
Route::post('/downloadFile',"WeiboController@downloadFile");
//Route::get('/submitCode', function(){
//    echo "start...";
//    echo "<br>";
//    echo "<br>";
//    $b = system('storage/test.sh',$code);
//    echo $b;
//    echo "<br><br>";
//    echo $code;
//});

Route::prefix('smurf')->group(function () {
    Route::get('/',function (){
        return abort(404);
    });
    Route::get('/get', 'SmurfController@get');
//    Route::get('/punchData/{day}', 'YzxgbController@getPunchDataByDay');
    Route::post('/user/return','SmurfController@userReturn');
    Route::post('/user/delete','SmurfController@userDelete');
});

Route::get('sp520', 'SpecialController@upload');

Route::prefix('misc')->group(function () {
    Route::get('/',function (){
        return abort(404);
    });

    Route::post('/lottery/store','LotteryController@store');
    Route::get('/lottery/getall','LotteryController@index');
});


// 腾讯云点播
Route::prefix('vod')->group(function () {
    Route::get('/',function (){
        return abort(404);
    });

    Route::post('/callback','VodController@callback');
});