<?php

namespace App\Http\Controllers;

use Stripe\Stripe;
use Stripe\StripeClient;
use Stripe\PaymentIntent;
use App\Models\Transactions;
use PhpParser\Node\Stmt\TryCatch;
use App\Http\Requests\StoreTransactionsRequest;
use App\Http\Requests\UpdateTransactionsRequest;

class TransactionsController extends Controller
{

    public function paymentTypes()
    {
        try {
            $payment_types = ['ebook', 'audiocall', 'videocall', 'chat', 'topup'];
            return response()->json(["payment_types" => $payment_types]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function paymentInit()
    {

        try {
            Stripe::setApiKey(env('STRIPE_SK'));
            header('Content-Type: application/json');
            // retrieve JSON from POST body
            $jsonStr = file_get_contents('php://input');
            $jsonObj = json_decode($jsonStr);

            // Create a PaymentIntent with amount and currency
            $paymentIntent = PaymentIntent::create([
                'amount' => request()->amount,
                'currency' => 'usd',
                'automatic_payment_methods' => [
                    'enabled' => true,
                ],
            ]);

            $output = [
                'clientSecret' => $paymentIntent->client_secret,
            ];

            

            return response()->json($output);
        } catch (\Throwable $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}
