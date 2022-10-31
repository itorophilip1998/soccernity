<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLocationsToProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('profiles', function (Blueprint $table) {
           $table->string("lat")->nullable();   
           $table->string("long")->nullable();   
           $table->string("city")->nullable();   

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('profiles', function (Blueprint $table) {
                     $table->dropColumn('lat');
                     $table->dropColumn('long');
                     $table->dropColumn('city');
            
        });
    }
}