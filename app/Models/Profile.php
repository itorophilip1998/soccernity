<?php

namespace App\Models;

use App\Models\User; 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profile extends Model
{
    use HasFactory;
        protected $fillable = [
        'user_id',  
        "location",
        "bio", 
        "facebook_username", 
        "instagram_username", 
        "linkedin_username", 
        "twitter_username",
        "socialmedia_handle",
        "lat",
        "long",
        "city"

    ];

public function user()
  {
      return $this->belongsTo(User::class);
  } 
    
}