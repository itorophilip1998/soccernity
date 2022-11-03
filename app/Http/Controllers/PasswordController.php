<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Mail\SendMail;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class PasswordController extends Controller
{
  public function reset(Request $request)
  {
    try {
      $validator = Validator::make(request()->all(), [
        'email' => 'required|string|email|max:100',
        'password' => 'required|string|confirmed|min:6',
        'token' => "required|string|size:10"
      ]);
      if ($validator->fails()) {
        return response()->json($validator->errors()->toJson(), 400);
      }
      $user = User::where('email', $request->email)->first();

      if (!$user) {
        return response()->json(['error' => 'This user does not exist⚠️'], 401);
      }
      $user_reset = DB::table("password_resets")
        ->where("email", $user->email)
        ->where("token", $request->token);
      $checkTime = $user_reset->first();

      if (!$user_reset->first()) {
        return response()->json(['error' => 'Invalid token⚠️'], 401);
      }
      // $checkMinute=Carbon::now()->diffInMinutes($checkTime->created_at ?? 0);
      //  if($checkMinute >= 15){
      //     return response()->json(['error' => "This token expired ".  ($checkMinute - 15) ." minute ago⚠️"], 401);  
      // } 

      $user->update([
        'password' => bcrypt($request->password)
      ]);
      $user_reset->delete();
      return response()->json([
        'message' => "Password successfully updated! 👍, Please Login!",
      ], 200);
    } catch (\Throwable $th) {
      throw $th;
    }
  }


  public function sendReset(Request $request)
  {
    try {
      $validator = Validator::make(request()->all(), [
        'email' => 'required|string|email|max:100',
      ]);
      if ($validator->fails()) {
        return response()->json($validator->errors()->toJson(), 400);
      }
      $user = User::where('email', $request->email)->first();
      if (!$user) {
        return response()->json(['error' => 'This user does not exist⚠️'], 401);
      }
      $token = Str::random(10);
      $uri = env("FronEndUrl") . "/reset/?token=$token&email=$request->email";
      $mail_data = [
        "subject" => "Password Reset",
        "view" => "emails.reset",
        "main" => $user,
        "link" => "$uri",
        "token" => "$token"
      ];
      $user_reset = DB::table("password_resets")
        ->where("email", $user->email);

      if ($user_reset->first()) {
        $user_reset->update([
          "token" => $token,
        ]);
      } else {
        DB::table("password_resets")->insert([
          "email" => request()->email,
          "token" => $token,
          "created_at" => now()
        ]);
      }
      try {
        Mail::to(request()->email)->send(new SendMail($mail_data));
        return response()->json([
          'message' => "A Reset link has been sent to your account 👉 <$request->email>",
        ], 200);
      } catch (\Throwable $th) {
        return response()->json(['error' => 'Mail was not sent!  check email address and try again ⚠️'], 401);
      }
    } catch (\Throwable $th) {
      throw $th;
    }
  }
}
