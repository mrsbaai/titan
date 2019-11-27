<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class landingController extends Controller
{
    public function landing(){
        return view('titan.landing');
    }

    public function newOrder(){
        $name = $request->input('name');
        $age = $request->input('age');
        $phone = $request->input('phone');

        return view('titan.thankyou')->with('name', $name)->with('age', $age)->with('phone', $phone);
    }
}
