<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// ActivityController
Route::get('/index', 'App\Http\Controllers\TemplateController@showTemplate');

//TemplatesController
Route::get('/templates', 'App\Http\Controllers\TemplateController@index');
Route::get('/templates/{name}', 'App\Http\Controllers\TemplateController@showTemplate');
