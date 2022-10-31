<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id()->autoIncrement(); 
            // relationship
            $table->unsignedBigInteger("user_id");    
            $table->string("location")->nullable();
            $table->longText("bio")->nullable();  
            $table->string("facebook_username")->nullable();  
            $table->string("instagram_username")->nullable();  
            $table->string("linkedin_username")->nullable();    
            $table->string("twitter_username")->nullable();    
            $table->timestamps();

            
            // foreign 
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
        Schema::dropIfExists('profiles');
    }
}