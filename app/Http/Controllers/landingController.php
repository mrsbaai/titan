<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class landingController extends Controller
{
    public function landing(){
        return view('titan.landing');
    }

    public function newOrder(){
        return view('titan.landing');
    }
}
