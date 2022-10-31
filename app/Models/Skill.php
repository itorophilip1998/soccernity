<?php

namespace App\Models;

use App\Models\User;
use App\Models\SpecialEquipment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Skill extends Model
{
    use HasFactory;
      protected $fillable = [
     "user_id",
     "name",
     "rate", 
    ];
     public function user()
  {
      return $this->belongsTo(User::class);
  }
    public function specialEquipment()
    {
        return $this->hasMany(SpecialEquipment::class);
    }
}