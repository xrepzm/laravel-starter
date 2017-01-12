<?php

use Illuminate\Http\Request;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/users', function() {
    $users = [
        [
            'id' => 1,
            'name' => 'Nandor Dudas',
            'email' => 'nandor.dudas@gmail.com',
        ],
        [
            'id' => 2,
            'name' => 'Anita Takacs',
            'email' => 'anita.takacs@gmail.com',
        ]
    ];

    return response()->json(compact('users'));
});

Route::post('/user', function () {
    $user = App\User::create(request()->all());

    return response()->json(compact('user'));
});
