<?php

namespace App\Http\Controllers;

use App\Models\ReportProblem;
use App\Http\Requests\StoreReportProblemRequest;
use App\Http\Requests\UpdateReportProblemRequest;
use Illuminate\Support\Facades\Validator;


class ReportProblemController extends Controller
{

    public function reportPost()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'message' => 'required|string'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $reportProblem = ReportProblem::create([
                "user_id" => auth()->user()->id,
                "message" => request()->message
            ]);
            return response()->json(['message' => 'Report Problem successfully created 👍', 'reportProblem' => $reportProblem], 200);
        } catch (\Throwable $th) {
            throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }
}
