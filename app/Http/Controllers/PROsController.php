<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PROsController extends Controller
{
    public $relations = [
        "profile",
        "interest_in",
        "experience",
        "education",
        "social_media_links",
        "wallet",
        "skills",
        "industries"
    ];

    public function getPro()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $user = auth()->user();
            $user = User::with($this->relations)
                ->get();
            return response()->json(["pro_profile" => $user]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function proByEmail($email)
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $user = User::where("email", $email)
                ->with($this->relations)
                ->first();
            if (!$user) {
                return response()->json(['message' => 'Pro`s Profile not found'], 404);
            }
            return response()->json(["pro_profile" => $user]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
