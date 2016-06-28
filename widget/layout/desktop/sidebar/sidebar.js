var $ = require("jquery");
var store = require("common/store/store.js");

var $win = $(window);

/*通过<a href="#" > 就可以指向顶部,
下面实现 在窗口改变大小  和 有滚动条的时候  触发scrollHandle事件
会让这个按钮显示靠上 而不是一直居于底部
 */
(function () {
    var $btn = $('.goto-top-button a');
    var show = true;
    $win.on('scroll resize', scrollHandle);
    scrollHandle();

    function scrollHandle() {
        var scrollTop = $win.scrollTop();
        if (scrollTop < 200 && show) {
            $btn.stop().fadeOut(200);
            show = false;
        } else if (scrollTop > 200 && !show) {
            $btn.stop().fadeIn(200);
            show = true;
        }
    }
})();

(function () {
    $(document).on('click', '.J-toggle-show-wechat-qrcode', function () {
        var $btn = $(this);
        var $wrap =  $('.wechat-qrcode-button');
        if (!$wrap.hasClass('closed')) {
            $wrap
                .removeClass('opened')
                .addClass('closed fx');
            store.set('closed-wechat-qrcode', true);
        } else {
            $wrap
                .removeClass('closed')
                .addClass('opened fx');

            store.set('closed-wechat-qrcode', false);
        }
    });

    $(function () {
        var $wrap = $('.wechat-qrcode-button');

        $wrap.css('display', 'block');

        if (store.get('closed-wechat-qrcode')) {
            $wrap.addClass('closed');
        } else {
            $wrap.addClass('opened');
        }
        $wrap.css('display', 'block');
    });

})();
/*
这里用store.set()和store.get()是存储当前的微信的状态
如果是关闭的,下次用户进来的时候也就是重新加载了页面之后  微信面板还是关闭的,
如果是打开的 下次进来就默认打开

*/ 
