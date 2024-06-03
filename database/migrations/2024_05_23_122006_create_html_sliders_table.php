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
        Schema::create('html_sliders', function (Blueprint $table) {
            $table->increments('id')->comment('ID слайдера');
            $table->unsignedInteger('template_id')->nullable()->index('html_sliders_template_id_foreign')->comment('ID шаблона');
            $table->string('name')->unique()->comment('Название слайдера');
            $table->char('uuid', 36)->nullable()->unique()->comment('UUID');
            $table->boolean('published')->default(false)->comment('Слайдер опубликован?');
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
        Schema::dropIfExists('html_sliders');
    }
};
