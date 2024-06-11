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
        Schema::table('service_work', function (Blueprint $table) {
            $table->foreign(['service_id'])->references(['id'])->on('services')->onUpdate('NO ACTION')->onDelete('CASCADE');
            $table->foreign(['work_id'])->references(['id'])->on('works')->onUpdate('NO ACTION')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('service_work', function (Blueprint $table) {
            $table->dropForeign('service_work_service_id_foreign');
            $table->dropForeign('service_work_work_id_foreign');
        });
    }
};
