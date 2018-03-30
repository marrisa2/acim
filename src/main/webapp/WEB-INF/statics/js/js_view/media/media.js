
//alert("media");

var MulMediaObj = function(kind_){
    this.kind =kind_;
    this.mediaBookList  = null;
    this.mediaNewsMap = null;


}

MulMediaObj.prototype = {
    constructor:MulMediaObj,
    ini:function(){
        this.getMediaList();
        this.createMediaBook();
    },
    createMediaBook:function(){


    },

    getMediaList:function(){
        this.mediaNewsMap = medialList("news");
    }


}



function mulMediaObj(kind_){
   // alert("media_ing");
    this.kind = kind_
    this.medialList  = null;
    this.isloaded = false;
    //alert(kind_.substring(kind_.length-1));
    this.index2 = kind_.substring(kind_.length-1);
  //  alert(this.index);
    /**
     * 获取多媒体列表
     */
    mulMediaObj.prototype.getMediaList = function(){

       this.medialList = medialList(this.kind);
      // alert();
    };
    /**
     * 显示列表
     */
    mulMediaObj.prototype.createMiraclesList = function(){

        if(this.isloaded==false){
            createMiraclesList(this.medialList,this.kind);
            // $("#"+ this.kind +"_media").show().css({
            //     "z-index":this.index2,
            //     "position":"relative",
            //     'float':"left",
            //     'top':'0px',
            //     'left':"0px"
            // });
            this.isloaded = true;
        }

    }
    /**
     * 显示medial
     */
    mulMediaObj.prototype.showMedia = function(){
         $("#"+ this.kind +"_media").show();

    }


    /**
     * 隐藏Medial
     */
    mulMediaObj.prototype.hideMedia = function(){
        $("#"+ this.kind +"_media").hide();
    }


    /**
     * 初始化多媒体
     */
    mulMediaObj.prototype.init = function(){
       // alert("media");
        this.getMediaList();
        this.createMiraclesList();
        new pagesLoading();
    }
    this.init();

}



/**
 *  添加事件
 */
function addShouYeMenuEvent(){

    addShouYeMenuEvent.prototype.miraclesBooks = function (mediaList){
        if(isPC()){

            //设置宽度
            // var w = $(".fixed").width();
            var bookObj = $(".miracles_book_pc");




            // alert("pc");
            bookObj.find("table tr:not(td:eq(2))").on(touchEvents.touchtap,function(){
                // alert($(this).attr("class"));
                miraclesBookClick($(this),mediaList);
            });

            bookObj.find("table tr:eq(2) li:eq(0)").on(touchEvents.touchtap,function(){
                //miraclesBookClick($(this),mediaList);
                alert($(this).attr("class"));
                alert("标签");
            });

            bookObj.find("table tr:eq(2) li:eq(1)").on(touchEvents.touchtap,function(){
                // alert($(this).attr("class"));
                // miraclesBookClick($(this));
                alert("笔记");
            });
        }else{
            // alert("iphone");
            $('.miracles_book').find("table td:not(td:eq(2))").on(touchEvents.touchtap,function(){
                // alert($(this).attr("class"));
                miraclesBookClick($(this),mediaList);
            });

            $('.miracles_book').find("table td:eq(2) li:eq(0)").on(touchEvents.touchtap,function(){
                //miraclesBookClick($(this),mediaList);
                alert($(this).attr("class"));
                alert("标签");
            });

            $('.miracles_book').find("table td:eq(2) li:eq(1)").on(touchEvents.touchtap,function(){
                // alert($(this).attr("class"));
                // miraclesBookClick($(this));
                alert("笔记");
            });
        }


    }; //miracles_book_pc



}

/**
 *  书本列表
 */
function miraclesBookClick(obj,mediaList){
    // var id = obj.attr("id");
    var index = obj.attr("index");
    // alert(index);
   // alert(mediaList);
    var media = mediaList[index];


    var urlPath = "showBook";
    var mediaId = media.mediaId;
    
    if(window.bookObj.bookId!=null && mediaId == window.bookObj.bookId){
        showPage("page-2");
    }else{
        window.bookObj.bookId = media.mediaId;
        $.ajax({
            url : urlPath,
            data : media,
            type : "POST",
            dataType : 'json',
            success : function(json) {
                // alert("bookinfo" + json);
                showPage("page-2");
                window.bookObj.iniDivText(eval(json));
            },
            error : function(er) {
                backErr(er);
            }
        });
    }
}

//alert("book.js");




/***
 * 创建首页奇迹课程列表
 */
function createMiraclesList(mediaList,kind){
    var  divStr = null;
   // alert(kind);

    if (kind == 'mainContextMenu_1') {
        // alert(mediaList);
        var mediaList_length = mediaList.length;
        // alert(mediaList_length);
        //   var divStr = " <  id = 'miracles_book_sr'> ";
        if(isPC()){
            divStr = " <div class=\"miracles_book_pc\" id='" + kind + "_media'>" +
                // "<div class=\"panel-heading\">\n" +
                "          <div class=\"panel-btns\">\n" +
                "           <a>更多<i href=\"\" class=\"icon iconfont icon-zhankai1\"></i></a>\n" +
                // "            <a href=\"\" class=\"minimize\">&minus;</a>\n" +
                "          </div>\n" +
                "          <h4 class=\"panel-title\">浩瀚书海</h4>";
            for (var i = 0; i < mediaList_length; i++) {
                divStr += " <table >" +
                    "<tr class='pc_bookImage' index='" + i + "' >" +
                    " <td><img class='book_image2' src='" + mediaList[i].mediaImgUrl + "' > </td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td class=\"book_mid\" index='" + i + "'> " +
                    "                <div class=\"book_name\" > " + mediaList[i].mediaName_ch + "</div>\n" +
                    "                <div class=\"book_recommend\">" + mediaList[i].mediaDiscrip + " </div>\n" +
                    "                <div class=\"book_jdt\"> <div class=\"progressBar\" w='" + mediaList[i].mediaPercent + "' ></div></div>" +

                    "</td>" +
                    "</tr>" +
                    "<tr>" +
                    "            <td class=\"book_function_pc\">\n" +
                    "                <ul>\n" +
                    "                    <li id='" + mediaList[i].mediaId + "_sq'><a>书签</a></li>\n" +
                    "                    <li id='" + mediaList[i].mediaId + "_bj'><a>笔记</a></li>\n" +
                    "                </ul>\n" +
                    "            </td>\n" +
                    "</tr>" +

                    "</table>";
            }
            divStr += "</div>";

        }else {
            divStr = " <div class=\"miracles_book\" id='" + kind + "_media'>" +
                // "<div class=\"panel-heading\">\n" +
                "          <div class=\"panel-btns\">\n" +
                "            <a >更多<i href=\"\" class=\"icon iconfont icon-zhankai1\"></i>\n<a>" +
                // "            <a href=\"\" class=\"minimize\">&minus;</a>\n" +
                "          </div>\n" +
                "          <h4 class=\"panel-title\">浩瀚书海</h4>";
            for (var i = 0; i < mediaList_length; i++) {
                divStr += " <table id='" + mediaList[i].mediaId + "' index='" + i + "'>\n" +
                    "        <tr>\n" +
                    "            <td class=\"book_image\" index='" + i + "'> <img class=\"book_image2\" src='" + mediaList[i].mediaImgUrl + "' ></td>\n" +
                    "            <td class=\"book_mid\" index='" + i + "' >\n" +
                    "                <p class=\"book_name\" > " + mediaList[i].mediaName_ch + "</p>\n" +
                    "                <p class=\"book_recommend\">" + mediaList[i].mediaDiscrip + " </p>\n" +
                    "                <p class=\"book_jdt\"> <div class=\"progressBar\" w='" + mediaList[i].mediaPercent + "' >\n" +
                    "\n" +
                    "            </div></p>\n" +
                    "            </td>\n" +
                    "            <td class=\"book_function\">\n" +
                    "                <ul>\n" +
                    "                    <li id='" + mediaList[i].mediaId + "_sq'><a>书签</a></li>\n" +
                    "                    <li id='" + mediaList[i].mediaId + "_bj'><a>笔记</a></li>\n" +
                    "                </ul>\n" +
                    "            </td>\n" +
                    "        </tr>\n" +
                    "    </table>";

            }
            divStr += "</div>";
        }



        $(divStr).appendTo('.main_context_iphone');



        progressBar(13, 150, false, 'book_mid');

        var event = new addShouYeMenuEvent();
        event.miraclesBooks(mediaList);
        // event.miraclesBooks_PC(mediaList);

    } else if (kind == 'mainContextMenu_2') { // 分类
        divStr = "<div id='" + kind + "_media'>分类</div>";
        $(divStr).appendTo('.main_context_iphone');

    } else if (kind == 'mainContextMenu_3') { // 最新
        divStr = "<div id='" + kind + "_media'>最新</div>";
        $(divStr).appendTo('.main_context_iphone');
    } else if (kind == 'mainContextMenu_4') { //直播
        divStr = "<div id='" + kind + "_media' >" +
            "<div class='mainContextMenu_4_head'> " +
            " 今日主播榜 " +
            "   </div>" +
            "</div>";
        $(divStr).appendTo('.main_context_iphone');
    }
    divStr = null;


}


// "<ul class=\"nav-list\">\n" +
// "\t\t\t<li><a href=\"#\">奇迹课程<span class=\"trig\"></span></a>\n" +
// "\t\t\t\t<ul id=\"miracles\">\n" +
// "\t\t\t\t\t<li><a id='miracles_text' isAll=\"true\" bookName='miracles_text' bookType='excel'>正文</a></li>\n" +
// "\t\t\t\t\t<li><a id=\"miracles_bookwork\" isAll=\"true\" bookName='miracles_bookwork' bookType='excel'>练习</a></li>\n" +
// "\t\t\t\t\t<li><a id='miracles_manualForTeachers' isAll=\"true\" bookName=\"manualForTeachers\" bookType='excel'>教师指南</a>\n" +
// "






/**
 *  meidaType :1 book ,2 ridio, 3,vidio
 */
function  medialList(){

    var mediaList= new Array();
    mediaList[0] = {
        mediaId:"0" ,  //多媒体ID
        mediaType:"b",  //多媒体类型，b book r radio v vido
        mediaKind:"excel", //多媒体类别 b exce, work ,pdf r mp3 vido mp4 等等
        mediaName:"miracles_text",   //多媒体名称
        mediaName_ch:"正文",   //多媒体名称
        mediaSource:"s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip:"海伦舒曼 若水译",// 多媒体描述
        mediaPercent: 70, //完成%比
        mediaImgUrl:"./images_mobile/miracles2.jpg", // 图片路径
        mediaUrl:"" // 媒体路径
    };
    mediaList[1]={
        mediaId:"1" ,  //多媒体ID
        mediaType:"b",  //多媒体类型，b book r radio v vido
        mediaName:"miracles_bookwork",   //多媒体名称
        mediaName_ch:"练习手册",   //多媒体名称
        mediaSource:"s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip:"海伦舒曼 若水译",// 多媒体描述
        mediaPercent: 60, //完成%比
        mediaImgUrl:"./images_mobile/miracles2.jpg", // 图片路径
        mediaUrl:"" // 媒体路径

    };
    mediaList[2] = {
        mediaId: "2",  //多媒体ID
        mediaType: "b",  //多媒体类型，b book r radio v vido
        mediaName: "manualForTeachers",   //多媒体名称
        mediaName_ch: "教师指南",   //多媒体名称
        mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip: "海伦舒曼 若水译",// 多媒体描述
        mediaPercent: 10, //完成%比
        mediaImgUrl:"./images_mobile/miracles2.jpg", // 图片路径
        mediaUrl: ""// 媒体路径
    };
    mediaList[3] =
        {
            mediaId: "3",  //多媒体ID
            mediaType: "b",  //多媒体类型，b book r radio v vido
            mediaName: "gary_dou",   //多媒体名称
            mediaName_ch: "告别娑婆",   //多媒体名称
            mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
            mediaDiscrip: "葛瑞·雷纳 若水译",// 多媒体描述
            mediaPercent: 25, //完成%比
            mediaImgUrl:"./images_mobile/gbsp2.jpg", // 图片路径
            mediaUrl: ""// 媒体路径
        };
    mediaList[4] =
        {
            mediaId: "4",  //多媒体ID
            mediaType: "b",  //多媒体类型，b book r radio v vido
            mediaName: "gary_howToBreakTheCycleOfBirthAndDeath",   //多媒体名称
            mediaName_ch: "断轮回",   //多媒体名称
            mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
            mediaDiscrip: "葛瑞·雷纳 ",// 多媒体描述
            mediaPercent: 40, //完成%比
            mediaImgUrl:"./images_mobile/dlh.jpg", // 图片路径
            mediaUrl: ""// 媒体路径
        };
    mediaList[5] = {
        mediaId: "5",  //多媒体ID
        mediaType: "b",  //多媒体类型，b book r radio v vido
        mediaName: "gary_loveHasForgottenNoOne",   //多媒体名称
        mediaName_ch: "爱未曾忘记一个人",   //多媒体名称
        mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip: "葛瑞·雷纳 若水译",// 多媒体描述
        mediaPercent: 20, //完成%比
        mediaImgUrl:"./images_mobile/book2.jpeg", // 图片路径
        mediaUrl: ""// 媒体路径
    };

    mediaList[6] = {
        mediaId: "5",  //多媒体ID
        mediaType: "b",  //多媒体类型，b book r radio v vido
        mediaName: "gary_loveHasForgottenNoOne",   //多媒体名称
        mediaName_ch: "爱未曾忘记一个人",   //多媒体名称
        mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip: "葛瑞·雷纳 若水译",// 多媒体描述
        mediaPercent: 20, //完成%比
        mediaImgUrl:"./images_mobile/book2.jpeg", // 图片路径
        mediaUrl: ""// 媒体路径
    };

    mediaList[7] = {
        mediaId: "5",  //多媒体ID
        mediaType: "b",  //多媒体类型，b book r radio v vido
        mediaName: "gary_loveHasForgottenNoOne",   //多媒体名称
        mediaName_ch: "爱未曾忘记一个人",   //多媒体名称
        mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip: "葛瑞·雷纳 若水译",// 多媒体描述
        mediaPercent: 20, //完成%比
        mediaImgUrl:"./images_mobile/book2.jpeg", // 图片路径
        mediaUrl: ""// 媒体路径
    };

    mediaList[8] = {
        mediaId: "5",  //多媒体ID
        mediaType: "b",  //多媒体类型，b book r radio v vido
        mediaName: "gary_loveHasForgottenNoOne",   //多媒体名称
        mediaName_ch: "爱未曾忘记一个人",   //多媒体名称
        mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip: "葛瑞·雷纳 若水译",// 多媒体描述
        mediaPercent: 20, //完成%比
        mediaImgUrl:"./images_mobile/book2.jpeg", // 图片路径
        mediaUrl: ""// 媒体路径
    };

    mediaList[9] = {
        mediaId: "5",  //多媒体ID
        mediaType: "b",  //多媒体类型，b book r radio v vido
        mediaName: "gary_loveHasForgottenNoOne",   //多媒体名称
        mediaName_ch: "爱未曾忘记一个人",   //多媒体名称
        mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip: "葛瑞·雷纳 若水译",// 多媒体描述
        mediaPercent: 20, //完成%比
        mediaImgUrl:"./images_mobile/book2.jpeg", // 图片路径
        mediaUrl: ""// 媒体路径
    };
    return mediaList;
}


/**
 * 页面几个page加载
 */
function pagesLoading(){
    function init() {
        $(".pageload-link").on(touchEvents.touchtap,function(){
            var showId = $(this).attr("href").substring(1);
            showPage(showId);
        });
    }

    init();
}

/**
 * 做页面打开效果
 * @param pageIndex
 */
function showPage(pageIndex){

   //  this.loader = new SVGLoader( document.getElementById('loader'), { speedIn : 100 } );
   // loader.show();
   // setTimeout( function() {
   //      loader.hide();
        $(".container").hide();
        $("#" +pageIndex ).show();
        if(pageIndex =="page-1"){
            $(".footer").show();
        }else{
            $(".footer").hide();
        }



 //   }, 500 );

}










