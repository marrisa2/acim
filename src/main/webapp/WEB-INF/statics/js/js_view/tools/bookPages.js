/**
 * 页面Pages设置；
 * @data 2017-12-28
 * @param pageObj
 * @param divObj
 */

alert("bookPage ");
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