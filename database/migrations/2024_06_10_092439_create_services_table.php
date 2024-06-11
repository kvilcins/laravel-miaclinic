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
        Schema::create('services', function (Blueprint $table) {
            $table->increments('id');
            $table->char('uuid', 36)->nullable()->unique()->comment('UUID');
            $table->unsignedInteger('page_id')->nullable()->index()->comment('Связанная страница');
            $table->string('name')->nullable()->comment('Название');
            $table->unsignedInteger('price')->nullable()->comment('Цена');
            $table->text('teaser')->nullable()->comment('Тизер');
            $table->boolean('price_is_min')->default(false)->comment('Цена минимальная?');
            $table->boolean('is_installment')->default(false)->comment('Это рассрочка?');
            $table->boolean('active')->default(false)->index()->comment('Услуга предоставляется?');
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
        Schema::dropIfExists('services');
    }
};
