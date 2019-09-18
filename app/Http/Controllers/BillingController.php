<?php

namespace App\Http\Controllers;

use App\BillingSheet;
use Illuminate\Http\Request;

class BillingController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $created = BillingSheet::create($request->all());
        if ($created != null) {
            return response(array(
                "status" => 200,
                "data" => "提交成功！"
            ));
        }
        return response(array(
            "status" => 500,
            "data" => "提交失败！"
        ));
    }

    public function get() {
        $data = BillingSheet::orderBy('date')->get();
        return response(array(
            "status" => 200,
            "data" => $data
        ));
    }
}
