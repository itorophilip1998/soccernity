<?php

namespace App\Models;

use App\Models\User;
use App\Models\Skill;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SpecialEquipment extends Model
{
    use HasFactory;
      protected $fillable = [
     "user_id",
     "skill_id",
     "name",
     "rate",
    ];
     public function user()
  {
      return $this->belongsTo(User::class);
  }
       public function skills()
  {
      return $this->belongsTo(Skill::class);
  }
}