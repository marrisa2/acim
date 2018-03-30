package com.wz.tools;

import com.wz.framework.pub.Servlet2Utils;

/**
 * 一些常用的工具类
 * @author wenzixia
 *
 */
public class WzUtil {
	
	WzCons wzCons;
	
	/**
	 * @auther marrisa
	 * @param number
	 * 处理阿拉伯数字转换罗马数字，传入的数字必须大于0，如果小于1 返回null； 调用这个方法如果传入小于1的数字，要出null的情况。
	 * @return
	 */
	public static String RomanNumber(int number){
		String romanNumber = new String();
		
		if(number <1 ){
			 return null;
		}
				
		int yuShu = 0;
		int result = 0;
		
		if(number>9){
			 yuShu = number %10;
			 result = number /10;
			 for(int i=0;i<result; i++){
				 romanNumber +=WzCons.Roman_Numeral.get(10+"");
			 }			 
			 romanNumber += WzCons.Roman_Numeral.get(yuShu+"");			 
		}else{
			 yuShu = number %5;
			 result = number /5;
			 if(number >5){ // 大于五处理
				 return WzCons.Roman_Numeral.get(5+"") + WzCons.Roman_Numeral.get(yuShu+"");
			  }else{ // 小于五处理
				 return WzCons.Roman_Numeral.get(yuShu+"");
			 }
		}		
		return romanNumber;
	}


	/**
	 * @auther  marrisa
	 * @date 2018-02-10
	 * 比较两个byte数组是否相等
	 * @param bt1
	 * @param bt2
	 * @return
	 */
	public static boolean compareBytes(byte[] bt1, byte[] bt2){
		boolean flag = true;
		//如果长度不相等，则直接返回false
		if(bt1.length != bt2.length){
			return false;
		}
		//如果有一个位置的元素不相等，则直接跳出循环
		for(int i=0; i<bt1.length; i++){
			if(bt1[i] != bt2[i]){
				flag = false;
				break;
			}
		}
		return flag;
	}



	 
}
