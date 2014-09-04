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



Route::get('/api/files', 'FileController@getAllFiles');

Route::get('/api/files/{id}', 'FileController@getFileByID');

Route::post('/api/upload', 'FileController@uploadFile');

Route::delete('/api/files/{id}', 'FileController@deleteFile');

Route::get('/api/test', 'DeleteFileQueueController@test');





Route::get('/files/{id}', 'FileController@displayFileByID');
Route::get('/files', 'FileController@displayFileList');
Route::get('/upload', 'FileController@showView');




Route::get('/test', 'DeleteFileQueueController@test');

Route::get('/angularjs', function() {
	return View::make('angularjs/index');
});



