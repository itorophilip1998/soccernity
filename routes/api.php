<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SaveController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\BookedController;
use App\Http\Controllers\PayPalController;
use App\Http\Controllers\VerifyController;
use App\Http\Controllers\FriendsController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RantingController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\BankDetailsController;
use App\Http\Controllers\CardDetailsController;
use App\Http\Controllers\SearchQueryController;
use App\Http\Controllers\ProfileImagesController;
use App\Http\Controllers\ReportProblemController;
use App\Http\Controllers\SpecialEquipmentController;

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

//  Upload Profile Image  Details 
Route::group([
    'prefix' => 'photo'
], function ($router) {
    Route::post('/add', [PhotoController::class, 'add']);
    Route::delete('/remove/{id}', [PhotoController::class, 'remove']);
    Route::get('/get/{user_id}', [PhotoController::class, 'get']);
});
//  Upload Profile Image  Details 
Route::group([
    'prefix' => 'gallery'
], function ($router) {
    Route::post('/add', [ProfileImagesController::class, 'add']);
    Route::delete('/remove/{id}', [ProfileImagesController::class, 'remove']);
    Route::get('/get/{user_id}', [ProfileImagesController::class, 'get']);
});

//  Skills Details 
Route::group([
    'prefix' => 'skills'
], function ($router) {
    Route::post('/add', [SkillController::class, 'add']);
    Route::post('/update/{id}', [SkillController::class, 'update']);
    Route::get('/get/{user_id}', [SkillController::class, 'get']);
    Route::put('/update', [SkillController::class, 'updateAll']);
    Route::delete('/delete/{skill_id}', [SkillController::class, 'deleteSkill']);
});

//  Special Equipment Details 
Route::group([
    'prefix' => 'equipment'
], function ($router) {
    Route::post('/add', [SpecialEquipmentController::class, 'add']);
    Route::post('/update/{id}', [SpecialEquipmentController::class, 'update']);
    Route::get('/get/{skill_id}', [SpecialEquipmentController::class, 'get']);
    Route::get('/by-userid/{user_id}', [SpecialEquipmentController::class, 'getUserId']);
    Route::delete('/delete/{equipment_id}', [SpecialEquipmentController::class, 'deleteEquipment']);
});

//  Rating Details 
Route::group([
    'prefix' => 'rating'
], function ($router) {
    Route::post('/add', [RantingController::class, 'add']);
    Route::delete('/remove/{id}', [RantingController::class, 'remove']);
    Route::get('/get/{user_id}', [RantingController::class, 'get']);
});

//  Card Details 
Route::group([
    'prefix' => 'card'
], function ($router) {
    Route::post('/add', [CardDetailsController::class, 'add']);
    Route::delete('/remove/{id}', [CardDetailsController::class, 'remove']);
    Route::get('/get/{user_id}', [CardDetailsController::class, 'get']);
});

//Bank Details
Route::group([
    'prefix' => 'bank'
], function ($router) {
    Route::post('/add', [BankDetailsController::class, 'add']);
    Route::delete('/remove/{id}', [BankDetailsController::class, 'remove']);
    Route::get('/get/{user_id}', [BankDetailsController::class, 'get']);
});

//Search Query Options
Route::group([
    'prefix' => 'search'
], function ($router) {
    Route::get('/', [SearchQueryController::class, 'query']);
    Route::get('/{user_id}', [SearchQueryController::class, 'getUserById']);
});

// saved
Route::group([
    'prefix' => 'save'
], function ($router) {
    Route::post('/add', [SaveController::class, 'add']);
    Route::get('/get/{city}', [SaveController::class, 'get']);
    Route::get('/get-city', [SaveController::class, 'getByCity']);
});

// indbox
Route::group([
    'prefix' => 'inbox'
], function ($router) {
    Route::post('/send', [InboxController::class, 'add']);
    Route::get('/get/{friend_id}', [InboxController::class, 'get']);
});

// friendsed
Route::group([
    'prefix' => 'friends'
], function ($router) {
    Route::get('/{user_id}', [FriendsController::class, 'myFriends']);
    Route::post('/add', [FriendsController::class, 'add']);
});

// bookeded
Route::group([
    'prefix' => 'book'
], function ($router) {
    Route::post('/add', [BookedController::class, 'add']);
    Route::post('/cancel/{booked_id}', [BookedController::class, 'cancel']);
    Route::get('/get', [BookedController::class, 'get']);
    Route::get('/booked-users', [BookedController::class, 'getBookedUsers']);
    Route::put('/completed/{booked_id}', [BookedController::class, 'completed']);
});

// Make Payment
Route::group([
    'prefix' => 'payment'
], function ($router) {
    Route::get('create-transaction', [PayPalController::class, 'createTransaction'])->name('createTransaction');
    Route::get('process-transaction', [PayPalController::class, 'processTransaction'])->name('processTransaction');
    Route::get('success-transaction', [PayPalController::class, 'successTransaction'])->name('successTransaction');
    Route::get('cancel-transaction', [PayPalController::class, 'cancelTransaction'])->name('cancelTransaction');
});

// Services
Route::group([
    'prefix' => 'services'
], function ($router) {
    Route::get('/skills', [ServicesController::class, 'serviceBySkills']);
    Route::get('/equipment', [ServicesController::class, 'serviceByEquipment']);
});

// Report
Route::group([
    'prefix' => 'report'
], function ($router) {
    Route::post('/', [ReportProblemController::class, 'reportPost']);
});
