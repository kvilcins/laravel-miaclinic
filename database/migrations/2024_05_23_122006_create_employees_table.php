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
        Schema::create('employees', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->char('uuid', 36)->nullable()->unique()->comment('UUID');
            $table->unsignedInteger('page_id')->unique()->comment('Связанная страница');
            $table->string('fio')->comment('ФИО');
            $table->string('start_year')->comment('Год начала работы');
            $table->string('image')->comment('Стандартное фото');
            $table->text('about')->nullable()->comment('О сотруднике');
            $table->text('feature')->nullable()->comment('Особенность');
            $table->string('feature_icon')->nullable()->comment('Иконка особенности');
            $table->string('image_small')->nullable()->comment('Маленькое фото');
            $table->boolean('working')->nullable()->default(false)->comment('Сотрудник работает?');
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
        Schema::dropIfExists('employees');
    }
};
