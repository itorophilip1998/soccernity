<?php

namespace App\Http\Controllers;

use UnzerSDK\Unzer;
use Psr\Http\Message\ResponseInterface;
use UnzerSDK\Resources\PaymentTypes\Card;
use GuzzleHttp\Exception\RequestException;

class PaymentController extends Controller
{

    public function makePayment()
    {
        try {

            // $client = new \GuzzleHttp\Client();
            // $request = $client->post('https://api.unzer.com/v1/types/card', [
            //     'headers' => [
            //         'Content-Type' => 'application/json',
            //         "Authorization" => "28a774d707b85b079dd05505c4e3cb7d1276654810444541e2d4786f188b1756"
            //     ],
            //     'body' => json_encode(request()->all())
            // ]);
            // $res = $request->getBody();
            // return $res;
            $unzer = new Unzer('28a774d707b85b079dd05505c4e3cb7d1276654810444541e2d4786f188b1756');
            $card = new Card('4444333322221111', '04/25', 'max.mustermann@unzer.com');
            $card->setCvc('123')->setCardHolder('Max Mustermann');
            $unzer->createPaymentType($card);
            return $unzer;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
