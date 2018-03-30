package com.wz.acim.upDownFile.service;

import com.wz.tools.WzCons;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

public class FileUploadService {

    private long lStartPos = 0; // 是否开始
    private long startPosition = 0; // 开始位置
    private long endPosition = 0; // 结束位置
    private int fileLength = 10000000;
    private String contentRange;
    private MultipartFile file;





    public void uploadFile(){
        if (!new File(WzCons.UPLOADPATH).exists()) {
            new File(WzCons.UPLOADPATH).mkdirs();
        }
    }

}
