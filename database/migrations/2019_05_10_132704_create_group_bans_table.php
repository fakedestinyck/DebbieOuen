<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGroupBansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group_bans', function (Blueprint $table) {
            $table->increments('id');
            $table->string('group_id');
            $table->string('qqid');
            $table->tinyInteger('action'); // 1:禁言     2:解禁
            $table->timestamp('starttime')->nullable();
            $table->timestamp('endtime')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('group_bans');
    }
}
