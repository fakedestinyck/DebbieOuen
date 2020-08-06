<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddMoreToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('role_id')->index()->unsigned()->default(99);
            $table->string('email')->unique();
            $table->string('qq')->unique()->nullable();
            $table->string('weibo')->unique();
            $table->boolean('isQQVerified')->default(false);
            $table->string('isWeiboVerified')->default(false);
            $table->integer('fans_id')->unique()->nullable();
            $table->boolean('can_select_fans_id')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
