<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SmurfTicket extends Model
{
    protected $fillable = [
        'qqid', 'operation', 'count', 'timestamp'
    ];

    public $timestamps = false;
}
