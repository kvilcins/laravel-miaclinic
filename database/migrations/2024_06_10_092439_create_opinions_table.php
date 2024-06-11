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
        Schema::create('opinions', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->string('uuid')->comment('UUID');
            $table->string('fio')->nullable()->comment('ФИО');
            $table->string('label')->nullable()->comment('Метка');
            $table->text('review')->comment('Часть отзыва');
            $table->integer('rating')->default(5)->comment('Рейтинг');
            $table->string('photo')->nullable()->comment('Фото');
            $table->string('screen')->nullable()->comment('Скриншот отзыва');
            $table->timestamp('reviewed_at')->nullable()->comment('Дата отзыва');
            $table->text('url')->comment('Ссылка на отзыв');
            $table->boolean('published')->default(false)->comment('Опубликовано');
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
        Schema::dropIfExists('opinions');
    }
};
