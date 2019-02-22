<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Modian extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'pro_id', 'user_id', 'money', 'pay_success_time'
    ];
}
