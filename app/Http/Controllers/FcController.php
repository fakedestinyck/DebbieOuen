<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Mail;
use Qcloud;
use Illuminate\Http\Request;
use App\Helpers\sts;

use Imagick;
use ImagickDraw;
use ImagickPixel;
use Validator;

class FcController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth:api'])->only('getLetterPaper', 'getPostLogin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('fc.index');
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
        if (strlen($username) > 16) {
            $draw2->setFontSize(100);
        }
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
                $url = str_replace("fid","badge",$result['Location']);
                $url = str_replace("cos.ap-shanghai","image",$url);
                return response()->success(['pic_url' => $url]);
            }
        } catch (\Exception $e) {
            return response()->error('内部错误', 500);
//            echo "$e\n";
        }
    }

    public function sendEmail() {
//        $ups = '[{"qqid": 99396114, "pwd": "PNE9YaSiuk"}, {"qqid": 120674232, "pwd": "BVw3GcHRFE"}, {"qqid": 157489309, "pwd": "i4bPHgoS1F"}, {"qqid": 171790347, "pwd": "2U0tk8ZYRx"}, {"qqid": 259338979, "pwd": "QkLntTi3WS"}, {"qqid": 272291814, "pwd": "uSCRAdcPK9"}, {"qqid": 295276654, "pwd": "vBP5QnzSAU"}, {"qqid": 306322897, "pwd": "mHzu58a3go"}, {"qqid": 316140046, "pwd": "fkFj7qwv4W"}, {"qqid": 379936577, "pwd": "GIHkj8DrZu"}, {"qqid": 417509621, "pwd": "dRYmxgaLB6"}, {"qqid": 464665023, "pwd": "vG5xMrTLq4"}, {"qqid": 544727775, "pwd": "XBpAE4haHv"}, {"qqid": 827060350, "pwd": "cnrsKQR75H"}, {"qqid": 869765593, "pwd": "3eOz8vmqDa"}, {"qqid": 947275992, "pwd": "E4Fm7iqSLN"}, {"qqid": 983696926, "pwd": "nM1h0ySKHo"}, {"qqid": 1013985351, "pwd": "6TIASzxK9F"}, {"qqid": 1106634899, "pwd": "sgA6W7ydUT"}, {"qqid": 1160294714, "pwd": "yokf30QTDC"}, {"qqid": 1171922974, "pwd": "xsaM6ITJED"}, {"qqid": 1440891061, "pwd": "rI5Bto9abA"}, {"qqid": 1483559384, "pwd": "Anmec6W7pk"}, {"qqid": 1727651710, "pwd": "aA1JdhT4HZ"}, {"qqid": 2256893294, "pwd": "o0vVwHMClj"}, {"qqid": 2432076214, "pwd": "JM3pWAYeKz"}, {"qqid": 2433175751, "pwd": "U1pvA7mNVf"}, {"qqid": 2541872920, "pwd": "DNv9GXUiWd"}, {"qqid": 2581715602, "pwd": "mt2fKRgG6b"}]';
//        $ups = '[{"qqid": 1634164756, "pwd": "PNE9YaSiuk"}]';
//        $ups = '[{"qqid": 544727775, "pwd": "XBpAE4haHv"}, {"qqid": 827060350, "pwd": "cnrsKQR75H"}, {"qqid": 869765593, "pwd": "3eOz8vmqDa"}, {"qqid": 947275992, "pwd": "E4Fm7iqSLN"}, {"qqid": 983696926, "pwd": "nM1h0ySKHo"}, {"qqid": 1013985351, "pwd": "6TIASzxK9F"}, {"qqid": 1106634899, "pwd": "sgA6W7ydUT"}, {"qqid": 1160294714, "pwd": "yokf30QTDC"}, {"qqid": 1171922974, "pwd": "xsaM6ITJED"}, {"qqid": 1440891061, "pwd": "rI5Bto9abA"}, {"qqid": 1483559384, "pwd": "Anmec6W7pk"}, {"qqid": 1727651710, "pwd": "aA1JdhT4HZ"}, {"qqid": 2256893294, "pwd": "o0vVwHMClj"}, {"qqid": 2432076214, "pwd": "JM3pWAYeKz"}, {"qqid": 2433175751, "pwd": "U1pvA7mNVf"}, {"qqid": 2541872920, "pwd": "DNv9GXUiWd"}, {"qqid": 2581715602, "pwd": "mt2fKRgG6b"}]';

        $ups = '[{"qqid": 1634164756, "pwd": "fb8nvDZaJU"}]';
        // 454924089
//        $ups = '{}';
        $ups = json_decode($ups, true);
        foreach ($ups as $up) {
            $qqid = $up['qqid'];
            $args = [
                'qqid' => $qqid,
                'pwd' => $up['pwd']
            ];
            Mail::send('emails.register', ['args' => $args], function ($m) use ($qqid) {
                $m->to($qqid.'@qq.com')->subject('蒋申粉丝俱乐部铭牌激活通知');
            });
            echo $qqid;
        }

        return response()->success(['data' => 'success']);
    }

    public function getPostLogin() {
        $user = auth('api')->user();
        $success['username'] =  $user->username;
        $success['id'] = $user->id;
        $success['csfi'] = $user->can_select_fans_id;
        $success['fid'] = $user->fans_id;
        return response()->success($success);
    }

    public function getLetterPaper()
    {
        $with_badge = isset($_GET['b']) ? $_GET['b'] : 'false';
        if ($with_badge !== 'false') {
            $user = auth('api')->user();
            if ($user->fans_id == null) {
                return response()->error('请先去获取粉丝铭牌', 412);
            }
            $fid = $user->fans_id;

            if (file_exists('storage/letterpaper/'.$fid.'.png')) {
                return response()->success(
                    [
                        'type' => 'download',
                        'data' => 'https://lg-bus1kzl6-1251693677.file.myqcloud.com/debbie/fc/letterpaper/letterpaper'.$fid.'.png',
                        'exist' => true
                    ]
                );
            }

            $image = new Imagick('assets/images/letter_bg.png');
            $badge = new Imagick('storage/badge/'.$fid.'.jpg');
            $badge->scaleImage(400, 150.4, true);

            $image->setImageFormat("png");
            $image->setBackgroundColor('white');

            $image->compositeImage($badge,Imagick::COMPOSITE_OVER,790,30);
            $image->writeImage('storage/letterpaper/'.$fid.'.png');

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
                                'fileid' => "letterpaper".$fid.".png",
                                'rule' => "watermark/3/type/3/text/JiangshenFanclub"
                            )
                        )
                    )
                )
            );

            ### 上传文件流
            try {
                $bucket = config('app.cos_bucket'); // 换成你的 bucket
                $key = "debbie/fc/letterpaper/fid".$fid.".png";
                $srcPath = 'storage/letterpaper/'.$fid.'.png';//本地文件绝对路径
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
                    $url = str_replace("fid","letterpaper",$result['Location']);
                    return response()->success(
                        [
                            'type' => 'download',
                            'data' => 'https://'.$url
                        ]
                    );
                }
            } catch (\Exception $e) {
//                return response()->error('内部错误', 500);
                echo "$e\n";
            }

        } else {
            return response()->success(
                [
                    'type' => 'download',
                    'data' => 'https://lg-bus1kzl6-1251693677.file.myqcloud.com/debbie/web/resource/letter_bg.png'
                ]
            );
        }
    }
}
