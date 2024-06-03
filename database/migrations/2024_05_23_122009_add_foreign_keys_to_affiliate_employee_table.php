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
        Schema::table('affiliate_employee', function (Blueprint $table) {
            $table->foreign(['affiliate_id'])->references(['id'])->on('affiliates')->onUpdate('NO ACTION')->onDelete('CASCADE');
            $table->foreign(['employee_id'])->references(['id'])->on('employees')->onUpdate('NO ACTION')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('affiliate_employee', function (Blueprint $table) {
            $table->dropForeign('affiliate_employee_affiliate_id_foreign');
            $table->dropForeign('affiliate_employee_employee_id_foreign');
        });
    }
};
