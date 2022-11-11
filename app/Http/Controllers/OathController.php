<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Validator;

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
            $verify_token = rand(1111, 9999);
            $user = User::updateOrCreate([
                'oath_id' => $data->id,
            ], [
                'email' => $data->email,
                'oath_id' => $data->id,
                'password' => bcrypt($data->id),
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
                'password' => bcrypt($data->id),
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

    protected function redirect($data)
    {
        try {
            return redirect(env("FronEndUrl") . "/callback?status=true&email=$data->email&token=$data->id");
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function signinoauth(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'token' => 'required|string',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $auth = [
                "email" => request()->email,
                "password" => request()->token
            ];
            if (!$token = auth()->attempt($auth)) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }

            $verified = User::where("email", $request->email)
                ->first();

            if (!$verified) {
                return response()->json(['message' => 'Account not verified ⚠️'], 401);
            }
            return $this->createNewToken($token);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    protected function createNewToken($token)
    {
        try {


            $id = auth()->user();
            $authUser = User::where("id", $id["id"])
                ->with("profile", "interest_in", "experience", "education", "social_media_links")
                ->first();

            return response()->json([
                'message' => 'User successfully signedIn 👍',
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => Auth::factory()->getTTL() * 60,
                'user' => $authUser
            ], 200);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
