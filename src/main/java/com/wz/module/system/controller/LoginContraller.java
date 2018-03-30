package com.wz.module.system.controller;

/**
 * author: marrisa
 * updateDate 2018-01-26  增加方法 用户登录、注册、修改密码
 *
 */

import com.wz.framework.pub.Servlet2Utils;
import com.wz.framework.pub.SystemOper;
import com.wz.module.system.pojo.SysUser;
import com.wz.module.system.service.SysUserService;
import com.wz.tools.EncodeUtil;
import com.wz.tools.WzUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;



import java.util.Map;

import java.util.HashMap;



@Controller
public class LoginContraller {


    @Autowired
    private SysUserService sysUserService;

    /**
     * 进入登录页面
     * @return
     */
    @RequestMapping("login")
    public String login(){


        return  Servlet2Utils.urlPath("framework/login");
    }

    @RequestMapping(value ="/userLoginGo",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object>   userLoginGo(SysUser sysUser){
          System.out.println(sysUser.getSysUserLoginName());
          Map<String ,Object >  re_result = new HashMap<String,Object>();
          String reStr = "";
          String userName= sysUser.getSysUserLoginName();
          SysUser reSysUser = sysUserService.findBySysUserLoginName(userName);

          if(reSysUser == null ){//用户名查询判断，如果用户不存在，用手机号查询登录
              reSysUser = sysUserService.findBySysUserMobile(userName);
              if(reSysUser == null){ //判断手机号是否存在
                  reStr = "用户名不存在！！！";
              }else if(WzUtil.compareBytes(reSysUser.getSysUserLoginPassword(),
                      EncodeUtil.md5Encode(EncodeUtil.decode64
                              (sysUser.getPass())
                      )
              )){
//                reStr = "success";
                  reStr = SystemOper.saveUserSession(reSysUser);
              }else{
                  reStr ="密码错误！！！";
              }

          }else if(WzUtil.compareBytes(reSysUser.getSysUserLoginPassword(),
                  EncodeUtil.md5Encode(EncodeUtil.decode64
                          (sysUser.getPass())
                  )
          )){
//              reStr = "success";
              reStr = SystemOper.saveUserSession(reSysUser);
          }else{
              reStr ="密码错误！！！";
          }
          re_result.put("result",reStr);
          re_result.put("userObj",reSysUser);
          return re_result;
    }






    /**
     * 注册用户
     * @return
     */
    @RequestMapping(value ="/sysUserRegister",method = RequestMethod.POST)
    @ResponseBody
    public String register(SysUser sysUser){
         String reStr = null;
         String loginName = sysUser.getSysUserLoginName();
         String iphone = sysUser.getSysUserMobile();
         String email = sysUser.getSysUserEmail();

         SysUser reUser = sysUserService.findBySysUserLoginName(loginName);
         if(reUser!= null){// 判断用户名是否存在
            return reStr = "用户名存在！！！";
         }
         reUser = sysUserService.findBySysUserMobile(iphone);
        if(reUser!=null){// 判断手机号是否重复注册
            return reStr = "手机号重复注册！！！";
         }

         if(!email.equalsIgnoreCase("--")){//判断邮箱是否绑定
             reUser = sysUserService.findBySysUserEmail(email);
             if(reUser != null){
                 return reStr = "邮箱已经被绑定！！！";
             }
         }
         if(reUser == null){
             String decode64Pass = EncodeUtil.decode64(sysUser.getPass());  //测试时需要注释掉
             sysUser.setSysUserLoginPassword(EncodeUtil.md5Encode(decode64Pass));
             sysUserService.saveAndUpdateSysUser(sysUser);
             reStr ="success";
         }else{
             reStr ="注册失败！！！";
         }
         return reStr;
    }


    /**
     * 修改密码
     * @param sysUser
     * @return
     */
    @RequestMapping(value ="/sysUserChangePassword",method = RequestMethod.POST)
    @ResponseBody
    public String changePassword(SysUser sysUser){
        String reStr = "";
        String iphone = sysUser.getSysUserMobile();
        SysUser temUser = sysUserService.findBySysUserMobile(iphone);
        String decode64Pass = EncodeUtil.decode64(sysUser.getPass());  //测试时需要注释掉
        temUser.setSysUserLoginPassword(EncodeUtil.md5Encode(decode64Pass));


        SysUser reUser = sysUserService.saveAndUpdateSysUser(temUser);
        if(reUser != null){
            reStr = "success";

        }else{
            reStr = "修改密码失败";
        }
        return  reStr;
    }



    @RequestMapping( "/success")
    public String successLogin(SysUser sysUser){

        return Servlet2Utils.urlPath("framework/main");
    }

}



