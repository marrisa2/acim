package com.wz.module.system.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

//region = pojoCache，表示：指定缓存的区域，这个是配置在 ehcache.xml 中
//CacheConcurrencyStrategy 资料可以看：http://www.iteye.com/problems/49111
//READ_WRITE：严格读写缓存。用于对数据同步要求严格的情况，对于经常被读、较少修改的数据，可以采用此策略缓存。不支持分布式缓存。实际应用最广泛的缓存策略。
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE, region = "pojoCache")
@Cacheable(true)
@Entity
@Table(name = "sys_user")
public class SysUser implements Serializable {

	@Id
//	@GenericGenerator(name = "IdentifierGenerator", strategy = "identity")
//	@GeneratedValue(generator = "IdentifierGenerator")
	@Column(name = "sys_user_id", nullable = false)
	private long sysUserId;

	@Column(name = "sys_user_login_name", nullable = false)
	private String sysUserLoginName;

	@Column(name = "sys_user_login_password", nullable = true)
	private byte [] sysUserLoginPassword;

//	private String rePassWord;

	@Column(name = "sys_user_is_delete", nullable = false)
	private String sysUserIsDelete;

	@Column(name = "sys_user_register_datetime", nullable = false)
//	@Temporal(TemporalType.TIMESTAMP)
	private String  sysUserRegisterDatetime;

	@Column(name = "sys_user_email", nullable = true)
	private String sysUserEmail;

	@Column(name = "sys_user_mobile", nullable = true)
	private String sysUserMobile;

	@Column(name = "sys_user_other", nullable = false)
	private String sysUserOther;

	@Column(name = "sys_register_kind",nullable = false)
	private String sys_register_kind;  // 注册方式，1 手机号，2 邮箱， 3 微信，4 QQ，5  微博

	//@Transient
	private String realName;
//	@Transient
	private String sfzId;

	@Transient
	private String pass;


	public String getSys_register_kind() {
		return sys_register_kind;
	}

	public void setSys_register_kind(String sys_register_kind) {
		this.sys_register_kind = sys_register_kind;
	}

	public String getSysUserOther() {
		return sysUserOther;
	}

	public void setSysUserOther(String sysUserOther) {
		this.sysUserOther = sysUserOther;
	}

	public long getSysUserId() {
		return sysUserId;
	}

	public void setSysUserId(long sysUserId) {
		this.sysUserId = sysUserId;
	}

	public String getSysUserLoginName() {
		return sysUserLoginName;
	}

	public void setSysUserLoginName(String sysUserLoginName) {
		this.sysUserLoginName = sysUserLoginName;
	}

	public byte [] getSysUserLoginPassword() {
		return sysUserLoginPassword;
	}

	public void setSysUserLoginPassword(byte [] sysUserLoginPassword) {
		this.sysUserLoginPassword = sysUserLoginPassword;
	}

	public String getSysUserIsDelete() {
		return sysUserIsDelete;
	}

	public void setSysUserIsDelete(String sysUserIsDelete) {
		this.sysUserIsDelete = sysUserIsDelete;
	}

	//由于 spring-mvc.xml 配置了日期的统一格式：yyyy-MM-dd HH:mm:ss，如果你不想要使用默认格式，可以自己定义
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
	public String getSysUserRegisterDatetime() {
		return sysUserRegisterDatetime;
	}

	public void setSysUserRegisterDatetime(String sysUserRegisterDatetime) {
		this.sysUserRegisterDatetime = sysUserRegisterDatetime;
	}

	public String getSysUserEmail() {
		return sysUserEmail;
	}

	public void setSysUserEmail(String sysUserEmail) {
		this.sysUserEmail = sysUserEmail;
	}

	public String getSysUserMobile() {
		return sysUserMobile;
	}

	public void setSysUserMobile(String sysUserMobile) {
		this.sysUserMobile = sysUserMobile;
	}



	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getSfz_id() {
		return sfzId;
	}

	public void setSfz_id(String sfz_id) {
		this.sfzId = sfz_id;
	}

	public String getSfzId() {
		return sfzId;
	}

	public void setSfzId(String sfzId) {
		this.sfzId = sfzId;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	@Override
	public String toString() {
		return "SysUser{" +
				"sysUserId=" + sysUserId +
				", sysUserLoginName='" + sysUserLoginName + '\'' +
				", sysUserLoginPassword='" + sysUserLoginPassword + '\'' +
				", sysUserIsDelete='" + sysUserIsDelete + '\'' +
				", sysUserRegisterDatetime=" + sysUserRegisterDatetime +
				", sysUserEmail='" + sysUserEmail + '\'' +
				", sysUserMobile='" + sysUserMobile + '\'' +
				'}';
	}
}