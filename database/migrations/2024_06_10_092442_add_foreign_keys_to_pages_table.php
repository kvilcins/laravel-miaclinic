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
        Schema::table('pages', function (Blueprint $table) {
            $table->foreign(['parent_id'])->references(['id'])->on('pages')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['template_id'])->references(['id'])->on('templates')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->dropForeign('pages_parent_id_foreign');
            $table->dropForeign('pages_template_id_foreign');
        });
    }
};
