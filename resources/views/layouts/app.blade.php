<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="http://www.codermen.com/js/jquery.js"></script>
    <script src="{{ asset('js/moment.js') }}"></script>
    <script>
            moment.lang('precise-en', {
                relativeTime : {
                    future : "In %s",
                    past : "%s ago",
                    s : "%d seconds", //see https://github.com/timrwood/moment/pull/232#issuecomment-4699806
                    m : "A minute",
                    mm : "%d minutes",
                    h : "An hour",
                    hh : "%d hours",
                    d : "A day",
                    dd : "%d days",
                    M : "A month",
                    MM : "%d months",
                    y : "a year",
                    yy : "%d years"
                }
            });

            moment.lang('precise-en');
        </script>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <link href="{{ asset('vendor/table-view/bootstrap.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('vendor/table-view/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('vendor/table-view/css/themes/tableview-a.css') }}" rel="stylesheet" />
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/home') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                            <li><a href="{{ route('orders-pdf') }}">Download Orders Needing Shipping</a></li>

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                            </li>
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    
                                    <a class="dropdown-item" href="/home">All Orders</a>
                                    <a class="dropdown-item" href="/new">New Orders</a>
                                    <a class="dropdown-item" href="/shipped">Shipped Orders</a>
                                    <a class="dropdown-item" href="/processed">Processed Orders</a>
                                    <a class="dropdown-item" href="/completed">Completed Orders</a>
                                    <a class="dropdown-item" href="/deleted">Deleted Orders</a>
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>

   

</body>
</html>
