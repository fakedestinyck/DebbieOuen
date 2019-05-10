<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GroupBan extends Model
{
    protected $fillable = [
        'group_id','qqid','action','starttime','endtime'
    ];

    public $timestamps = false;
}
