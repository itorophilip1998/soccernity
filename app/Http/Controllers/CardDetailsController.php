<?php

namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\CardDetails;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\BankDetailsController;
 
class CardDetailsController extends Controller
{
 
    public function add()
    { 
      try {      
            if(!auth()->check()){
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }  
                $validator = Validator::make(request()->all(), [
                'card_number' => 'required|string|min:6',
                'expiry_month' => 'required|string|min:2|max:2',
                'expiry_year' => 'required|string|min:2|max:2',
                'cvv' => 'required|string|min:3|max:3',
                'user_id' => 'required|integer' 
            ]);

      
            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
           

             $card = CardDetails::create(array_merge(
                    $validator->validated() 
                ));
            return response()->json(['message' => 'Card successfully created 👍','card'=>$card],200); 
         
        } catch (\Throwable $th) {
            // throw $th;
                   return response()->json([
           'message' => 'This error is from the backend, please contact the backend developer'],500);
        
        }
        
    }
 public function remove($id)
 {
      try {
            if(!auth()->check()){
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            } 
          $card=CardDetails::where("id",$id)
          ->where("user_id",auth()->user()["id"])
          ->delete();
          if(!$card)  return response()->json(['message' => 'Sorry this card does not belong to you or does not exist⚠️','card'=>$card],401); 

          return response()->json(['message' => 'Card successfully Deleted 👍','card'=>$card],200); 

      } catch (\Throwable $th) {
        //   throw $th;
          return response()->json([
           'message' => 'This error is from the backend, please contact the backend developer'],500);
        
      }
 }
 public function get($user_id)
 {
      try {
            if(!auth()->check()){
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }  
        $card=CardDetails::where("user_id",$user_id)->get();
        return response()->json(['message' => 'Card successfully Loaded 👍','card'=>$card],200); 
      } catch (\Throwable $th) {
        //   throw $th;
          return response()->json([
           'message' => 'This error is from the backend, please contact the backend developer'],500);
        
      }
 }
}