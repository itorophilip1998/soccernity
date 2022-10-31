<?php

namespace App\Models;

use App\Models\Skill;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Booked extends Model
{
    use HasFactory;
    protected $fillable = [
        "user_id",
        "skill_id",
        "special_equipment_id",
        "is_rented",
        "booked_date_start",
        "booked_date_end",
        "booked_time_start",
        "booked_time_end",
        "status",
        "booked_user_id",
    ];
    protected $casts = [
        'booked_date_start' => 'date',
        'booked_date_end' => 'date',
        'booked_time_start' => 'datetime',
        'booked_time_end' => 'datetime',
        'special_equipment_id' => 'array',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function userbooked()
    {
        return $this->belongsTo(User::class, "booked_user_id");
    }
    public function skill()
    {
        return $this->belongsTo(Skill::class);
    }
    
}
