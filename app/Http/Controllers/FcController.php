<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
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

    public function chooseFid(Request $request) {
        $fansid = $request->fans_id;

        $validator = $this->validator($request->all());
        if ($validator->fails()) {
            $error_words = $validator->errors()->toArray()["fans_id"];
            return response()->error(join("\n",$error_words), 422);
        }

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
            return response()->error('抱歉，你无法自定义粉丝编号', 414);
        }
        auth('api')->user()['fans_id'] = $fansidi;
        auth('api')->user()['can_select_fans_id'] = false;
        auth('api')->user()->save();
        return response()->success(['fid' => auth('api')->user()->fans_id]);
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
}
