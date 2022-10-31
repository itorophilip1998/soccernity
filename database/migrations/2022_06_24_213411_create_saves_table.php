<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSavesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('saves', function (Blueprint $table) {
            $table->id()->autoIncrement();  
            $table->unsignedBigInteger("user_id");    
            $table->unsignedBigInteger("saved_user_id");    
            
            $table->timestamps();

                // foreign 
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('saved_user_id')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('saves');
    }
}