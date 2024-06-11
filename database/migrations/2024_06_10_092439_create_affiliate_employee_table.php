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
        Schema::create('affiliate_employee', function (Blueprint $table) {
            $table->unsignedInteger('affiliate_id')->index('affiliate_employee_affiliate_id_foreign')->comment('ID филиала');
            $table->unsignedInteger('employee_id')->index('affiliate_employee_employee_id_foreign')->comment('ID сотрудника');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('affiliate_employee');
    }
};
