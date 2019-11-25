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

        
        $ret = DB::table('costumers')->where('status','new')->orderBy('created_at', 'desc')->get();
  
        return view('home', ['ret' => $ret]);
    }
    public function updateCostumer(){
        return "cc";

    }

    public function consult($id)
    {

        
        $ret = DB::table('costumers')->where('id',$id)->first();
  
        return view('consult', ['ret' => $ret]);
    }


}

