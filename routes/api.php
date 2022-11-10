<?php

use App\Models\InterestIn;
use App\Models\SocialMediaLinks;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\InterestInController;
use App\Http\Controllers\SocialMediaLinksController;
use App\Http\Controllers\WalletController;

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
    Route::post('/change-email', [VerifyController::class, 'changeEmail']);
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


//  Education In route
Route::group([
    'middleware' => 'api',
    'prefix' => 'education'
], function ($router) {
    Route::post('/add', [EducationController::class, 'add']);
    Route::get('/get', [EducationController::class, 'get']);
    Route::post('/update/{id}', [EducationController::class, 'update']);
    Route::delete('/remove/{id}', [EducationController::class, 'delete']);
});

//  Experince In route
Route::group([
    'middleware' => 'api',
    'prefix' => 'experience'
], function ($router) {
    Route::post('/add', [ExperienceController::class, 'add']);
    Route::get('/get', [ExperienceController::class, 'get']);
    Route::post('/update/{id}', [ExperienceController::class, 'update']);
    Route::delete('/remove/{id}', [ExperienceController::class, 'delete']);
});


//  Social Media Links route
Route::group([
    'middleware' => 'api',
    'prefix' => 'socialmedia'
], function ($router) {
    Route::get('/get', [SocialMediaLinksController::class, 'get']);
    Route::post('/update', [SocialMediaLinksController::class, 'update']);
    Route::delete('/remove', [SocialMediaLinksController::class, 'delete']);
});

//  Wwallet route
Route::group([
    'middleware' => 'api',
    'prefix' => 'wallet'
], function ($router) {
    Route::get('/balance', [WalletController::class, 'balance']);
    Route::post('/topup', [WalletController::class, 'topUp']);
    Route::post('/withdraw', [WalletController::class, 'withdraw']);
});
