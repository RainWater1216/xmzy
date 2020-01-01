$(function () {
    $("#gwc").hover(function () {
        $("#xsgwc").slideDown(300);
        $("#ztgwc").css({
            "color": "#ff6700"
        });
    }, function () {
        $("#xsgwc").slideUp(300);
        $("#ztgwc").css({
            "color": ""
        });
    });

    //搜索
    $(".navsearch input").focus(function(){
        $(this).css({"outline":"none"});
        $("#inputshow").show();
        $(".navsearch").css({"border":"1px solid #ff6700"});
    });
    $(".navsearch input").blur(function(){
        $("#inputshow").hide();
        $(".navsearch").css({"border":""});
    });


    //  小米手机
    $(".lis").mousemove(function () {
        i = $(this).index();
        $(".lisbox").eq(i).show().siblings(".lisbox").hide();
    })
    $(".lis").mouseout(function () {
        $(".lisbox").eq(i).hide();
    })
    // 左侧导航
    $(".lisnav").mousemove(function () {
        i = $(this).index();
        $(".z-lbt-nav-ct").eq(i).show().siblings(".z-lbt-nav-ct").hide();
    })
    $(".lisnav").mouseout(function () {
        $(".z-lbt-nav-ct").eq(i).hide();
    })
    // 二维码
    $("#sj").hover(function () {
        $("#show-rwmshow").show(200);
    }, function () {
        $("#show-rwmshow").hide(200);
    })
    // 滚动轮播
    var ts = setInterval(tt, 1000);
    function tt() {
        $(".ims1").animate({
            marginLeft: "-240px"
        }, 1800, "linear", function () {
            $(this).css({
                marginLeft: "0px"
            });
            $(this).children(".xmct-right-img").first().remove().clone(true).appendTo(".ims1");
        });
    }

    // 定时器
    tim = setInterval(djs, 1000);
    function djs() {
        var xztime = new Date().getTime();
        var jztime = new Date('2020-6-25 23:59:00').getTime();
        var d = h = m = s = 0;
        var sjc = parseInt((jztime - xztime) / 1000);
        if (sjc > 0) {
            d = parseInt(sjc / 86400);
            h = parseInt(sjc / 3600 % 24);
            m = parseInt(sjc / 60 % 60);
            s = parseInt(sjc % 60);
        } else {
            clearInterval(tim);
        }
        $(".xmct-one").html(h);
        $(".xmct-two").html(m)
        $(".xmct-three").html(s)

    }
    // 选项卡
    $("#af").mousemove(function () {
        $("#xmxtright1").show();
        $("#xmxtright2").hide();
    })
    $("#cx").mousemove(function () {
        $("#xmxtright1").hide();
        $("#xmxtright2").show();
    })
    // 轮播图
    var tt = setInterval(imgs, 2000);
    var i = 0;
    $(".z-lbt .img-lb").eq(0).show();
    $(".z-lbt .lic").eq(0).css({ "backgroundColor": "white" });
    function imgs() { 
        $(".z-lbt .img-lb").eq(i).fadeIn(1200).siblings('.img-lb').fadeOut(1200);
        $(".z-lbt .lic").eq(i).css({ "backgroundColor": "white" }).siblings().css({ "backgroundColor": "" });
       i++;  
       if (i > 2) {
            i = 0;
        }
    }
    $(".z-lbt .lic").mousemove(function () {
        clearInterval(tt);
        i=$(this).index();
        imgs();
    })
    $(".z-lbt .lic").mouseout(function () {
        tt = setInterval(imgs, 2000);
    })
})



