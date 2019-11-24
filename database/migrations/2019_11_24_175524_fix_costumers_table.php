<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FixCostumersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('costumers', function($table) {
            $table->dropColumn('email');
            $table->dropColumn('phone');
            $table->string('phone')->unique()->default("No_Phone");
            $table->string('email')->unique()->default("No_Email");
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
            $table->dropColumn('email');
            $table->dropColumn('phone');
            $table->string('phone')->nullable();
            $table->string('email')->unique();
        });
    }
}
