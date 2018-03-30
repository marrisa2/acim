package com.wz.acim.upDownFile.service;


import com.wz.acim.upDownFile.dao.MyFileDao;
import com.wz.acim.upDownFile.pojo.MyFile;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import java.util.List;
import java.util.Map;

@Service
public class MyFileService {

    @Resource
    private MyFileDao myFileDao;

    /**
     * 获取文件列表
     * @param myfile
     * @return
     */
    public Map<String,List<MyFile>> getFileList(MyFile myfile){
         return null;
    }

    /**
     *
     */
}
