<?php

Route::get('/', function () {
    return view('home');
})->name('home');

Auth::routes();
Route::get('/home', 'HomeController@index');

Route::get('/users', function () {
    return view('users');
});
