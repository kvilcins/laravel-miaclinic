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
        Schema::create('chunks', function (Blueprint $table) {
            $table->string('name')->unique()->comment('Имя чанка');
            $table->text('description')->comment('Описание чанка');
            $table->mediumText('source')->comment('Код чанка');
            $table->boolean('enabled')->default(false)->comment('Чанк включён?');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chunks');
    }
};
