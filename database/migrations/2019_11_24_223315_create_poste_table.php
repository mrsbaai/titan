<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePosteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poste', function (Blueprint $table) {
            $table->increments('id');
            $table->double('CODE_AGENCE')->nullable();
            $table->string('NOM_AGENCE')->nullable();
            $table->string('REGION')->nullable();
            $table->string('VILLECOMMUNE')->nullable();
            $table->string('ADRESSE')->nullable();
            $table->string('TEL_DCA')->nullable();
            $table->string('FAX')->nullable();
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
        Schema::dropIfExists('poste');
    }
}
