var TABLEUTILS = {};

// alert("utiil");

TABLEUTILS.table = function(){
    /**
     *
     * @param th  table header id
     * @param tb  table body  id
     */
    function sort(_self){
        // alert('self');
        this.self = _self;
    }

    sort.prototype.init = function(_th,_tb){
         // alert("dddd");
        this.th = _th;
        this.th_c = $("#"+this.th).find("th");
        // alert(this.th_c.length +"length" );
        this.th_c.each(function(i){
            // alert(i);
            var t = $(this);
            var className = t.attr("class");
            // alert(className);
            if(className == null || className == 'Undefined' ||  className.indexOf('nosort')<0){
                var type = t.attr("type");
                t.on('click',function(){
                    var ic = t.find('i').attr("class");
                    // alert(ic !=null && ic !='Undefined' && ic == 'icon iconfont icon-jiantou-copy-copy-copy');
                    if(ic !=null && ic !='Undefined' && ic == 'icon iconfont icon-jiantou-copy-copy-copy'){
                        t.find('i').attr("class",'icon iconfont icon-jiantou-copy-copy');
                    }else{
                        t.find('i').attr("class",'icon iconfont icon-jiantou-copy-copy-copy');
                    }
                    cp(i,type,_tb,t);
                    ic = null;
                });

                // t.onclick = new Function(function(){alert("dd")});
            }
        });
    };
    return {sort:sort};
}();


function cp(index,type,tb,t){
    // alert (tb);
    var tbBodyTr = $("#"+tb).find("tr");
    var len = tbBodyTr.length;
    // alert(tbBodyTr.length);
    if(len <1){
        return ;
    }
    var orderType = t.attr("order");
    var trsValue = new Array();


    // $(this).mouseover(function () {
    //     tbBodyTr.each(function () {//编列tbody下的tr
    //         var tds = $(this).find("td"); //获取列号为参数index的td对象集合
    //         $(tds[thisIndex]).addClass("hover");//给列号为参数index的td对象添加样式
    //     });
    // }).mouseout(function () {//给表头th增加鼠标离开时的事件
    //     tbBodyTr.each(function () {
    //         var tds = $(this).find("td");
    //         $(tds[thisIndex]).removeClass("hover");//鼠标离开时移除td对象上的样式
    //     });
    // });


    tbBodyTr.each(function () {
        var tds = $(this).find('td');
        //获取行号为index列的某一行的单元格内容与该单元格所在行的行内容添加到数组trsValue中
        trsValue.push(type + ".separator" + $(tds[index]).html() + ".separator" + $(this).html());

        // alert($(tds[index]).html());

        $(this).html("");
    });

    // alert(index);

    if (orderType =='desc') {
        //如果已经排序了则直接倒序
        trsValue.reverse();
    } else {
        // alert(len);
        for (var i = 0; i < len; i++) {
            //split() 方法用于把一个字符串分割成字符串数组
            //获取每行分割后数组的第一个值,即此列的数组类型,定义了字符串\数字\Ip
            type = trsValue[i].split(".separator")[0];
            for (var j = i + 1; j < len; j++) {
                //获取每行分割后数组的第二个值,即文本值
                // alert("for");
                value1 = trsValue[i].split(".separator")[1];
                // alert(value1);
                //获取下一行分割后数组的第二个值,即文本值
                value2 = trsValue[j].split(".separator")[1];
                //接下来是数字\字符串等的比较
                if (type == "number") {
                    value1 = value1 == "" ? 0 : value1;
                    value2 = value2 == "" ? 0 : value2;
                    if (parseFloat(value1) > parseFloat(value2)) {
                        var temp = trsValue[j];
                        trsValue[j] = trsValue[i];
                        trsValue[i] = temp;
                    }
                } else if (type == "ip") {
                    if (ip2int(value1) > ip2int(value2)) {
                        var temp = trsValue[j];
                        trsValue[j] = trsValue[i];
                        trsValue[i] = temp;
                    }
                } else {
                    if (value1.localeCompare(value2) > 0) {//该方法不兼容谷歌浏览器
                        var temp = trsValue[j];
                        trsValue[j] = trsValue[i];
                        trsValue[i] = temp;
                    }
                }
            }
        }
    }
    $("#"+tb).empty();
    t.attr('order','desc');

    var ec = "";
    for (var i = 0; i < len; i++) {

        if(i%2==1) {
            ec = "class='even'";
        }else{
            ec='';
        }
        $("#" +tb).append("<tr "+ ec+">" + trsValue[i].split(".separator")[2] + "</tr>");
    }
    //this.sortIndex = index;
}

//IP转成整型
function ip2int(ip) {
    var num = 0;
    ip = ip.split(".");
    num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
    return num;
}






