<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('templates', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->string('name')->comment('Имя');
            $table->string('for')->index()->comment('Релейшн модель');
            $table->text('description')->comment('Описание');
            $table->mediumText('source')->nullable();
            $table->timestamps();

            $table->unique(['name', 'for']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('templates');
    }
};
