<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRantingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rantings', function (Blueprint $table) {
           $table->id()->autoIncrement(); 
           $table->integer("rate");  
        //    $table->string("review")->nullable();  
                 // relationship
        $table->unsignedBigInteger("user_id");   
        $table->unsignedBigInteger("rater_id");     
        $table->timestamps();

        // foreign
       $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); 
        $table->foreign('rater_id') ->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rantings');
    }
}