<?php

namespace App\Http\Controllers;

use App\Models\Industries;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreIndustriesRequest;
use App\Http\Requests\UpdateIndustriesRequest;

class IndustriesController extends Controller
{
    public function add()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'industry' => 'required|array',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $user = auth()->user();
            $user->industries()->updateOrCreate(
                [
                    'user_id' => $user->id,
                ],
                [
                    'user_id' => $user->id,
                    'industry' => request()->industry,
                ]
            );
            $industries = Industries::where("user_id", $user->id)->first();

            return response()->json(["message" => "Successfully Updated industries", "industries" => $industries]);
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
            $industry = Industries::where("user_id", $user->id)->get();
            return response()->json(["industry" => $industry]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
