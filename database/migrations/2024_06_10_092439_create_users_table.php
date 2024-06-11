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
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->string('name')->nullable()->comment('Имя');
            $table->string('email')->nullable()->unique()->comment('Email');
            $table->string('password', 60)->nullable()->comment('Пароль');
            $table->string('avatar')->nullable()->comment('Аватар');
            $table->text('profile')->nullable()->comment('Профиль');
            $table->boolean('confirmed')->default(false)->comment('Подтверждён?');
            $table->boolean('ban')->default(false)->comment('Забанен?');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
