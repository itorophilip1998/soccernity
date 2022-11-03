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
        "fullname",
        "gender",
        "address",
        "profile_picture",
        "country",
        "website_link",
        "bio" 
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
