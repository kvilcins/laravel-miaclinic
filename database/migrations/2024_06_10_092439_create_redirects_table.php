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
        Schema::create('redirects', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->string('from')->unique()->comment('Откуда редирект');
            $table->string('to')->comment('Куда редирект');
            $table->unsignedInteger('code')->default(301)->comment('Код перенаправления');
            $table->boolean('enabled')->default(false)->comment('Редирект включён?');
            $table->unsignedInteger('hits')->default(0)->comment('Сколько раз сработал');
            $table->timestamp('last_hit')->nullable()->comment('Последняя дата срабатывания');
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
        Schema::dropIfExists('redirects');
    }
};
