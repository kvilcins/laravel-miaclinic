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
        Schema::create('employee_profession', function (Blueprint $table) {
            $table->unsignedInteger('employee_id')->index('employee_profession_employee_id_foreign')->comment('ID сотрудника');
            $table->unsignedInteger('profession_id')->index('employee_profession_profession_id_foreign')->comment('ID профессии');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_profession');
    }
};
