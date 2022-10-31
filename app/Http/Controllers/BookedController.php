<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Booked;
use Illuminate\Support\Facades\Validator;

class BookedController extends Controller
{

    public function add()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'skill_id' => 'required|integer',
                'special_equipment_id' => 'required|array',
                'is_rented' => 'required|boolean',
                'booked_date_start' => 'required|date',
                'booked_date_end' => 'required|date',
                'booked_time_start' => 'required|string',
                'booked_time_end' => 'required|string',
                'booked_user_id' => 'required|integer',
                'status' => 'required|in:completed,pending,upcoming,cancel'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }



            if (request()->booked_user_id == auth()->user()->id) {
                return response()->json(["message" => "Oops you cannot book your self!"], 401);
            }

            $data = Booked::create(array_merge(
                $validator->validated(),
                [
                    "user_id" => auth()->user()->id,
                    "special_equipment_id" => json_encode(request()->special_equipment_id)
                ]
            ));
            return response()->json(['message' => ' successfully Booked a user 👍', 'booked' => $data], 200);
        } catch (\Throwable $th) {
            // throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }
    public function cancel($booked_id)
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }


            $isMe = Booked::where(["id" => $booked_id, "user_id" => auth()->user()->id])->first();

            if (!$isMe) {
                return response()->json(["message" => "This booked details does not belongs to you!"], 401);
            }

            $isMe->update(
                ["status" => "cancel"]
            );
            return response()->json(['message' => ' successfully Canceled a booked user 👍', 'booked' => $isMe], 200);
        } catch (\Throwable $th) {
            // throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }
    public function get()
    {

        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }

            $isMe = Booked::where(["user_id" => auth()->user()->id])
                ->where("booked_user_id", "!=", auth()->user()->id)
                ->with("userbooked.profileImage", "userbooked.skills", "userbooked.ratings")
                ->get()->map(function ($data) {

                    $reviews = $data["userbooked"]["ratings"];
                    $isReviewed = null;
                    foreach ($reviews as $item) {
                        if ($data->status !== "completed" && $item->rater_id === auth()->user()->id) {
                            $isReviewed = true;
                        } else {
                            $isReviewed = false;
                        }
                    }
                    $data["isReviewed"] = $isReviewed;
                    return $data;
                });
            return response()->json([
                'message' => ' successfully loaded booked user 👍',
                'booked' => $isMe
            ], 200);
        } catch (\Throwable $th) {
            throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }
    public function completed($booked_id)
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }


            $isMe = Booked::where(["id" => $booked_id, "user_id" => auth()->user()->id])->first();

            if (!$isMe) {
                return response()->json(["message" => "This booked details does not belongs to you!"], 401);
            }

            $isMe->update(
                ["status" => "completed"]
            );
            return response()->json(['message' => ' successfully Completed a booked user 👍', 'booked' => $isMe], 200);
        } catch (\Throwable $th) {
            // throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }

    public function getBookedUsers()
    {
        // dev
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }

            $isMe = Booked::where(["booked_user_id" => auth()->user()->id])
                ->where("user_id", "!=", auth()->user()->id)
                ->with("user.profileImage", "skill")
                ->get();

            return response()->json([
                'message' => ' successfully loaded All Users Who Book You(Auth User) 👍',
                'booked' => $isMe
            ], 200);
        } catch (\Throwable $th) {
            // throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }
}
