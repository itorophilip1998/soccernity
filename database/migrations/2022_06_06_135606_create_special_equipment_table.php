<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpecialEquipmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('special_equipment', function (Blueprint $table) { 
            $table->id()->autoIncrement(); 
            // relationship   
            $table->unsignedBigInteger("skill_id");   
            $table->unsignedBigInteger("user_id");   
           $table->string("name");  
            $table->timestamps();
            
                  // foreign
             $table->foreign('skill_id')->references('id')->on('skills')->onDelete('cascade'); 
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); 
      
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('special_equipment');
    }
}