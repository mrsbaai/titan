@extends('layouts.app')


@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">New Orders</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif


                    <table class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Costumer Name</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th></th>
              
                        </tr>
                        </thead>
                        <tbody>
                            @foreach($ret as $key => $data)
                            <tr>    
                            <th>{{$data->id}}</th>
                            <th>{{$data->name}}</th>
                            <th>{{$data->phone}}</th>
                            <th><script>document.write(moment(moment.utc{{$data->created_at}}).fromNow());</script></th>    
                            <th><a href="/consult/{{$data->id}}"><button type="button" class="btn btn-success">Consult</button></a></th>              
                            </tr>
                            @endforeach
                        
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection


