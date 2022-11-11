<?php

namespace App\Models;

use App\Models\Wallet;
use App\Models\Profile;
use App\Models\Education;
use App\Models\Industries;
use App\Models\InterestIn;
use App\Models\Transactions;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        "password",
        "role",
        "verify_token",
        "email_verified_at",
        "oath_type",
        "oath_id",
    ];


    protected $hidden = [
        'password',
        'remember_token',
        "verify_token"
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];




    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
    public function interest_in()
    {
        return $this->hasOne(InterestIn::class);
    }
    public function experience()
    {
        return $this->hasMany(Experience::class);
    }
    public function education()
    {
        return $this->hasMany(Education::class);
    }
    public function social_media_links()
    {
        return $this->hasOne(SocialMediaLinks::class);
    }
    public function wallet()
    {
        return $this->hasOne(Wallet::class);
    }
    public function skills()
    {
        return $this->hasOne(Skills::class);
    }
    public function industries()
    {
        return $this->hasOne(Industries::class);
    }
    public function transactions()
    {
        return $this->hasMany(Transactions::class);
    }
}
