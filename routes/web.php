<?php

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


Route::get('/','landingController@landing');
Route::post('/', 'landingController@newOrder');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/consult/{id}', 'HomeController@consult');

Route::post('/consult', 'HomeController@updateCostumer');

Route::post('/consult', 'HomeController@updateCostumer');


Route::get('get-poste-list','DropdownController@getPosteList');
Route::get('get-city-list','DropdownController@getCityList');