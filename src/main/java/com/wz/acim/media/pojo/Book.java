package com.wz.acim.media.pojo;
import java.util.List;

/**
 * 创建时间2017-12-23
 * 创建人marrisa
 */
public class Book {
    private int bookId;
    private String bookName;
    private String bookType;
    private List<Object> bookCatalog;
    private List<Object> bookContext;
    private BookMaker bookMaker;
    private BookDiary bookDiary;
    private int readerId;

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getBookType() {
        return bookType;
    }

    public void setBookType(String bookType) {
        this.bookType = bookType;
    }

    public List<Object> getBookCatalog() {
        return bookCatalog;
    }

    public void setBookCatalog(List<Object> bookCatalog) {
        this.bookCatalog = bookCatalog;
    }

    public List<Object> getBookContext() {
        return bookContext;
    }

    public void setBookContext(List<Object> bookContext) {
        this.bookContext = bookContext;
    }

    public BookMaker getBookMaker() {
        return bookMaker;
    }

    public void setBookMaker(BookMaker bookMaker) {
        this.bookMaker = bookMaker;
    }

    public BookDiary getBookDiary() {
        return bookDiary;
    }

    public void setBookDiary(BookDiary bookDiary) {
        this.bookDiary = bookDiary;
    }

    public int getReaderId() {
        return readerId;
    }

    public void setReaderId(int readerId) {
        this.readerId = readerId;
    }
}
