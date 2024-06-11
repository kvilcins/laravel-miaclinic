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
        Schema::create('routers', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->string('slug')->unique()->comment('ЧПУ');
            $table->string('relation_model')->comment('Связанная модель');
            $table->unsignedInteger('relation_id')->comment('ID связанной модели');
            $table->timestamps();

            $table->unique(['relation_model', 'relation_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('routers');
    }
};
