<?php

namespace App\Http\Controllers;

use App\Models\BankDetails;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreBankDetailsRequest;
use App\Http\Requests\UpdateBankDetailsRequest; 

class BankDetailsController extends Controller
{
    
    public function add()
    { 
      try {      
            if(!auth()->check()){
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }  
                $validator = Validator::make(request()->all(), [
                'account_name' => 'required|string',
                'account_number' => 'required|string',
                'bank' => 'required|string', 
                'user_id' => 'required|integer' 
            ]);

      
            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
           

             $bank = BankDetails::create(array_merge(
                    $validator->validated() 
                ));
            return response()->json(['message' => 'Bank successfully created 👍','bank'=>$bank],200); 
         
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
          $bank=BankDetails::where("id",$id)
          ->where("user_id",auth()->user()["id"])
          ->delete();
          if(!$bank)  return response()->json(['message' => 'Sorry this bank  does not belong to you or does not exist⚠️','bank'=>$bank],401); 
          
          return response()->json(['message' => 'Bank successfully Deleted 👍','bank'=>$bank],200); 

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
        $bank=BankDetails::where("user_id",$user_id)->get();
        return response()->json(['message' => 'Bank successfully Loaded 👍','bank'=>$bank],200); 
      } catch (\Throwable $th) {
        //   throw $th;
          return response()->json([
           'message' => 'This error is from the backend, please contact the backend developer'],500);
        
      }
 }
}