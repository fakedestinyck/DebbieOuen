<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSmurvesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('smurves', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uap'); // uap => username+password
            $table->string('item'); // weibo or qq
            $table->string('last_operation')->nullable(); // get or return or null
            $table->string('last_qqid')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('smurves');
    }
}
