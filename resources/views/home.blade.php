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

                    @foreach($petani as $key => $data)
                        <tr>    
                        <th>{{$data->id_user}}</th>
                        <th>{{$data->nama_user}}</th>
                        <th>{{$data->alamat}}</th>
                        <th>{{$data->no_telp}}</th>
                        <th>{{$data->id_lokasi}}</th>                 
                        </tr>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
