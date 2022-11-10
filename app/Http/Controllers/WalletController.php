<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWalletRequest;
use App\Http\Requests\UpdateWalletRequest;
use App\Models\Wallet;
use Illuminate\Support\Facades\Validator;

class WalletController extends Controller
{

    public function balance()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }

            $wallet = Wallet::where("user_id", auth()->user()->id)->first();
            return response()->json(["message" => "Wallet Balance ", "wallet" => $wallet]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }



    public function topUp()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'balance' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $wallet = Wallet::where("user_id", auth()->user()->id)->first();
            if (request()->balance < 5) {
                return response()->json(["message" => "minimuim top up is 5 USD"]);
            }
            $wallet->update(
                [
                    'balance' =>  request()->balance + $wallet->balance,
                    'total_balance' =>  request()->balance + $wallet->balance
                ]
            );

            return response()->json(["message" => "Successfully topup", "wallet" => $wallet]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }



    public function withdraw()
    {
        try {
            if (!auth()->check()) {
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }
            $validator = Validator::make(request()->all(), [
                'balance' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $wallet = Wallet::where("user_id", auth()->user()->id)->first();

            if ($wallet->balance < request()->balance) {
                return response()->json(["message" => "Insufficient funds"]);
            }

            $wallet->update(
                [
                    'balance' => $wallet->balance - request()->balance,
                    'total_balance' =>  $wallet->balance - request()->balance
                ]
            );
            return response()->json(["message" => "Successfully topup", "wallet" => $wallet]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
