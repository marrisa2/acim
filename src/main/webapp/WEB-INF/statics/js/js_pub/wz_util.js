/**
 *
 */

var loginUserObj = null;

function  setLoginUserObj(userObj){
    loginUserObj = userObj;
}

function getLoginUserObj(){
    return loginUserObj;
}



/**
 *  退出当前登录
 */
function login() {
    window.location = "login";
}





function head_menu(){
    $('.nav-list>li').hover(function(){
        var $ul=$(this).find('ul');
        var oW=$(this).width();//li
        var otrigW=$(this).find('.trig').width();
        var oNavListL=$('.nav-list').offset().left;
        var oTL=$(this).offset().left-oNavListL;//距离最左边的距离
        var oTR=$('.nav-list').width()-oTL-oW;//距离最右边的距离
        console.log(oNavListL+":"+oTL);

        if($ul.find('li').length>0){
            $('.second-bg').show();
            $(this).find('.trig').show();
            $ul.css('left',-oLeft+'px');
            $(".wz_context").css('top','129px'); /// 设置主页面的高度

            $ul.show();
            var sum=0;
            var oLeft=0;
            for(var i=0;i<$ul.find('li').length;i++){
                sum+=$ul.find('li').eq(i).width()+4;
            }
            $ul.width(sum);
            oLeft=(sum-oW)/2;
            if(oLeft>oTL){//到达左侧边界
                oLeft=oTL;
                $ul.css('left',-oLeft+'px');
                return ;
            }
            if(oLeft>oTR){
                $ul.css('right',-oTR+'px');
                return ;
            }
        }
    },function(){
        $('.second-bg').hide();
        $(this).find('ul').hide();
        $(this).find('.trig').hide();
        $(".wz_context").css('top','85px'); /// 设置主页面的高度

    });
}



/**
 * @auther marrisa
 * 返回应用名称：如http://localhost:8080/web/index.html 返回web
 */
function getURL() {
    var resultURL;
    var urlStr = document.location.pathname;
    urlStr = urlStr.substring(1);
    resultURL = urlStr.substring(0, urlStr.indexOf('/'));
    return resultURL;
}

/**
 * 生产验证码
 * @param code_id 验证码form id
 * @returns
 */
function createCode(code_id) {
    code = "";
    var codeLength = 5; //验证码的长度
    // var checkCode = $("#code_id");//document.getElementById("checkCode");
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'); //随机数
    for(var i = 0; i < codeLength; i++) { //循环操作
        var charIndex = Math.floor(Math.random() * 62); //取得随机数的索引
        code += random[charIndex]; //根据索引取得随机数加到code上
    }
    $("#" +code_id).val(code); //把code值赋给验证码
}

//校验验证码
function validate(code_input) {
    var inputCode = document.getElementById("code_input").value.toUpperCase(); //取得输入的验证码并转化为大写
    if(inputCode.length <= 0) { //若输入的验证码长度为0
        alert("请输入验证码！"); //则弹出请输入验证码
    } else if(inputCode != code) { //若输入的验证码与产生的验证码不一致时
        alert("验证码输入错误！"); //则弹出验证码输入错误
        createCode(); //刷新验证码
    } else { //输入正确时
        alert("^-^"); //弹出^-^
    }
}

function leftNav(accordion){
    $('#'+accordion).find('.link').on( touchEvents.touchtap,(function(){
        //alert("link click");
        if($(this).parent('li').find('ul').length>0){
            if($(this).siblings('ul').is(':hidden')){
                $(this).parent('li').addClass('open').children('ul').show();
                $(this).parent('li').siblings().removeClass('open').children('ul').hide();
            }else{
                $(this).parent('li').removeClass('open').children('ul').hide();
            }
        }else{
            $(this).parent('li').siblings().removeClass('open');
        }



        $(this).parent('li').siblings().children('ul').hide();
        $(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');


        if($(this).attr("class")=='link'){
            $(this).removeClass("current")
        }

        //alert("link");


    }));
    // alert(accordion);

    $('.submenu').find('li').click(function(){
        $('.accordion').find('li').removeClass('current');

        // alert($(this).find("ul").length==0);

        if( $(this).find("ul").length==0){
            $(this).addClass('current');
        }
        event.stopPropagation();

    });
    /*$('.submenu li').click(function () {

    	$('.accordion').find('li').removeClass('current');

        alert($(this).find("ul").length==0);

        if( $(this).find("ul").length==0){
        	$(this).addClass('current');
        }

		//alert("submenu li");

	});*/
}


/**
 * @auther marrisa
 * 返回应用名称：如http://localhost:8080/web/index.html 返回web
 */
function getURL() {
    var resultURL;
    var urlStr = document.location.pathname;
    urlStr = urlStr.substring(1);
    resultURL = urlStr.substring(0, urlStr.indexOf('/'));
    return resultURL;
}

/**
 * 生产验证码
 * @param code_id 验证码form id
 * @returns
 */
function createCode(code_id) {
    code = "";
    var codeLength = 5; //验证码的长度
    // var checkCode = $("#code_id");//document.getElementById("checkCode");
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'); //随机数
    for(var i = 0; i < codeLength; i++) { //循环操作
        var charIndex = Math.floor(Math.random() * 62); //取得随机数的索引
        code += random[charIndex]; //根据索引取得随机数加到code上
    }
    $("#" +code_id).val(code); //把code值赋给验证码
}

//校验验证码
function validate(code_input) {
    var inputCode = document.getElementById("code_input").value.toUpperCase(); //取得输入的验证码并转化为大写
    if(inputCode.length <= 0) { //若输入的验证码长度为0
        alert("请输入验证码！"); //则弹出请输入验证码
    } else if(inputCode != code) { //若输入的验证码与产生的验证码不一致时
        alert("验证码输入错误！"); //则弹出验证码输入错误
        createCode(); //刷新验证码
    } else { //输入正确时
        alert("^-^"); //弹出^-^
    }
}

/**
 * 设置div当前屏幕的高度
 * @returns
 */

function setDivHeigth(obj,objTo){

    //alert(document.body.clientWidth);
    //alert("setDivHeigth");
    var windowsHeight = window.screen.height; //document.body.clientHeight
    var objTop = obj.offset().top;
    objTo.css("height",windowsHeight-objTop);
    //alert(" div height" + windowsHeight);

}


function circleMenu(){

    var or = 150;
    var ir = 50;
    var mWidth = 30;
    var mDLen = Math.sqrt(2 * Math.pow(mWidth,2));
    //第1菜单块中心点与以o(150,150)为圆心的的X轴的夹角为-90(-PI/2), 求菜单块中心点坐标
    var m1X = parseInt( (Math.cos( -1 * Math.PI / 2 ) * (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m1Y = parseInt( (Math.sin( -1 * Math.PI / 2 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m1").width(mWidth);
    $("#m1").height(mWidth);
    $("#m1").offset( {top:m1Y,left:m1X} );

    //第2菜单块中心点与以o(150,150)为圆心的的X轴的夹角为-45(-PI/4), 求菜单块中心点坐标
    var m2X = parseInt( (Math.cos( -1 * Math.PI / 4 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m2Y = parseInt( (Math.sin( -1 * Math.PI / 4 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m2").width(mWidth);
    $("#m2").height(mWidth);
    $("#m2").offset( {top:m2Y,left:m2X} );

    //第3菜单块中心点与以o(150,150)为圆心的的X轴的夹角为0(0), 求菜单块中心点坐标
    var m3X = parseInt( (Math.cos( 0 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m3Y = parseInt( (Math.sin( 0 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m3").width(mWidth);
    $("#m3").height(mWidth);
    $("#m3").offset( {top:m3Y,left:m3X} );

    //第4菜单块中心点与以o(150,150)为圆心的的X轴的夹角为45(PI/4), 求菜单块中心点坐标
    var m4X = parseInt( (Math.cos( Math.PI / 4 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m4Y = parseInt( (Math.sin( Math.PI / 4 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m4").width(mWidth);
    $("#m4").height(mWidth);
    $("#m4").offset( {top:m4Y,left:m4X} );

    //第5菜单块中心点与以o(150,150)为圆心的的X轴的夹角为90(PI/2), 求菜单块中心点坐标
    var m5X = parseInt( (Math.cos( Math.PI / 2 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m5Y = parseInt( (Math.sin( Math.PI / 2 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m5").width(mWidth);
    $("#m5").height(mWidth);
    $("#m5").offset( {top:m5Y,left:m5X} );

    //第6菜单块中心点与以o(150,150)为圆心的的X轴的夹角为135(0.75PI), 求菜单块中心点坐标
    var m6X = parseInt( (Math.cos( 0.75 * Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m6Y = parseInt( (Math.sin( 0.75 * Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m6").width(mWidth);
    $("#m6").height(mWidth);
    $("#m6").offset( {top:m6Y,left:m6X} );

    //第7菜单块中心点与以o(150,150)为圆心的的X轴的夹角为180(PI), 求菜单块中心点坐标
    var m7X = parseInt( (Math.cos( Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m7Y = parseInt( (Math.sin( Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m7").width(mWidth);
    $("#m7").height(mWidth);
    $("#m7").offset( {top:m7Y,left:m7X} );

    //第8菜单块中心点与以o(150,150)为圆心的的X轴的夹角为-135(PI), 求菜单块中心点坐标
    var m8X = parseInt( (Math.cos( -0.75 * Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m8Y = parseInt( (Math.sin( -0.75 * Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m8").width(mWidth);
    $("#m8").height(mWidth);
    $("#m8").offset( {top:m8Y,left:m8X} );

    //===============================================

    var preX,preY;//上一次鼠标点的坐标
    var curX,curY;//本次鼠标点的坐标
    var preAngle;//上一次鼠标点与圆心(150,150)的X轴形成的角度(弧度单位)
    var transferAngle;//当前鼠标点与上一次preAngle之间变化的角度

    var a = 0;

    for(var i = 0 ; i < 15 ; i++){
        $("body").append("<br>");
    }

    //点击事件
    $("#outerDiv").mousedown(function(event){
        preX = event.clientX;
        preY = event.clientY;
        //计算当前点击的点与圆心(150,150)的X轴的夹角(弧度) --> 上半圆为负(0 ~ -180), 下半圆未正[0 ~ 180]
        preAngle = Math.atan2(preY - 150, preX - 150);
        //移动事件
        $("html").mousemove(function(event){
            curX = event.clientX;
            curY = event.clientY;
            //计算当前点击的点与圆心(150,150)的X轴的夹角(弧度) --> 上半圆为负(0 ~ -180), 下半圆未正[0 ~ 180]
            var curAngle = Math.atan2(curY - 150, curX - 150);
            transferAngle = curAngle - preAngle;
            a += (transferAngle * 180 / Math.PI);
            $('#outerDiv').rotate(a);

            for( var i = 1 ; i <= 8 ; i++ ){
                $("#m"+i).rotate(-a);
            }
            preX = curX;
            preY = curY;
            preAngle = curAngle;
        });
        //释放事件
        $("html").mouseup(function(event){
            $("html").unbind("mousemove");
        });
    });

}


/**
 * 进度条方法
 */
function progressBar(h,w,isP,obj){
   //  alert("进度条");
    //a 底色，b 加载色 , w 展示宽度，h 展示高度
    var a="#f58400";
    var b="#dfdfdf";
    var w= w+"px";
    var h= h +"px";
    // alert($("."+obj+".progressBar").length);
    var div=$('.'+obj).find(".progressBar");//$(".progressBar");//进度条要插入的地方
  //  alert(div.length);
    var barb=function(){
        div.each(function(){
            var width=$(this).attr('w');
            var barbox='<dl class="barbox'+obj+'"><dd class="barline'+obj+'">' +
                '<div w="'+width+'" class="charts'+obj+'" style="width:0px;height:16px;"><d></d></div>' +

                '</dd></dl>' +
                '' ;
            $(this).append(barbox);
              // alert(barbox);
        })
    }

    var amimeat=function(){
        $(".charts"+obj).each(function(i,item){
            var wi=parseInt($(this).attr("w"));

            $(item).animate({width: wi+"%"},10,function(){//一天内走完
                // alert()
                if(isP==null || isP==false) {
                    $(this).children('d').html(wi + "%");
                }else{

                    $(".barbox"+obj).find(".dot").show();
                }

            });
        });
    }




    var barbCss=function(a,b){
        $(".barbox"+obj).css({
            "height":h,
            "line-height":h,
            "text-align":"center",
            // "border":"1px solid red",
            "margin":"0px auto 0px auto",

            "color":"#fff"
        });
        $(".barbox"+obj+" >dd").css({
            "float":"left",
            "margin-left":"-4px"
        });
        $(".barline"+obj).css({
            "width":w,
            "background":b,
            "height":h,
            "overflow":"hidden",
            "display":"inline",
            "position":"relative",
            "left":"0px",
            // "border":"1px solid red",
            "border-radius":"8px"

        });
        $(".barline"+ obj+">d").css({
            "position":"absolute",
            "top":"0px"
        });
        $(".charts"+obj).css({
            "background":a,
            "height":h,
            "width":"0px",
            "overflow":"hidden",
            "font-size":'12px',
            // "border":"1px solid red",
            "border-radius":"8px"
        });

        // $(".charts"+obj+":after").css({
        //     "display":"block",
        //     "clear":"both"
        // });

        // $(".barbox"+obj).find(".dot").css({
        //     "background":"#000",
        //     "height":"10px",
        //     "width":"10px",
        //     "border-radius":"5px",
        //     "position":"absolute",
        //     'display':"none",
        //
        // });


    }
    barb();
    amimeat();
    barbCss(a,b);
}

/**
 * 唯一ID uuid
 * @returns {string}
 */
var uuid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
        function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
};


/**
 *
 * 根据X，Y 坐标 ，角度，计算出 X2， Y2 坐标
 */
function  getXYindex(x, y ,R, r,index){

    var xyList = new Array();
    var x2 = 0.0;
    var y2 = 0.0

    if(index == null){
        x2 = x + r *  Math.cos( R * Math.PI / 180);
        y2 = y + r * (1+r) * Math.sin(R*Math.PI/180);
        return {x:x2, y:y2};
    }else {
        for(var i=0;i<index;i++){
            x2 = x + r *  Math.cos( R*(1+i) * Math.PI / 180);
            y2 = y + r * Math.sin(R *(1+i)*Math.PI/180);
            xyList[i] = {x:x2, y:y2};
        }
        return xyList;
    }
}



/**
 * 根据 xy X2 Y2  坐标 找到旋转的角度
 */
function getRot(x,y, x1,y2){
    var x = Math.abs(x1-x2);
    var y = Math.abs(y1-y2);
    var z = Math.sqrt(x*x+y*y);
    var rotat = Math.round((Math.asin(y/z)/Math.PI*180));

    var x = Math.abs(x1-x2);
    var y = Math.abs(y1-y2);
    var z = Math.sqrt(x*x+y*y);
    var rotat = Math.round((Math.asin(y/z)/Math.PI*180));

// 第一象限
    if (x2 >= x1 && y2 <= y1) {
        rotat = rotat;
    }
// 第二象限
    else if (x2 <= x1 && y2 <= y1) {
        rotat = 180 - rotat;
    }
// 第三象限
    else if (x2 <= x1 && y2 >= y1) {
        rotat = 180 + rotat;
    }
// 第四象限
    else if(x2 >= x1 && y2 >= y1){
        rotat = 360 - rotat;
    }
    return rotat; //真实的角度
}


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

    'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    }
    else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

// transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( classie );
    } else {
        // browser global
        window.classie = classie;
    }

})( window );





var touchEvents = {
    touchstart: "touchstart",
    touchmove: "touchmove",
    touchend: "touchend",
    touchtap: "tap",

    /**
     * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
     */

    initTouchEvents:function () {
        // alert("ddd ");
        if (isPC()) {
            this.touchstart = "mousedown";
            this.touchmove = "mousemove";
            this.touchend = "mouseup";
            this.touchtap = "click";
        }
    }

};

touchEvents.initTouchEvents();

/***
 * 判断是否pc登录
 * @returns {boolean}
 */

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    // alert(flag);
    return flag;
}

/**
 * 获取XY坐标
 */
function getXYcordinate(e){
    e.preventDefault(); // 阻止浏览器默认动作
    var x;
    var y ;
    if(isPC() ){
        // alert(e.pageX + "  " + e.screenX );
        x = e.pageX;
        y = e.pageY;
    }else {
        // alert("ddd");
        var touch = e.originalEvent.targetTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    }
    // alert(" x 坐标是 " + x + "   y 坐标是 " + y )
    return {x:x,y:y};
}


/**
 * 页面Pages设置；
 * @data 2017-12-28
 * @param pageObj
 * @param divObj
 */
var pages= function(pageObj,divObj) {


    this.totalPages = 0;
    this.remainPages = 0;
    this.percentPages = 0;
    this.currentPages = pageObj.currentPages;
    this.pageTextObj = divObj;
    this.barWidth = $(".barlinebookFooterDiv").width();
    this.dotLeft = $(".barlinebookFooterDiv").offset().left;
    this.w;
    this.initPage();


}

    /**
     * 滚动条变化，页面变化
     * @param x
     */
    pages.prototype.percentChangePages = function(x){
        // var w =0
        // alert(x + " dddd ");
        if(x< this.dotLeft){
            this.w = 1;
        }else if(x> (this.barWidth + this.dotLeft) ){
            this.w = this.barWidth;
        }else {
            this.w = x- this.dotLeft;
        }

        this.currentPages  = Math.ceil( (this.w/(this.barWidth/this.totalPages)));
        if(this.currentPages > this.totalPages){
            this.currentPages = this.totalPages;
        }
        this.remainPages = this.totalPages - this.currentPages;
        this.setPages(true);
    }

    /**
     * 滚动条变化，改变页面信息
     */
    pages.prototype.scrollChangePage = function(scroolHeight){
        this.currentPages = Math.ceil((scroolHeight / this.pageTextObj.height())) +1;

        // alert(this.currentPages);
        this.w = parseFloat(this.currentPages / this.totalPages * this.barWidth).toFixed(1);

        if(this.w < this.dotLeft){
            this.w = 0;
            // this.currentPages =1;

        }else if(this.w > this.barWidth ){
            this.w = this.barWidth;
        }
        this.remainPages = this.totalPages - this.currentPages;
        this.setPages(false);


    }


    /**
     * 分页初始化
     */
    pages.prototype.initPage = function(){
        // // alert(divObj.scrollHeight);

        // alert(this.pageTextObj.prop('scrollHeight'));
        var scrollHeight = parseInt(this.pageTextObj.prop('scrollHeight'));
        // alert(scrollHeight);
        var height =  parseInt( this.pageTextObj.height());
        // alert(this.currentPages);
        this.totalPages = Math.ceil(scrollHeight/ height);
        this.remainPages = this.totalPages - this.currentPages;
        this.percentPages =  parseFloat(this.currentPages / this.totalPages).toFixed(1) ;
        this.w = Math.ceil(this.barWidth * this.percentPages);
         // alert(this.w + " w is " + this.percentPages);
        if(this.w < this.dotLeft){
            this.w = 0;
        }else if(this.w > this.barWidth ){
            this.w = this.barWidth;
        }

        $("#totalPages").html(this.totalPages);
        // this.addEvents();
        addDodEvents(this);
        this.setPages(true);
    }

    pages.prototype.setPages = function(isScroll){

        $("#currentPages").html(this.currentPages);
        $("#remainPages").html(this.remainPages);
        this.pageTextObj.scrollTop=(this.currentPage-1)*parseInt(this.pageTextObj.offsetHeight);
        $(".chartsbookFooterDiv").css({"width": this.w +"px"});
         // alert((this.dotLeft+ this.w -10 ) + "w " );
        $(".dot").css({"left": ( parseInt(this.dotLeft)+ parseInt(this.w) -10 )});
        if(isScroll){
            var scrollTop = (this.currentPages - 1 ) * parseInt(this.pageTextObj.height());
            this.pageTextObj.animate({scrollTop:scrollTop},0);
        }
    }

    pages.prototype.addEvents = function(){
        // alert("dddd");
        $(".dot").bind(touchEvents.touchstart,function(e){  //ontouchmovealert("ddd");
            $(this).bind(touchEvents.touchmove,function(e){
                    var xyMove = getXYcordinate(e);
                    this.percentChangePages(parseFloat( xyMove.x ));
                }
            );

            /*$(this).bind(touchEvents.touchend,function(e){
                    //
                    // this.xyMove = getXYcordinate(e);
                    // var x = this.xyMove.x;
                    // var w =0
                    // if(x<l){
                    //     w = 0;
                    // }else if(x> (width+l) ){
                    //     w = width;
                    // }else {
                    //     w = x- l;
                    // }
                    //
                    // $(".chartsbookFooterDiv").css({"width": w +"px"});
                    // $(this).css({"left": ( l+ w -10 )});
                }

            )*/;


        });
    }


/**
 * dot事件
 * @param pages
 */
    function addDodEvents(pages){
        // alert("dddd");
        $(".dot").bind(touchEvents.touchstart,function(e){  //ontouchmovealert("ddd");
            e.preventDefault();
            e.stopPropagation();
            $(this).bind(touchEvents.touchmove,function(e){
                    var xyMove = getXYcordinate(e);
                    pages.percentChangePages(parseFloat( xyMove.x ));
                }
            );

        });
// alert(pages.pageTextObj.offset.height());
        $(".bookContextDiv").scroll(function(){
            // alert($(this).prop("scrollHeight"));

            pages.scrollChangePage($(this).scrollTop());
        });

    }

    // this.initPage();


//加密方法。没有过滤首尾空格，即没有trim.
//加密可以加密N次，对应解密N次就可以获取明文
function encodeBase64(mingwen,times){
    var code="";
    var num=1;
    if(typeof times=='undefined'||times==null||times==""){
        num=1;
    }else{
        var vt=times+"";
        num=parseInt(vt);
    }

    if(typeof mingwen=='undefined'||mingwen==null||mingwen==""){

    }else{
        $.base64.utf8encode = true;
        code=mingwen;
        for(var i=0;i<num;i++){
            code=$.base64.btoa(code);
        }
    }
    return code;
}


//解密方法。没有过滤首尾空格，即没有trim
//加密可以加密N次，对应解密N次就可以获取明文
function decodeBase64(mi,times){
    var mingwen="";
    var num=1;
    if(typeof times=='undefined'||times==null||times==""){
        num=1;
    }else{
        var vt=times+"";
        num=parseInt(vt);
    }


    if(typeof mi=='undefined'||mi==null||mi==""){

    }else{
        $.base64.utf8encode = true;
        mingwen=mi;
        for(var i=0;i<num;i++){
            mingwen=$.base64.atob(mingwen);
        }
    }
    return mingwen;
}


/**
 * 获取背景颜色值a  2018-01-13 marrisa
 * @param obj
 * @returns {string}
 */
function backGroundClor(obj){
    // alert(obj.css('background-color'));

    var rgb = obj.css('background-color');
    var temp = rgb.substring(5,rgb.length-1).toString();

    var arrtemp = temp.split(",");
    // alert( arrtemp[0]+ " " + arrtemp[1] + "  " + arrtemp[2]+ " " + arrtemp[3]);
    var rv = {};
    var str ="#";
    for(var i= 0;i<3;i++){
        // alert(arrtemp[i]);
        var tem = parseInt(arrtemp[i]).toString(16);
        // alert(tem.length +  "  is " + tem );
        if(tem.length ==1){
            str +='0'+tem;
        }else{
            str += tem;
        }
    }

    rv = {background_color:str,opacity:arrtemp[3]};
    return rv;
}


/**
 * 时间
 */
function dateTime2(formate){

    var myDate = new Date();
//获取当前年
    var year=myDate.getFullYear();
//获取当前月
    var month=myDate.getMonth()+1;
//获取当前日
    var date=myDate.getDate();
    var h=myDate.getHours();       //获取当前小时数(0-23)
    var m=myDate.getMinutes();     //获取当前分钟数(0-59)
    var s=myDate.getSeconds();

    function p(s) {
        return s < 10 ? '0' + s: s;
    }

    var now = year+ formate +p(month)+ formate +p(date)+ " " +p(h)+':'+p(m)+":"+p(s);
    return now;
}


/**
 * 时间
 */
function dateTime(){

    var myDate = new Date();
//获取当前年
    var year=myDate.getFullYear();
//获取当前月
    var month=myDate.getMonth()+1;
//获取当前日
    var date=myDate.getDate();
    var h=myDate.getHours();       //获取当前小时数(0-23)
    var m=myDate.getMinutes();     //获取当前分钟数(0-59)
    var s=myDate.getSeconds();

    function p(s) {
        return s < 10 ? '0' + s: s;
    }
    var now = year+p(month) +p(date) +p(h)+p(m)+p(s);
    return now;
}



function dateYYYYMMDD(formate){
    var myDate = new Date();
//获取当前年
    var year=myDate.getFullYear();
//获取当前月
    var month=myDate.getMonth()+1;
//获取当前日
    var date=myDate.getDate();
    var now = year+ formate +p(month)+ formate +p(date);
    return now;
}



/**
 * 根据参数名，获取http请求的参数值
 */
var getParameter = function (name){
    var paramStr=window.location.search;
    if(paramStr.length==0)return null;
    if(paramStr.charAt(0)!='?')return null;
    paramStr=unescape(paramStr);
    paramStr=paramStr.substring(1);
    if(paramStr.length==0)return null;
    var params=paramStr.split('&');
    var p = null;
    var lenParams  =  params.length;
    for(var i=0;i<lenParams;i++){
        if(params[i].indexOf(name) >= 0){
            p = params[i].split('=');
            p = p[1];
            break;
        }
    }
    paramStr = null;
    params = null;
    return p;
};


/**
 * 计算文件大小
 */

function fileSize(inputSize){
     // alert(inputSize);
    if(inputSize == null || inputSize == undefined){
        return ;
    }

    var temp  =(parseFloat(inputSize) / 1024);
    // alert(temp);
    if( temp > 1 && temp <1000 ){
        return parseFloat(temp.toFixed(3))+ " KB";
    }
    temp  = temp / 1024;
    if(temp > 1 && temp <1000  ){
        return parseFloat(temp.toFixed(3)) + " M";
    }

    temp  =temp / 1024;
    if(temp > 1 && temp <1000  ){
        return parseFloat(temp.toFixed(3)) + " G";
    }

    return  inputSize + " b";

}




//alert("wz_util");
