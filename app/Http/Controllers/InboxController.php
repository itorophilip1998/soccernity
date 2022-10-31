<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Inbox;
use App\Http\Requests\StoreInboxRequest;
use App\Http\Requests\UpdateInboxRequest;
use Illuminate\Support\Facades\Validator;

class InboxController extends Controller
{
   
    
    public function add()
    { 
      try {
            if(!auth()->check()){
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }  
                $validator = Validator::make(request()->all(), [
                'user_id' => 'required|integer',
                'friend_id' => 'required|integer',
                'message' => 'required|string'
            ]); 
      
            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            } 

             if(request()->rater_id===request()->user_id){
            return response()->json(['message' => "Please you cannot inbox your self ⚠️"],401); 
                
            }
             $Inbox = Inbox::create(array_merge(
                    $validator->validated(),
                  ["status"=>"sent"]    
                ));
            return response()->json(['message' => 'Inbox successfully created 👍','Inbox'=>$Inbox],200); 
         
        } catch (\Throwable $th) {
            // throw $th;
              return response()->json([
           'message' => 'This error is from the backend, please contact the backend developer'],500);
        
        }
        
    }

    
 public function get($friend_id)
 {
      try {
            if(!auth()->check()){
                return response()->json(['message' => 'Unauthorized ⚠️'], 401);
            }  
 
         $Inbox = auth()->user()->inbox()->where(function($q) use($friend_id)
        {   $q->where('user_id',auth()->user()["id"]);
            $q->where('friend_id',$friend_id);
        })->orWhere(function($q) use($friend_id)
        {   $q->where('friend_id',auth()->user()["id"]);
            $q->where('user_id',$friend_id);
        })->with('user.profile','users_friend.profileImage')->get();  
 
        return response()->json(['message' => 'Inbox successfully Loaded 👍','Inbox'=>$Inbox],200);
     
      } catch (\Throwable $th) {
        //   throw $th;
          return response()->json([
           'message' => 'This error is from the backend, please contact the backend developer'],500);
        
      }
 }


}