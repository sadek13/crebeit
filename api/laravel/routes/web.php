<?php

use App\Http\Controllers\CoachController;
use Illuminate\Support\Facades\Route;

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
    return redirect()->route('coach.index');
});

Route::get('/coaches', [CoachController::class, 'index'])->name('coach.index');
Route::get('/coaches/create', [CoachController::class, 'create'])->name('coach.create');
Route::post('/coaches', [CoachController::class, 'store'])->name('coach.store');
