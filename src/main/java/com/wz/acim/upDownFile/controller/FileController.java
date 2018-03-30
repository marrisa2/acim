package com.wz.acim.upDownFile.controller;


import com.wz.acim.upDownFile.pojo.MyFile;
import com.wz.framework.pub.Servlet2Utils;
import com.wz.tools.WzCons;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSON;

@Controller
public class FileController {

      public Map<String,List<MyFile>> getFileList(){

          Map<String,List<MyFile>> map  = null;

          return  map;

      }


    @RequestMapping(value = "/uploading",method = RequestMethod.POST)
    @ResponseBody
    public void upload(MultipartFile file, PrintWriter writer ) throws Exception {
        HttpServletRequest request = Servlet2Utils.getRequest();
        HttpServletResponse response = Servlet2Utils.getResponse();
        this.SaveAs(WzCons.UPLOADPATH + file.getOriginalFilename(),
                file, request);
        // 设置返回值e
        Map<String, String> map = new HashMap<String, String>();
        map.put("name", file.getOriginalFilename());
        response.setStatus(200);
        writer.write(JSON.toJSONString(map));
    }

    private void SaveAs(String saveFilePath, MultipartFile file,
                        HttpServletRequest request)
            throws Exception {

        long lStartPos = 0; // 是否开始
        long startPosition = 0; // 开始位置
        long endPosition = 0; // 结束位置
        int fileLength = 10000000;
        OutputStream fs = null; // Fs 是一个读文件流

        String contentRange = request.getHeader("Content-Range");
        System.out.println(contentRange);
        if (!new File(WzCons.UPLOADPATH).exists()) {
            new File(WzCons.UPLOADPATH).mkdirs();
        }
        if (contentRange == null) {// 判断是不是分片上传文件，如果不是，直接上传保存
            FileUtils.writeByteArrayToFile(new File(saveFilePath),
                    file.getBytes());

        } else {

            if (contentRange != null && contentRange.length() > 0) {
                contentRange = contentRange.replace("bytes", "").trim();

//                fileLength = Integer.parseInt(contentRange.substring(contentRange.indexOf("/")+1));
                contentRange = contentRange.substring(0,
                        contentRange.indexOf("/"));
                String[] ranges = contentRange.split("-");
                if(ranges.length>=2){
                    startPosition = Long.parseLong(ranges[0]);
                    endPosition = Long.parseLong(ranges[1]);
                }else{
                    System.out.print("ddddd");
                }
            }

            //判断所上传文件是否已经存在，若存在则返回存在文件的大小
            //保存一个空文件
            if (new File(saveFilePath).exists()) {

                fs = new FileOutputStream(saveFilePath, true);
                FileInputStream fi = new FileInputStream(saveFilePath);
                lStartPos = fi.available();
                fi.close();
            } else {
                fs = new FileOutputStream(saveFilePath);
                lStartPos = 0;
            }

            //判断所上传文件片段是否存在，若存在则直接返回
            if (lStartPos > endPosition) {
                fs.close();
                return;
            } else if (lStartPos < startPosition) {
                byte[] nbytes = new byte[fileLength];
                int nReadSize = 0;
                file.getInputStream().skip(startPosition);// 跳过开始位置
                nReadSize = file.getInputStream().read(nbytes, 0, fileLength);
                if (nReadSize > 0) {
                    fs.write(nbytes, 0, nReadSize);
                }
            } else if (lStartPos > startPosition && lStartPos < endPosition) {
                byte[] nbytes = new byte[fileLength];
                int nReadSize = 0;
                file.getInputStream().skip(lStartPos);
                int end = (int) (endPosition - lStartPos);
                nReadSize = file.getInputStream().read(nbytes, 0, end);
                if (nReadSize > 0) {
                    fs.write(nbytes, 0, nReadSize);
//                    nReadSize = file.getInputStream().read(nbytes, 0, end);
                }
            }
        }
        if (fs != null) {
            fs.flush();
            fs.close();
            fs = null;
        }

    }
    /*public  String upload(*//*@RequestParam(value = "file", required = false)*//* MultipartFile file) {

*//*
        String fileName = file.getName();
        String tempDirPath = "/Users/wenzixia/Downloads/tempUpload/" + file.getMd5();
        String tempFileName = fileName + "_tmp";
        File tmpDir = new File(tempDirPath);
        File tmpFile = new File(tempDirPath, tempFileName);
        if (!tmpDir.exists()) {
            tmpDir.mkdirs();
        }

        RandomAccessFile accessTmpFile = new RandomAccessFile(tmpFile, "rw");
        long offset = CHUNK_SIZE * param.getChunk();
        //定位到该分片的偏移量
        accessTmpFile.seek(offset);
        //写入该分片数据
        accessTmpFile.write(param.getFile().getBytes());
        // 释放
        accessTmpFile.close();

        boolean isOk = checkAndSetUploadProgress(param, tempDirPath);
        if (isOk) {
            boolean flag = renameFile(tmpFile, fileName);
            System.out.println("upload complete !!" + flag + " name=" + fileName);
        }

        return "";
*//*
        if(file.isEmpty()){
            return "";
        }
        System.out.println(file.getOriginalFilename());
        File target = new File( "/Users/wenzixia/Downloads/tempUpload/");
        ///Users/wenzixia/Downloads/tempUpload/
        String  fileName = file.getOriginalFilename();
        File newFile=new File(target,fileName);
        try {
            FileUtils.copyInputStreamToFile(file.getInputStream(),newFile );

        } catch (IOException e) {
            e.printStackTrace();
        }


        return "fileuploaddone";

    }*/

}
