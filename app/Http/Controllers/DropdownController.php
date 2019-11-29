<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use DB;
class DropdownController extends Controller
{
    


        public function getCityList(Request $request)
        {
            $cities = DB::table("poste")
            ->where("REGION",$request->region_id)
            ->groupBy('VILLECOMMUNE')
            ->pluck("VILLECOMMUNE","VILLECOMMUNE");
            return response()->json($cities);
        }

        public function getPosteList(Request $request)
        {

            $postes = DB::table("poste")->select(DB::raw('CONCAT(NOM_AGENCE, ": ", ADRESSE) AS addr'))
            ->where("VILLECOMMUNE",$request->city_id)
            ->pluck("addr","addr");
            return response()->json($postes);
        }
}