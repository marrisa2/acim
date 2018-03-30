package com.wz.acim.media.pojo;
/**
 * 创建时间2017-12-23
 * 创建人marrisa
 */
public class BookReader {

    private int bookReaderId;
    private int userId;
    private int bookId;
    private int currentPageNumber;
    private int chapterNumber;
    private float percenter;


    public int getBookReaderId() {
        return bookReaderId;
    }

    public void setBookReaderId(int bookReaderId) {
        this.bookReaderId = bookReaderId;
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

    public int getCurrentPageNumber() {
        return currentPageNumber;
    }

    public void setCurrentPageNumber(int currentPageNumber) {
        this.currentPageNumber = currentPageNumber;
    }

    public int getChapterNumber() {
        return chapterNumber;
    }

    public void setChapterNumber(int chapterNumber) {
        this.chapterNumber = chapterNumber;
    }

    public float getPercenter() {
        return percenter;
    }

    public void setPercenter(float percenter) {
        this.percenter = percenter;
    }
}
