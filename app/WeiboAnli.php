<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WeiboAnli extends Model
{
    protected $fillable = [
        'has_day_num', 'day_num', 'is_anli'
    ];
}
