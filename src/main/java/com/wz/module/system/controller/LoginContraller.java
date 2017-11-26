package com.wz.module.system.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/userLoginContraller")
public class LoginContraller {

    @RequestMapping("/login")
    public String  login(){
        return "system/login";
    }
}
