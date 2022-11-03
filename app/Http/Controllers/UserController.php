<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function updateUser()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'fullname' => 'nullable|string|between:2,100',
                'gender' => 'nullable|string',
                'country' => 'nullable|string',
                'profile_picture' => 'nullable|string',
                'website_link' => 'nullable|string',
                'bio' => 'nullable|string'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $user = auth()->user();
            $profile_picture = null;

            if (request()->profile_picture) {
                $base64_str = substr(request()->profile_picture, strpos(request()->profile_picture, ",") + 1);
                $file = base64_decode($base64_str);
                $photo = $user->email . '.png';
                $s3Url = '/gallery/' . $photo;
                Storage::disk('s3')->put($s3Url, $file);
                $profile_picture = "https://freelacner-services.s3.amazonaws.com/gallery/" . $photo;
            }

            $user->profile()->update(array_merge(
                $validator->validated(),
                ["profile_picture" => $profile_picture]
            ));
            $userProfile = Profile::where("user_id", $user->id)->first();
            return response()->json(['message' => 'User successfully updated 👍', 'user' => $userProfile], 200);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function getUser($user_id)
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $user = User::where("id", $user_id)
                ->with("profile", "interest_in", "experience", "education", "social_media_links")
                ->first();
            if (!$user) {
                return response()->json(['message' => 'User not found ⚠️'], 401);
            }
            return response()->json(['message' => 'User successfully Loaded 👍', 'user' => $user], 200);
        } catch (\Throwable $th) {
            throw $th;
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
                ->with("profile", "interest_in", "experience", "education", "social_media_links")
                ->first();
            return response()->json(["user" => $authUser]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }


    // public function changeEmail()
    // {
    //     try {
    //         if (!auth()->check()) {
    //             return response()->json(['message' => 'Unauthorized ⚠️'], 401);
    //         }
    //         $validator = Validator::make(request()->all(), [
    //             'oldEmail' => 'required|email',
    //             'newEmail' => 'required|email|unique:user',
    //         ]);

    //         if ($validator->fails()) {
    //             return response()->json($validator->errors(), 422);
    //         }
    //         if (!$authUser) {
    //             return response()->json(['message' => 'Old Email Not found ⚠️'], 404);
    //         }


    //         $user = auth()->user();
    //         $authUser = User::find($user->id)->first();

    //         $authUser->update([
    //             "email" => request()->newEmail
    //         ]);
    //         return response()->json(["message" => "Email Updated Successfully", "user" => $authUser]);
    //     } catch (\Throwable $th) {
    //         throw $th;
    //     }
    // }
}
