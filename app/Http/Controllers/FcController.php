<?php

namespace App\Http\Controllers;

use App\User;
use Qcloud;
use Illuminate\Http\Request;
use App\Helpers\sts;

use Imagick;
use ImagickDraw;
use ImagickPixel;
use Validator;

class FcController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'fans_id' => 'required|unique:users|integer|digits_between:1,4'
        ]);
        //password_confirmation must be included in this string
    }

    public function postInfo(Request $request) {
        // 先检查是否已经有了
        if (auth('api')->user()->fans_id != null) {

        }

        $fansid = $request->fans_id;


//        $validator = $this->validator($request->all());


//        if ($validator->fails()) {
//            $error_words = $validator->errors()->toArray()["fans_id"];
//            return response()->error(join("\n",$error_words), 422);
//        }

//        if (!is_numeric($fansid)) {
//            return response()->error('粉丝编号必须为数字', 422);
//        }
//        $fansidf = (float)$fansid;
        $fansidi = (int)$fansid;
//        if ($fansidf != $fansidi) {
//            return response()->error('粉丝编号必须为整数', 422);
//        }
//        if ($fansidi <= 0 || $fansidi > 9999) {
//            return response()->error('粉丝编号必须介于1-9999之间', 422);
//        }
        if (auth('api')->user()->can_select_fans_id != 1) {
            $this->validate($request, [
                'username' => 'required|string|unique:users|max:8',
            ]);
            $all_fids = User::all()->pluck('fans_id')->toArray();
            for ($i=1; $i<10000; ++$i) {
                if (!in_array($i, $all_fids)) {
                    auth('api')->user()['fans_id'] = $i;
                    break;
                }
            }
        } else {
            $this->validate($request, [
                'fans_id' => 'required|unique:users|integer|digits_between:1,4',
                'username' => 'required|string|unique:users|max:8',
            ]);
            auth('api')->user()['fans_id'] = $fansidi;
        }

        auth('api')->user()['username'] = $request->username;
        auth('api')->user()['can_select_fans_id'] = false;
        auth('api')->user()->save();

        return $this->getPic();
    }

    public function getRandomFid() {
        if (auth('api')->user()->fans_id != null) {
            return response()->success(['fid' => auth('api')->user()->fans_id]);
        }
        $all_fids = User::all()->pluck('fans_id')->toArray();
        for ($i=1; $i<10000; ++$i) {
            if (!in_array($i, $all_fids)) {
                auth('api')->user()['fans_id'] = $i;
                auth('api')->user()['can_select_fans_id'] = false;
                auth('api')->user()->save();
                return response()->success(['fid' => auth('api')->user()->fans_id]);
                break;
            }
        }
    }

    public function getPic() {
        $fid = auth('api')->user()->fans_id;
        $username = auth('api')->user()->username;
        $image = new Imagick('assets/test/o.png');
        $image->setImageFormat("jpeg");
        $image->setBackgroundColor('white');

        $draw = new ImagickDraw();
        $draw->setFont(config('app.font_celtic'));//设置中文字体 可以解决中文乱码问题
        $draw->setFillColor(new ImagickPixel('#65aadd'));
        $draw->setFontSize(53);
        $draw->setGravity(Imagick::GRAVITY_CENTER);
        $draw->annotation(385, 172, substr(strval($fid+10000),1,4));

        $draw2 = new ImagickDraw();
        $draw2->setFont(config('app.font_lezhen'));//设置中文字体 可以解决中文乱码问题
        $draw2->setFillColor(new ImagickPixel('#65aadd'));
        if (strlen($username) > 18) {
            $draw2->setTextKerning(-15);
        }
        $draw2->setFontSize(120);
        $draw2->setGravity(Imagick::GRAVITY_CENTER);
        $draw2->annotation(-130, -90, $username);

        $image->drawImage($draw);
        $image->drawImage($draw2);

        $blankPage = new Imagick();
        $blankPage->newPseudoImage($image->getImageWidth(), $image->getImageHeight(), "canvas:white");
        $blankPage->compositeImage($image, Imagick::COMPOSITE_ATOP, 0, 0);


        $blankPage->writeImage('storage/badge/'.$fid.'.jpg');

//        header ( 'Content-type: ' . strtolower ($image->getImageFormat ()) );
//        echo ($image->getImagesBlob());

        $secretId = config('app.cos_secret_id'); // 固定密钥
        $secretKey = config('app.cos_secret_key'); // 固定密钥
        $region = config('app.cos_region'); //设置一个默认的存储桶地域
        $cosClient = new Qcloud\Cos\Client(
            array(
                'region' => $region,
                'schema' => 'https', //协议头部，默认为http
                'credentials'=> array(
                    'secretId'  => $secretId ,
                    'secretKey' => $secretKey
                ),
                'po' => array(
                    'rules' => array(
                        array(
                            'fileid' => "badge".$fid.".jpg",
                            'rule' => "watermark/3/type/3/text/JiangshenFanclub"
                        )
                    )
                )
            )
        );

        ### 上传文件流
        try {
            $bucket = config('app.cos_bucket'); // 换成你的 bucket
            $key = "debbie/fc/badge/fid".$fid.".jpg";
            $srcPath = 'storage/badge/'.$fid.'.jpg';//本地文件绝对路径
            $file = fopen($srcPath, "rb");
            if ($file) {
                $result = $cosClient->putObject(
                    array(
                        'Bucket' => $bucket, //格式：BucketName-APPID
                        'Key' => $key,
                        'Body' => $file
//                        'Headers' => 'Pic-Operations:{"rules": [{"fileid": "4.jpg", "rule":"watermark/3/type/3/text/testtest"}]}'
                    )

                );
//                var_dump(array('Headers' => array(
//                    'Pic-Operations' => array(
//                        'rules' => array(
//                            array(
//                                'fileid' => "23333",
//                                'rule' => "watermark/3/type/3/text/testtest"
//                            )
//                        )
//                    )
//                )));
                return response()->success(['pic_url' => str_replace("fid","badge",$result['Location'])]);
            }
        } catch (\Exception $e) {
            return response()->error('内部错误', 500);
//            echo "$e\n";
        }
    }
}
