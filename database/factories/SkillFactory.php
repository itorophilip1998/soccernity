<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SkillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'user_id' => rand(1,100), 
            'name'   => $this->faker->jobTitle,
            'rate' => rand(10,1000), 
        ];
    }
}
