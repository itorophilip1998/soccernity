<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use App\Models\SpecialEquipment;
use Illuminate\Http\Request;

class Services
{
    public $name;
    public $img;
    public $type;
    public $description;
    function __construct($name, $img, $type, $description)
    {
        $this->name = $name;
        $this->img = $img;
        $this->type = $type;
        $this->description = $description;
    }
}

class ServicesController extends Controller
{
    public function serviceBySkills()
    {
        try {
            $skills = Skill::all();
            $newSkill = [];
            foreach ($skills as $item) {
                $newSkill[] =  $item["name"];
            }
            $newSkill = $newSkill ? array_unique($newSkill) : $newSkill;
            $services = [];
            foreach ($newSkill as $item) {
                $services[] =  new Services($item, "/img/image.png", "skills", "dev");
            }
            return response()->json(['message' => 'Successfully Loaded Services👍', 'services' => $services], 200);
        } catch (\Throwable $eth) {
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }
    public function serviceByEquipment()
    {
        try {

            $skills = SpecialEquipment::all();
            $newSkill = [];
            foreach ($skills as $item) {
                $newSkill[] =  $item["name"];
            }
            $newSkill = $newSkill ? array_unique($newSkill) : $newSkill;
            $services = [];
            foreach ($newSkill as $item) {
                $services[] =  new Services($item, "/img/image.png", "equipment", "dev");
            }
            return response()->json(['message' => 'Successfully Loaded Services👍', 'equipment' => $services], 200);
        } catch (\Throwable $eth) {
            return response()->json([
                'message' => 'This error is from the backend, please contact the backend developer'
            ], 500);
        }
    }
}
