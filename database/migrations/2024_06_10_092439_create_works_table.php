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
        Schema::create('works', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->char('uuid', 36)->nullable()->unique()->comment('UUID');
            $table->unsignedInteger('page_id')->unique()->comment('Связанная страница');
            $table->unsignedInteger('section_page_id')->index('works_section_page_id_foreign')->comment('Раздел');
            $table->unsignedInteger('service_id')->nullable()->index('works_service_id_foreign')->comment('Связанная услуга');
            $table->text('title')->comment('Наименование');
            $table->string('image')->comment('Изображение');
            $table->text('before')->nullable()->comment('До');
            $table->text('after')->nullable()->comment('После');
            $table->string('video_link')->nullable()->comment('Ссылка на видеоинтервью');
            $table->text('video_text')->nullable()->comment('Описание видеоинтервью');
            $table->text('teaser')->nullable()->comment('Тизер о работе');
            $table->boolean('published')->default(false)->comment('Работа опубликована?');
            $table->boolean('show')->default(true)->comment('Показывать в портфолио сотрудника');
            $table->integer('priority')->default(0)->comment('Приоритет');
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
        Schema::dropIfExists('works');
    }
};
