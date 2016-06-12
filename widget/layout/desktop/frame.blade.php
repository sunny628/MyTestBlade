@extends('/widget/layout/frame.blade.php')

{{--通用模板数据 主要由前端开发维护--}}

@section('body')

    {{--基础样式--}}
    @require('/widget/m/m.less')
    @yield("top")
    
    @widget('header/header.blade.php')
    
    @yield("content")
    
    @widget('footer/footer.blade.php')
    
    @widget('sidebar/sidebar.blade.php')
    
    @yield("resources")


 @stop
 
 
 