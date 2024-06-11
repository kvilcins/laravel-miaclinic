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
        Schema::create('affiliates', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->char('uuid', 36)->nullable()->unique()->comment('UUID');
            $table->unsignedInteger('page_id')->unique()->comment('Связанная страница');
            $table->string('name')->unique()->comment('Название филиала');
            $table->string('metro')->nullable()->comment('Станция метро');
            $table->char('metro_hex', 6)->nullable()->default('adb6bc')->comment('Цвет ветки метро');
            $table->string('address')->comment('Адрес филиала');
            $table->string('phone')->nullable()->comment('Телефон');
            $table->string('email')->nullable()->comment('Email');
            $table->string('time')->nullable()->comment('Время работы');
            $table->boolean('exist')->default(true)->comment('Филиал существует?');
            $table->integer('priority')->default(0)->comment('Приоритет');
            $table->longText('coordinates')->nullable()->comment('Координаты и зум');
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
        Schema::dropIfExists('affiliates');
    }
};
