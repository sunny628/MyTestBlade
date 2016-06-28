<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>@yield('title') -qmjy</title>
    
    {{-- fis 脚本模块管理 --}}
    @framework('/static/js/mod.js')
    @require('/static/css/normalize.css')

    <!--[if lt IE 9]>
    <script src="@uri('/static/js/html5shiv.js')" type="text/javascript"></script>
    <script src="@uri('/static/js/es5-shim.js')" type="text/javascript"></script>
    <script src="@uri('/static/js/css3-mediaqueries.js')" type="text/javascript"></script>
    <![endif]-->

    @placeholder('styles')
</head>
<!--[if lt IE 7]> <body class="lt-ie10 lt-ie9 lt-ie8 lt-ie7" > <![endif]-->
<!--[if IE 7]> <body class="lt-ie10 lt-ie9 lt-ie8 ie7" > <![endif]-->
<!--[if IE 8]> <body class="lt-ie10 lt-ie9 ie8" > <![endif]-->
<!--[if IE 9]> <body class="lt-ie10 ie9" > <![endif]-->
<!--[if gt IE 9]> -->

<body>
 <!--[endif]-->
@script()


@endscript
<div id="root-wrapper">
    @yield('body')
    
</div>



@placeholder('scripts')
</body>
</html>
