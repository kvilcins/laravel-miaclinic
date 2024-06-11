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
        Schema::table('html_sliders', function (Blueprint $table) {
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
        Schema::table('html_sliders', function (Blueprint $table) {
            $table->dropForeign('html_sliders_template_id_foreign');
        });
    }
};
