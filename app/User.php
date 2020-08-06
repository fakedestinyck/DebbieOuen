<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'password', 'role_id', 'email', 'qq', 'weibo', 'isQQVerified', 'isWeiboVerified', 'fans_id', 'can_select_fans_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function role(){

        return $this->belongsTo('App\Role');

    }

    public function isAdmin(){
        if ($this->role->name == "Owner" || $this->role->name == "管理员"){
            return true;
        }
        return false;
    }

    public function isBlocked(){
        if ($this->role->name == "BlockedUser"){
            return true;
        }
        return false;
    }
}
