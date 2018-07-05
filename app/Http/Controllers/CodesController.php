<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CodesController extends Controller
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
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
        $content = $request->all();
        
        $myfile = fopen("storage/".$content["codeFileName"], "w") or die("Unable to open file!");
        $txt = $content["code"];
        fwrite($myfile, $txt);
        fclose($myfile);
        echo "success";
    }

    /**
     * Store codes in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeCode(Request $request)
    {
        $content = $request->all();
        $myfile = fopen("storage/".$content["projectName"].'/'.$content["codeFileName"], "w") or die("Unable to open file!");
        $txt = $content["code"];
        fwrite($myfile, $txt);
        fclose($myfile);
        echo "success";
    }

    /**
     * Display the specified resource.
     *
     * @param string $fileName
     * @return \Illuminate\Http\Response
     */
    public function show($fileName)
    {
        exec("if [ ! -d \"storage/".$fileName."/\" ];then mkdir -m 777 storage/".$fileName.
            ";echo \"not found\";else ls storage/".$fileName.";fi",$result);
        if (count($result) == 0) {
            // 说明已存在，但是没有文件
            echo "null";
        } else {
            if ($result[0] == "not found") {
                echo "not found";
            } else {
                $arr = array();
                foreach ($result as $code) {
                    $code = "storage/".$fileName.'/'.$code;
                    $file = fopen($code, "r") or die("Unable to open file!");
                    $arr[str_replace( "storage/".$fileName.'/',"",$code)] = fread($file,filesize($code));
                    fclose($file);
                }
                echo json_encode($arr);
            }
        }
    }

    /**
     * Compile codes.
     *
     * @return \Illuminate\Http\Response
     */
    public function compile()
    {
        if ($_SERVER['HTTP_HOST'] == "localhost") {
            system("clang++ storage/".$_GET['projectName']."/*.cpp -o storage/".$_GET['projectName']."/Main 2>&1");
        } else {
            system("sudo clang++ storage/".$_GET['projectName']."/*.cpp -o storage/".$_GET['projectName']."/Main 2>&1");
        }
    }

    /**
     * Run codes.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function run(Request $request)
    {
        $content = $request->all();
        $txt = $content["param"];
        if ($txt != "") {
            $myfile = fopen("storage/".$content["projectName"]."/user_input.txt", "w") or die("Unable to open file!");
            fwrite($myfile, $txt);
            fclose($myfile);
            system("storage/".$content['projectName']."/Main < storage/".$content['projectName']."/user_input.txt 2>&1");
        } else {
            system("storage/".$content['projectName']."/Main < storage/general_input.txt 2>&1");
        }
//        if ($_SERVER['HTTP_HOST'] == "localhost") {
//
//        } else {
//            system("sudo g++ storage/".$_GET['projectName']."/*.cpp -o storage/".$_GET['projectName']."/Main 2>&1");
//        }
    }

    /**
     * upload tared files.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function upTar(Request $request)
    {
        if (!empty($_FILES['file'])) {
            system("rm -f storage/tmpTAR/*");
            $root_dir = "storage/tmpTAR/";
            $fileNum = count($_FILES['file']['name']);
            $failed = false;
            for ($i = 0; $i < $fileNum; ++$i) {
                $filename = $_FILES['file']['name'][$i];
                $uploadFile = $root_dir.$filename;
                if (!move_uploaded_file($_FILES['file']['tmp_name'][$i], $uploadFile)) {
                    $failed = true;
                    break;
                }
            }
            if ($failed) {
                system("rm -f storage/tmpTAR/*");
                echo "Error: Upload files failed!";
            } else {
                exec("cd storage/tmpTAR; tar -cvf tmp.tar *");
                echo "success";
            }
        } else {
            echo "empty";
        }
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
}
