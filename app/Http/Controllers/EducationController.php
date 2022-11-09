<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEducationRequest;
use App\Http\Requests\UpdateEducationRequest;
use App\Models\Education;
use Illuminate\Support\Facades\Validator;


class EducationController extends Controller
{
    public function add()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'school' => 'required|string',
                'degree' => 'required|string',
                'start_date' => 'required',
                'end_date' => 'required',
                'grade' => 'required|string'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $user = auth()->user();
            $Education = Education::create(array_merge(
                $validator->validated(),
                ["user_id" => $user->id]
            ));

            return response()->json(["message" => "Successfully Added Education", "education" => $Education]);
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
            $education = Education::where("user_id", $user->id)->get();
            return response()->json(["education" => $education]);
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
                'school' => 'required|string',
                'degree' => 'required|string',
                'start_date' => 'required',
                'end_date' => 'required',
                'grade' => 'required|string'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $user = auth()->user();
            $education = Education::find($id)->first();

            $education->update(array_merge(
                $validator->validated(),
                ["user_id" => $user->id]
            ));

            return response()->json(["message" => "Successfully Updated Education", "education" => $education]);
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

            $education = Education::find($id);

            if (!$education) {
                return response()->json(["message" => "Data was deleted already!"], 404);
            }
            $education->delete();
            return response()->json(["message" => "Successfully Deleted Education"]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
