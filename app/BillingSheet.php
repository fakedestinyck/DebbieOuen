<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BillingSheet extends Model
{
    protected $fillable = [
        'date', 'itemName', 'itemPrice', 'moneyDL', 'moneyXL', 'moneyQ', 'created_by'
    ];
    protected $hidden = ['created_at', 'updated_at'];
}
