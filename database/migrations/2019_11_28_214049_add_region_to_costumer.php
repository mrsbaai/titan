<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddRegionToCostumer extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('costumers', function($table) {
            $table->string('region')->nullable()->default(null);
            $table->string('city')->nullable()->default(null);
            $table->string('poste')->nullable()->default(null);

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
            $table->dropColumn('region');
            $table->dropColumn('city'); 
            $table->dropColumn('poste');
        });
    }
}
