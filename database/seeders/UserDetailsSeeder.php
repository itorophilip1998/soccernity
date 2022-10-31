<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder; 

class UserDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
 
        User::create([
            'firstname' => "Tester",
            'lastname' => "Admin",
            'email' => "admin@gmail.com",
            'email_verified_at' => now(),
            'phone' => "09024195493",
            'role'=>"admin",
            'password' =>bcrypt("password123"),  
            'remember_token' => Str::random(10)
         ]);
         
           User::create([
            'firstname' => "Tester",
            'lastname' => "User",
            'email' => "user@gmail.com",
            'email_verified_at' => now(),
            'phone' => "09024195493",
            'role'=>"user",
            'password' =>bcrypt("password123"),  
            'remember_token' => Str::random(10)
         ])->profle()->create();
   
    }
 
   
}