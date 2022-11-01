<?php

namespace App\Models;

use App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InterestIn extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        "interest_in", 
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
