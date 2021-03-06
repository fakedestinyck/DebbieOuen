<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedTinyInteger('platform');
            $table->unsignedInteger('pro_id');
            $table->string('title');
            $table->string('start_time');
            $table->string('end_time')->nullable();
            $table->double('amount');
            $table->unsignedInteger('order_num');
            $table->string('other_info');
            $table->double('target');
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
        Schema::dropIfExists('projects');
    }
}
