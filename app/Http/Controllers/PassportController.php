<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Controller;
use Validator;
use Hash;

class PassportController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api')->only('logout');
    }

    /**
    * Get a validator for an incoming registration request.
    *
    * @param  array  $data
    * @return \Illuminate\Contracts\Validation\Validator
    */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => 'string|alpha_dash|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|max:32|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{3,}$/',
        ]);
        //password_confirmation must be included in this string
    }

    /**
    * Create a new user instance after a valid registration.
    *
    * @param  array  $data
    * @return \App\User
    */

    protected function create(array $data)
    {
        $user = User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        return $user;
    }

    public function register(Request $request)
    {
        $validator = $this->validator($request->all());
        if ($validator->fails()) {
            return response()->error($validator->errors(), 422);
        }
        $user = $this->create($request->all());
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['username'] =  $user->username;
        $success['id'] = $user->id;
        return response()->success($success);
    }

    public function login(){
//        $h = date('H');

//        if ($h < 17) {
//            return response()->error('还没到时间哦~再等等吧',414);
//        }
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){
            $user = Auth::user();
            if(!$user){abort(404);}
            if ($user->id >= 22) {
                $h = date('H');
                if ($h < 9 || $h >= 21) {
                    return response()->error('还没到时间哦~再等等吧',414);
                }
            }
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            $success['username'] =  $user->username;
            $success['id'] = $user->id;
            $success['csfi'] = $user->can_select_fans_id;
            $success['fid'] = $user->fans_id;
            return response()->success($success);
        }
        else{
            return response()->error(config('error.406'),406);
        }
    }

    public function logout(){
        $user = auth('api')->user();
        $user->token()->revoke();
        return response()->success([
            'user_id' => $user->id,
            'message' => "you've logged out!",
        ]);
    }
}
