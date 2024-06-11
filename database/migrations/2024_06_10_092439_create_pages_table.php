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
        Schema::create('pages', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->unsignedInteger('parent_id')->nullable()->index('pages_parent_id_foreign')->comment('ID родительской страницы');
            $table->string('lineage')->nullable()->comment('Родословная');
            $table->unsignedInteger('v_parent_id')->nullable()->comment('ID виртуальной родительской страницы');
            $table->string('v_lineage')->nullable()->comment('Виртуальная родословная');
            $table->unsignedInteger('template_id')->nullable()->index('pages_template_id_foreign')->comment('ID шаблона');
            $table->string('wallpaper')->nullable()->comment('Обои');
            $table->char('uuid', 36)->nullable()->unique()->comment('UUID');
            $table->string('title')->unique()->comment('Title');
            $table->string('h1')->unique()->comment('Заголовок H1');
            $table->string('in_menu_name')->nullable()->unique()->comment('Именование в меню');
            $table->string('in_bc_name')->nullable()->comment('Именование в хлебных крошках');
            $table->text('description')->comment('Meta Description');
            $table->mediumText('body')->nullable();
            $table->text('meta')->nullable()->comment('Кастомные Мета-теги');
            $table->boolean('published')->default(false)->comment('Страница опубликована?');
            $table->boolean('indexed')->default(true)->comment('Страница попадает в sitemap?');
            $table->boolean('important')->default(false)->comment('Приоритет в sitemap');
            $table->boolean('lock_slug')->default(false)->comment('Запрет автоапдейта ЧПУ');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
};
