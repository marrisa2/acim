/**
 * Copyright (c) 2005-2009 springside.org.cn
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * 
 * $Id: EncodeUtils.java 984 2010-03-21 13:02:44Z calvinxiu $
 */
package com.wz.tools;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.StringEscapeUtils;

/**
 * 各种格式的编码加码工具类.
 * 
 * 集成Commons-Codec,Commons-Lang及JDK提供的编解码方法.
 * 
 * @author calvin
 */
public class EncodeUtil {

	private static final String DEFAULT_URL_ENCODING = "UTF-8";

	/**
	 * Hex编码.
	 */
	public static String hexEncode(byte[] input) {
		return Hex.encodeHexString(input);
	}

	/**
	 * Hex解码.
	 */
	public static byte[] hexDecode(String input) {
		try {
			return Hex.decodeHex(input.toCharArray());
		} catch (DecoderException e) {
			throw new IllegalStateException("Hex Decoder exception", e);
		}
	}

	/**
	 * Base64编码.
	 */
	public static String base64Encode(byte[] input) {
		return new String(Base64.encodeBase64(input));
	}

	/**
	 * Base64编码, URL安全(将Base64中的URL非法字符如+,/=转为其他字符, 见RFC3548).
	 */
	public static String base64UrlSafeEncode(byte[] input) {
		return Base64.encodeBase64URLSafeString(input);
	}

	/**
	 * 

	 */
	public static byte[] base64Decode(String input) {
		return Base64.decodeBase64(input);
	}

	/**
	 * URL 编码, Encode默认为UTF-8. 
	 */
	public static String urlEncode(String input) {
		return urlEncode(input, DEFAULT_URL_ENCODING);
	}

	/**
	 * URL 编码.
	 */
	public static String urlEncode(String input, String encoding) {
		try {
			return URLEncoder.encode(input, encoding);
		} catch (UnsupportedEncodingException e) {
			throw new IllegalArgumentException("Unsupported Encoding Exception", e);
		}
	}

	/**
	 * URL 解码, Encode默认为UTF-8. 
	 */
	public static String urlDecode(String input) {
		return urlDecode(input, DEFAULT_URL_ENCODING);
	}

	/**
	 * URL 解码.
	 */
	public static String urlDecode(String input, String encoding) {
		try {
			return URLDecoder.decode(input, encoding);
		} catch (UnsupportedEncodingException e) {
			throw new IllegalArgumentException("Unsupported Encoding Exception", e);
		}
	}

	/**
	 * Html 转码.
	 */
	public static String htmlEscape(String html) {
		return StringEscapeUtils.escapeHtml4(html);
	}

	/**
	 * Html 解码.
	 */
	public static String htmlUnescape(String htmlEscaped) {
		return StringEscapeUtils.unescapeHtml4(htmlEscaped);
	}

	/**
	 * Xml 转码.
	 */
	public static String xmlEscape(String xml) {
		return StringEscapeUtils.escapeXml(xml);
	}

	/**
	 * Xml 解码.
	 */
	public static String xmlUnescape(String xmlEscaped) {
		return StringEscapeUtils.unescapeXml(xmlEscaped);
	}
	
	/**
	 * MD5编码.
	 */
	public static byte[] md5Encode(String data){
		return DigestUtils.md5(data);
	}

	/**
	 * decode64加密.
	 */
	public static String escape(String src) { 
		int i; 
		char j; 
		StringBuffer tmp = new StringBuffer(); 
		tmp.ensureCapacity(src.length() * 6); 
		for (i = 0; i < src.length(); i++) { 
			j = src.charAt(i); 
			if (Character.isDigit(j) || Character.isLowerCase(j) || Character.isUpperCase(j)){ 
				tmp.append(j); 
			}else if (j < 256) { 
				tmp.append("%"); 
			}else if(j < 16){
				tmp.append("0"); 
				tmp.append(Integer.toString(j, 16)); 
			}else{ 
				tmp.append("%u"); 
				tmp.append(Integer.toString(j, 16)); 
			} 
		} 
		return tmp.toString(); 
	}
		
	/**
	 * 對應js中的加密方法進行decode64解碼.
	 */
	public static String decode64(String encode){
		//调用org.apache.commons.codec.binary.Base64包，在commons-codec-1.3.jar中
		//Base64 base64 = new Base64();
		byte[] byteOfEncode = encode.getBytes();
		byte[] byteOfDecode = Base64.decodeBase64(byteOfEncode);//调用decodeBase64方法
		String decode = new String(byteOfDecode);
		return unescape(decode);
	}
	
	private static String unescape(String src) { 
		StringBuffer tmp = new StringBuffer(); 
		tmp.ensureCapacity(src.length()); 
		int lastPos = 0, pos = 0; 
		char ch; 
		while (lastPos < src.length()) { 
			pos = src.indexOf("%", lastPos); 
			if (pos == lastPos) { 
				if (src.charAt(pos + 1) == 'u') { 
					ch = (char) Integer.parseInt(src 
					.substring(pos + 2, pos + 6), 16); 
					tmp.append(ch); 
					lastPos = pos + 6; 
				} else { 
					ch = (char) Integer.parseInt(src 
					.substring(pos + 1, pos + 3), 16); 
					tmp.append(ch); 
					lastPos = pos + 3; 
				} 
			}else{ 
				if (pos == -1) { 
					tmp.append(src.substring(lastPos)); 
					lastPos = src.length(); 
				} else { 
					tmp.append(src.substring(lastPos, pos)); 
					lastPos = pos; 
				} 
			} 
		} 
		return tmp.toString(); 
	}
	
	
	/**
	 * 功能说明： 密码编码过程
	 * 
	 * @date 2010/02/08
	 * @param pass
	 *            String 新建用户时设置的密码
	 * @return bpass1 byte[] 返回密码编码
	 */
	public static byte[] encodePass(String pass) {
		byte[] bpass;
		byte[] bpass1 = new byte[200];
		int ltmp, i;
		
		// todo应该先用随即数填充bpass1
		bpass = pass.getBytes();
		ltmp = bpass.length - 1;
		for (i = 0; i <= ltmp; i++) {
			bpass1[ltmp + 2 - i] = bpass[i];
		}
		
		bpass1[1] = (byte) (ltmp / 2);
		bpass1[198] = (byte) (ltmp + 1 - bpass1[1]);
		
		ltmp = 0;
		for (i = 0; i <= 198; i++) {
			ltmp += bpass1[i];
			if ((i % 2) == 0) {
				bpass1[i] = (byte) (255 - bpass1[i]);
				ltmp += bpass1[i];
			}
		}
		bpass1[i] = (byte) ((ltmp + bpass1[0] + bpass1[i - 1]) % 256);
		
		return bpass1;
	}
	
	/**
	 * 功能说明：密码解密
	 * 
	 * @date 2010/02/08
	 * @param
	 *  @byte 密码编码
	 * @return bpass1 String 解密后的密码
	 */
	public static String decodePass(byte[] bpasss) {
		byte[] bpass = bpasss.clone();
		byte[] bpass1;
		int i, ltmp;
		
		ltmp = (int) bpass[0] + bpass[bpass.length - 2];
		for (i = 0; i <= bpass.length - 2; i++) {
			if ((i % 2) == 0) {
				ltmp += bpass[i];
				bpass[i] = (byte) (255 - bpass[i]);
			}
			ltmp += bpass[i];
		}
		if ((byte) (ltmp % 256) != bpass[i])
			return ""; // 校验错误
			
		ltmp = bpass[1] + bpass[i - 1] - 1;
		
		bpass1 = new byte[ltmp + 1];
		for (i = 0; i <= ltmp; i++)
			bpass1[ltmp - i] = bpass[i + 2];
		
		return new String(bpass1); // 不能用bpass1.toString！
	}
}


