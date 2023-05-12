<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController as StudentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::name('students')->prefix('students')->group(function () {

    Route::get('/',[StudentController::class, 'index'])->middleware('auth');

    Route::get('/create',[StudentController::class, 'create'] )->middleware('auth');
    Route::post('/create/student/',[StudentController::class, 'store'])->middleware('auth');

    Route::get('/update/{id}',[StudentController::class, 'update'])->where('id','[0-9]+')->middleware('auth');
    Route::put('/edit/{id}',[StudentController::class, 'edit'])
    ->name(".edit")
    ->where('id', '[0-9]+')
    ->middleware('auth');

    Route::delete('/{id}', [StudentController::class, 'destroy'])->name('students.destroy')->middleware('auth');
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home')->middleware('auth');;
