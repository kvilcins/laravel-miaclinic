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
        Schema::table('works', function (Blueprint $table) {
            $table->foreign(['page_id'])->references(['id'])->on('pages')->onUpdate('NO ACTION')->onDelete('CASCADE');
            $table->foreign(['section_page_id'])->references(['id'])->on('pages')->onUpdate('NO ACTION')->onDelete('CASCADE');
            $table->foreign(['service_id'])->references(['id'])->on('services')->onUpdate('NO ACTION')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('works', function (Blueprint $table) {
            $table->dropForeign('works_page_id_foreign');
            $table->dropForeign('works_section_page_id_foreign');
            $table->dropForeign('works_service_id_foreign');
        });
    }
};
