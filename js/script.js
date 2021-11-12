$(function () {

    // 滑動至指定位置
    $("nav a").click(function () {
        var btn = $(this).attr("href");  //返回取得屬性與值
        var pos = $(btn).offset();  //抓取相對的座標位置
        $("html,body").animate({ scrollTop: pos.top }, 1000);  //變數pos的
    });

    //捲動滑入的效果
    $('.box').smoove({

        offset: '40%',
    });

    //
    (function ($) {
        $.fn.timeline = function () {
            var selectors = {
                id: $(this),
                item: $(this).find(".timeline-item"),
                activeClass: "timeline-item--active",
            };
            selectors.item.eq(0).addClass(selectors.activeClass);
            var itemLength = selectors.item.length;
            $(window).scroll(function () {
                var max, min;
                var pos = $(this).scrollTop();
                selectors.item.each(function (i) {
                    min = $(this).offset().top;
                    max = $(this).height() + $(this).offset().top;
                    var that = $(this);
                    if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                        selectors.item.removeClass(selectors.activeClass);
                        selectors.item.last().addClass(selectors.activeClass);
                    } else if (pos <= max - 80 && pos >= min) {
                        selectors.item.removeClass(selectors.activeClass);
                        $(this).addClass(selectors.activeClass);
                    }
                });
            });
        };
    })(jQuery);

    $("#timeline-1").timeline();

});