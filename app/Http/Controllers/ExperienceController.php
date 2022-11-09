<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreExperienceRequest;
use App\Http\Requests\UpdateExperienceRequest;
use App\Models\Experience;
use Illuminate\Support\Facades\Validator;

class ExperienceController extends Controller
{
    public function add()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'role' => 'required|string',
                'company' => 'required|string',
                'start_date' => 'required|string',
                 'end_date' => 'required_if:is_present,null',
                'is_present' => 'required_if:end_date,null|boolean'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $user = auth()->user();
            $Experience = Experience::create(array_merge(
                $validator->validated(),
                ["user_id" => $user->id]
            ));

            return response()->json(["message" => "Successfully Added Experience", "experience" => $Experience]);
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
            $Experience = Experience::where("user_id", $user->id)->get();
            return response()->json(["experience" => $Experience]);
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
                'role' => 'required|string',
                'company' => 'required|string',
                'start_date' => 'required',
                'end_date' => 'required_if:is_present,null',
                'is_present' => 'required_if:end_date,null|boolean'
            ]);


            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $user = auth()->user();
            $Experience = Experience::find($id)->first();

            $Experience->update(array_merge(
                $validator->validated(),
                ["user_id" => $user->id]
            ));

            return response()->json(["message" => "Successfully Updated Experience", "Experience" => $Experience]);
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

            $Experience = Experience::find($id);

            if (!$Experience) {
                return response()->json(["message" => "Data was deleted already!"], 404);
            }
            $Experience->delete();
            return response()->json(["message" => "Successfully Deleted Experience"]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
