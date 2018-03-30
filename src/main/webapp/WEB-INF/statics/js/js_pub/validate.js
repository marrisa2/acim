
/**
 * 功能说明:		输入验证
 * @author:		marrisa
 * @time:		2018-02-10 11:30 @version: V1.1.0
 * @使用方法:
 * <input
 *  dataType required
 *
 * type="text" data-valid="isNonEmpty||isEmail" data-error="email不能为空||邮箱格式不正确" id="" />
 * 1、需要验证的元素都加上【required】样式
 * 2、@data-valid		验证规则，验证多个规则中间用【||】隔开，更多验证规则，看rules和rule，后面遇到可继续增加
 * 3、@data-error		规则对应的提示信息，一一对应
 *
 * @js调用方法：
 * verifyCheck({
*  	formId:'verifyCheck',		<验证formId内class为required的元素
*	onBlur:null,				<被验证元素失去焦点的回调函数>
*	onFocus:null,				<被验证元素获得焦点的回调函数>
*	onChange: null,				<被验证元值改变的回调函数>
*	successTip: true,			<验证通过是否提示>
*	resultTips:null,			<显示提示的方法，参数obj[当前元素],isRight[是否正确提示],value[提示信息]>
*	clearTips:null,				<清除提示的方法，参数obj[当前元素]>
*	code:true					<是否需要手机号码输入控制验证码及点击验证码倒计时,目前固定手机号码ID为phone,验证码两个标签id分别为time_box，resend,填写验证框id为code>
*	phone:true					<改变手机号时是否控制验证码>
* })
 * $("#submit-botton").click(function(){		<点击提交按钮时验证>
*  	if(!common.verify.btnClick()) return false;
* })
 *
 * 详细代码请看register.src.js
 */
(function($) {

}