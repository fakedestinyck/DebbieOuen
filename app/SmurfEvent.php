<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SmurfEvent extends Model
{
    protected $fillable = [
        'smurf_id', 'operation', 'ticket_id'
    ];

    public $timestamps = false;

}
