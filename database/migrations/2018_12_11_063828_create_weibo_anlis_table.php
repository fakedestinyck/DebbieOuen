<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWeiboAnlisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weibo_anlis', function (Blueprint $table) {
            $table->increments('id');
            $table->string('username');
            $table->string('user_id');
            $table->timestamp('tweets_time')->default('2000-01-01 00:00:01');
            $table->text('tags')->nullable();
            $table->text('text');
            $table->boolean('has_day_num');
            $table->smallInteger('day_num')->nullable();
            $table->boolean('is_anli');
            $table->integer('repost');
            $table->integer('comment');
            $table->integer('like');
            $table->string('tweets_id');
            $table->timestamp('user_reg_time')->default('2000-01-01 00:00:01');
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
        Schema::dropIfExists('weibo_anlis');
    }
}
