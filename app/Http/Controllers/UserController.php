<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
     public function updateUser($user_id)
    { 
      try {      
            if(!auth()->check()){
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }  
                $validator = Validator::make(request()->all(), [
                  'firstname' => 'required|string|between:2,100',
                  'lastname' => 'required|string|between:2,100',
                  'phone' => 'required|string|max:14|min:11' 
            ]); 
            
            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            } 
             $user = User::find($user_id);  
            $user->update(array_merge(
                    $validator->validated() 
                ));
            return response()->json(['message' => 'User successfully updated 👍','user'=>$user],200); 
        } catch (\Throwable $th) {
            // throw $th;
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'],500);
        }
    }
     public function getUser($user_id)
 {
      try {
            if(!auth()->check()){
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }  
        $user=User::where("id",$user_id)->first();
        if(!$user){
                return response()->json(['message' => 'User not found ⚠️'], 401); 
        }
        return response()->json(['message' => 'User successfully Loaded 👍','user'=>$user],200); 
      } catch (\Throwable $th) {
        //   throw $th;
          return response()->json([
           'message' => 'This error is from the backend, please contact the backend developer'],500);
        
      }
 }
}