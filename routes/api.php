<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PasswordController;

//  Auth route
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/signup', [AuthController::class, 'signup']);
    Route::post('/signin', [AuthController::class, 'signin']);
    Route::post('/signout', [AuthController::class, 'signout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user', [AuthController::class, 'userProfile']);
});

//  Verify route
Route::group([
    'middleware' => 'api',
    'prefix' => 'verify'
], function ($router) {
    Route::get('/{token}/{email}', [VerifyController::class, 'verify']);
    Route::post('/resend', [VerifyController::class, 'resend']);
});

//  Password route
Route::group([
    'middleware' => 'api',
    'prefix' => 'password'
], function ($router) {
    Route::post('/send-reset-link', [PasswordController::class, 'sendReset']);
    Route::post('/reset', [PasswordController::class, 'reset']);
});

//  User Profile route
Route::group([
    'middleware' => 'api',
    'prefix' => 'user'
], function ($router) {
    Route::post('/update/{user_id}', [UserController::class, 'updateUser']);
    Route::get('/get/{user_id}', [UserController::class, 'getUser']);
});

//  Update Profile route
Route::group([
    'middleware' => 'api',
    'prefix' => 'profile'
], function ($router) {
    Route::post('/update/{user_id}', [ProfileController::class, 'updateProfile']);
    Route::get('/get/{user_id}', [ProfileController::class, 'getProfile']);
});
