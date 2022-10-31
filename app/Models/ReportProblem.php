<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportProblem extends Model
{
    use HasFactory;
    protected $fillable = [
        "message",
        "user_id"
    ];
}


// we are looking for users that have a payment that is expired but have set the broker_registration to complete