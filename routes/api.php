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
use App\Http\Controllers\IndustriesController;
use App\Http\Controllers\InterestInController;
use App\Http\Controllers\PROsController;
use App\Http\Controllers\SkillsController;
use App\Http\Controllers\SocialMediaLinksController;
use App\Http\Controllers\TransactionsController;
use App\Http\Controllers\WalletController;
use PayPal\Api\Transaction;

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

//  Skills In route
Route::group([
    'middleware' => 'api',
    'prefix' => 'skills'
], function ($router) {
    Route::post('/add', [SkillsController::class, 'add']);
    Route::get('/get', [SkillsController::class, 'get']);
});

//  industry  route
Route::group([
    'middleware' => 'api',
    'prefix' => 'industry'
], function ($router) {
    Route::post('/add', [IndustriesController::class, 'add']);
    Route::get('/get', [IndustriesController::class, 'get']);
});

//  industry  route
Route::group([
    'middleware' => 'api',
    'prefix' => 'industry'
], function ($router) {
    Route::post('/add', [IndustriesController::class, 'add']);
    Route::get('/get', [IndustriesController::class, 'get']);
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'pros'
], function ($router) {
    Route::get('/', [PROsController::class, 'getPro']);
    Route::get('/{email}', [PROsController::class, 'proByEmail']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'payment'
], function ($router) {
    Route::get('/types', [TransactionsController::class, 'paymentTypes']); 
    Route::post('/init', [TransactionsController::class, 'paymentInit']); 
    Route::get('/types', [TransactionsController::class, 'paymentTypes']); 
});
