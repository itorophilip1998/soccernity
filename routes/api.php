<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InterestInController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PasswordController;
use App\Models\InterestIn;

//  Auth route
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/signup', [AuthController::class, 'signup']);
    Route::post('/signin', [AuthController::class, 'signin']);
    Route::post('/signout', [AuthController::class, 'signout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
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
    Route::post('/update', [UserController::class, 'updateUser']);
    Route::get('/get/{user_id}', [UserController::class, 'getUser']);
    Route::get('/', [UserController::class, 'userProfile']);
    // Route::post('/change-email', [UserController::class, 'changeEmail']);
});

//  Interest In route
Route::group([
    'middleware' => 'api',
    'prefix' => 'interestin'
], function ($router) {
    Route::post('/add', [InterestInController::class, 'add']);
    Route::get('/get', [InterestInController::class, 'get']);
    Route::post('/update/{id}', [InterestInController::class, 'update']);
    Route::delete('/remove/{id}', [InterestInController::class, 'delete']);
});
