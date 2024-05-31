<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Coach;


class CoachController extends Controller
{

    public function index(){
        $coaches=Coach::latest()->get();

        return $coaches;
    }

    public function create(){
        return view('coaches.create');
    }

    public function store(){

        $validatedData = request()->validate([
            'fn' => 'required|string|max:255',
            'ln' => 'required|string|max:255',
            'age' => 'required|integer|min:18',
        ]);

        $coach = new Coach();
        $coach->fill($validatedData);
        $coach->save();



    }
}
