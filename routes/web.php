<?php

use App\Http\Controllers\OathController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PayPalController;

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

Route::get('/', function () {
    return view('welcome');
});



Route::get('/api/oauth/linkedin', [OathController::class, 'linkedinRedirect']);
Route::get('/api/oauth/linkedin/callback', [OathController::class, 'linkedinCallback']);
Route::get('/api/oauth/google', [OathController::class, 'googleRedirect']);
Route::get('/api/oauth/google/callback', [OathController::class, 'googleCallback']);
Route::get('/api/login', [OathController::class, 'signinoauth']);
