<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Save extends Model
{
    use HasFactory;
        protected $fillable = [
        'saved_user_id',
        'user_id'
        ];
public function user()
  {
      return $this->belongsTo(User::class,"saved_user_id");
  }
}