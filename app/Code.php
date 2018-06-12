<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Code extends Model
{
    protected $fillable = [
        'name', 'ddl', 'type', 'description_file_id', 'compile_times'
    ];

    public function file(){

        return $this->belongsTo('App\File');

    }
}
