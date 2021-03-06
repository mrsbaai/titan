<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use App\costumer;
use PDF;
use Carbon\Carbon;
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
        return view('home', ['ret' => $ret, 'title' => "All Orders"]);
    }


    public function newOrders()
    {
        $ret = DB::table('costumers')->where('status', 'New')->orderBy('created_at', 'desc')->get();
        return view('home', ['ret' => $ret, 'title' => "New Orders"]);
    }

    public function shippedOrders()
    {
        $ret = DB::table('costumers')->where('status', 'Shipped')->orderBy('created_at', 'desc')->get();
        return view('home', ['ret' => $ret, 'title' => "Shipped Orders"]);
    }


    public function processedOrders()
    {
        $ret = DB::table('costumers')->where('status', 'Processed')->orderBy('created_at', 'desc')->get();
        return view('home', ['ret' => $ret, 'title' => "Processed Orders"]);
    }


    public function completedOrders()
    {
        $ret = DB::table('costumers')->where('status', 'Completed')->orderBy('created_at', 'desc')->get();
        return view('home', ['ret' => $ret, 'title' => "Completed Orders"]);
    }


    public function deletedOrders()
    {
        $ret = DB::table('costumers')->where('status', 'Deleted')->orderBy('created_at', 'desc')->get();
        return view('home', ['ret' => $ret, 'title' => "Deleted Orders"]);
    }


    public function generateNeedShippingPDF()

    {

        $ret = DB::table('costumers')->where('status', 'Processed')->orderBy('created_at', 'desc')->get();
        $data = ['ret' => $ret];
        $pdf = PDF::loadView('ordersPDF', $data);
        $fileName = "orders_" . Carbon::now()->format('Y-m-d-H-s') . ".pdf";
        return $pdf->download($fileName);

    }

    public function editOrder(Request $request){

        $id = $request->input('id');

        return redirect()->route('consult', ['id'=>$id,'status'=>'All']);
      

    }



    public function updateCostumer(Request $request){

        $costumer = costumer::find($request->input('idOrder'));

        $costumer->name = $request->input('inputName');
        $costumer->age = $request->input('inputAge');
        $costumer->address = $request->input('inputAddress');
        $costumer->region = $request->input('inputRegion');
        $costumer->city = $request->input('inputCity');
        $costumer->tprice = $request->input('inputPrice');
        $costumer->status = $request->input('inputStatus');
        $costumer->shipmentType = $request->input('inputShipping');
        $costumer->tracking = $request->input('inputTracking');
        $costumer->poste = $request->input('inputPoste');
        $costumer->phone = $request->input('inputNumber');
        $costumer->notes = $request->input('inputNotes');
        $costumer->amount = $request->input('inputAmount'); 
        $costumer->unit_price = $request->input('inputUnitPrice'); 
        $costumer->shipping_price = $request->input('inputShippingPrice');
        $costumer->save();


        return back();

    }

    public function consult($id, $status)
    {

        $PreviousID = null;
        $NextID = null;
        switch ($status) {
            case "All":
                $NextID = DB::table('costumers')->where('id', '<', $id)->orderBy('created_at', 'desc')->first();
                $PreviousID = DB::table('costumers')->where('id', '>', $id)->orderBy('created_at', 'desc')->first();
                if ($NextID){$NextID = $NextID->id;}
                if ($PreviousID){$PreviousID = $PreviousID->id;}
                break;
            case "New":
                $NextID = DB::table('costumers')->where('id', '<', $id)->where('status', 'New')->orderBy('created_at', 'desc')->first();
                $PreviousID = DB::table('costumers')->where('id', '>', $id)->where('status', 'New')->orderBy('created_at', 'desc')->first();
                if ($NextID){$NextID = $NextID->id;}
                if ($PreviousID){$PreviousID = $PreviousID->id;}
            break;
            case "Shipped":
                $NextID = DB::table('costumers')->where('id', '<', $id)->where('status', 'Shipped')->orderBy('created_at', 'desc')->first();
                $PreviousID = DB::table('costumers')->where('id', '>', $id)->where('status', 'Shipped')->orderBy('created_at', 'desc')->first();   
                if ($NextID){$NextID = $NextID->id;}
                if ($PreviousID){$PreviousID = $PreviousID->id;}  
                break;
            case "Processed":
                $NextID = DB::table('costumers')->where('id', '<', $id)->where('status', 'Processed')->orderBy('created_at', 'desc')->first();
                $PreviousID = DB::table('costumers')->where('id', '>', $id)->where('status', 'Processed')->orderBy('created_at', 'desc')->first();
                if ($NextID){$NextID = $NextID->id;}
                if ($PreviousID){$PreviousID = $PreviousID->id;}
                break;
            case "Completed":
                $NextID = DB::table('costumers')->where('id', '<', $id)->where('status', 'Completed')->orderBy('created_at', 'desc')->first();
                $PreviousID = DB::table('costumers')->where('id', '>', $id)->where('status', 'Completed')->orderBy('created_at', 'desc')->first();
                if ($NextID){$NextID = $NextID->id;}
                if ($PreviousID){$PreviousID = $PreviousID->id;}
                break;
            case "Deleted":
                $NextID = DB::table('costumers')->where('id', '<', $id)->where('status', 'Deleted')->orderBy('created_at', 'desc')->first();
                $PreviousID = DB::table('costumers')->where('id', '>', $id)->where('status', 'Deleted')->orderBy('created_at', 'desc')->first();
                if ($NextID){$NextID = $NextID->id;}
                if ($PreviousID){$PreviousID = $PreviousID->id;}
                break;
        }


        
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


        $allCities = DB::table("poste")
        ->where("REGION",$ret->region)
        ->groupBy('VILLECOMMUNE')
        ->pluck("VILLECOMMUNE","VILLECOMMUNE");

        $allPostes = DB::table("poste")->select(DB::raw('CONCAT(NOM_AGENCE, ": ", ADRESSE) AS addr'))
        ->where("VILLECOMMUNE",$ret->city)
        ->pluck("addr","addr");

  
        return view('consult', ['ret' => $ret, 'NextID' => $NextID, 'PreviousID' => $PreviousID, 'allStatus' =>$allStatus, 'allShippingTypes' =>$allShippingTypes, 'allRegions' =>$allRegions, 'allPostes' =>$allPostes, 'allCities' =>$allCities]);
    }


}

