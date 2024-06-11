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
        Schema::create('slides', function (Blueprint $table) {
            $table->increments('id')->comment('ID слайда');
            $table->string('type')->comment('Тип');
            $table->string('relation_model')->comment('Связанная модель');
            $table->unsignedInteger('relation_id')->comment('ID связанной модели');
            $table->text('content')->comment('Контент');
            $table->integer('position')->nullable()->comment('Позиция');
            $table->longText('data')->nullable()->comment('Данные');
            $table->timestamps();

            $table->index(['type', 'relation_model', 'relation_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('slides');
    }
};
