package com.wz.acim.media.controller;

import com.wz.tools.WzCons;
import com.wz.tools.readFile.ReadExcel;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;
import com.wz.acim.media.pojo.Media;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * data: 2017-12-17
 * 多媒体加载
 */


@Controller
public class MedialController {

    /**
     * 跳转book页面
     * @return
     */
   /* @RequestMapping("/showBook/{mediaId}/{mediaName}")
     //@ResponseBody
    public String   showBook(Model model, @PathVariable("mediaId") String mediaId,@PathVariable("mediaName") String mediaName ){
        System.out.print(mediaName.substring(2,mediaName.length()-1));
        boolean isAll =  true; //acim.isAll();
//        //int [] sheet_inexs  = acim.getSheet_indexs();
        //String mediaName = httpServletRequest.getParameter("mediaName");
        String fileAddress = WzCons.getBookAddress(mediaName.substring(2,mediaName.length()-1));
        Map<String,List<Map<String,String>>> mapList = ReadExcel.readExcel(fileAddress, null,isAll);
        model.addAttribute("mediaInfo",mapList);
        return Servlet2Utils.urlPath("media/book2");
    }*/

    @RequestMapping("/showBook")
    @ResponseBody
    public Map<String,List<Map<String,String>>> showBook(Media media){
        boolean isAll =  true;
        String mediaName = media.getMediaName();
        String fileAddress = WzCons.getBookAddress(mediaName);
        Map<String,List<Map<String,String>>> mapList = ReadExcel.readExcel(fileAddress, null,isAll);
        return  mapList;
    }

//    /**
//     * 跳转音频页面
//     * @return
//     */
//    @RequestMapping("/showRadio")
//    public String showRadio(Media media,RedirectAttributes attr){
//        return Servlet2Utils.urlPath("media/book");
//    }
//
//
//    /**
//     * 跳转视频页面
//     * @return
//     */
//    @RequestMapping("/showTv")
//    public String showVedio(Media media, RedirectAttributes attr){
//        return Servlet2Utils.urlPath("media/tv");
//    }
}
