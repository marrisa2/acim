
// var mainContextMenuIndex = "mainContextMenu_1";  // 主页内容菜单状态
var footerMenuIndex = "shouye_footer";
// var isHomePageLoad_b = false;  // 首页内容是否加载
// var isMuliMedisLoad_b = false; // 多媒体页面内容是否加载
// var isInformationLoad_b = false; // 消息页面是否加载
// var isMyselfLoad_b = false; // 我的页面是否加载
//我的页面是否加载
var footerObj = null ;
var homePageObj  = null;
//var mediaObjArray = new Array();

//

$(document).ready(function(){
    initPage();

    //footerMenuClick(); // 底部菜单点击方法
});


/**
 * 登录系统初始化首页
 */
function initPage(){
    loadingDiv();
    footerObj  = new footer();
    homePageObj = new homePage(null);


}


function footer(){
    /**
     * 添加footerDiv
     */
    this.footerMenuIndex = "homePageIndex";
    footer.prototype.footerDiv = function(){
       // alert("ddd");
        var footerDiv =" <ul>\n" +
            "       <li id='homePage_div' >\n" +
            "           <table>\n" +
            "               <tr><td><i class=\"icon iconfont icon-icon-58\"></i></td></tr>\n" +
            "               <tr><td><a>首页</a></td></tr>\n" +
            "           </table>\n" +
            "           </li>\n" +
            "       <li id='multiMedia_div'>\n" +
            "           <table>\n" +
            "               <tr><td><i class=\"icon iconfont icon-duomeiti2\"></i></td></tr>\n" +
            "               <tr><td><a>多媒体</a></td></tr>\n" +
            "           </table>\n" +
            "       </li>\n" +
            "       <li id='add_footer' class=\"no-hover\">\n" +


            "<div id='ss_menu'>\n" +
            "        <div><i class=\"fa fa-qq\"></i></div>\n" +
            "        <div><i class=\"fa fa-weibo\"></i></div>\n" +
            "        <div><i class=\"fa fa-weixin\"></i></div>\n" +
            "        <div><i class=\"fa fa-renren\"></i></div>\n" +
            "        <div><i class=\"fa fa-renren\"></i></div>\n" +
            "        <div class='menu'>\n" +
            "            <div class='share' id='ss_toggle' data-rot='180'>\n" +
            "                <div class='circle'></div>\n" +
            "                <div class='bar'></div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n"+

              "       </li>\n" +
            "       <li id='information_div'>\n" +
            "       <table>\n" +
            "           <tr><td><i class=\"icon iconfont icon-xiaoxi3-copy\"></i></td></tr>\n" +
            "           <tr><td>消息</td></tr>\n" +
            "       </table>\n" +
            "   </li>\n" +
            "       <li id='myself_div'>\n" +
            "           <table>\n" +
            "               <tr><td><i class=\"icon iconfont icon-icon-56\"></i></td></tr>\n" +
            "               <tr><td>我的</td></tr>\n" +
            "           </table>\n" +
            "       </li>\n" +
            "   </ul>";
        $(footerDiv).appendTo(".footer");
        // alert("ddd");
        new addEvent().footer(); // 添加点击事件
        animateMenu(); // 圆形菜单按钮功能方法
       // $("#homePage_div").trigger("click");
        //alert(footerDiv);

    };
    /**
     * 设置主页四个页面的高度，自动调整
     */
    footer.prototype.setPagesHeight = function(){
        // var bodyHeigth = window.screen.height;
        var footerTop =  $(".footer").offset().top;
        //alert(footerTop);
        //alert(bodyHeigth);
        $(".homePage_div,.multiMedia_div,.information_div,.myself_div").css({
                "height":footerTop
            }
        );
    };


    footer.prototype.setHover = function(footerLiName){

        $(".footer li:not(li:eq(2))").each(function(){
            // alert(footerLiName);
            var idName =  $(this).attr("id");
            if(idName == footerLiName){
                $(this).find("i").css({"color":"#6cee88","background":'#fff'});
                $(this).css({"color":"#6cee88","background":'#fff'});
            }else {
                $(this).find("i").css({"color":"#666","background":'#eee'});
                $(this).css({"color":"#666","background":'#eee'});
            }
        });
    }

    footer.prototype.showFooterPage = function(indexName){
       // alert(indexName);
        $("."+indexName).show().siblings().hide();
        $(".footer").show();
       // $("."+indexName)
    }

    footer.prototype.init =  function(){
        this.footerDiv();
        this.setPagesHeight();
        this.setHover("homePage_div");

    }

    this.init();

    /**
     * 设置footer当前的位置
     * @param menuIndex
     */
    footer.prototype.setFooterMenuIndex= function( menuIndex){
        this.footerMenuIndex = menuIndex;
    }


}

/**
 *  home 对象
 */
function homePage(listSwiper){
   // this.isContextLoad = false;
   // alert("homePage");
    this.isMediaListloadArray= new Map();
    this.curreMencontextMenu = null;
    homePage.prototype.show = function(){
        $(".homePage_div").show();
    }



    homePage.prototype.hide = function(){
        $(".homePage_div").hide();
    }
    /**
     * 设置头部菜单
     */
    homePage.prototype.serachBarDiv =  function (){
        var searchDiv = " <form >\n" +
            "        <input type=\"search\" id=\"search\">\n" +
            "        <i class=\"iconfont icon-search\"></i>\n" +
            "    </form>";
        $(searchDiv).appendTo(".searchBar");
    } ;

    /**
     * mainContextMenuBar
     */
    homePage.prototype.contextMenuDiv = function (){
        var mainContextMenuBar ="<div class=\"main_context_menuBar\">\n" +
            "    <ul>\n" +
            "        <li id='mainContextMenu_1'><a>奇迹课程</a></li>\n" +
            "        <li id='mainContextMenu_2'><a>分类</a></li>\n" +
            "        <li id='mainContextMenu_3'><a>最新</a></li>\n" +
            "        <li id='mainContextMenu_4'><a>直播</a></li>\n" +
            "    </ul>\n" +
            "</div>";
        $(mainContextMenuBar).appendTo(".homePage_div");

        // alert(mainContextMenuBar);
        new addEvent().shouYeMenu();
        setContextHeight();

       // $("#mainContextMenu_1").addClass("hover");
        //alert("");
        //alert("abcd");
    } ;
    /**
     * 设置屏幕的高度
     */
    function  setContextHeight(){
        var footerTop =  $(".footer").offset().top;
        //var main_context_menuBarHeigth = $(".main_context_menuBar").offsetHeight;
        var main_context_menuBarTop = $(".main_context_iphone").offset().top;
        var bodyHeigth = window.screen.height;
       // alert(bodyHeigth-main_context_menuBarTop-180);
        $('.main_context_iphone').css({"height":bodyHeigth-main_context_menuBarTop-180});
        $('.main_context_iphone').height(bodyHeigth-main_context_menuBarTop-180);
    // alert($('.main_context_iphone').height());
    }


    homePage.prototype.showMedial = function(idName){
       // this.isMediaListloadArray.get("mainContextMenu_1").showMedial();
        //alert("showMedia");
        this.isMediaListloadArray.forEach(function (media, key) {
          //  alert(key  + "  " + idName);
            if(key == idName){
                media.showMedia();
            }else {
                media.hideMedia();
            }
        });
    }

    /**
     * 创建medial
     * @param type
     */
    homePage.prototype.createMedial = function(){
        var mulMediaObj2 = new mulMediaObj(this.curreMencontextMenu);
        this.isMediaListloadArray.set(this.curreMencontextMenu,mulMediaObj2);
    }

    homePage.showMediaList = function(){

    }

    homePage.prototype.init = function(){
        this.serachBarDiv();
        //alert("init");
        new swiper2().swiperDiv(listSwiper);
        this.contextMenuDiv();
        this.curreMencontextMenu = 'mainContextMenu_1';
        this.createMedial('mainContextMenu_1');
        // $("#mainContextMenu_1").addClass("main_context_menuBar_ini");
        $("#mainContextMenu_1").css({"color":"#E63F00",
        "border-bottom": "#E63F00 solid 1px",
        "background-color": "#fff"});
      //  $(".main_context_menuBar ul li:first").attr("class","select");
        // this.isContextLoad = true;
    }

    this.init();
}


function swiper2(swiperList){
    //var swiperList;
    this.swiper_list = swiperList;
    swiper2.prototype.swiperDiv = function (){
        var swiperDiv = "<div class=\"swiper-wrapper\">\n" +
            "        <div class=\"swiper-slide\"><img src=\"./images_mobile/1.jpg\"></div>\n" +
            "        <div class=\"swiper-slide\"><img src=\"./images_mobile/2.jpg\"></div>\n" +
            "        <div class=\"swiper-slide\"><img src=\"./images_mobile/3.jpg\"></div>\n" +
            "        <div class=\"swiper-slide\"><img src=\"./images_mobile/4.jpg\"></div>\n" +
            "        <div class=\"swiper-slide\"><img src=\"./images_mobile/5.jpg\"></div>\n" +
            "        <div class=\"swiper-slide\"><img src=\"./images_mobile/6.jpg\"></div>\n" +
            "        <div class=\"swiper-slide\"><img src=\"./images_mobile/7.png\"></div>\n" +
            "        <div class=\"swiper-slide\"><img src=\"./images_mobile/8.jpg\"></div>\n" +
            "    </div>\n" +
            "    <!-- Add Pagination -->\n" +
            "    <div class=\"swiper-pagination\"></div>\n" +
            "    <!-- Add Arrows -->\n" +
            "    <!--<div class=\"swiper-button-next\"></div>-->\n" +
            "    <!--<div class=\"swiper-button-prev\"></div>-->";

        $(".swiper-container").empty();
        $(swiperDiv).appendTo(".swiper-container");
        startSwiper();
    }

    /**
     * 启动滑动条
     */
    function startSwiper(){

        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    swiper2.prototype.init = function(){
        this.swiperDiv();
    }
    this.init();
}

/**
 *
 */
function addEvent(){

    //alert($(".main_context_menuBar li").length);
    addEvent.prototype.shouYeMenu =  function (){

      //  alert($(".main_context_menuBar li").length);
        $(".main_context_menuBar li").on("click", function(){
            var idName = $(this).attr("id");
            //alert(idName);
             // alert(idName + " idName");
            if(idName == null){
                return;
            }
            homePageObj.curreMencontextMenu =  idName;
           // alert(homePageObj.curreMencontextMenu + " add " );
            var mediaTemp = homePageObj.isMediaListloadArray.get(idName);
            if(mediaTemp == null ){
                homePageObj.createMedial();
            }

            homePageObj.showMedial(idName);
            if(idName=="mainContextMenu_1"){
                $("#mainContextMenu_1").css({"color":"#E63F00",
                    "border-bottom": "#E63F00 solid 1px",
                    "background-color": "#fff"});
            }else{
                $("#mainContextMenu_1").css({"color":"#666666",
                    "border-bottom": "none",
                    "background-color": "#eeeeee"});

                $(this).addClasses("hover");
            }

            //alert();
        });

        //alert("down");

    }

    addEvent.prototype.footer = function() {
        alert("click");
        $(".footer li:not(li:eq(2))").on('click',function(){

            var idName = $(this).attr("id");
           //   alert(idName)
            if(idName == null || idName =="add_footer" ){
                $(this).css({"background":"#eee"});
                return;
            }
           // footerMenuIndex = idName;//
            footerMenuClick(idName);

        });
    }
}


function footerMenuClick(idName){
   // alert(idName);
    // alert(footerMenuIndex);
    if(idName == "homePage_div"){
      // $(".homePage_div").hide();
         footerObj.showFooterPage(idName);
    }else if(idName == "multiMedia_div"){
        footerObj.showFooterPage(idName);
    }else if(idName == "add_footer"){
        footerObj.showFooterPage(idName);
    }else if(idName == "information_div"){
        footerObj.showFooterPage(idName);
    }else if(idName == "myself_div"){
        footerObj.showFooterPage(idName);
    }else{
        return ;
    }
     // $(this).addClass("hover");
    $("#" +idName).find("i").css({"color":"#6cee88","background":'#fff'});
    $("#" +idName).css({"color":"#6cee88","background":'#fff'});

    // $(this).find("a").addClass("hover");
    footerObj.setHover(idName);

}



/**
 * 页面loading样式
 */
function  loadingDiv(){
    var divStr = "<div id=\"loader\" class=\"pageload-overlay\" data-opening=\"m -5,-5 0,70 90,0 0,-70 z m 5,35 c 0,0 15,20 40,0 25,-20 40,0 40,0 l 0,0 C 80,30 65,10 40,30 15,50 0,30 0,30 z\">\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 80 60\" preserveAspectRatio=\"none\" >\n" +
        "<path d=\"m -5,-5 0,70 90,0 0,-70 z m 5,5 c 0,0 7.9843788,0 40,0 35,0 40,0 40,0 l 0,60 c 0,0 -3.944487,0 -40,0 -30,0 -40,0 -40,0 z\"/>\n" +
        "</svg>\n" +
        "</div>   <!-- /pageload-overlay -->";
//alert(divStr);
      $(divStr).appendTo("body");
}









