<?php

namespace App\Models;

use App\Models\User;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class InterestIn extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        "interest_in",
    ];

    protected $casts = [
        'interest_in' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
