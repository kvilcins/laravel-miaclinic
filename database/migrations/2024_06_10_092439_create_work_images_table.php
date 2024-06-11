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
        Schema::create('work_images', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->unsignedInteger('work_id')->comment('ID работы');
            $table->string('type')->comment('Тип');
            $table->string('file')->comment('Изображение');
            $table->string('alt')->nullable()->comment('Alt');

            $table->unique(['work_id', 'type']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('work_images');
    }
};
