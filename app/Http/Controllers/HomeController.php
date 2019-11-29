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

        
        $ret = DB::table('costumers')->orderBy('created_at', 'desc')->get();
  
        return view('home', ['ret' => $ret]);
    }
    public function updateCostumer(){
        return "cc";

    }

    public function consult($id)
    {

        
        $ret = DB::table('costumers')->where('id',$id)->first();
        $allStatus  = array(
            "New" => "New",
            "Processed" => "Processed", 
            "Shipped" => "Shipped",
            "Completed" => "Completed",            
            "Deleted" => "Deleted",
        );
  
        return view('consult', ['ret' => $ret]);
    }


}

