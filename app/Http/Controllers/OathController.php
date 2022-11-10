<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class OathController extends Controller
{
    function linkedinRedirect()
    {
        try {
            return Socialite::driver('linkedin')->redirect();
        } catch (\Throwable $th) {
            return redirect(env("FronEndUrl") . "/callback?status=false");
        }
    }

    function linkedinCallback()
    {
        try {
            $data = Socialite::driver('linkedin')->user();
            // dd($data);
            $verify_token = rand(1111, 9999);
            $user = User::updateOrCreate([
                'oath_id' => $data->id,
            ], [
                'email' => $data->email,
                'oath_id' => $data->id,
                'password' => $data->id,
                'verify_token' => $verify_token,
                'role' => "client",
            ]);
            $user->profile([
                "profile_picture" => $data->picture,
                "fullname" => $data->name
            ])->create();
            $user->wallet()->create();
            $user->social_media_links()->create();
            $user->interest_in()->create();
            return $this->redirect($data);
        } catch (\Throwable $th) {
            return redirect(env("FronEndUrl") . "/callback?status=false");
        }
    }



    function googleRedirect()
    {
        try {
            return Socialite::driver('google')->redirect();
        } catch (\Throwable $th) {
            return redirect(env("FronEndUrl") . "/callback?status=false");
        }
    }

    function googleCallback()
    {
        try {
            $data = Socialite::driver('google')->user();

            $verify_token = rand(1111, 9999);
            $user = User::updateOrCreate([
                'oath_id' => $data->id,
            ], [
                'email' => $data->email,
                'oath_id' => $data->id,
                'password' => $data->id,
                'verify_token' => $verify_token,
                'role' => "client",
            ]);
            $user->profile([
                "profile_picture" => $data->picture,
                "fullname" => $data->name
            ])->create();
            $user->wallet()->create();
            $user->social_media_links()->create();
            $user->interest_in()->create();
            return $this->redirect($data);
        } catch (\Throwable $th) {
            return redirect(env("FronEndUrl") . "/callback?status=false");
        }
    }

    protected function redirect($user)
    {
        try {
            return redirect(env("FronEndUrl") . "/callback?status=true&email=$user->email&token=$user->password");
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
