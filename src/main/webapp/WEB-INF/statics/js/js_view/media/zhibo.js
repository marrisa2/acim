// alert("zhibo");
//

window.zhiboObj = new Zhibo();
// window.zhiboObj.init();

function Zhibo(){





Zhibo.prototype.init = function() {
    // alert("ddd");
    var divStr = "<div class='container' id='page-3'><div class='pageload-link' href='#page-1'><i class='icon iconfont icon-icon-2'> </i></div>" +
        " <div id=\"jquery-wrapped-fine-uploader\"></div>\n" +
        "    <script>\n" +
        "        $(function () {\n" +
        "            $('#jquery-wrapped-fine-uploader').fineUploader({\n" +
        "                request: {\n" +
        "                    endpoint: '/ImageUploader/ProcessUpload'\n" +
        "                }\n" +
        "            });\n" +
        "        });" +
        "</div> ";
    //  alert( $('.bookDiv'));
    // alert($('#page-3'));
    if ($('#page-3')) {
        //     alert("ini");
        $(divStr).appendTo("body");
    }

};
    this.init();

};