package com.wz.acim.media.pojo;
/**
 * 创建时间2017-12-23
 * 创建人marrisa
 */
public class BookSetting {
    private int bookSettingId;
    private int userId;
    private int brightNess;
    private String fontType;
    private String backGround;
    private String nightType;


    public int getBookSettingId() {
        return bookSettingId;
    }

    public void setBookSettingId(int bookSettingId) {
        this.bookSettingId = bookSettingId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getBrightNess() {
        return brightNess;
    }

    public void setBrightNess(int lightNess) {
        this.brightNess = lightNess;
    }

    public String getFontType() {
        return fontType;
    }

    public void setFontType(String fontType) {
        this.fontType = fontType;
    }

    public String getBackGround() {
        return backGround;
    }

    public void setBackGround(String backGround) {
        this.backGround = backGround;
    }

    public String getNightType() {
        return nightType;
    }

    public void setNightType(String nightType) {
        this.nightType = nightType;
    }
}
