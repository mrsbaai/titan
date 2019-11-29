@extends('layouts.app')


@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><h4>Order #{{$ret->id}} - <span @if($ret->status == "Deleted") style="color: red;" @endif><b>{{$ret->status}}</b></span></h4></div>

                <div class="card-body" @if($ret->status == "Deleted") style="color: red;" @endif>
                {{ Form::open(array('action' => 'HomeController@updateCostumer', 'id' => 'update'))}}
                <input type="hidden" name="idOrder" id="idOrder" value="{{$ret->id}}" >
                <div class="form-row">
                <div class="form-group col-md-6" style="font-size:150%;">Created: <span id="created" style="float:right;">{{$ret->created_at}}</span><h4><div id="created2"></div></h4></div>
                <div class="form-group col-md-6" style="font-size:150%;">Updated: <span id="updated" style="float:right;">{{$ret->updated_at}}</span><h4><div id="updated2"></div></h4></div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputName">Full Name</label>
                        <input type="text" class="form-control" id="inputName" name="inputName" placeholder="" value="{{$ret->name}}">
                    </div>
                

                    <div class="form-group col-md-4">
                        <label for="inputNumber">Pone Number</label>
                        <input type="text" class="form-control" id="inputNumber" name="inputNumber" placeholder="" value="{{$ret->phone}}">
                    </div>

                    <div class="form-group col-md-2">
                        <label for="inputAge">Age</label>
                        <input type="text" class="form-control" id="inputAge" name ="inputAge" placeholder="" value="{{$ret->age}}">
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" name="inputAddress" placeholder="" value="{{$ret->address}}">
                </div>

     
                <div class="form-row">

                    <div class="form-group col-md-6">
                    <label for="inputRegion">Region</label>
                    {!! Form::select('inputRegion', $allRegions, $ret->region, ['class' => 'form-control', 'id' => 'inputRegion']) !!}
                    </div>


                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    {!! Form::select('inputCity', $allCities, $ret->city, ['class' => 'form-control', 'id' => 'inputCity']) !!}
                    </div>


                </div>

                <div class="form-group">
                    <label for="inputPoste">Poste</label>
                    {!! Form::select('inputPoste', $allPostes, $ret->poste, ['class' => 'form-control', 'id' => 'inputPoste']) !!}
                </div>

                <div class="form-row">

                    <div class="form-group col-md-6">
                 
                        <label for="inputPrice">Price (Dirhams) (With shipping)</label>
                        <input type="text" class="form-control" id="inputPrice" name="inputPrice" placeholder="" value="{{$ret->tprice}}">
        
                    </div>
                    
                    <div class="form-group col-md-6">
                    
                        <div class="form-group">
                            <label for="inputStatus">Status</label>
                            {!! Form::select('inputStatus', $allStatus, $ret->status, ['class' => 'form-control']) !!}
                        </div>

                    </div>
                </div>

                <div class="form-group">
                            <label for="inputShippingType">Shipping Type</label>
                            {!! Form::select('inputShipping', $allShippingTypes, $ret->shipmentType, ['class' => 'form-control']) !!}

                        </div>

                <div class="form-group">
                    <label for="inputTracking">Tracking Code</label>
                    <input type="text" class="form-control" id="inputTracking" name="inputTracking" value="{{$ret->tracking}}" placeholder="">
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6 ">
                    @if($PreviousID)<a class="btn btn-lg btn-gray" href="{{route('consult', ['id' => $PreviousID, 'status' => $ret->status])}}">< Previous</a>@endif
                    @if($NextID)<a class="btn btn-lg btn-gray" href="{{route('consult', ['id' => $NextID, 'status' => $ret->status])}}">Next ></a>@endif
                    </div>


                    <div class="form-group col-md-6 text-right">
                    <button type="submit" class="btn btn-lg btn-success">Update</button>
                    </div>





                </div>


                

                {{ Form::close() }}


            


                </div>
            </div>
        </div>
    </div>
</div>


<script type="text/javascript">
                $(document).ready(function(){      

                    document.getElementById('created2').innerText = "(" + moment(moment.utc( document.getElementById('created').innerText)).fromNow() + ")";
                    document.getElementById('updated2').innerText = "(" +  moment(moment.utc( document.getElementById('updated').innerText)).fromNow() + ")";
                    

                });

                               
</script>

<script type="text/javascript">



$(document).on('change', '#inputRegion', function() {


    var regionID = $(this).val();    
    if(regionID){

        $.ajax({
           type:"GET",
           url:"{{url('get-city-list')}}?region_id="+regionID,
           success:function(res){               
            if(res){
                $("#inputCity").empty();
                $("#inputPoste").empty();
                $("#inputCity").append('<option>Select</option>');
                $.each(res,function(key,value){
                    $("#inputCity").append('<option value="'+key+'">'+value+'</option>');
                });
           
            }else{
               $("#inputCity").empty();
            }
           }
        });
    }else{
        $("#inputCity").empty();
        $("#inputPoste").empty();
    } 
    
   });

   $(document).on('change', '#inputCity', function() {
    var cityID = $(this).val();    
    if(cityID){
        $.ajax({
           type:"GET",
           url:"{{url('get-poste-list')}}?city_id="+cityID,
           success:function(res){               
            if(res){
                $("#inputPoste").empty();
                $.each(res,function(key,value){
                    $("#inputPoste").append('<option value="'+key+'">'+value+'</option>');
                });
           
            }else{
               $("#inputPoste").empty();
            }
           }
        });
    }else{
        $("#inputPoste").empty();
    }
        
   });

</script>
@endsection
