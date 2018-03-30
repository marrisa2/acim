/**
 * 上传文件函数
 * author marrisa
 * date 2018-01-17
 * */
// document.writeln("<scri"+"pt src='../../../js/js_view/media/temp.js' type='text/javascript'></sc"+"ript>");
// document.write('<script language=javascript src=’../../../statics/js/js_view/media/temp.js’></script>');

// var new_element=document.createElement("script");
// new_element.setAttribute("type","text/javascript");
// new_element.setAttribute("src","@{/js/js_view/media/temp.js}");// 在这里引入了a.js
// document.body.appendChild(new_element);

var UPLOADFILE = {};
var headerObj = null;
var leftObj = null;
var rightObj = null;
var footerObj = null;

UPLOADFILE.header = function () {
    function header() {
        // alert("header function");
        this.uploadFile = 'uploadFile'; // id
        this.createFile = 'createFile'; // id
        this.searchFile = 'searchFile';
        // this.rightObject = robj;
    }

    header.prototype.headerDiv = function () {
        // alert("headerDiv");
        var strDiv =
            "<div class ='uploadMedia_header' >" +
            "   <div class='upload_logo'>" +
            "       " +
            "   </div> " +
            "</div>  <!--  end uploadMedia_header-->" +
            " <div class='upload_header_search'>" +
            "     <input id = '" + this.searchFile + "' type='text'  placeholder=\"请输入您要搜索的作品\" />" +
            "</div>" +


            "<div class='pageload-link' href='#page-1'>" +
            "   <div class='page_4_close'> " +
            "      <i class='icon iconfont icon-guanbi'> </i>" +
            "   </div> " +
            "</div>  <!--  关闭窗口 -->" +

            "<div class='headInfo'>" +
            "   <i class='icon iconfont icon-searchheadseo'></i>" +
            "   <label>marrissa_wzx</label>" +
            "</div>" +
            "" +
            "</div>" +
            "" +
            "<div id='box1' class='box'>" +
            "</div>";
        // alert(frameObj.upload_header);
        // alert("dddd");
        $("." + frameObj.upload_header).append(strDiv);
    };

    header.prototype.headerFunction = function () {
        /**
         * 添加文件按钮功能，调用添加文件方法
         *
         */
        $("#" + uploadFile).on('click', function () {

        });

    };

    /**
     * 上传文件夹，新建文件夹
     */
    header.prototype.addEvent = function () {
        var _this = this;
        /**
         *  上传文件，新建文件夹添加事件
         */
        $(".uploadMedia_header li").on("click", function () {

            var idName = $(this).attr("id");
            if (idName == "createFile") { // 添加新的菜单
                rightObj.createFile();
            } else {//上传文件

            }
        });


    }

    header.prototype.init = function () {
        // alert("header init ");
        this.headerDiv();
        this.addEvent();
        // this.headerFunction();
    };

    return {header: header};

}();

UPLOADFILE.frameLeft = function () {

    function left() {
        this.uploader_left = 'uploader_left';
    }

    left.prototype.div = function () {
        var strDiv = "<div class='" + this.uploader_left + "'> " +
            " <div>" +
            "    <ul class='uploadFile_leftNav'>" +
            "        <li > <div> <i class='icon iconfont icon-wenjian' ></i><a>全部文件</a> </div>" +
            "           <ul >" +
            "                <li><a>文件</a></li>" +
            "                <li><a>视频</a></li>" +
            "                <li><a>音频</a></li>" +
            "                <li><a>图片</a></li>" +
            "                <li><a>其他</a></li>" +
            "           </ul>" +
            "        </li>" +
            "        <li> <div><i class='icon iconfont icon-gongxiangtubiaozhuangtaileicaozuolei23'></i><a>我的分享</a></div></li>" +

            "        <li> <div><i class='icon iconfont icon-chuanshu1'></i><a>传输列表 </a></div>" +
            "           <ul>" +
            "               <li><a>正在上传</a></li>" +
            "               <li><a>正在下载</a></li>" +
            "               <li><a>完成传输</a></li>" +
            "           </ul>" +
            "        </li>" +
            "        <li ><div><i class='icon iconfont icon-icon-4' ></i><a>回收站</a></div></li>" +
            "    </ul>" +
            "</div>" +
            " </div>";
        $("." + frameObj.uploaderDiv_main).append(strDiv);
    };

    left.prototype.addEvent = function(){
        $(".uploadFile_leftNav li").on('click',function(){
            $("#fileListPage_id").show();
            $("#"+ _this.createFile_ID).show();
            $("#"+ _this.fileList_allchecked).show();
            $(".upload_header_fresh").show();
            $(".upload_header_liebiao").show();
            $("#chuanShuFile_id").hide();
            $("#" + _this.cleanRecord).hide();
        });
    }



    left.prototype.init = function () {
        this.div();
        this.addEvent();
    };


    return {left: left};
}();

UPLOADFILE.frameRight = function () {
    function right() {
        this.uploader_right = 'uploader_right';
        this.uploader_right_header = 'uploader_right_header';
        this.uploader_right_header_0 = "uploader_right_header_0";
        this.fileList = 'fileList'; // 大图标
        this.fileListDeatail = 'fileListDeatail'; // 详细列表
        this.fileLength = 0;
        this.fileList_allchecked = "fileList_allChecked";

        // alert("header function");
        this.uploadFile = 'uploadFile'; // 上传文件按钮
        this.uploadFileDiv_class = 'uploadingFileDiv';
        this.createFile_ID = 'createFile'; // id
        this.searchFile = 'searchFile';
        this.chuanShuFile_id  = "chuanShuFile_id";
        this.fileListPage_id = "fileListPage_id";
        this.cleanRecord = "cleanRecord";

    }

    /**
     * 文件列表头
     */
    right.prototype.div = function () {
        var divStr = " " +
            "<div  class='" + this.uploader_right + "'>" +

                "   <div class='" + this.uploader_right_header_0 + "'>" +
                "       <div class='uploader_right_header_left'> " +
                "           <ul>" +
                "                <li id='" + this.uploadFile + "'> " +
                "                   <a href='javascript:void(0);' class='input'>\n" +
                "                       上传文件" +
                "                       <input type='file' id='openFile' name='file' multiple>" +
                "                   </a>" +
                "  " +
                "                </li>" +
                "                <li id='" + this.createFile_ID + "'> 新建文件夹 </li>" +
                "                <li id='" + this.cleanRecord+"'> " +
                "                      <a> 清除记录</a> " +
                "                </li>" +
                "            </ul> " +
                "        </div> <!-- uploader_right_header_left -->" +

                "        <div class='" + this.fileList_allchecked + "'>" + // 全选按钮
                "           <i class='icon iconfont icon-xuanze'></i>" +
                "        </div>" +

                "       <div class='upload_header_liebiao'>" +  // 列表切换
                "           <ul>" +
                "               <li id='fileListDetail'><i class='icon iconfont  icon-liebiao1'> </i> </li>" +
                "               <li id='fileList'><i class='icon iconfont icon-liebiao2' ></i></li> " +
                "           </ul>" +
                "       </div>" +
                "       <div class='upload_header_fresh'>" + // 分享 下载 更多
                "           <ul> " +
                "               <li> 分享 </li>" +
                "               <li> 下载 </li>" +
                "               <li> 更多 " +
                "                   <ul>" +
                "                       <li>批量修改名称</li>" +
                "                       <li>移动到</li>" +
                "                       <li>删除</li>" +
                "                   </ul>" +
                "               </li>" +
                "           </ul>" +
                "       </div> <!--end upload_header_fresh -->" +

                "   </div> <!-- end uploader_right_header_0-->" +
                "   <div id='"+ this.fileListPage_id+"'>" +
                "   <div class='" + this.uploader_right_header + "'>" +
                "       <ul>" +
                "           <li> 返回上一级 </li>" +
                "           <li>全部文件</li>" +
                "           <li id=''><i class ='icon iconfont icon-zhankai'></i>视频文件</li>" +
                "           <li><i class ='icon iconfont icon-zhankai'></i>小飞虫</li>" +
                "           <li><i class ='icon iconfont icon-zhankai'></i>了了</li>" +
                "        </ul> " +
                "   </div>  <!-- end uploader_right_header-->" +

                "   <div class='" + this.fileList + "'></div> <!-- 列表图标 -->" +
                "   <div class ='" + this.fileListDeatail + "'> </div>" +
                "</div> <!-- end  fileListPage_id -->" +
                "<div class='" + this.uploadFileDiv_class + "' id='"+ this.chuanShuFile_id+"'>" +
                // "   <div class='uploadingFileOpera'>" +
                // "       <ul>" +
                //
                // "       </ul>" +
                // "   </div> " +
                "</div>" +
            "</div> <!-- end uploader_right -->";
        // alert(divStr);
        $("." + frameObj.uploaderDiv_main).append(divStr);
    };

    /**
     * 上传列表信息（传输列表信息）
     */
    right.prototype.init_upLoadFileList = function () {
        var strDiv = " " +
            "<table  id='upLoadingFileList_tableHead' class='sortable header2' border=\"0\" cellpadding=\"0\" cellspacing=\"0\">" +
            "<thead> " +
            "<tr>" +
            " <th class='center nosort' > <!--<input id='allChecked' type='checkbox'/ >--></th>" +
            " <th type='string' order='asc'> 名称 <i class='icon iconfont icon-jiantou-copy-copy-copy'></i></th>" +
            " <th type='string' order='asc' >大小 <i class='icon iconfont icon-jiantou-copy-copy-copy'></i></th>" +
            " <th type='string' order='asc'>状态 <i class='icon iconfont icon-jiantou-copy-copy-copy'></i></th>" +
            " <th type='string' order='asc'>操作 <i class='icon iconfont icon-jiantou-copy-copy-copy'></i></th>" +
            "</tr>" +
            "</thead>" +
            "</table>" +

            "<div  class='scrollBody2'>" +
            " <table > " +
            "<tbody id='uploadingFileSort_table' >" +
            " " +
            "</tbody>  " +

            "</table>" +
            "</div>";

        var obj = $("#" + this.chuanShuFile_id);
        // obj.empty();
        obj.append(strDiv);
    }


    /**
     * 详细列表
     */
    right.prototype.init_detailList = function () {

        var strDiv = " " +
            "<table  id='upLoadFileList_tableHead' class='sortable header ' border=\"0\" cellpadding=\"0\" cellspacing=\"0\">" +

            "<thead> " +
            "<tr>" +
            " <th class='center nosort' > <!--<input id='allChecked' type='checkbox'/ >--></th>" +
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

        var obj = $(".fileListDeatail");
        obj.empty();
        obj.append(strDiv);
    }

    /**
     * 大图标列表
     */
    right.prototype.init_fileList = function () {
        var strDiv = "" +

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
        var obj = $(".fileList");
        // alert("ddd");
        obj.empty();
        obj.append(strDiv);
        obj = null;
    }

    /**
     *
     */
    right.prototype.loadFile = function () {
        this.fileLength = $("#fileListDetail_table").length;
    }

    /**
     * 创建文件夹
     */
    right.prototype.createFile = function () {
        var _this = this;
        $("#" + _this.createFile_ID).on("click", function () {
            var objALL = $("#fileListDetail_table");
            var divAllObj = $("#divall");
            var str = "";
            _this.fileLength++;
            var fileNames = $("#fileListDetail_table tr label[value*=\"新建文件夹\"]").length;
            if (fileNames == null || fileNames == 0) {
                fileNames = "新建文件夹";
            } else {
                fileNames = "新建文件夹" + fileNames;
            }
            var date = dateTime('.');
            str = "<tr  id='fileDetailList_" + _this.fileLength + "'  id_index='" + _this.fileLength + "' >" +
                "       <td class='center' >  " +
                "           <i id= 'fileDetailChecked_" + _this.fileLength + "' class='icon iconfont icon-xuanzhong'></i>" +
                "       </td>" +
                "       <td>" +
                "           <i class='icon iconfont icon-wenjianjia'></i>" +
                "           <label class='changeName' value ='" + fileNames + "'>" + fileNames + "</label>" +
                "       </td>" +
                "       <td>0.00M</td>" +
                "       <td>" + date + "</td>" +
                "   </tr>";
            objALL.prepend(str);
            /**
             * 添加大图标列表
             * @type {*|jQuery|HTMLElement}
             */
            divAllObj.prepend("" +
                "    <li id='fileList_" + _this.fileLength + "' id_index ='" + _this.fileLength + "'>" +
                "         <label>" +
                "           <ii id= 'fileChecked" + _this.fileLength + "' name = 'checkedFile' class='icon iconfont icon-icon-70'></ii>" +
                "           <ii id= 'fileDownLoad" + _this.fileLength + "' name= 'dowLoadFile' class='icon iconfont icon-xiazai1'> </ii>" +
                "           <ii id= 'fileShare\"+ this.fileLength +\"'  name= 'fileShare' class='icon iconfont icon-iconfontzhizuobiaozhun20' > </ii>" +
                "        </label>" +
                "        <i class='icon iconfont icon-wenjianjia'> </i>" +
                "        <input type='text' class='fileName' value='" + fileNames + "' />" +
                "   </li>" +
                "");
            if ($(".fileListDeatail").is(":hidden")) {
                divAllObj.find("input")[0].focus();
            } else {
                //focus，选中修改名字

            }
            fileNames = null;
            divAllObj = null;
            objALL = null;
            str = null;
            _this.listFileHover(_this.fileLength); // 大图标文件列表，添加hover事件
            _this.fileDetailListAddHover(_this.fileLength); // 详细文件列表添加hover事件
            _this.addFileDownloadEvent(_this.fileLength);// 文件下载添加事件
            _this.addFileDeleteEvent(_this.fileLength); // 文件delte添加事件
            _this.addFileCheckedEvent(_this.fileLength); // 文件添加选中事件，右键事件
            _this.setListBackgroundColor(); //详细列表背景样式
        });
    }
    /**
     * 文件鼠标移动上去触发
     */
    right.prototype.listFileHover = function (id_index) {

        var _this = this;
        var t = $("#fileList_" + id_index);
        // var t = $(this);
        var ti = t.find("label");//input[type=checkbox]
        t.hover(
            function () {
                t.css({"background": "#f6f7f8"});

                ti.show();
            }, function () {
                // alert(ti.find('ii:first-child').attr('checked'));
                if (ti.find('ii:first-child').attr('checked') != null &&
                    ti.find('ii:first-child').attr('checked') == 'checked') {
                    t.css({"background": "rgba(134,138,133,0.2)"});
                } else {
                    ti.hide();
                    t.css({
                        "background": "#ffff",
                        "border": "none"
                    });
                }
            }
        );
    }

    /**
     * 文件下载
     * @param id_index
     */
    right.prototype.addFileDownloadEvent = function (id_index) {
        $("#fileDownLoad" + id_index).click(function () {
            // alert("下载文件");

            $("." + this.uploadFileDiv_class).show();
        });
    }

    /**
     * 文件点击删除事件
     * @param id_index
     */
    right.prototype.addFileDeleteEvent = function (id_index) {
        // var idIndex = id_index;
        $("#fileDelete" + id_index).click(function () {
            layer.confirm("确定删除吗？");
            $("#fileList_" + id_index).remove();
            $("#fileDetailList_" + id_index).remove();
        });
    }


    /**
     * 详细文件添加hover方法
     * @param id_index
     */
    right.prototype.fileDetailListAddHover = function (id_index) {



    }

    /**
     *   文件列表里 check事件
     * @param id_index
     */
    right.prototype.addFileCheckedEvent = function (id_index) {
        var _this = this;
        var isChecked = null;
        var idIndex = id_index;
        $("#fileDetailList_" + idIndex).unbind("mousedown").on('mousedown', function (event) {
            if (event.which == 3) {
                event.preventDefault();
                event.stopPropagation();
                alert("我单击了右键");

                $("#box1").contextMenu({
                    menu: [{
                        text: "新增",
                        callback: function () {
                            alert("新增");
                        }
                    },
                        {
                            text: "复制",
                            callback: function () {
                                alert("复制");
                            }
                        },
                        {
                            text: "粘贴",
                            callback: function () {
                                alert("粘贴");
                            }
                        },
                        {
                            text: "删除",
                            callback: function () {
                                alert("删除");
                            }
                        }
                    ]
                });


            } else if (event.which == 1) {
                // alert("我单击了左键");
                event.preventDefault();
                event.stopPropagation();
                isChecked = $('#fileDetailChecked_' + idIndex).attr("checked");
                _this.checked(idIndex, isChecked);
            }

        });

        /**
         * 大图标文件选中click触发
         */
        $("#fileChecked" + idIndex).unbind().click(function () {
            isChecked = $(this).attr("checked");
            _this.checked(idIndex, isChecked);
        });
    }



    /**
     *  大图标文件夹选中事件
     * t 父亲， tt 儿子
     * @param t
     * @param tt
     */
    right.prototype.checked = function (id_index, isChecked) {

        var tt = $("#fileChecked" + id_index);
        var t = $("#fileList_" + id_index);
        var t3 = $('#fileDetailChecked_' + id_index);
        // alert();
        if (t == null || tt == null) {
            return;
        }
        if (isChecked == null || isChecked == undefined) {
            tt.attr('checked', 'checked');
            t.css({"background": "rgba(134,138,133,0.2)"});
            tt.css("opacity", '0.8');
            t.find('label').show();

            t3.attr('checked', 'checked');
            t3.css("opacity", 1.0);

        } else {
            // alert();
            tt.removeAttr('checked');
            t3.removeAttr('checked');
            tt.css("opacity", '0.2');
            t.css({
                "background": "#ffff",
                "border": "none"
            });
            t.find("label").hide();
            t3.css("opacity", 0.2);
            // $("#fileDetailChecked" +id_index ).attr("checked",false);

        }

    }


    /**
     * 全选click
     */
    right.prototype.allChecked = function () {
        var _this = this;
        var isCheck = null;


        $('.' + _this.fileList_allchecked).on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var fileListO = $(".fileList li").length;
            if (fileListO == 0) {
                return;
            }
            ;
            var to = $(this);
            var t2 = to.find("i");
            isCheck = t2.attr("checked");
            allcheck(isCheck); // 大图标选中；

        });


        /**
         * 大图标选中
         */
        function allcheck(isCheck) {
            // 大图标模块全部选中
            $(".fileList li").each(function () {
                var t = $(this);
                var idIndex = t.attr("id_index");
                _this.checked(idIndex, isCheck);
            });


            /**
             * 列表选中
             *
             */
            var t2 = $("." + _this.fileList_allchecked).find("i");
            if (isCheck == null || isCheck == undefined) {

                t2.css({
                    "opacity": "0.6",
                    "color": "#f66666"
                });
                t2.attr("checked", 'checked');
                // $(".fileListDeatail td input").attr("checked",'checked');
                $("#allChecked").attr("checked", 'checked');
            } else {
                // $(".fileListDeatail td input").removeAttr("checked");
                t2.css({
                    "opacity": "0.6",
                    "color": "#666"
                });
                t2.removeAttr("checked");
                $("#allChecked").removeAttr("checked", 'checked');
            }
        }
    }

    /**
     * 全选hover
     */
    right.prototype.quanXuanHover = function(){
        $('.' + this.fileList_allchecked).hover(function () {
            $(this).css("opacity", 0.9);
        }, function () {
            $(this).css("opacity", 0.6);
        });
    }

    /**
     * 上传文件
     */
    right.prototype.uploadFileClick = function(){
        var _this = this;
        var  clickObj = $("#" + _this.chuanShuFile_id);


        $("#"+this.uploadFile).click(function(){


            $("#"+ _this.fileListPage_id).hide();
            $("#"+ _this.createFile_ID).hide();
            $("#"+ _this.fileList_allchecked).hide();
            $(".upload_header_fresh").hide();
            $(".upload_header_liebiao").hide();
            clickObj.show();
            $("#" + _this.cleanRecord).show();


        });

/*
        $('#fileupload').fileupload({
            dataType: 'json',
            maxChunkSize: 1000000,
            done: function (e, data) {
                $.each(data.result.files, function (index, file) {
                    $('<p/>').text(file.name).appendTo(document.body);
                });
            }
        }).bind('fileuploadsubmit', function (e, data) {
            data.formData = {uploadId: uuid()};
        });
*/

        var filesList = "";
        var fileName = "";
        var fileListLenght =0;
        var  barClass ="";
        var  barClassObj = {};
        var obj  = $("#uploadingFileSort_table");
        var str = "";
        $('#openFile').fileupload({
            dataType: 'json',
            url:'uploading',
            // autoUpload:true,
            sequentialUploads: true,
            maxChunkSize:10000000,
            add: function(e, data) {
                // alert("ddd");
                var filename = data.files[0].name;
                fileListLenght = $('#uploadingFileSort_table').find('tr').length;
                for (var i = 0; i < fileListLenght; i++) {
                    if (filename == $('#uploadingFileSort_table').find('.fileName').html()) {
                        // $('.tips').text("不能重复上传！");
                        layer.alert("不能重复上传！");
                        return ;
                    }
                }


                var fileList_length = data.files.length;
                filesList = "filesList" + fileList_length;
                barClass = "aabbccddee" + fileListLenght +"aa"
                for( var i = 0; i<fileList_length; i++){
                    // alert(fileList.files[i].size);
                    fileName = data.files[i].name;
                    str = "<tr  class='" + filesList +"' id='filesList_" + fileList_length +"' >" +
                        "       <td class='center' >  " +
                        "           <i  class='icon iconfont icon-xuanzhong'></i>" +
                        "       </td>" +
                        "       <td>" +
                        // "           <i class='icon iconfont icon-wenjianjia'></i>" +
                        "           <label class='fileName' value ='" + fileName + "'>" + fileName + "</label>" +
                        "       </td>" +
                        "       <td /*Content-Range ='" + data.files[i].size +"'*/ > "+ fileSize(data.files[i].size) + "  </td>" +
                        "       <td id = 'fileIdUploadingSize' class='"+barClass +"'>"+
                        "           <p class='book_jdt'> <div class='progressBar' w='0' id ='fileName" + fileListLenght +"'  >" +
                        "            </div></p> " +
                        // '           <div class="progress">' +
                        // '               <div class="bar" style="width: 0%;"></div>' +
                        // '           </div>' +
                        "       </td>" +
                        "       <td> </td>" +
                        "   </tr>";

                }
                 // alert(barClass);
                obj.append(str);
                data.context = $("." + filesList);
                data.submit();
                progressBar(8, 110, false, "" + barClass );
                // alert("ddd");
                barClassObj[fileName] = barClass;
            },
            //单个进度条
            progress: function(e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                var barclass = barClassObj[data.files[0].name];
                $(".charts"+ barclass ).animate({width: progress+"%"},10,function(){//一天内走完
                    $(this).children('d').html(progress + "%");
                });


                // alert($(".charts"+ barClass ).attr("width"));

            },
            //上传失败
            fail: function(e, data) {
                // data.context.find('.error').text('上传失败');
            },
            //上传完成
            done : function(e, data) {
                // alert(data);
               /* $('.filesName').find('.progress').parent().parent().remove();
                $.each(data.files, function (index, file) {
                    var res = data.result.split(",");
                    if(res[0] == "success:"){
                        var filesList = "filesList" + $('.filesName').find('tr').length;
                        var filesListHTML ='<tr class="' + filesList + '">' +
                            '<td>' +
                            '<p class="name">' + res[3] + '</p>' +
                            '</td>' +
                            '<td class="btns">' +
                            '<button class="delete">删除</button>&nbsp;' +
                            '<button class="download">下载</button>' +
                            '</td>' +
                            '</tr>';
                        $(".filesName").append(filesListHTML);

                        $("."+filesList).find('.delete').click(function(){
                            window.location.hash='#top';
                            $.messager.confirm("信息提示","请注意，删除的附件将无法恢复，是否确认删除？",function(b){
                                if(b){
                                    $.ajax({
                                        async:false,
                                        type:'post',
                                        url:'${app}/app/upload/fileUpload_delAttachment.shtml',
                                        dataType:'html',
                                        data:'id=' + res[2],
                                        success:function(msg){
                                            $("."+filesList).remove();
                                        }
                                    });
                                }
                                window.location.hash='#bottom';
                            });
                        });

                        $("."+filesList).find('.download').click(function(){
                            downloadFile(res[1],res[3]);
                        });
                    }
                });*/
            }
        }).bind('fileuploadsubmit', function (e, data) {
            data.formData = {uploadId: uuid()};
        });







    }
    /**
     * 更多hover显示菜单
     */

    right.prototype.gengDuoHover = function(){
        /**
         *  更多 hover，显示下面的ul
         *  marrisa 2018-01-15
         */
        $(".upload_header_fresh li:last-child").hover(
            function () {
                var tu = $(this).find('ul');
                tu.show();
            },
            function () {
                $(this).find('ul').hide();
            }
        );

        $(".upload_header_fresh li:last-child ul").hover(
            function () {
                $(this).show();
            }, function () {
                $(this).hide();
            }
        );
    }
    /**
     * 列表切换增加事件
     */

    right.prototype.listChangeClick = function(){
        $(".upload_header_liebiao li").on("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

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

    right.prototype.addEvent = function () {
        var _this = this;
        _this.quanXuanHover(); // 全选；
        _this.gengDuoHover(); // 更多hover
        _this.createFile(); // 创建文件
        _this.uploadFileClick();//上传文件
        _this.listChangeClick();//列表切换增加事件
    }

    /**
     * 设置列表背景颜色
     */
    right.prototype.setListBackgroundColor = function() {
        $("#fileListDetail_table tr").each(function (i) {
            var t = $(this);
            var ti = $(this).find('input');
            if (i % 2 == 1) {
                t.addClass("even");
            } else {
                t.removeClass("even");
            }
            ti.css('background', t.css("background"));
        });
    }

    /**
     * 右边初始化
     */
    right.prototype.init = function () {
        this.div();
        this.init_detailList();//detailList();
        this.init_fileList();
        this.init_upLoadFileList(); // 传输列表信息
        this.loadFile();
        this.allChecked();
        this.addEvent();

        var tableUtil = new TABLEUTILS.table.sort('sort');
        tableUtil.init("upLoadFileList_tableHead", 'fileListDetail_table');

        var tableUtil2 = new TABLEUTILS.table.sort('sort');
        tableUtil2.init("upLoadingFileList_tableHead", 'uploadingFileSort_table');
    };

    /**
     * 加载文件
     */
    right.prototype.loadFile = function () {
        var urlPath = "";
        var loadFile = "";
        $.ajax({
            url: urlPath,
            data: loadFile,
            type: "POST",
            dataType: 'json',
            success: function (json) {

            },
            error: function (er) {
                backErr(er);
            }
        });
    };

    /**
     * 全选文件
     */

    right.prototype.allCheck = function () {

    };


    /**
     * 上传文件窗口
     */

    right.prototype.upLoadFile = function () {

    };

    return {right: right};

}();

UPLOADFILE.frameFooter = function () {
    function footer() {
        this.upload_footer = 'upload_footer';

    }

    footer.prototype.div = function () {
        var strDiv =
            "<div class='" + this.upload_footer + "'>" +
            "   <label>  上传视频，即表示您已同意 上传<a>服务条款</a> ，请勿上传色情及反动等违法视频 </label>" +
            "</div>";
        $("." + frameObj.uploadDiv).append(strDiv);
    }

    footer.prototype.init = function () {
        this.div();
    }

    return {footer: footer};

}();

//alert("dddd");
UPLOADFILE.framePage = function () {

    function framePage() {
        // alert("framePage");
        this.uploadDiv = 'uploadDiv';
        this.upload_header = 'upload_header';
        this.uploaderDiv_main = 'uploaderDiv_main';
    }

    /**
     *  主框架
     */
    framePage.prototype.mainFrame = function () {
        // alert(" mainFrame");
        var divStr = "<div class='container' id='page-4'>" +
            "   <div class='" + this.uploadDiv + "'>" +
            "       <div class ='" + this.upload_header + "'></div>" +
            "       <div class='" + this.uploaderDiv_main + "'></div>" +
            "   </div>" +
            "" +
            "</div>";
        $(divStr).appendTo("body");
        // this.setPosition();
    };

    framePage.prototype.setPosition = function () {
        var w = window.screen.width;

        // alert($("." + this.uploadDiv).html());
        // var h = window.screen.height;
        var width = $("." + this.uploadDiv).width();
        $("." + this.uploadDiv).css("margin-left", ( w - width) / 2 + "px");


        var top = $("." + this.uploaderDiv_main).offset().top;

        var bottom = $("." + footerObj.upload_footer).offset().top;
        var fileListTop = $("." + rightObj.fileList).offset().top;
        $("." + this.uploaderDiv_main +
            ",." + leftObj.uploader_left +
            ",." + rightObj.uploader_right).css("height", (bottom - top - 15) + "px")
        $("." + rightObj.fileList + "" +
            ",." + rightObj.fileListDeatail).css("height", (bottom - fileListTop - 10) + "px");
        // alert(bottom -fileListTop -46);
        $('.scrollBody').css("height", (bottom - fileListTop - 52) + "px");
        w = null;
        width = null;
        top = null;
        bottom = null;
        fileListTop = null;
    }


    /**
     * 头部
     */
    framePage.prototype.frameHeader = function () {
        // alert(" header ");

        headerObj = new UPLOADFILE.header.header();
        headerObj.init();
    };

    /**
     * left
     */
    framePage.prototype.frame_left = function () {
        leftObj = new UPLOADFILE.frameLeft.left();
        leftObj.init();

    };


    framePage.prototype.frame_right = function () {
        rightObj = new UPLOADFILE.frameRight.right();
        rightObj.init();


    };

    framePage.prototype.frame_footer = function () {
        footerObj = new UPLOADFILE.frameFooter.footer();
        footerObj.init();
    };
    /**
     * 初始化上传页面窗口
     */
    framePage.prototype.init = function () {
        // alert(" frame init ");
        // this.frameHeader();
        this.frame_left();
        this.frame_right();



        this.frame_footer();
        this.setPosition();
    };
    return {framePage: framePage}

}();


var frameObj = new UPLOADFILE.framePage.framePage();
frameObj.mainFrame();
frameObj.frameHeader();













