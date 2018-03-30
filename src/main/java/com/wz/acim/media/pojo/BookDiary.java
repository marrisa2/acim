package com.wz.acim.media.pojo;
import java.util.Date;
/**
 * 创建时间2017-12-23
 * 创建人marrisa
 */
public class BookDiary {
    private int bookDiary;
    private int userId;
    private int bookId;

    private Date date;
    private String context;
    private int pageNumber;
    private int chapterNumber;

    private String diaryContext;
    private String title;


    public int getBookDiary() {
        return bookDiary;
    }

    public void setBookDiary(int bookDiary) {
        this.bookDiary = bookDiary;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public int getChapterNumber() {
        return chapterNumber;
    }

    public void setChapterNumber(int chapterNumber) {
        this.chapterNumber = chapterNumber;
    }

    public String getDiaryContext() {
        return diaryContext;
    }

    public void setDiaryContext(String diaryContext) {
        this.diaryContext = diaryContext;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
