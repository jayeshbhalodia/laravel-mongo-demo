<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('api/networks','TestController@getAllData');
Route::post('api/network','TestController@postData');
Route::get('api/network/{userId}/delete','TestController@getDeleteData');
Route::get('api/network/{id}','TestController@getData');
Route::post('api/network/{id}','TestController@postEdit');

Route::get('/', function()
{
	return View::make('layout');
});