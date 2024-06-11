<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("CREATE VIEW `page_slug_by_uuid` AS select `miaclinic_test`.`pages`.`uuid` AS `uuid`,`miaclinic_test`.`pages`.`id` AS `id`,`miaclinic_test`.`routers`.`slug` AS `slug`,`miaclinic_test`.`pages`.`parent_id` AS `parent_id` from (`miaclinic_test`.`pages` join `miaclinic_test`.`routers` on(((`miaclinic_test`.`pages`.`id` = `miaclinic_test`.`routers`.`relation_id`) and (`miaclinic_test`.`routers`.`relation_model` = 'Synergine:Page:Models:Page'))))");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("DROP VIEW IF EXISTS `page_slug_by_uuid`");
    }
};
