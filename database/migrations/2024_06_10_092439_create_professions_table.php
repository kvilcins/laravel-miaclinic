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
        Schema::create('professions', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->char('uuid', 36)->nullable()->unique()->comment('UUID');
            $table->unsignedInteger('page_id')->unique()->comment('Связанная страница');
            $table->string('name')->comment('Название');
            $table->string('multi_name')->comment('Множественное число');
            $table->integer('priority')->default(0)->comment('Приоритет показа');
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
        Schema::dropIfExists('professions');
    }
};
