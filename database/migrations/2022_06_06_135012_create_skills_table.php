<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSkillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('skills', function (Blueprint $table) { 
             $table->id()->autoIncrement(); 
            // relationship  
            $table->unsignedBigInteger("user_id");
           $table->string("name"); 
            $table->integer("rate");    
            $table->timestamps();
            
            //  foreign   
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
        Schema::dropIfExists('skills');
    }
}