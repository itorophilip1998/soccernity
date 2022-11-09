<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSocialMediaLinksRequest;
use App\Http\Requests\UpdateSocialMediaLinksRequest;
use App\Models\SocialMediaLinks;
use Illuminate\Support\Facades\Validator;

class SocialMediaLinksController extends Controller
{
    public function get()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $user = auth()->user();
            $SocialMediaLinks = SocialMediaLinks::where("user_id", $user->id)->get();
            return response()->json(["socialMediaLinks" => $SocialMediaLinks]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }


    public function update()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'linkedin' => 'required|string',
                'twitter' => 'required|string',
                'facebook' => 'required|string',
                'behance' => 'required|string',
                'instagram' => 'required|string',
                'dribbble' => 'required|string'
            ]);


            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $user = auth()->user();
            $SocialMediaLinks = SocialMediaLinks::where("user_id", $user->id)->first();

            $SocialMediaLinks->update(array_merge(
                $validator->validated(),
                ["user_id" => $user->id]
            ));

            return response()->json(["message" => "Successfully Updated SocialMediaLinks", "socialMediaLinks" => $SocialMediaLinks]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function delete()
    {

        try {
            $id = request()->item;

            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }

            $SocialMediaLinks = auth()->user()->social_media_links;

            if (!$SocialMediaLinks) {
                return response()->json(["message" => "$id was deleted already!"], 404);
            }

            $SocialMediaLinks?->update([
                $id => null
            ]);

            return response()->json(["message" => "Successfully Deleted SocialMediaLinks"]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
