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
            ->having('count', '>', 1)
            ->pluck("VILLECOMMUNE","VILLECOMMUNE");
            return response()->json($cities);
        }

        public function getPosteList(Request $request)
        {
            $postes = DB::table("poste")
            ->where("VILLECOMMUNE",$request->city_id)
            ->groupBy('VILLECOMMUNE')
            ->having('count', '>', 1)
            ->pluck("ADRESSE","ADRESSE");
            return response()->json($postes);
        }
}