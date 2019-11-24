@extends('layouts.app')


@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif


                    <table class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                            @foreach($ret as $key => $data)
                            <tr>    
                            <th>{{$data->id}}</th>
                            <th>{{$data->name}}</th>
                            <th>{{$data->phone}}</th>
                            <th>{{$data->address}}</th>
                            <th>{{$data->order_id}}</th>  
                            <th>{{$data->created_at}}</th>   
                            <th>{{$data->updated_at}}</th>   
                            <th>{{$data->status}}</th>                 
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
