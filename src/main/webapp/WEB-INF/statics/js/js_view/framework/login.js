/**
 * 登录页面整理
 * 2018-01-26 登录页面链接后台
 */



// $("#alert_password").show();

var LOGIN = {};

LOGIN.login = function(){
	function login(){
		this.isAccount = true
	}

	login.prototype.addEvent = function(){
		var _this= this;
		// alert("addEvent");
        $("#login,#login2").on("click",function(e){
        	// alert();
            _this.loginTo();
        });

        $(".login_fogetPassword").on("click",function(){
             // _this.homePageSwipter($("#forgetPassword")); // 忘记密码
			_this.forgetPassword();

        });
        $(".login_register").on("click",function(){
            // _this.homePageSwipter($("#registerPage")); // 注册
            _this.register();
        });


        $(".accountInforUl li").on('click',function(){
        	// var _this= this;
        	var id = $(this).attr("id");

        	if(id =="accountLi" ){
				_this.account($(this));
			}else{
				_this.duanXin($(this));
			}
        });

        $(".accountInforUl li").hover(function(){
            var id = $(this).attr("id");
            if(id == 'accountLi' && _this.isAccount ){
                return ;
            }

            if(_this.isAccount == false  && id == 'duanxinLi' ){
                return ;
            }
            $(this).css({"color":" #afeec7"});
        },function(){
            var id = $(this).attr("id");
            if(id == 'accountLi' && _this.isAccount ){
                return ;
            }
            if(_this.isAccount == false  && id == 'duanxinLi' ){
                return ;
            }
            $(this).css({"color":" #333"});
        });

    };

	login.prototype.account = function(obj){
        // alert("account" );
		
          $('#accountLogin').show();
          $('#duanxinLogin').hide();
          obj.css({"color":" #afeec7"});
          obj.siblings().css({"color":'#333'});

        this.isAccount = true;
	};

    /**
     *  短信登录
     * @param obj
     */
    login.prototype.duanXin = function(obj){
        return ;
        $('#accountLogin').hide();
        $('#duanxinLogin').show();
        obj.css({"color":" #afeec7"});
        obj.siblings().css({"color":'#333'});
        this.isAccount = false;
    }


    /**
	 * 注册用户
     */
	login.prototype.register = function(){

        //第一页的确定按钮
        // alert($("#btn_part1").attr("href"));
        $("#btn_part1").unbind();
        $("#btn_part2").unbind();

        $("#btn_part3").unbind();
        $("#btn_part4").unbind();

        $(".part1").show();
        $(".part2").hide();
        $(".part3").hide();
        $(".part4").hide();
        $(".step li").eq(0).addClass("on");
        $(".step li").eq(1).removeClass("on");
        $(".step li").eq(2).removeClass("on");

        $("#btn_part1").on('click',function(){
            // alert("ddd");
            if(!verifyCheck._click()) return;
            $(".part1").hide();
            $(".part3").show();
            $(".step li").eq(1).addClass("on");
        });

        //第二页的确定按钮
        $("#btn_part2").click(function(){
            if(!verifyCheck._click()) return;
            $(".part1").show();
            $(".part3").hide();
            $(".step li").eq(1).removeClass("on");
        });
        //第三页的确定按钮
        $("#btn_part3").click(function(){
            // if(!verifyCheck._click()) return;
            sysUserRegister();// 访问后台注册用户信息；

        });

        layer.open({
            type: 1,
            title:'注册信息',
            shade: false,
            area: ['1000px','630px'],
            content: $('#registerPage') //这里content是一个DOM，这个元素要放在body根节点下
        });

    }; // END register;

	login.prototype.forgetPassword = function(){
	    // $("#forgetPassword").show();
        var _this = this;

        $("#btn_part1_pass").on('click',function(){
            $(".passwordPart1").hide();
            $(".passwordPart2").show();

        });

        $("#btn_part2_pass").on('click',function(){

            sysUserChangePass();

        });

        // $("#btn_part1_pass").on('click',function(){
        //     $(".passwordPart1").hide();
        //     $(".passwordPart2").show();
        //
        // });



		layer.open({
			type:1,
			title:"修改密码",
			shade:false,
			area:['700px','400px'],
			content: $('#forgetPassword')
		});

	}


	login.prototype.loginTo = function(){
		// alert("ddddto");
        if(this.loginAlert()==false){return;}
        loginsubmit(this.isAccount);
	};


    /**
     * 登录警告信息
     * @returns {boolean}
     */
	login.prototype.loginAlert = function(){
	  //  alert(this.isAccount);
	    if(this.isAccount == true){
            var name = $.trim($('#name').val());
            // var password = encode64($.trim($("#password").val()));
            var password = $.trim($('#password').val());

            if(name == null  || name.trim() == ""){
                jQuery.gritter.add({
                    title: '用户名没有输入!',
                    text: '请输入用户名称',
                    class_name: 'growl-danger',
                    image: 'images/screen.png',
                    sticky: false,
                    time: 1000
                });
                return false;
            }

            if(password == null  || password == ""){
                jQuery.gritter.add({
                    title: '密码没有输入!',
                    text: '请输入密码！！！',
                    class_name: 'growl-danger',
                    image: 'images/screen.png',
                    sticky: false,
                    time: 1000
                });
                return false;
            }
        }else if(this.isAccount == false){
	        var iphone  = $.trim($('#iphone').val());
	        var yzm  =  $.trim($('#yzm').val());
            if(iphone == null  || iphone.trim() == ""){
                jQuery.gritter.add({
                    title: '手机!',
                    text: '请输入用户名称',
                    class_name: 'growl-danger',
                    image: 'images/screen.png',
                    sticky: false,
                    time: 1000
                });
                return false;
            }

            if(yzm == null  || yzm.trim() == ""){
                jQuery.gritter.add({
                    title: '验证密码输入!',
                    text: '请输入验证码！！！',
                    class_name: 'growl-danger',
                    image: 'images/screen.png',
                    sticky: false,
                    time: 1000
                });
                return false;
            }
            return true;
        }
    }

	login.prototype.setPostion = function(){
		if(isPC()==false){
             $('.signinpanel').css({
				 "position":"relative",
				 "bottom":"50px;",
				 "margin-bottom":"50px"
             });
		}

	};

	login.prototype.homePageSwipter = function(obj){
		obj.show();
		obj.siblings().hide();
	}

	login.prototype.init = function(){

        this.addEvent();
        this.setPostion();
	};

	return{login:login};

}();




// $(window).ready(function() {
    var login = new LOGIN.login.login();
    login.init();
// });
/**
 * 修改密码
 */
function sysUserChangePass(){
    var sysUser = getSYSUserObject(2);
    var url = "sysUserChangePassword";
    $.ajax({
        url : url,
        data : sysUser,
        type : "POST",
        dataType : 'json',
        success : function(json) {
            result(json,2);
        },
        error : function(er) {
            backErr(er);
        }
    });
}


/**
 * 注册
 */
function  sysUserRegister(){

    var sysUser2 = getSYSUserObject(0);
    var url = "sysUserRegister";

    $.ajax({
        url : url,
        data : sysUser2,
        type : "POST",
        dataType : 'json',
        success : function(json) {
            result(json,1);
        },
        error : function(er) {
            backErr(er);
        }
    });
}


/**
 * 登录信息
 * 修改marrisa
 * 登录密码验证
 * 
 * @returns
 */
function loginsubmit(isAccount){
	var url =  "userLoginGo";
    var sysUser2 = getSYSUserObject(1)
	$.ajax({
		url : url,
		data : sysUser2,
		type : "POST",
		dataType : 'json',
		success : function(json) {
            setLoginUserObj(eval(json).userObj);
			result(eval(json).result,0);
		},
		error : function(er) {
			backErr(er);
		}
	});
	// alert();
}

/**
 * 登录以后返回数据：处理响应结果
 * type 0 登录 1 注册 2 修改密码
 * 
 */
function result(resdata,type){
     //alert(resdata);

	if (resdata == "success" && type == 1) {// 注册
        $(".part3").hide();
        $(".part4").show();
        $(".step li").eq(2).addClass("on");
        countdown({
            maxTime:10,
            ing:function(c){

                $("#times").text(c);
            },
            after:function(){
                layer.closeAll();
                loginSuccess();
            }
        });
	}else if(resdata == "success" && type == 0){// 登录
        loginSuccess();
    }else if(resdata == "success" && type == 2){//修改密码
        $(".passwordPart2").hide();
        $(".passwordPart3").show();
        countdown({
            maxTime:10,
            ing:function(c){
                $("#times_pass").text(c);
            },
            after:function(){
                layer.closeAll();
                // $("#name").val($("#phone_pass").val()) ;
                // $("#password").val();
                // loginSuccess();
                // loginTo();
            }
        });
    }
	else{
       // loginSuccess();
        loginFail(resdata);
    }
}

/**
 * 登录成功,进入主页面
 * 
 * @returns
 */
function loginSuccess() {
	window.location = "success";
}

/**
 * 登录成功，密码到期或者密码强度不够
 */

function loginSuccess2(resdata) {

}

/**
 * 登录失败
 */

function loginFail(resdata) {
    // layer.open({
    //     type: 2,
    //     title:'登录失败',
    //     shade: false,
    //     // area: ['1000px','630px'],
    //     content: resdata //这里content是一个DOM，这个元素要放在body根节点下
    // });

    layer.alert(resdata);

}

/**
 * 注册、登录、修改密码时候获取的用户信息
 * type 0 注册 1 登录 2 修改密码
 *  sys_register_kind 注册方式，1 手机号，2 邮箱， 3 微信，4 QQ，5  微博
 */
function getSYSUserObject(type){
    // var sysUser = null;
    var  loginName = null;
    var loginPassword = '123456';
    // var rePassWord = '123456';
    var isDelete = "0";
    // var registerDateTime  = dateTime("-");
   var registerDateTime= dateTime2("-");
    var email = '--';
    var mobile = '13321185092';
    var other ='--';
    var register_kind ='1';
    var rName = '--';
    var sfzId = '--';
    var loginId= 0;

    if(type==0){ //注册

        loginId = dateTime() + "" +  Math.floor((Math.random()*100000)+1);
        // alert(loginId);
        loginName = $("#adminNo_reg").val();
        mobile =$("#phone_reg").val();
        loginPassword = $("#password_reg").val();
        rName = $("#realName_reg").val();
        sfzId = $("#sfz_id").val();
        // alert(mobile);

    }else if(type == 1){ //登录

        loginName = $("#name").val();
        loginPassword = $("#password").val();

       //  loginPassword = encodeBase64(loginPassword,2);

    }else if(type == 2){ // 修改密码
        mobile = $("#phone_pass").val();
        loginPassword  = $("#password_pass").val();
    }

    loginPassword = encodeBase64(loginPassword,2);

    var sysUser = {
        sysUserId:loginId,
        sysUserLoginName:loginName,
        sysUserLoginPassword:loginPassword,
        sysUserIsDelete:isDelete ,
        sysUserRegisterDatetime:registerDateTime,
        sysUserEmail:email,
        sysUserMobile:mobile,
        sysUserOther:other,
        sys_register_kind:register_kind,
        realName:rName,
        sfzId:sfzId,
        pass:loginPassword
    };

    //alert(encodeBase64(loginPassword,2));
    return sysUser;
}



