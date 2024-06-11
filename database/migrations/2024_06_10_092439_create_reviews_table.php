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
        Schema::create('reviews', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->unsignedInteger('user_id')->index('reviews_user_id_foreign')->comment('ID пользователя');
            $table->integer('rating')->default(0)->comment('Оценка');
            $table->text('text')->comment('Отзыв');
            $table->unsignedInteger('admin_id')->nullable()->comment('ID админа оставившего отзыв');
            $table->text('reply')->nullable()->comment('Ответ на отзыв');
            $table->boolean('published')->default(false)->comment('Опубликован?');
            $table->boolean('spam')->default(false)->comment('Спам?');
            $table->string('relation_model')->nullable()->comment('Связанная модель');
            $table->unsignedInteger('relation_id')->nullable()->comment('ID связанной модели');
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
        Schema::dropIfExists('reviews');
    }
};
