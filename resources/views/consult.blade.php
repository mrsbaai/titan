@extends('layouts.app')


@section('content')
<script src="http://www.codermen.com/js/jquery.js"></script>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Order #{{$ret->id}}</div>

                <div class="card-body">
                {{ Form::open(array('action' => 'HomeController@updateCostumer', 'id' => 'update'))}}


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
                    <select id="inputRegion" class="form-control">
                        <option selected>Choose...</option>
                        <option>AGADIR</option>
                        <option>CASABLANCA</option>
                        <option>FES</option>
                        <option>LAAYOUNE</option>
                        <option>MARRAKECH</option>
                        <option>MEKNES</option>
                        <option>OUJDA</option>
                        <option>RABAT</option>
                        <option>SETTAT</option>
                        <option>TANGER</option>
                    </select>
                    </div>

                    
                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <select id="inputCity" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>


                </div>

                <div class="form-group">
                    <label for="inputPoste">Poste</label>
                    <select id="inputPoste" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
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
                            <select id="inputStatus" class="form-control">
                                <option selected>New</option>
                                <option>Needs Shipping</option>
                                <option>Shipped</option>
                                <option>Completed</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div class="form-group">
                            <label for="inputShipping">Shipping Type</label>
                            <select id="inputShipping" class="form-control">
                                <option selected>Poste</option>
                                <option>Home</option>
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

    $('#state').on('change',function(){
    var stateID = $(this).val();    
    if(stateID){
        $.ajax({
           type:"GET",
           url:"{{url('get-city-list')}}?state_id="+stateID,
           success:function(res){               
            if(res){
                $("#city").empty();
                $.each(res,function(key,value){
                    $("#city").append('<option value="'+key+'">'+value+'</option>');
                });
           
            }else{
               $("#city").empty();
            }
           }
        });
    }else{
        $("#city").empty();
    }
        
   });
</script>
@endsection
