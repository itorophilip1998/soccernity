<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Experience extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        "role",
        "company",
        "start_date",
        "end_date",
        "is_present", 
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
