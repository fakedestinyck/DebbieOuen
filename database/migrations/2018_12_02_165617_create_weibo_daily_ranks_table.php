<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWeiboDailyRanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weibo_daily_ranks', function (Blueprint $table) {
            $table->increments('id');
            $table->date('date');
            $table->string('myTotalScore')->nullable();
            $table->unsignedSmallInteger('myTotalRank')->nullable();
            $table->string('firstName')->nullable();
            $table->string('firstScore')->nullable();
            $table->string('beforeName')->nullable();
            $table->string('beforeScore')->nullable();
            $table->string('afterName')->nullable();
            $table->string('afterScore')->nullable();
            $table->unsignedInteger('readingValue')->nullable();
            $table->string('readingScore')->nullable();
            $table->unsignedSmallInteger('readingRank')->nullable();
            $table->unsignedSmallInteger('tweetsNumber')->nullable();
            $table->string('readingFirstName')->nullable();
            $table->unsignedInteger('readingFirstValue')->nullable();
            $table->unsignedInteger('interactionValue')->nullable();
            $table->string('interactionScore')->nullable();
            $table->unsignedSmallInteger('interactionRank')->nullable();
            $table->unsignedInteger('interactionRepostCount')->nullable();
            $table->unsignedInteger('interactionCommentCount')->nullable();
            $table->unsignedInteger('interactionStoryCount')->nullable();
            $table->string('interactionFirstName')->nullable();
            $table->unsignedInteger('interactionFirstValue')->nullable();
            $table->unsignedInteger('impactValue')->nullable();
            $table->string('impactScore')->nullable();
            $table->unsignedSmallInteger('impactRank')->nullable();
            $table->unsignedInteger('impactSearchCount')->nullable();
            $table->unsignedInteger('impactMentionCount')->nullable();
            $table->string('impactFirstName')->nullable();
            $table->unsignedInteger('impactFirstValue')->nullable();
            $table->unsignedInteger('flowerValue')->nullable();
            $table->string('flowerScore')->nullable();
            $table->unsignedSmallInteger('flowerRank')->nullable();
            $table->unsignedInteger('flowerPersonCount')->nullable();
            $table->unsignedInteger('flowerTotalNumCount')->nullable();
            $table->string('flowerFirstName')->nullable();
            $table->unsignedInteger('flowerFirstValue')->nullable();
            $table->unsignedInteger('energyValue')->nullable();
            $table->integer('energyScore')->nullable();
            $table->unsignedSmallInteger('energyRank')->nullable();
            $table->unsignedInteger('energyActiveValue')->nullable();
            $table->string('energyActiveScore')->nullable();
            $table->unsignedSmallInteger('energyActiveRank')->nullable();
            $table->unsignedInteger('energyPassiveValue')->nullable();
            $table->string('energyPassiveScore')->nullable();
            $table->unsignedSmallInteger('energyPassiveRank')->nullable();
            $table->string('energyFirstName')->nullable();
            $table->unsignedInteger('energyFirstValue')->nullable();
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
        Schema::dropIfExists('weibo_daily_ranks');
    }
}
