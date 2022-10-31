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

            if (!$verified) {
                return response()->json(['message' => 'Account not verified ⚠️'], 401);
            }
            return $this->createNewToken($token);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }

    public function signup(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                'firstname' => 'required|string|between:2,100',
                'lastname' => 'required|string|between:2,100',
                'email' => 'required|string|email|max:100|unique:users',
                'password' => 'required|string|confirmed|min:6',
                'phone' => 'required|string|max:14|min:5',
                'role' => 'required|string|in:user'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors()->toJson(), 400);
            }
            $verify_token = rand(1111, 9999);
            User::create(array_merge(
                $validator->validated(),
                [
                    'password' => bcrypt($request->password),
                    "verify_token" => $verify_token
                ]
            ))->profile()->create();
            $uri = URL::to("/api/verify/$verify_token/$request->email");
            $mail_data = [
                "subject" => "Welcome to Freelancer",
                "view" => "emails.welcome",
                "main" => request()->all(),
                "link" => "$uri",
                "token" => "$verify_token"
            ];
            try {
                Mail::to(request()->email)->send(new SendMail($mail_data));
            } catch (\Throwable $th) {
                //    throw $th; 
                return response()->json(['message' => 'Mail was not sent!  check email address and try again ⚠️'], 401);
            }
            return response()->json([
                'message' => "User successfully registered 👍,  please verify your account 👉 <$request->email>",
            ], 200);
        } catch (\Throwable $th) {
            //    throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
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
            //throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
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
            //throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }

    public function userProfile()
    {
        try {

            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $id = auth()->user();
            $authUser = User::where("id", $id["id"])
                ->with("profile", "profileImage", "gallery", "ratings.user", "skills.specialEquipment", "bankDetails", "cardDetails")
                ->get();

            $authUser->map(
                function ($data) {
                    $count = 0;
                    $sum = 0;
                    $index = 0;
                    foreach ($data["ratings"] as $item) {
                        $count += $item["rate"];
                        $sum += $item["rate"] * ($index += 1);
                    }
                    if ($count != 0) {
                        $star = $sum / $count;
                        $rate = strlen($star) > 3 ? substr($star, 0, 3)  : $star;
                        $data['rate_star'] = floatval($rate);
                    } else {
                        $data['rate_star'] = 0;
                    }

                    return $data;
                }
            );
            return response()->json(["user" => $authUser[0]]);
        } catch (\Throwable $th) {
            //  throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }

    protected function createNewToken($token)
    {
        try {
            $id = auth()->user();
            $authUser = User::where("id", $id["id"])
                ->with("profile", "profileImage", "gallery", "ratings", "skills.specialEquipment", "bankDetails", "cardDetails")
                ->first();

            return response()->json([
                'message' => 'User successfully signedIn 👍',
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => Auth::factory()->getTTL() * 60,
                'user' => $authUser
            ]);
        } catch (\Throwable $th) {
            //    throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }
}
