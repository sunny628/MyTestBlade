<div class="header-wrapper">
    <div class="row-m clearfix">
        <h1 class="logo-area col-l">
            <a title="全民教育" href="/"><img src="/static/images/logo.png" alt="全民教育" /></a>
        </h1>

        <div class="slogan-area col-l">
            <a href="/">找老师上 全民教育!</a>
        </div>

        <!---nav-area{-->
        <div class="nav-area col-r">
            <div class="table">
                <div class="table-row">
                    @widget('./nav-item-services.blade.php')
                   
                    <div class="nav-item  table-cell customer-entry">
                        <a href="">登录</a>
                        <i class="l-sp"></i>
                        <a href="">注册</a>
                    </div>
                    <div class="nav-item  table-cell ">
                        <a href="">机构登录</a>
                    </div>
                    <div class="nav-item  table-cell  studio-entry">
                        <div class="studio-entry-inner">
                            <a href="">机构入驻</a>
                            <i class="l-sp"></i>
                            <a href="">老师入驻</a>                          
                        </div>
                    </div>
                 
                    <!--user-entry{-->
                    <div class="nav-item table-cell user-entry dropdown">
                        <span class="button">                       
                            <i class="default-avatar"></i>
                            <a href="" class="text">您好!朋友</a>                         
                            <i class="iconfont icon-arrow-down"></i>
                        </span>
                        <div class="dropdown-panel">
                                <a class="menu-item" href="">收藏夹</a>
                                <a class="menu-item" href="">浏览历史</a>
                                <a class="menu-item" href="">资料设置</a>
                                <i class="h-sp"></i>
                                <a class="menu-item" href="" >切换到老师登录</a>
                                <i class="h-sp"></i>                         
                            <a class="menu-item highlight" href="">退出登录</a>
                        </div>
                    </div>
                    <!--user-entry}-->

                </div>
            </div>
        </div>
        <!--nav-area}-->

    </div>
</div>

@require("header.less")
