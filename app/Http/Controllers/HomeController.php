<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use App\costumer;
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
    public function updateCostumer(Request $request){

        $costumer = costumer::find($request->input('id'));

        $costumer->age = $request->input('inputAge');

        $costumer->save();

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

        $allShippingTypes  = array(
            "Home" => "Home",
            "Poste" => "Poste", 
        );

        $allRegions  = array(
            "" => "Select",
            "AGADIR" => "AGADIR",
            "CASABLANCA" => "CASABLANCA",
            "FES" => "FES",
            "LAAYOUNE" => "LAAYOUNE",
            "MARRAKECH" => "MARRAKECH",
            "MEKNES" => "MEKNES",
            "OUJDA" => "OUJDA",
            "RABAT" => "RABAT",
            "SETTAT" => "SETTAT",
            "TANGER" => "TANGER", 
        );
  
        return view('consult', ['ret' => $ret, 'allStatus' =>$allStatus, 'allShippingTypes' =>$allShippingTypes, 'allRegions' =>$allRegions]);
    }


}

