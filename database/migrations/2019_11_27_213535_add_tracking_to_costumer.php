<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTrackingToCostumer extends Migration
{
    
    public function up()
    {
        Schema::table('costumers', function($table) {
            $table->string('tracking')->default("-");
            $table->double('tprice')->default("449");

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
            $table->dropColumn('tracking');
            $table->dropColumn('tprice');

        });
    }
}
