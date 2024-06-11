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
        Schema::create('service_work', function (Blueprint $table) {
            $table->unsignedInteger('service_id')->comment('ID услуги');
            $table->unsignedInteger('work_id')->index('service_work_work_id_foreign')->comment('ID работы');

            $table->unique(['service_id', 'work_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_work');
    }
};
