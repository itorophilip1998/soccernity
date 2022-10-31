<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookeds', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id");
            $table->unsignedBigInteger("skill_id");
            $table->unsignedBigInteger("booked_user_id");
            $table->json("special_equipment_id");
            $table->boolean("is_rented")->default(false); 
            $table->date("booked_date_start"); 
            $table->date("booked_date_end"); 
            $table->time("booked_time_start"); 
            $table->time("booked_time_end"); 
            $table->enum("status",["completed","pending","upcoming","cancel"]); 
            $table->timestamps();

            $table->foreign('booked_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('skill_id')->references('id')->on('skills')->onDelete('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookeds');
    }
}