<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Industries extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        "industry",
    ];

    protected $casts = [
        'industry' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
