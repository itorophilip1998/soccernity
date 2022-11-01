<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SocialMediaLinks extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        "linkedin",
        "twitter",
        "facebook",
        "behance",
        "instagram",
        "dribble"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
