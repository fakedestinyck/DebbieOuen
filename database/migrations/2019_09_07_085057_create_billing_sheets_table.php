<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBillingSheetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('billing_sheets', function (Blueprint $table) {
            $table->increments('id');
            $table->string('date');
            $table->string('itemName');
            $table->float('itemPrice');
            $table->float('moneyDL');
            $table->float('moneyXL');
            $table->float('moneyQ');
            $table->string('created_by');
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
        Schema::dropIfExists('billing_sheets');
    }
}
