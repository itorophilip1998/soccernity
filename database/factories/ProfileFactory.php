<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [ 
        'user_id'=>rand(1,100),
        "photo" => $this->faker->image('public/storage/images', 640, 480, null, false)
        ];
    }
}
