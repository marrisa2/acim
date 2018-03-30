/**
 * 添加事件 marrisa time 2018-01-14
 */


    // alert("ddd");
var UPLOAD = {};

/**
 * 上传文件函数
 * author marrisa
 * date 2018-01-17
 * @type {{uploadFile}}
 */
UPLOAD.uploadFile = function(){
     function uploadFile(){

     }

    /**
     * 初始化
     */
    uploadFile.prototype.init =function(){

    }



     return {uploadFile:uploadFile};
}();



UPLOAD.addEvent = function() {
    function pageAddEvent() {

    }

    /**
     * 上传文件，
     * 新建文件
     * 更多
     * 分享
     * 下载
     */

    pageAddEvent.prototype.loaderPageHeader = function () {
        var _this = this;
        /**
         *  上传文件，新建文件夹添加事件
         */
        $(".uploadMedia_header li").on("click", function () {

            var idName = $(this).attr("id");
            if (idName == "createFile") { // 添加新的菜单
                /**
                 * 添加列表详细
                 * @type {string}
                 */
                var objALL = $("#fileListDetail_table");
                var str = "";

                var fileNames = $("#fileListDetail_table tr input[value*=\"新建文件夹\"]").length;
                // alert(fileNames)
                if (fileNames == 0) {
                    fileNames = "新建文件夹";
                } else {
                    fileNames = "新建文件夹" + fileNames;
                }

                var date = dateTime('.');
                // alert(date);

                str = "<tr >" +
                    "<td class='center'> <input  type='checkbox'/></td>" +
                    "<td><i class='icon iconfont icon-wenjianjia'></i><input type='text'  class='changename' value='" + fileNames + "'></td>" +
                    "<td>0.00M</td>" +
                    "<td>" + date + "</td>";


                objALL.prepend(str);
                setListBackgroundColor();

                /**
                 * 添加大图标列表
                 * @type {*|jQuery|HTMLElement}
                 */

                fileNames = $("#divall li input[value*=\"新建文件夹\"]").length;
                // alert(fileNames)
                if (fileNames == 0) {
                    fileNames = "新建文件夹";
                } else {
                    fileNames = "新建文件夹" + fileNames;
                }

                var divAllObj = $("#divall");
                divAllObj.prepend("" +
                    "    <li>" +
                    "         <label>" +
                    "         <ii name = 'checkedFile' class='icon iconfont icon-yuangongqudaoAPP-fuxuankuangxuanzhong'></ii>" +
                    "         <ii name= 'dowLoadFile' class='icon iconfont icon-xiazai-tianchong'> </ii>" +
                    "             <ii name= 'deleteFile' class='icon iconfont icon-shanchu3' > </ii>" +
                    "        </label>" +
                    "        <i class='icon iconfont icon-wenjianjia'> </i>" +
                    "        <input type='text' class='fileName' value='"+ fileNames+"' />" +
                    "   </li>" +
                    "");

                var tempHtml = divAllObj.html();


                if ($(".fileListDeatail").is(":hidden")) {
                    divAllObj.find("input")[0].focus();
                } else {
                    //focus，选中修改名字

                }
                fileNames = null;
                divAllObj = null;
                objALL = null;
                firstTR = null;
                length = null;
                str = null;
            } else {//上传文件

                /**
                 * 上传文件函数
                 */




            }

            _this.listFileHover();
        });

        /**
         *  更多 hover，显示下面的ul
         *  marrisa 2018-01-15
         */
        $(".upload_header_fresh li:nth-child(3)").hover(

            function(){
                var tu = $(this).find('ul');
                tu.show();
            },
            function(){
                $(this).find('ul').hide();
            }
        );

        $(".upload_header_fresh li:nth-child(3) ul").hover(
            function(){

            },function(){
                $(this).hide();
            }
        );

    };

    pageAddEvent.prototype.listFileChangeShow = function () {
        /**
         * 列表切换增加事件
         */
        $(".upload_header_liebiao li").on("click", function () {

            var obj = $(".fileListDeatail");
            var obj2 = $(".fileList");
            var t = $(this);
            var id = t.attr("id");
            // alert(obj.is(":hidden"));

            if (obj.is(":hidden") && id == 'fileListDetail') {
                obj.show();
                obj2.hide();

            } else if (obj.is(":hidden") == false && id != 'fileListDetail') {
                obj.hide();
                obj2.show();
            }
            obj = null;
            obj2 = null;
            id = null;
            // t.css({"background": "#bbbbbb", "color": "#ffffff"});
            // t.siblings().css({"background": "#ffffff", "color": "#999999"});
            t.hide();
            t.siblings().show();

        });
    }

    pageAddEvent.prototype.listFileDialog = function () {
        /**
         *  文件列表添加事件
         */
        $(".uploader_right_header li").on("click", function () {
            alert(" ");

        });


        /**
         * 后边文件菜单样式
         */

        $(".uploader_right_header li:last-child").hover(function () {
            $(this).css("color", "#666");
        });
    }

    /**
     * auth marrisa
     * 文件列表鼠标划过去变化，及文件列表选中状态，
     * 详细列表选中事件，
     */
    pageAddEvent.prototype.listFileHover = function () {
        /**
         * 文件夹list hover 添加事件
         */
        var objEvent = $('.fileListDeatail tr ');
        var _this = this;
        // objEvent.unbind();
        objEvent.each(function () {
            var t = $(this);
            t.unbind();
            t.find("input").css('background', t.css("background"));
            // t.unbind();
            t.hover(
                function () {
                    // alert("ddd");
                    t.find("input").css('background', '#eee');
                },
                function () {
                    t.find("input").css('background', t.css("background"));
                }
            );
            t = null;
        });
        objEvent = $(".fileList li");

        /**
         * 大图表hover显示
         */
        // objEvent.unbind();
        //  alert(objEvent.length);
        objEvent.each(function(){
            var t = $(this);
            var ti = t.find("label");//input[type=checkbox]
            // alert(ti.length);
            t.unbind();
            t.hover(
                function(){
                    t.css({"background":"#f1f2fd"});
                    ti.show();
                },function(){
                       // alert(ti.find('ii:first-child').attr('checked'));
                    if(ti.find('ii:first-child').attr('checked')!=null && ti.find('ii:first-child').attr('checked')=='checked'){

                        t.css({"background":"rgba(169,169,169,0.5)"});
                    }else{

                        ti.hide();
                        t.css({"background":"#ffff",
                            "border":"none"});
                    }
                }
            );
            // alert( ti.find('ii')[2].length +" ti ii");
            ti.find('ii').unbind();
            ti.find('ii').on('click',function(i){
                var tt  =$(this);
                var id = tt.attr("name");
                if(id == 'dowLoadFile'){

                }else if(id == 'deleteFile'){

                    t.remove();

                }else if(id =='checkedFile'){
                    var isChecked = tt.attr('checked');

                    _this.checked(t,tt,isChecked);// 文件选中;
                }
            });

        });
        objEvent = null;
    }

    /**
     * t 父亲， tt 儿子
     * @param t
     * @param tt
     */
    pageAddEvent.prototype.checked = function(t,tt,isCheck){
        if(t==null || tt == null ){ return; }
        if(isCheck == null || isCheck ==undefined  ){
            tt.attr('checked','checked');
            t.css({"background":"rgba(169,169,169,0.3)"});
            tt.css("opacity",'0.8');
            t.find('label').show();
        }else{
            // alert();
            tt.removeAttr('checked');
            tt.css("opacity",'0.2');
            t.css({"background":"#ffff",
                "border":"none"});
            t.find("label").hide();
        }
    }

    pageAddEvent.prototype.listTableSort = function () {
        // var sorter = new TINY.table.sorter("sorter");
        // sorter.head = "head";
        // sorter.asc = "asc";
        // sorter.desc = "desc";
        // sorter.even = "evenrow";
        // sorter.odd = "oddrow";
        // sorter.evensel = "evenselected";
        // sorter.oddsel = "oddselected";
        // sorter.paginate = true;
        // sorter.currentid = "currentpage";
        // sorter.limitid = "pagelimit";
        // sorter.init("fileListDetail_table",1,'upLoadFileList_tableHead');
    }

    /**
     * list 全选功能
     *  2018-01-16
     *  marrisa
     */
    pageAddEvent.prototype.allChecked = function(){
        var _this = this;
        var isCheck = null;

        $('.fileList_header,#allChecked').on('click',function(e){
            e.preventDefault();
            var fileListO = $(".fileList li").length;
            if(fileListO==0){ return };
            var to = $(this);
            var id  = to.attr("id");
            var t2 = null;
             if(id == null || id == undefined ){
                 t2 = to.find("i");
                 isCheck = t2.attr("checked");
             }else{
                 t2 = $(".fileList_header").find("i");
                 isCheck = to.attr("checked");
                 if(isCheck=='checked'){
                     isCheck = undefined;
                 }else{
                     isCheck = 'checked';
                 }
             }
            if(isCheck == null || isCheck == undefined){
                t2.css({"opacity":"0.6",
                    "color":"#f66666"});
                t2.attr("checked",'checked');
            }else{
                t2.css({"opacity": "0.3",
                    "color":"#666"});
                t2.removeAttr("checked");
            }

            allcheck(isCheck);
        });

        function allcheck(){
            // 大图标模块全部选中
            $(".fileList li").each(function(){
                var t = $(this);
                var tt = t.find("label ii:first-child");
                _this.checked(t,tt,isCheck);
            });
            /**
             * 列表选中
             *
             */
            if(isCheck == null || isCheck == undefined){
                $(".fileListDeatail td input").attr("checked",'checked');
            }else{
                $(".fileListDeatail td input").removeAttr("checked");
            }
        }
    }


    // pageAddEvent.prototype.listFile
    pageAddEvent.prototype.init = function () {
        // alert("dd");
        this.loaderPageHeader();
        this.listFileChangeShow();
        this.listFileDialog();
        this.listFileHover();
        this.listTableSort();
        this.allChecked();
    }

    return {pageAddEvent: pageAddEvent};
}();

UPLOAD.header = function(){
    function header(){

    }
    header.prototype.creatNewFile = function(){

    }

    header.prototype.new

    return {header:header};
}();



UPLOAD.frame = function(){

     function frame(){
         this.frameDiv = '.uploadDiv';

     }


     frame.prototype.mainFrame = function(){
         var divStr = "<div class='container' id='page-4'>" +
             " <div class='uploadDiv'></div>" +
             "</div>";
         $(divStr).appendTo("body");

     };


    /**
     * 头部
     */
    frame.prototype.header = function(){



        var divStr =    "<div class ='upload_header'> " +

            "<div class ='uploadMedia_header' >" +
            " <ul>" +

            "   <li id='uploadFile'> <i class='icon iconfont icon-meitikuwubiaoqianbanv1105'></i> 上传文件</li>" +

            // "   <li id='uploadRadio'> <i class='icon iconfont icon-shangchuanyinpin'></i>上传音频</li>" +

            // "   <li id='uploadTv'> <i class = 'icon iconfont icon-shangchuanshipin1'></i>上传视频</li>" +
            "   <li id='createFile'> <i class = 'icon iconfont icon-gerenchuangjian-\n'></i>新建文件夹</li>" +
            "   </ul>" +
            "</div>  <!--  end uploadMedia_header-->" +
            " <div class='upload_header_search'>" +
            "     <input type='text'  placeholder=\"请输入您要搜索的作品\" />" +
            // "     <button> <i class='icon iconfont icon-icon-3'> </i> </button>" +
            "</div>" +

            "<div class='pageload-link' href='#page-1'>" +
            "   <div class='page_4_close'> "+
            "      <i class='icon iconfont icon-guanbi'> </i>" +
            "   </div> " +
            "</div>  <!--  关闭窗口 -->" +

            "<div class='upload_header_liebiao'>" +
            "  <ul>" +
            "  <li id='fileListDetail'><i class='icon iconfont  icon-icon-8'> </i> </li>" +
            "  <li id='fileList'><i class='icon iconfont icon-liebiao2' ></i></li> " +
            " </ul>" +
            "</div>" +

            "<div class='upload_header_fresh'>" +
            " <ul> " +
            // " <li> <i class='icon iconfont icon-icon-3'> </i></li>" +
            " <li> 分享 </li>" +
            " <li> 下载 </li>" +
            " <li> 更多 " +
            "    <ul>" +
            "         <li>批量修改名称</li>" +
            "         <li>移动到</li>" +
            "         <li>删除</li>" +
            "     </ul>" +
            "</li>" +
            "</ul>" +
            "</div>" +
            "</div> <!--  end upload_header-->" ;

        $(this.frameDiv).append(divStr);


     };



    /**
     * 初始化上传页面窗口
     */
    frame.prototype.init = function(){

     }

     return {frame:frame};

}();

/**
 * 2018-01-12
 * auth:marrrisa
 * @constructor
 */

// var AA ={};
// AA.bb= function(){
//     function cc(dd){ alert(dd)}
//     cc.prototype.ini = function(){alert("cc.ini")};
//     return {cc:cc}
// }();
//
// var cc = new AA.bb.cc('dd');
var UploadMedia = function(){

}

UploadMedia.prototype = {
    constructor: UploadMedia,

    init:function(){
       this.addHtml();
       this.addRightMenu();

       this.addFileList();
       this.addFileListDeatail();
       this.addEvent();
       // alert("ed");





    },
    /**
     * 初始化页面html内容
     */
    addHtml:function(){
        pageAddHtml();
    },
    /**
     * 设置页面中间位置，文件list高度
     */
    setPosition:function(){
        pageSetPosition();
    },
    /**
     * 添加事件
     */
    addEvent:function() {
        // alert("ddd");
        // alert("ddd");
        var  pageEvent =   new UPLOAD.addEvent.pageAddEvent();
        pageEvent.init();
    //
    },
    /**
     * 修改名字
     * @param index
     */
    changeName:function(index){

        // firstTR = $("#fileListDetail_table tr:first-child");
        // // alert(firstTR.find('input').length);
        // firstTR.find('input')[1].attr("disabled",true);
        // firstTR.find('input')[1].focus();
    },

    addLeftHtml:function(){

    },


    addRightMenu:function(){
        var strDiv = "<div class=\"menu-zdy\" id=\"menu\">\n" +
               "<ul>" +
            "<li><i class='icon iconfont '></i>分享</li>" +
            "<li><i class='icon iconfont '></i>下载</li>" +
            "<li><i class='icon iconfont '></i>打开</li>" +
            "<li><i class='icon iconfont '></i>重命名</li>" +
            "<li><i class='icon iconfont '></i>删除</li>" +
            "</ul>"
            "</div>    ";

        $(strDiv).appendTo("body");

    },

    addFileList:function(){

        // $.ajax{
        //
        // }
        var strDiv = "" +
            " <div class='fileList_header'>" +
            "    <i class='icon iconfont icon-xuanze'></i>" +
            "</div>" +

            " <ul id='divall'>" +
            // "    <li>" +
           /* "         <label>" +
            "           <ii name = 'checkedFile' class='icon iconfont icon-yuangongqudaoAPP-fuxuankuangxuanzhong'></ii>" +
            "           <ii name= 'dowLoadFile' class='icon iconfont icon-xiazai-tianchong'> </ii>" +
            "           <ii name= 'deleteFile' class='icon iconfont icon-shanchu3' > </ii>" +
            "        </label>" +
            "        <i class='icon iconfont icon-wenjianjia'> </i>" +
            "        <input type='text' class='fileName' value='我的文件夹' />" + */
            // "   </li>" +
          "  </ul> ";
        var obj  = $(".fileList");
        obj.empty();
        obj.append(strDiv);
        obj = null;

    },
    addFileListDeatail:function(){
        var strDiv= " <table  id='upLoadFileList_tableHead' class='sortable header ' border=\"0\" cellpadding=\"0\" cellspacing=\"0\">" +

            "<thead> " +
            "<tr>" +
            " <th class='center nosort' > <input id='allChecked' type='checkbox'/ ></th>" +
            " <th type='string' order='asc'> 名称 <i class='icon iconfont icon-jiantou-copy-copy-copy'></i></th>" +
            " <th type='string' order='asc' >大小 <i class='icon iconfont icon-jiantou-copy-copy-copy'></i></th>" +
            " <th type='string' order='asc'>修改时间 <i class='icon iconfont icon-jiantou-copy-copy-copy'></i></th>" +
            "</tr>" +
            "</thead>" +
            "</table>" +

             "<div  class='scrollBody'>" +
            " <table > " +
            "<tbody id='fileListDetail_table' >" +
            " " +
            "</tbody>  " +

            "</table>" +
            "</div>";

        var obj  = $(".fileListDeatail");
        obj.empty();
        obj.append(strDiv);
    },

}



var uploadMedia = new UploadMedia();
uploadMedia.init();

/**
 * 设置列表背景颜色
 */
function setListBackgroundColor(){

    $("#fileListDetail_table tr").each(function(i){
        var t = $(this);
        var ti = $(this).find('input');
        if(i%2==1){
            t.addClass("even");
        }else{
            t.removeClass("even");
        }

        ti.css('background',t.css("background"));
        // var fileName =  ti.val();
        //
        //ti.val('新建文件'+i+1);

    });
}







function pageAddHtml(){

    var divStr = " <div class='container' id='page-4'>" +
        "<div class='uploadDiv'>" +

        // "<div class='pageload-link' href='#page-1'>" +
        //     " <div class='page_4_close'> "+
        //     "   <i class='icon iconfont icon-icon-2'> </i>" +
        //     " " +
        //     " </div> " +
        //
        // "</div>  <!--  关闭窗口 -->" +

        "<div class ='upload_header'> " +
        "<div class ='uploadMedia_header' >" +
        " <ul>" +

        "   <li id='uploadFile'> <i class='icon iconfont icon-meitikuwubiaoqianbanv1105'></i> 上传文件</li>" +

        // "   <li id='uploadRadio'> <i class='icon iconfont icon-shangchuanyinpin'></i>上传音频</li>" +

        // "   <li id='uploadTv'> <i class = 'icon iconfont icon-shangchuanshipin1'></i>上传视频</li>" +
        "   <li id='createFile'> <i class = 'icon iconfont icon-gerenchuangjian-\n'></i>新建文件夹</li>" +
        "   </ul>" +
        "</div>  <!--  end uploadMedia_header-->" +
        " <div class='upload_header_search'>" +
        "     <input type='text'  placeholder=\"请输入您要搜索的作品\" />" +
        // "     <button> <i class='icon iconfont icon-icon-3'> </i> </button>" +
        "</div>" +

        "<div class='pageload-link' href='#page-1'>" +
        "   <div class='page_4_close'> "+
        "      <i class='icon iconfont icon-guanbi'> </i>" +
        "   </div> " +
        "</div>  <!--  关闭窗口 -->" +

        "<div class='upload_header_liebiao'>" +
        "  <ul>" +
        "  <li id='fileListDetail'><i class='icon iconfont  icon-icon-8'> </i> </li>" +
        "  <li id='fileList'><i class='icon iconfont icon-liebiao2' ></i></li> " +
        " </ul>" +
        "</div>" +

        "<div class='upload_header_fresh'>" +
        " <ul> " +
        // " <li> <i class='icon iconfont icon-icon-3'> </i></li>" +
        " <li> 分享 </li>" +
        " <li> 下载 </li>" +
        " <li> 更多 " +
        "    <ul>" +
        "         <li>批量修改名称</li>" +
        "         <li>移动到</li>" +
        "         <li>删除</li>" +
        "     </ul>" +
        "</li>" +
        "</ul>" +
        "</div>" +


        "</div> <!--  end upload_header-->" +
        " <div class='uploaderDiv_main'>" +
        " <div class='uploader_left'> left" +
        "" +
        " </div>" +


        " <div id = 'fileList' class='uploader_right'>" +
        "   " +
        "    <div class='uploader_right_header'>" +
        "      <ul>" +
        "           <li> 返回上一级 </li>" +
        "           <li>全部文件</li>" +
        "           <li><i class ='icon iconfont icon-zhankai'></i>视频文件</li>"+
        "           <li><i class ='icon iconfont icon-zhankai'></i>小飞虫</li>" +
        "     </ul> " +
        "    </div>  <!-- end uploader_right_header-->" +
        "" +
        "   <div class='fileList'>" +
        ""+
        "   </div> <!-- 列表图标 -->" +
        "  <div class ='fileListDeatail'>" +
        "       " +
        "  </div>" +
        " </div> <!-- end uploader_right -->" +

        "</div> <!-- end uploaderDiv_main -->"  +

        "<div class='upload_footer'>" +
        "   <label>  上传视频，即表示您已同意 上传<a>服务条款</a> ，请勿上传色情及反动等违法视频 </label>" +
        "</div>" +
        " </div> " +
        "</div> ";

    if ($('#page-4')) {

        $(divStr).empty();
        $(divStr).appendTo("body");

        divStr = null;
    }
}

function pageSetPosition(){
    var w = window.screen.width;
    // var h = window.screen.height;
    var width = $(".uploadDiv").width();
    $(".uploadDiv").css("margin-left",( w-width)/2 +"px");

    var top =  $(".uploaderDiv_main").offset().top;

    var bottom= $(".upload_footer").offset().top;
    var fileListTop =  $(".fileList").offset().top;
    //   alert(top + "  "  +bottom);
    //    $
    $(".uploaderDiv_main,.uploader_left,.uploader_right").css("height",(bottom -top -15)+"px")
    $(".fileList,.fileListDeatail").css("height",(bottom -fileListTop -10)+"px");
    // alert(bottom -fileListTop -46);
    $('.scrollBody').css("height",(bottom -fileListTop -52)+"px");
    w =null;
    width = null;
    top = null;
    bottom = null;
    fileListTop =null;
}