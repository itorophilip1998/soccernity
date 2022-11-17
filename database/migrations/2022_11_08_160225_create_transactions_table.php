<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id");
            $table->string("ref_no");
            $table->float("amount")->default(0);
            $table->enums("status", ['debit', 'credit']);
            $table->string("provider");
            $table->string("transaction_type");
            $table->string("provider_status");
            $table->enums("payment_type", ['ebook', 'audiocall', 'videocall', 'chat', 'topup']);
            $table->json('transaction_json');
            $table->string('device');
            $table->timestamps();
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
        Schema::dropIfExists('transactions');
    }
}
