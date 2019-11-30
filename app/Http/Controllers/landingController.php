<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\costumer;

class landingController extends Controller
{
    public function landing(){
        return view('titan.landing');
    }

    public function newOrder(Request $request){
        $name = $request->input('name');
        $age = $request->input('age');
        $phone = $request->input('phone');

        $costumer = new costumer();
 
        $costumer->shipping_price = request('shipping_price');
        $costumer->unit_price = request('unit_price');
        $costumer->product = request('product');

        $costumer->name = request('name');
        $costumer->age = request('age');
        $costumer->phone = request('phone');
        $costumer->tprice = "449";
 
        $costumer->save();

        return view('titan.thankyou')->with('name', $name)->with('age', $age)->with('phone', $phone);
    }
}
