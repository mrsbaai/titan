@extends('layouts.app')


@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Order #{{$ret->id}}</div>

                <div class="card-body">
                {{ Form::open(array('action' => 'HomeController@updateCostumer', 'id' => 'update'))}}

                <div class="form-row">
                <div class="form-group col-md-6"><h5>Created: <div id="created">{{$ret->created_at}}</div></h5><h4><div id="created2"></div></h4></div>
                <div class="form-group col-md-6"><h5>Updated: <div id="updated">{{$ret->updated_at}}</div></h5><h4><div id="updated2"></div></h4></div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputName">Full Name</label>
                        <input type="text" class="form-control" id="inputName" placeholder="" value="{{$ret->name}}">
                    </div>
                

                    <div class="form-group col-md-4">
                        <label for="inputNumber">Pone Number</label>
                        <input type="text" class="form-control" id="inputNumber" placeholder="" value="{{$ret->phone}}">
                    </div>

                    <div class="form-group col-md-2">
                        <label for="inputAge">Age</label>
                        <input type="text" class="form-control" id="inputAge" placeholder="" value="{{$ret->age}}">
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="" value="{{$ret->address}}">
                </div>

     
                <div class="form-row">

                    <div class="form-group col-md-6">
                    <label for="inputRegion">Region</label>
                    <select id="inputRegion" name="inputRegion" class="form-control">
                        <option value="" selected disabled>Select</option>
                        <option value="AGADIR">AGADIR</option>
                        <option value="CASABLANCA">CASABLANCA</option>
                        <option value="FES">FES</option>
                        <option value="LAAYOUNE">LAAYOUNE</option>
                        <option value="MARRAKECH">MARRAKECH</option>
                        <option value="MEKNES">MEKNES</option>
                        <option value="OUJDA">OUJDA</option>
                        <option value="RABAT">RABAT</option>
                        <option value="SETTAT">SETTAT</option>
                        <option value="TANGER">TANGER</option>
                    </select>
                    </div>


                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <select id="inputCity" name="inputCity" class="form-control">
                    </select>
                    </div>


                </div>

                <div class="form-group">
                    <label for="inputPoste">Poste</label>
                    <select id="inputPoste" name="inputPoste" class="form-control">
                    </select>
                </div>

                <div class="form-row">

                    <div class="form-group col-md-6">
                 
                        <label for="inputPrice">Price (Dirhams) (With shipping)</label>
                        <input type="text" class="form-control" id="inputPrice" placeholder="" value="{{$ret->tprice}}">
        
                    </div>
                    
                    <div class="form-group col-md-6">
                    
                        <div class="form-group">
                            <label for="inputStatus">Status</label>
                            {!! Form::select('inputStatus', $allStatus, $ret->status, ['class' => 'form-control']) !!}
                        </div>

                    </div>
                </div>

                <div class="form-group">
                            <label for="inputShipping">Shipping Type</label>
                            <select id="inputShipping" class="form-control">
                                <option value="Poste">Poste</option>
                                <option value="Home">Home</option>
                            </select>
                        </div>

                <div class="form-group">
                    <label for="inputAddress2">Tracking Code</label>
                    <input type="text" class="form-control" id="inputAddress2" value="{{$ret->tracking}}" placeholder="">
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                    <button type="submit" class="btn btn-lg btn-success">Update</button>

                    <a href="/2/delete"><button class="btn btn-lg btn-danger">Delete</button></a>
                    </div>



                    <div class="form-group col-md-6 text-right">
                    <a href="/1/next"><button class="btn btn-lg btn-gray">Next</button></a>
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
