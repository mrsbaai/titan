@extends('layouts.app')


@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Orders</div>

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
                            <th><a href="/consult/{{$data->id}}"><button type="button" class="btn btn-success">Consult</button></a></th>              
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


