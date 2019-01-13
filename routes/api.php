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
    });
//});

Route::prefix('yzxgb')->group(function () {
    Route::get('/',function (){
        return abort(404);
    });
    Route::post('/punch', 'YzxgbController@punch');
//    Route::get('/get/all', 'WyscwController@getAll');

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
