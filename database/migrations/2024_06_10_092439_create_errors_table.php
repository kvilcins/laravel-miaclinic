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
        Schema::create('errors', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->string('code')->nullable()->comment('Код');
            $table->text('route')->nullable();
            $table->text('referer')->nullable();
            $table->text('file')->comment('Файл');
            $table->unsignedInteger('line')->comment('Строка');
            $table->text('message')->comment('Ошибка');
            $table->string('ip')->comment('IP');
            $table->unsignedInteger('hits')->default(1)->comment('Повторы');
            $table->boolean('resolved')->default(false)->comment('Исправлена');
            $table->unsignedInteger('resolver_id')->nullable()->index('errors_resolver_id_foreign')->comment('Исправитель');
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
        Schema::dropIfExists('errors');
    }
};
