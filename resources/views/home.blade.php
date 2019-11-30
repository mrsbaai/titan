@extends('layouts.app')


@section('content')


<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header"><h4>Edit an Order</h4></div>

                <div class="card-body">
                        {{ Form::open(array('action' => 'HomeController@editOrder', 'id' => 'edit'))}}
                                <div class="form-row align-items-center">
                                        <div class="col-auto">
                                          <label class="sr-only" for="inlineFormInput">Order #: </label>
                                          <input type="text" class="form-control mb-2" id="id" name="id" placeholder="Order #">
                                        </div>
                                      
                                        <div class="col-auto">
                                          <button type="submit" class="btn btn-primary mb-2">Edit</button>
                                        </div>
                                </div>
                                
                        {{ Form::close() }}

                </div>
            </div>
        </div>
    </div>
</div>

<br/><br/>



<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header"><h4>{{$title}} - ({{count($ret)}} in total)</h4></div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif


                    <table class="table" name="orders" id="orders">
                        <thead class="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Costumer Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Time</th>
                            <th></th>
              
                        </tr>
                        </thead>
                        <tbody>
                            @foreach($ret as $key => $data)
                            <tr>    
                            <th>{{$data->id}}</th>
                            <th>{{$data->name}}</th>
                            <th>{{$data->phone}}</th>
                            <th>{{$data->status}}</th>
                            <th>{{$data->created_at}}</th>    
                            <th><a href="/consult/{{$data->id}}/{{$data->status}}"><button type="button" class="btn btn-success">Consult</button></a></th>              
                            </tr>
                            @endforeach
                        
                        </tbody>
                    </table>
            <script type="text/javascript">
                $(document).ready(function(){         
                    refreshTable();
                });

                function refreshTable(){
                  
                    var table = document.getElementById('orders');
        
                    for (var r = 1, n = table.rows.length; r < n; r++) {
                        table.rows[r].cells[4].innerHTML = "[" + moment(moment.utc(table.rows[r].cells[4].innerText)).fromNow() + "]";
                    }
                }
              
                     
            </script>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection


