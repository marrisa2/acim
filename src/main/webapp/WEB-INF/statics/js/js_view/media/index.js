/**
 * Created by Administrator on 2018/1/29.
 */
$(function(){
    //header
    $('#nav-wrapper li a').hover(function(){
        $(this).css('color','#1ca6fc')
    },function(){
        $(this).css('color','#ffffff')
    });

    // //产品系列
    // $('#productList-slide').click(function(){
    //     $('.point').css('left', $("#productList-slide").offset().left + $("#productList-slide").innerWidth() / 2);
    //     $('.point').slideToggle()
    //     $('#productList-box').slideToggle()
    // });

    $("#productList-slide").hover(function(){
        $('.point').css('left', $("#productList-slide").offset().left + $("#productList-slide").innerWidth() / 2);
        $('#productList-box').show();

    },function(e){

        var productList_Top = $("#productList-box").offset().top;
        var productList_width = $("#productList-box").width();
        var  productList_left = $("#productList-box").width();

        var productListSide_top = $("#productList-slide").offset().top;;
        var productListSide_width = $("#productList-slide").height();

        var x = e.pageX;
        var y = e.pageY;
        alert(x  + " " +  y);

        if(y>=(productListSide_top + productListSide_width) &&  y<=productList_Top

        ){
           // $('#productList-box').show();
        }else{
            $('#productList-box').hide();
        }


    });


    $(".productList-box ").hover(

        function(){
            $('#productList-box').show();

        },
        function(){
            $('#productList-box').hide();

        }
    );







    $('.productList li a').hover(function(){
        $(this).css('color','#1ca6fc')
    },function(){
        $(this).css('color','#666')
    })

    //智能解决方案tab
    var thisIndex = 0;
    $('#solutionList li').click(function(){
        $('#solutionList li').removeClass('active');
        $('.solutionText-box').stop().animate({"opacity":"0"});
        $(this).addClass('active');
        $(".line").stop().animate({"left":$(this).index()*$(this).width()});
        $('.solutionText-box').eq($(this).index()).stop().animate({"opacity":"1"});
        //图片变色
        $(".icon-default").show();
        $(".icon-default").eq($(this).index()).hide();
        $(".icon-show").hide();
        $(".icon-show").eq($(this).index()).show();
        thisIndex = $(this).index();
    });

    //鼠标移入‘智能解决方案’效果
    $('#solutionList li').on("mouseover",function(){
        $('#solutionList li').removeClass('active');
        $(this).addClass('active');
        $('#solutionList li').eq(thisIndex).addClass('active');
        $(".icon-default").show();
        $(".icon-default").eq($(this).index()).hide();
        $(".icon-default").eq(thisIndex).hide();
        $(".icon-show").hide();
        $(".icon-show").eq($(this).index()).show();
        $(".icon-show").eq(thisIndex).show();
    });
    $('#solutionList li').on("mouseout",function(){
        $('#solutionList li').removeClass('active');
        $('#solutionList li').eq(thisIndex).addClass('active');
        $(".icon-default").show();
        $(".icon-default").eq(thisIndex).hide();
        $(".icon-show").hide();
        $(".icon-show").eq(thisIndex).show();
    });

//    关于我们的产品tab
    $('#sidenav-box ul li').hover(function(){
        $(this).css({'color':'#1ca6fc','background':'rgba(0,0,0,0.3)'});
        $('.productDetails').stop().animate({"opacity":"0"});
        $('#product-line').stop().animate({"top":$(this).index()*(parseInt($(this).height())+parseInt($(this).css("padding-top"))+parseInt($(this).css("padding-bottom"))+parseInt($(this).css("margin-bottom")))},400);
        $('.productDetails').eq($(this).index()).stop().animate({'opacity':'1'},400)
    },function(){
        $(this).css({'color':'#ffffff','background':''})
    })

     // footer
     $('.footer-box ul li a').not('.footer-box ul:last-child').hover(function(){
       $(this).css('color','#1ca6fc')
     },function(){
       $(this).css('color','#c0c9cd')
     })


    //微博变色
    // $('#weibo').hover(function(){
    //     $('.weibo-active').show();
    //     $('.weibo-no').hide();
    // },function(){
    //     $('.weibo-active').hide();
    //     $('.weibo-no').show();
    // })
    //微信变色 二维码弹出
    // $('#weixin').hover(function(){
    //     $('.weixin-active').show();
    //     $('.weixin-no').hide();
    //     $('#erweima').show()
    // },function(){
    //     $('.weixin-active').hide();
    //     $('.weixin-no').show();
    //     $('#erweima').hide()
    // })

    $('.weixin-img').hover(function () {
        $('#erweima').toggle()
    })

//    滚动页面显示返回顶部按钮
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('#backTop').fadeIn();
        }
        else {
            $('#backTop').fadeOut();
        }
    });
// 返回顶部
    $('#backTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });

});
