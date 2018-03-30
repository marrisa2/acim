
var setWidthHeigthObj = new setWidthHeight();
window.bookObj = new bookObj();

// alert("booked");
function bookObj(){

    this.bookId= null;
    this.booksName = null;
    this.bookContext= null;
    this.bj = null;
    this.bookmarker = null;
    this.pages = null;
    this.addEventBook  =  new addEventOfBook();


   // alert("book");

    bookObj.prototype.ini = function (){
        var divStr = "<div class='container' id='page-2'></div> ";
      //  alert( $('.bookDiv'));
        if($('.bookDiv')){
           // alert("ini book");
            $(divStr).appendTo("body");
            this.iniDivHead();
            this.iniDivFoot();
        }

    };

    bookObj.prototype.iniDivHead = function(){
          var divStr = "<div class='bookHeaderDiv'> " +
              "<ul> <li class='pageload-link' href='#page-1'><i class='icon iconfont icon-draw-back'></i></li>" +
              "<li id='bookCaidan'><i class='icon iconfont icon-caidan'></i></li>" +
              "<li><i class='icon iconfont icon-ziti'></i></li>" +
              "<li><i class='icon iconfont icon-search'></i></li>" +
              "<li><i class='icon iconfont icon-biaozhu' ></i></li>" +
              "</ul>" +
              "</div>";
      //  alert(divStr);
        $(divStr).appendTo("#page-2");
        divStr= "<div class='bookContextDiv'>  </div>   <div class=\"dot\"><i class='icon iconfont icon-dot'></i></div> ";
        this.addEventBook.bookContext();//页面添加点击事件；
        $(divStr).appendTo("#page-2");
    };

    bookObj.prototype.iniDivText = function(textList){

        insertContex(textList);
        setWidthHeigthObj.setBookcontex();
        setWidthHeigthObj.dotPosition();
        this.addEventBook.bookContext();
        this.pages = new pages({currentPages:1},$(".bookContextDiv"));
    };

    bookObj.prototype.iniDivFoot = function(){
        var divStr ="<div class='bookFooterDiv'>" +
            " <div class='progressBar' id='percentPages' w='40' ></div>" +
            "<div class='pageNumber'> <label id='currentPages'>235</label>/<label id='totalPages'>567</label></div>" +
            "<div class='unFinishNumber'> 还剩<lable id='remainPages'>300</lable>页</div>" +
            "</div>";
        $(divStr).appendTo("#page-2");
        setWidthHeigthObj.setFooterDiv();

    };

    this.ini();

}


function setWidthHeight(){

    this.windowWidth  = $(window).width();
    /**
     * 设置底部页面滑动菜单
     * @type {*|jQuery}
     */
    setWidthHeight.prototype.setFooterDiv = function(){
        $(".bookFooterDiv").find(".pageNumber").css({"margin-left": (this.windowWidth/2-40) +"px"})
        progressBar(3,this.windowWidth-60,true,'bookFooterDiv');
    };

    /**
     * 设置底部页面dot高度
     * @type {*|jQuery}
     */
    setWidthHeight.prototype.setBookcontex = function(){
        var top2 = $('.bookFooterDiv').offset().top;
        var top1 = $('.bookHeaderDiv').offset().top;
        var w = this.windowWidth-40;
      //  alert();
        $('.bookContextDiv').css({"height":top2-top1-60,'width':w +"px" });
        if($(".bookHeaderDiv").is(":hidden")){
            $('.bookContextDiv').css({"height":$(window).height(),'width':w+"px","top":"5px"});
            // $('.bookContextDiv').top = 0;
        }else{
            $('.bookContextDiv').css({"height":top2-top1-60,'width':w+"px","top":"50px" });
        }
    };

    setWidthHeight.prototype.dotPosition = function (){
        var top1 = $(".chartsbookFooterDiv").offset().top;
        var le = $(".chartsbookFooterDiv").offset().left;
        var w = $(".chartsbookFooterDiv").width();
        // alert(top1);
        $(".dot").css({
            "background-color": "rgba(255,255,255,0)",
            "height": "25px",
            "width": "45px",
            // "border-radius": "5px",
            "position": "fixed",
            "margin-top": (top1-10)+"px",
            "left": (w +le) + "px",
            "z-index":999,
            'display': "block",
            // 'opacity':0
            // "padding":"10px 10px 10px 10px",
        });
    }






}


 function  addEventOfBook() {


     addEventOfBook.prototype.bookContext = function () {

         $(".bookContextDiv").on(touchEvents.touchtap, function (event) {
             // alert("ddd");
             event.preventDefault();
             event.stopPropagation();
             // 显示菜单
             if ($(".bookHeaderDiv").is(":hidden")) {

               //  this.pageTextObj.animate
/*
                 $(".bookHeaderDiv, .bookFooterDiv,.dot").show({
                     duration: 500,

                 }); */

                 $(".bookHeaderDiv, .bookFooterDiv,.dot").css({"display":"block"});


             } else {
                 /*$(".bookHeaderDiv, .bookFooterDiv,.dot").hide({
                     duration: 500,

                 }); */
                 $(".bookHeaderDiv, .bookFooterDiv,.dot").css({"display":"none"});
                // setWidthHeigthObj.setBookcontex();

             }


             setTimeout(function(){ setWidthHeigthObj.setBookcontex()},00);

         })
     };

 }
    // this.window  = null;
    // this.width = null;
    // this.l  =  null;

   /* addEventOfBook.prototype.dot = function(){

            $(".dot").bind(touchEvents.touchstart,function(e){  //ontouchmovealert("ddd");
            this.xy = getXYcordinate(e);
            var width = $(".barlinebookFooterDiv").width();
            var l  =  $(".chartsbookFooterDiv").offset().left;

            $(this).bind(touchEvents.touchmove,function(e){

                    this.xyMove = getXYcordinate(e);
                   // alert(width);
                    var x = this.xyMove.x;
                    var w =0
                    if(x<l){
                        w = 0;
                    }else if(x> (width+l) ){
                        w = width;
                    }else {
                        w = x- l;
                    }
                    $(".chartsbookFooterDiv").css({"width": w +"px"});
                    $(this).css({"left": ( l+ w -10 )});
                    // this.pages.percentChangePages(x);
                }
            );

            $(this).bind(touchEvents.touchend,function(e){
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

            );


        });
    }*/








/**
 * 插入目录相关正文内容
 * date 2017-11-13
 * @param catalog
 * @returns
 */
function insertContex(josnData){
    //var miraclesText = null;
    var chapterId_temp = null;
    var sectionId_temp = null;
    var isTitle_temp = null;
    var context_cn_temp = null;
    var context_eng_temp = null;
    var mapcontex = null;
    var size =0;

    var contextHtml = "";

    $.each( josnData, function(k, v){

        //alert( "Key: " + k + ", Value: " + v );
        if(k != '目录'){
            //alert( v);
            //miraclesText = v;
            //alert(miraclesText.length)
            //alert(k);
            if(v!=null){
                size = v.length;
                //alert(size);
                for( var i=0;i<size;i++){
                    //alert(v[i]);
                    mapcontex = v[i];
                    //alert(" mapcontex.chapterId " + mapcontex.chapterId);
                    chapterId_temp = $.trim(mapcontex.chapterId);
                    sectionId_temp = $.trim(mapcontex.sectionId);
                    context_cn_temp = $.trim(mapcontex.context_cn);
                    context_eng_temp = $.trim(mapcontex.context_eng);
                    isTitle_temp = $.trim( mapcontex.isTitle);
                    //alert($.trim(sectionId_temp));

                    if(isTitle_temp=="yes"){
                        if(i!=0){
                            contextHtml +="</div>";
                        }
                        contextHtml +='<div class="miracle-context-chapter-title" id="text'+ chapterId_temp +'">'+
                            chapterId_temp + '</div>';
                        contextHtml += ' <div class="miracle-context-chapter-context"> ';
                        contextHtml +=' <p >' + context_cn_temp+'['+ sectionId_temp +']  </P>' ;
                    }else if(isTitle_temp=="no" && sectionId_temp !="" ){
                        contextHtml +=' <p >' + context_cn_temp+'['+ sectionId_temp + chapterId_temp+']  </p>' ;
                    }else if(isTitle_temp=="chapter"){
                        //alert();
                        contextHtml += ' <div class="miracle-context-chapter-title2" id="text'+ chapterId_temp +'">'+
                            context_cn_temp + '</div>';
                    }else if(isTitle_temp=="left" || isTitle_temp=="center" || isTitle_temp=="right") {

                        contextHtml +=' <p  style="text-align:'+ isTitle_temp +';">' + context_cn_temp+'  </p>' ;
                    }

                }
            }
        }

    });

    contextHtml +="</div>";
    // alert(contextHtml);
    // $("#context").empty();
    // $(contextHtml).appendTo("#context"); bookContextDiv

    $(".bookContextDiv").empty();
    $(contextHtml).appendTo(".bookContextDiv");

}











