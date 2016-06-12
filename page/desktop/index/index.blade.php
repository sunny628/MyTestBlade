@extends('/widget/layout/desktop/frame.blade.php')

@section('title', '欢迎使用 fis3 + laravel 解决方案')
@section('content')

<div class="container">
    <h3>
      举个栗子~~~
    </h3>
</div>
@stop


@section('resources')

  @script()
    var thisPage = require('./index.js'); 
  @endscript

 @stop
 
 


