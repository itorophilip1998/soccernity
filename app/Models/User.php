<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Save;
use App\Models\Inbox;
use App\Models\Photo;
// use Laravel\Sanctum\HasApiTokens;
use App\Models\Skill;
use App\Models\Booked;
use App\Models\Profile;
use App\Models\Ranting;
use App\Models\BankDetails;
use App\Models\CardDetails;
use App\Models\ProfileImages;
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
        'firstname',
        'lastname',
        'email',
        "password",
        "phone",
        "address",
        "role",
        "verify_token",
        "email_verified_at"
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
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
    public function cardDetails()
    {
        return $this->hasMany(CardDetails::class);
    }
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
    public function ratings()
    {
        return $this->hasMany(Ranting::class);
    }
    public function skills()
    {
        return $this->hasMany(Skill::class);
    }
    public function bankDetails()
    {
        return $this->hasMany(BankDetails::class);
    }
    public function gallery()
    {
        return $this->hasMany(ProfileImages::class);
    }
    public function profileImage()
    {
        return $this->hasOne(Photo::class);
    }
    public function savedUser()
    {
        return $this->hasMany(Save::class, "user_id");
    }
    public function inbox()
    {
        return $this->hasMany(Inbox::class);
    }
    public function booked()
    {
        return $this->hasMany(Booked::class);
    }
    public function isSaved()
    {
        return $this->hasOne(Save::class, "saved_user_id");
    }
}
