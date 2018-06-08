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

Route::get('/saveCode', function () {
    $myfile = fopen("storage/".$_GET['codeFileName'], "w") or die("Unable to open file!");
    $txt = $_GET['code'];
    fwrite($myfile, $txt);
    fclose($myfile);
    echo "success";

});

Route::get('/submitCode', function () {
    system("sudo storage/compile.sh 2>&1");
});

//Route::get('/submitCode', function(){
//    echo "start...";
//    echo "<br>";
//    echo "<br>";
//    $b = system('storage/test.sh',$code);
//    echo $b;
//    echo "<br><br>";
//    echo $code;
//});
