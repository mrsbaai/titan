<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        
        $ret = DB::table('costumers')->pluck('id', 'name', 'address', 'phone', 'email', 'status','order_id');
  
        return view('home', ['ret' => $ret]);
    }
}
