<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Skill;
use App\Models\Profile;
use App\Models\SpecialEquipment;
use Illuminate\Http\Request;

class SearchQueryController extends Controller
{
    public function query()
    {
        try {
            $list = [
                "profile",
                "skills.specialEquipment",
                "isSaved",
                "profileImage",
                "ratings.user",
                "gallery"
            ];

            $skills = $this->searchBySkills(request()["skill"]);
            $locations = $this->searchByLocation(request()["location"]);
            $equipments = $this->searchByEquipment(request()["equipment"]);
            // $date = $this->searchByDate(request()["date"]);

            $skill = request()->skill;
            $equipment = request()->equipment;
            $location = request()->location;
            $user = null;

            // return everything if skill and eequipment is NULL
            if (!$skill && !$equipment) {
                $user = User::with($list)->get();
                return $this->getAll($user);
            }

            // check if there is skills
            else if ($skill) {
                $user = User::whereIn("id", $skills);
                if ($location) {
                    $newUser = $user->whereIn("id", $locations)->with($list)->get();
                    return $this->getAll($newUser);
                }
                $newUser =   $user->with($list)->get();
                return $this->getAll($newUser);
            }

            // check if there is equipment 
            else if ($equipment) {
                $user = User::whereIn("id", $equipments);
                if ($location) {
                    $newUser = $user->whereIn("id", $locations)->with($list)->get();
                    return $this->getAll($newUser);
                }
                $newUser =  $user->with($list)->get();
                return $this->getAll($newUser);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }


    public function getAll($user)
    {
        $user->map(
            function ($data) {
                $count = 0;
                $sum = 0;
                $index = 0;
                foreach ($data["ratings"] as $item) {
                    $count += $item["rate"];
                    $sum += $item["rate"] * ($index += 1);
                }
                if ($count != 0) {
                    $star = $sum / $count;
                    $rate = strlen($star) > 3 ? substr($star, 0, 3)  : $star;
                    $data['rate_star'] = floatval($rate);
                } else {
                    $data['rate_star'] = 0;
                }

                return $data;
            }
        );

        return  response()->json([
            "message" => "Searched data loaded!",
            "length" => count($user),
            "data" => $user
        ], 200);
    }


    //search... by profile
    function searchByLocation($location)
    {

        $profile = Profile::where("city", "$location")
            ->get();
        if (count($profile) <= 0)  return [];
        $profile_user_id = [];
        foreach ($profile as $item) {
            $profile_user_id[] = $item["user_id"];
        }
        return $profile_user_id;
    }

    // search by Skills
    function searchBySkills($skill)
    {
        $skills = Skill::where("name", $skill)
            ->get();
        if (count($skills) <= 0)  return [];
        $skills_user_id = [];
        foreach ($skills as $item) {
            $skills_user_id[] = $item["user_id"];
        }
        return $skills_user_id;
    }
    // search by equipment
    function searchByEquipment($equipment)
    {
        $skills = SpecialEquipment::where("name", $equipment)
            ->get();
        if (count($skills) <= 0)  return [];
        $skills_user_id = [];
        foreach ($skills as $item) {
            $skills_user_id[] = $item["user_id"];
        }
        return $skills_user_id;
    }

    // search by Date
    function searchByDate($date)
    {
        $skills = Skill::where("date", "LIKE", "%$date%")
            ->get();
        if (count($skills) <= 0)  return [];
        $skills_user_id = [];
        foreach ($skills as $item) {
            $skills_user_id[] = $item["user_id"];
        }
        return $skills_user_id;
    }


    public function getUserById($user_id)
    {

        $user = User::where("id", $user_id)
            ->with(
                "profile",
                "skills.specialEquipment",
                "isSaved",
                "profileImage",
                "ratings.user",
                "gallery",
                "ratings"
            )
            ->get();

        $user->map(
            function ($data) {
                $count = 0;
                $sum = 0;
                $index = 0;
                foreach ($data["ratings"] as $item) {
                    $count += $item["rate"];
                    $sum += $item["rate"] * ($index += 1);
                }
                if ($count != 0) {
                    $star = $sum / $count;
                    $rate = strlen($star) > 3 ? substr($star, 0, 3)  : $star;
                    $data['rate_star'] = floatval($rate);
                } else {
                    $data['rate_star'] = 0;
                }
                
                return $data;
            }
        );

        return  response()->json([
            "message" => "Searched data loaded!",
            "length" => count($user),
            "data" => $user[0]
        ], 200);
    }
}
