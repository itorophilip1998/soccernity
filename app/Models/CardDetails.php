<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CardDetails extends Model
{
    use HasFactory;
 
   protected $fillable = [
        'card_number',
        'expiry_month',
        'expiry_year',
        'cvv',
        "user_id" 
    ];  
  
  public function user()
  {
      return $this->belongsTo(User::class);
  }
  
}