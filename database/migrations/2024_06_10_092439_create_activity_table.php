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
        Schema::create('activity', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->string('description')->comment('Описание');
            $table->string('namespace')->nullable()->comment('Неймспейс');
            $table->unsignedInteger('causer_id')->nullable()->index()->comment('Инициатор');
            $table->string('relation_model')->nullable()->comment('Связанная модель');
            $table->string('relation_id')->nullable()->comment('ID связанной модели');
            $table->mediumText('model')->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->index(['relation_model', 'relation_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activity');
    }
};
