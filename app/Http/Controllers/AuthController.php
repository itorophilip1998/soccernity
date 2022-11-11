<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\SendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function signup(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|string|email|max:100|unique:users',
                'password' => 'required|string|min:6'
            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors()->toJson(), 400);
            }
            $verify_token = rand(1111, 9999);
            $user = User::create(array_merge(
                $validator->validated(),
                [
                    'password' => bcrypt($request->password),
                    "verify_token" => $verify_token,
                    "role" => "client"
                ]
            ));
            $user->profile()->create();
            $user->wallet()->create();
            $user->social_media_links()->create();
            $user->interest_in()->create();

            // $user->experience()->create();
            // $user->education()->create();


            $uri = URL::to("/api/verify/$verify_token/$request->email");
            $mail_data = [
                "subject" => "Welcome to Pickt",
                "view" => "emails.welcome",
                "main" => request()->all(),
                "link" => "$uri",
                "token" => "$verify_token"
            ];
            try {
                Mail::to(request()->email)->send(new SendMail($mail_data));
            } catch (\Throwable $th) {
                return response()->json(['message' => 'Mail was not sent!  check email address and try again ⚠️'], 401);
            }
            return response()->json([
                'message' => "User successfully registered 👍,  please verify your account 👉 <$request->email>",
                'user' => $user
            ], 200);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function signin(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required|string|min:6',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            if (!$token = auth()->attempt($validator->validated())) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }

            $verified = User::where("email", $request->email)
                ->where("email_verified_at", "<>", null)
                ->first();
            if ($verified->oath_id) {
                return response()->json(['message' => 'Previously loggedin with Oauth ⚠️'], 401);
            }
            if (!$verified) {
                return response()->json(['message' => 'Account not verified ⚠️'], 401);
            }
            return $this->createNewToken($token);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function signout()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            auth()->logout();
            return response()->json(['message' => 'User successfully signed out 👍']);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function refresh()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            return $this->createNewToken(Auth::refresh());
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
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
