$(function(){

    // 滑動至指定位置
    $("nav a").click(function(){
        var btn = $(this).attr("href");  //返回取得屬性與值
        var pos = $(btn).offset();  //抓取相對的座標位置
        $("html,body").animate({scrollTop:pos.top},1000);  //變數pos的
    });
    
    //捲動滑入的效果
    $('.box').smoove({

        offset:'40%',
    });








});