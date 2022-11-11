<?php

namespace App\Http\Controllers;

use App\Models\Skills;
use App\Http\Requests\StoreSkillsRequest;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\UpdateSkillsRequest;

class SkillsController extends Controller
{
    public function add()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'skills' => 'required|array',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $user = auth()->user();
            $user->skills()->update([
                'user_id' => $user->id,
                'skills' => request()->skills,
            ]);
            $skills = Skills::where("user_id", $user->id)->first();

            return response()->json(["message" => "Successfully Updated skills", "skills" => $skills]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }


    public function get()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $user = auth()->user();
            $interestIn = Skills::where("user_id", $user->id)->get();
            return response()->json(["skills" => $interestIn]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
