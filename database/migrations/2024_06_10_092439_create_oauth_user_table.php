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
        Schema::create('oauth_user', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->string('oauth_name')->comment('Название');
            $table->unsignedInteger('local_user_id')->comment('Локальный ID пользователя');
            $table->string('oauth_user_id')->comment('ID пользователя в OAuth');
            $table->timestamps();

            $table->unique(['local_user_id', 'oauth_name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('oauth_user');
    }
};
