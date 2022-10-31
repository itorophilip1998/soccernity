<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Support\Facades\Validator;
// use App\Http\Requests\StoreProfileRequest;
// use App\Http\Requests\UpdateProfileRequest;

class ProfileController extends Controller
{
    public function updateProfile($user_id)
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'user_id' => 'required|string',
                'location' => 'nullable|string',
                'bio' => 'nullable|string|max:200',
                "facebook_username" => 'nullable|string',
                "instagram_username" => 'nullable|string',
                "linkedin_username" => 'nullable|string',
                "twitter_username" => 'nullable|string',
                "socialmedia_handle" => 'nullable|string',
                "lat" => 'nullable|string',
                "long" => 'nullable|string',
                "city" => 'nullable|string',
            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $profile = Profile::where("user_id", $user_id);
            $profile->update(array_merge(
                $validator->validated()
            ));
            $newProfile = Profile::where("user_id", $user_id)->first();
            return response()->json(['message' => 'Profile successfully updated 👍', 'profile' => $newProfile], 200);
        } catch (\Throwable $th) {
            // throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }

    public function getProfile($user_id)
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            
            $profile = Profile::where("user_id", $user_id)->first();
            if (!$profile) {
                return response()->json(['message' => 'User not found ⚠️'], 401);
            }
            return response()->json(['message' => 'Profile successfully Loaded 👍', 'profile' => $profile], 200);
        } catch (\Throwable $th) {
            //   throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }
}
