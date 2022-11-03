<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\InterestIn;
use Illuminate\Support\Facades\Validator;


class InterestInController extends Controller
{

    public function add()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'interest_in' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $user = auth()->user();
            $interestIn = InterestIn::create([
                'user_id' => $user->id,
                'interest_in' => request()->interest_in,
            ]);

            return response()->json(["message" => "Successfully Added InterestIn", "InterestIn" => $interestIn]);
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
            $interestIn = InterestIn::where("user_id", $user->id)->get();
            return response()->json(["interestIn" => $interestIn]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }


    public function update($id)
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'interest_in' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $interestIn = InterestIn::find($id)->first();
            $interestIn->update([
                'interest_in' => request()->interest_in,
            ]);

            return response()->json(["message" => "Successfully Updated InterestIn", "InterestIn" => $interestIn]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function delete($id)
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'interest_in' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $interestIn = InterestIn::find($id)->first();

            if ($interestIn) {
                $interestIn->delete();
            }
            return response()->json(["message" => "Successfully Deleted InterestIn"]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
