<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friends extends Model
{
    use HasFactory;

      protected $fillable = [
        'user_id',
        'friend_id',
        'message',
        'status'
    ];

 public function user()
  {
      return $this->belongsTo(User::class,"user_id");
  }

 public function users_friend()
  {
      return $this->belongsTo(User::class,"friend_id");
  }
}