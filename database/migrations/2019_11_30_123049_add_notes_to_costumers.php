<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNotesToCostumers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('costumers', function($table) {
            $table->double('amount')->nullable()->default(1);
            $table->string('product')->nullable()->default("Titan Gel");
            $table->string('notes')->nullable()->default(null);
            $table->string('shipping_price')->nullable()->default("0");
            $table->string('unit_price')->nullable()->default("0");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('costumers', function($table) {
            $table->dropColumn('amount');
            $table->dropColumn('product'); 
            $table->dropColumn('notes');
            $table->dropColumn('shipping_price');
            $table->dropColumn('unit_price'); 
        });
    }
}
