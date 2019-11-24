@extends('layouts.app')


<script src="{{ asset('vendor/table-view/js/jquery-1.9.1.min.js') }}"></script>

@include('table-view::scripts')

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

                    @include('table-view::container', ['tableView' => $usersTableView])


                </div>
            </div>
        </div>
    </div>
</div>
@endsection
