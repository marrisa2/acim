
//alert("ddd");
$(document).ready(function(){
    new initStart();
});

var contextPageObj = null; // 首页内容
// var mulMediaObj = null;
var footerObj = null; // 底部菜单
var search = null; // 搜索

var initStart = function(){

    // alert("dddd");
    if(isPC()==false){
        $(".acim_logo").hide();
    }
    loadingDiv();
    //
    footerObj =  new Footer("homePage_div");
    footerObj.ini();



    search = new Search(".homePage_headSearch");
    search.init();



}

/***
 * 菜单底部
 * @param footerMenuIndex
 * @constructor
 */
 var Footer = function(footerMenuIndex){
     this.footerMenuIndex = footerMenuIndex ;
     this.isLoad = {};
 }


 Footer.prototype = {
    constructor:Footer,
        ini:function(){
        this.iniDiv();
    },

      // alert(this.footerMenuIndex);
    iniDiv:function() {
        var footerDiv = " <ul>\n" +
            "       <li id='homePage_div' >\n" +
            "           <table>\n" +
            "               <tr><td><i class=\"icon iconfont icon-icon-58\"></i></td></tr>\n" +
            "               <tr><td>首页</td></tr>\n" +
            "           </table>\n" +
            "           </li>\n" +
            "       <li id='multiMedia_div'>\n" +
            "           <table>\n" +
            "               <tr><td><i class=\"icon iconfont icon-duomeiti2\"></i></td></tr>\n" +
            "               <tr><td>多媒体</td></tr>\n" +
            "           </table>\n" +
            "       </li>\n" +
            "       <li id='add_footer' class=\"no-hover\">\n" +


            "<div id='ss_menu'>\n" +
            "        <div id='footer_zhibo_menu' ><i class=\"icon iconfont icon-zhibocopy\"></i></div>\n" +
            "        <div id='footer_luyin_menu' ><i class=\"icon iconfont icon-luyin\"></i></div>\n" +
            "        <div id='footer_upload_menu' ><i class=\"icon iconfont icon-shangchuan-tianchong\"></i></div>\n" +
            "        <div id='footer_shipin_menu' ><i class=\"icon iconfont icon-shipin\"></i></div>\n" +
            "        <div id='footer_reader_menu' ><i class=\"icon iconfont icon-dushu2\"></i></div>\n" +
            "        <div class='menu'>\n" +
            "<ii class='icon iconfont icon-icon-2'> </ii>" +
            "            <div class='share' id='ss_toggle' data-rot='180'>\n" +
            // "                <div class='circle'></div>\n" +
            // "                <div class='bar'></div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +

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

        $(".footer").prepend(footerDiv);
        animateMenu(); // 圆形菜单按钮功能方法;
        addFooterEvent();
        this.footerMenuClick();
        var bodyWidth = window.screen.width;
        var pageMenuWidth = $(".footer").width();
        if(bodyWidth > pageMenuWidth ){
            $(".footer").css("left",(bodyWidth-pageMenuWidth)/2+"px");
        }

    },



     // footerMenuClick();


      footerMenuClick:function() {
          // alert(this.footerMenuIndex);
        this.showFooterPage();
         $("#" + this.footerMenuIndex).css({"color":"#a0bf9c","background":'#fff'});
         this.setHover(this.footerMenuIndex);
     },

      showFooterPage:function(){
         $("."+ this.footerMenuIndex).show().siblings().hide();
         // alert(this.footerMenuIndex);
          if(this.footerMenuIndex=="homePage_div"){
              if(contextPageObj == null){
                  contextPageObj =  new ContextPage("mainContextMenu_1",new Map());
                  contextPageObj.init();
              }

          }
          else if(this.footerMenuIndex == "multiMedia_div"){
              // if(mulMediaObj == null){
              //     // mulMediaObj = new MulMedia();
              //     // mulMediaObj.ini();
              // }
          }else if(this.footerMenuIndex =="information_div"){


          }else if(this.footerMenuIndex == "myself_div"){

          }else{}
      },

      setHover:function(footerIndex){
         $(".footer li:not(li:eq(2))").each(function(){
              // alert(Footer.footerMenuIndex);
             var idName =  $(this).attr("id");
             if(footerIndex == idName){
                 // $(this).find("i").css({"color":"#a0bf9c","background":'#fff'});
                 $(this).css({"color":"#a0bf9c","background":'#fff'});
             }else {
                 // $(this).find("i").css({"color":"#666","background":'#eee'});
                 $(this).css({"color":"#666","background":'#eee'});
             }
         });
     }
 }

/**
 * footer 添加事件
 */
function addFooterEvent(){

    $(".footer li:not(li:eq(2))").on(touchEvents.touchtap ,function(e){
        e.preventDefault();

        footerObj.footerMenuIndex = $(this).attr("id");
        if(footerObj.footerMenuIndex  == null || footerObj.footerMenuIndex  =="add_footer" ){
            $(this).css({"background":"#eee"});
            return;
        }
        footerObj.footerMenuClick();
    });
}


/**
 * 首页内容添加
 * @param _contextPageIndex
 * @param _map
 * @constructor
 */
 var ContextPage = function(_contextPageIndex, _map){
     this.contextPageIndex = _contextPageIndex;
     this.mediaListloadArray = _map;
 }

/**
 * mainContextMenuBar
 */
ContextPage.prototype = {

    constructor:ContextPage,
        init:function() {
            /**
             * 添加事件
             */
            this.addDiv();// 添加div
            // this.addEevent(); // 添加事件
            this.createMedial();

            // alert(this.mediaListloadArray.get(this.contextPageIndex));
        },

        addDiv:function(){
            var mainContextMenuBar = "<div id = 'homePageMenu' class=\"homePageContextMenu_iphone\">\n" +
                "    <ul>\n" +
                "        <li id='mainContextMenu_1'><a>最新</a></li>\n" +
                "        <li id='mainContextMenu_2'><a>文章</a></li>\n" +
                "        <li id='mainContextMenu_3'><a>读书会</a></li>\n" +
                "        <li id='mainContextMenu_4'><a>直播</a></li>\n" +
                "    </ul>\n" +
                "</div>";
            // alert(mainContextMenuBar);
            // $(mainContextMenuBar).appendTo("section");

            $("#homePageContextMenu").prepend(mainContextMenuBar);
            this.addClass();
            this.setContextHeight();
            addPageMenuEvent();
            this.setContextPosition();
            new Swiper2().ini();

        },

        /**
         *  给菜单添加事件
         */
        addClass:function(){
            if(isPC()){
                // alert("ddd");
                $("#homePageMenu").removeClass("homePageContextMenu_iphone").addClass("homePageContextMenu_pc");
                $(".main_context_iphone").css("top","47px");
            }else{
                $("#homePageMenu").removeClass("homePageContextMenu_pc").addClass("homePageContextMenu_iphone");
                $(".main_context_iphone").css("top","97px");

            }
        },


        /**
         * 设置屏幕的高度
         */
       setContextHeight: function (){
            var main_context_menuBarTop = $(".main_context_iphone").offset().top;
            // var bodyHeigth = window.screen.height;
            var footerTop = $(".footer").offset().top;
            // alert(footerTop);
            $('.main_context_iphone').css({"height":(footerTop- main_context_menuBarTop)});
        },
       setContextPosition:function(){
           var bodyWidth = window.screen.width;
           var pageMenuWidth = $(".main_context_menuBar").width();

           // alert(bodyWidth  + "  "+   pageMenuWidth);
           if(bodyWidth > pageMenuWidth ){
               $(".main_context_menuBar").css("left",(bodyWidth-pageMenuWidth)/2+"px");
           }

       },

    /**
     * 显示media列表
     * @param idName
     */
    showMedial:function(pageIndex){

        this.mediaListloadArray.forEach(function (media, key) {
             // alert(key  + "  " + pageIndex);
            if(key == pageIndex){
                media.showMedia();
            }else {
                media.hideMedia();
            }
        })
    },


    /**
     * 创建medial
     * @param type
     */
    createMedial:function(){

        var mulMediaObj2 = new mulMediaObj(this.contextPageIndex);
        // alert(this.mediaListloadArray +" ddd " + this.contextPageIndex   );
        this.mediaListloadArray.set(this.contextPageIndex,mulMediaObj2);
    },

    getContextPageIndex:function(){
        return this.contextPageIndex;
    },

    setContextPageIndex:function(_contextPageIndex){
      this.contextPageIndex = _contextPageIndex;
    },


    getMediaListloadArray:function(){
        return this.mediaListloadArray;
    },

    setMediaListloadArray:function(_mediaListloadArray){
        this.mediaListloadArray = _mediaListloadArray;
    },


    initSeclect:function(){
        $("#"+this.contextPageIndex).css({
            "color": "#a0bf9c",
            // "border-bottom": "#a0bf9c solid 1px",
            "background-color": "#eee"
        });
    }

} ;




/**
 * 添加事件
 */


function addPageMenuEvent(){
    // var contextPageIndex
    contextPageObj.initSeclect();

    $("#homePageMenu li").on(touchEvents.touchtap, function () {

        var pageIndex = $(this).attr("id");
        if(pageIndex == contextPageObj.getContextPageIndex()){ return ;}

        contextPageObj.setContextPageIndex(pageIndex);
        // alert(contextPageObj.getContextPageIndex());

        // alert(this.mediaListloadArray);
        if (contextPageObj.getMediaListloadArray().get(pageIndex) == null) {
            contextPageObj.createMedial();
        }
        contextPageObj.showMedial(pageIndex);
        // alert(this.contextPageIndex == "mainContextMenu_1");
        $(this).css({
            "color": "#a0bf9c",
            // "border-bottom": "#a0bf9c solid 1px",
            "background-color": "#eee"
        });

        $(this).siblings().css({
            "color": "#ffffff",
            // "border-bottom": "none",
            "background-color": "#bbbbbb"
        });
        //alert();
    });

    if(isPC()==true){
        // alert(isPC());
        $("#homePageMenu li").hover(
            function () {
                if($(this).attr("id") == contextPageObj.getContextPageIndex()){
                    return;
                }
                $(this).css({
                    "color": "#a0bf9c",
                    // "border-bottom": "#E63F00 solid 1px",
                    "background-color": "#f6f8f9"
                });

                // contextPageObj.initSeclect();
                //alert();
            },
            function(){
                if($(this).attr("id") == contextPageObj.getContextPageIndex()){
                    return;
                }
                $(this).css({
                    "color": "#ffffff",
                    // "border-bottom": "none",
                    "background-color": "#bbbbbb"
                });
            }
        );
    }
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


var Search = function (_className){
    this.selects = null;
    this.className  = _className;

}

/***
 * 搜索功能呢
 * @type {{Ccnstrctor: Search, ini: Search.ini, constructor: Search.constructor}}
 */
Search.prototype ={
    constructor:Search,
    init:function(){
        this.divText();
    },
     divText:function(){
        var divText = "" +
            "<div class=\"search radius6\">\n" +
            // "\t<form name=\"searchform\" method=\"post\" >\n" +
            // "\t\t<input name='ecmsfrom' type='hidden' value='9'>\n" +
            // "\t\t<input type='hidden' name='show' value=\"title,newstext\">" +
            "\t\t<select name=\"classid\" id=\"choose\">\n" +
            "\t\t\t<option value='0'>搜索全部</option>" +
            "\t\t\t<option value='1'>作者</option>" +
            "\t\t\t<option value='4'>名称</option>" +
            "\t\t\t<option value='22'>pdf</option>" +
            "\t\t</select> " +
            "\t\t<input class=\"inp_srh\" name=\"keyboard\" type='text'  placeholder=\"请输入您要搜索的作品\" >\n" +
            "\t\t<input class=\"btn_srh\" type='' value=\"搜索\">\n" +
            " <div class =\"word\">word</div>" +
            // "\t</form>";
            "</div>";
         // alert(divText);
         $(".search").empty();
        $(divText).appendTo(this.className);

         this.selects = $('.search select');//获取select
         // alert(selects.length);
         var len = this.selects.length;

         for(var i=0;i<len;i++){
             this.createSelect(this.selects[i],i);
         }

         var w = $('.search').width();
         var ww = $(".fixed section").width(); //window.screen.width;
         $(".search input.inp_srh").css("width",w-159.8+"px");
         // alert(ww);
         if(ww >525) {
             $(".search").css("margin-left", (ww-w)/2 +"px");
         }
         // alert("ddd");
         this.addEvent();
         // alert("end search");
    },
    createSelect:function(select_container,index){
        //创建select容器，class为select_box，插入到select标签前
        var tag_select=$('<div></div>');//div相当于select标签
        tag_select.attr('class','select_box');
        tag_select.insertBefore(select_container);

        //显示框class为select_showbox,插入到创建的tag_select中
        var select_showBox=$('<div></div>');//显示框
        select_showBox.css('cursor','pointer').attr('class','select_showBox').appendTo(tag_select);

        //创建option容器，class为select_option，插入到创建的tag_select中
        var ul_option=$('<ul></ul>');//创建option列表
        ul_option.attr('class','select_option');
        ul_option.appendTo(tag_select);
        this.createOptions(index,ul_option);//创建option

        //点击显示框
        tag_select.toggle(function(){
            // alert("ddd");
            ul_option.show();
            ul_option.parent().find(".select_showBox").addClass("active");
        },function(){
            ul_option.hide();
            ul_option.parent().find(".select_showBox").removeClass("active");
        });

        var li_option=ul_option.find('li');
        li_option.on('click',function(){
            $(this).addClass('selected').siblings().removeClass('selected');
            var value=$(this).text();
            select_showBox.text(value);
            ul_option.hide();
        });

        li_option.hover(function(){
            $(this).addClass('hover').siblings().removeClass('hover');
        },function(){
            li_option.removeClass('hover');
        });

    },
    createOptions:function(index,ul_list){
        //获取被选中的元素并将其值赋值到显示框中
        // alert("createOptions");

        var options = this.selects.eq(index).find('option');

        var selected_option=options.filter(':selected');

        var selected_index=selected_option.index();
        var showBox= ul_list.prev();
        showBox.text(selected_option.text());
        //为每个option建立个li并赋值
        for(var n=0;n<options.length;n++){
            var tag_option=$('<li></li>'),//li相当于option
                txt_option=options.eq(n).text();
            tag_option.text(txt_option).appendTo(ul_list);

            //为被选中的元素添加class为selected
            if(n==selected_index){
                tag_option.attr('class','selected');
            }
        }
    },

    addEvent:function() {
        if (isPC()) {
            $('.inp_srh').keyup(function (e) {
                // alert("dd");
                e.preventDefault(); // 阻止浏览器默认动作
                e.stopPropagation();;
                var keywords = $(this).val();
                if (keywords == '') {
                    $('.word').hide();
                    return
                }
                var wordObj = $(".word");
                // alert(keywords);
                $.ajax({
                    url: 'http://suggestion.baidu.com/su?wd=' + keywords,
                    dataType: 'jsonp',
                    jsonp: 'cb', //回调函数的参数名(键值)key
                    // jsonpCallback: 'fun', //回调函数名(值) value
                    beforeSend: function () {
                        wordObj.append('<div>正在加载。。。</div>');
                    },
                    success: function (data) {
                        // alert("ddd");
                        wordObj.empty();
                        wordObj.show();
                        // alert(data.s );
                        if (data.s == '') {
                            wordObj.append('<div class="error">Not find  "' + keywords + '"</div>');
                        }
                        $.each(data.s, function () {
                            $('.word').append('<div class="click_work">' + this + '</div>');
                        })
                    },
                    error: function () {
                        wordObj.empty().show();
                        wordObj.append('<div class="click_work">Fail "' + keywords + '"</div>');
                    }
                })
            });
            $(document).on('click','.click_work',function(){
                var word = $(this).text();
                // alert(word);
                $('.inp_srh').val(word);
                $('.word').hide();
                // $('#texe').trigger('click');触发搜索事件
            });

        }

        $(".btn_srh").on("click",function(){
              alert("search");
        });
    }

}


var Swiper2 = function(){
    this.swiperList =null;
}

Swiper2.prototype ={
    constructor:Swiper2,
    ini:function(){
        // alert("ddd");
        this.divText();
    },

    divText:function(){
        var swiperDiv = "<div class=\"swiper-wrapper\">\n" +
            "        <div class=\"swiper-slide\">aadfdfdddddddddddddddddddddddddddddfdfdddddd</div>\n" +
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
            "   <div class=\"swiper-button-next\"></div>\n" +
            "    <div class=\"swiper-button-prev\"></div> ";

        $(".swiper-container").empty();
        $(swiperDiv).appendTo(".swiper-container");
        this.startSwiper();
        // alert("end");
    },
    /**
     * 启动滑动条
     */
    startSwiper:function (){

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
        })
    }
}



/**
 * 旋转menu
 */
function  animateMenu() {

    var toggle = $('#ss_toggle');
    var menu = $('#ss_menu');
    var rot;

    var divList =  $("#ss_menu div i");

    var divListSize =  divList.length;
    // alert(divListSize);

    var XYList = getXYindex(0, 0 ,30, 150,divListSize);

    // alert(XYList.length);
    divList.each(function(i,divtom){
        // alert(XYList[i].x);
        $(this).parent("div").css({"top":XYList[i].x,"left":XYList[i].y});
        //alert($(this).top());
    });

    // alert($("#ss_menu div i").length);
    // "        <div id='footer_zhibo_menu' ><i class=\"icon iconfont icon-zhibocopy\"></i></div>\n" +
    // "        <div id='footer_luyin_menu' ><i class=\"icon iconfont icon-luyin\"></i></div>\n" +
    // "        <div id='footer_upload_menu' ><i class=\"icon iconfont icon-shangchuan-tianchong\"></i></div>\n" +
    // "        <div id='footer_shipin_menu' ><i class=\"icon iconfont icon-shipin\"></i></div>\n" +
    // "        <div id='footer_reader_menu
    divList.on(touchEvents.touchtap,function(event){
        rotateClick();
        var id = $(this).parent().attr("id");
        // alert(id );
        if( id == 'footer_upload_menu'){
            showPage("page-4");
            // uploadMedia.setPosition();

            frameObj.init();
        }
        // pagation();

    });

    var  windowWidth  = $(window).width();
    $("#ss_menu").css({"right": ((1-60/windowWidth)*50) + "%" });


    menu.css('transform', 'rotate('+ 90+'deg)');
    menu.css('webkitTransform', 'rotate(' + 90 + 'deg)');

    // for(var i = 0; i<divListSize; i++ ){
    //     //alert(XYList[i].x + " dd "+ XYList[i].y);
    //     divList..css("top",XYList[i].x).css("left",XYList[i].y);
    //     alert(divList[i].top());
    // }

    function rotateClick(){
        rot = parseInt($("#ss_toggle").data('rot'));
        //  alert(rot);
        if(rot == 180 ){
            rot = rot-180;
        }else{
            rot = ((rot  - 180) %360);
        }
        menu.css('transform', 'rotate(' + (rot+90) + 'deg)');
        menu.css('webkitTransform', 'rotate(' +( rot +90)+ 'deg)');
        // alert(rot);
        if (rot / 180 % 2 == 0) {
            toggle.parent().addClass('ss_active');
            toggle.addClass('close');
        } else {
            toggle.parent().removeClass('ss_active');
            toggle.removeClass('close');
        }
        $("#ss_toggle").data('rot', rot);
    };


    $('#ss_toggle').on(touchEvents.touchtap, function(event){
        event.preventDefault();
        event.stopPropagation();
        rotateClick();
    });
    menu.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (rot / 180 % 2 == 0) {
            $('#ss_menu div i').addClass('ss_animate');
        } else {
            $('#ss_menu div i').removeClass('ss_animate');
        }
    });


    rotateClick();

}



