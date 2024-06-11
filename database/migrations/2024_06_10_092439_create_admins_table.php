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
        Schema::create('admins', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->string('login')->nullable()->comment('Логин');
            $table->string('fio')->nullable()->comment('ФИО');
            $table->string('password', 60)->nullable()->comment('Пароль');
            $table->string('role')->nullable()->comment('Роль');
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
        Schema::dropIfExists('admins');
    }
};
