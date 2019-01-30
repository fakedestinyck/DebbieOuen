<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Smurf extends Model
{
    protected $fillable = [
        'uap', 'item', 'last_operation', 'last_qqid'
    ];

    protected $hidden = [
        'created_at',
    ];
}
