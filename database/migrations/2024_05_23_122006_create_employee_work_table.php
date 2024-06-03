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
        Schema::create('employee_work', function (Blueprint $table) {
            $table->unsignedInteger('employee_id')->comment('ID сотрудника');
            $table->unsignedInteger('work_id')->index('employee_work_work_id_foreign')->comment('ID работы');
            $table->unsignedInteger('position')->default(0)->comment('Позиция');

            $table->unique(['employee_id', 'work_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_work');
    }
};
