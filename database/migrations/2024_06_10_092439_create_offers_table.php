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
        Schema::create('offers', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->char('uuid', 36)->nullable()->unique()->comment('UUID');
            $table->unsignedInteger('page_id')->unique()->comment('Связанная страница');
            $table->unsignedInteger('section_page_id')->comment('Раздел');
            $table->unsignedInteger('service_id')->nullable()->comment('Услуга');
            $table->unsignedInteger('service_page_id')->nullable()->comment('Страница продвигаемой услуги');
            $table->string('name')->comment('Название');
            $table->string('image')->nullable()->comment('Изображение');
            $table->unsignedInteger('price')->nullable()->comment('Цена по акции');
            $table->unsignedInteger('discount')->nullable()->comment('Скидка по акции');
            $table->unsignedInteger('old_price')->nullable()->comment('Старая цена по акции');
            $table->text('teaser')->nullable()->comment('Тизер');
            $table->boolean('price_is_min')->default(false)->comment('Цена минимальная?');
            $table->boolean('active')->default(false)->index()->comment('Акция действует?');
            $table->string('rotation')->nullable()->comment('Ротация');
            $table->timestamp('starts_at')->nullable()->comment('Дата старта');
            $table->timestamp('ends_at')->nullable()->comment('Дата окончания');
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
        Schema::dropIfExists('offers');
    }
};
