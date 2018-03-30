package com.wz.acim.upDownFile.pojo;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

//region = pojoCache，表示：指定缓存的区域，这个是配置在 ehcache.xml 中
//CacheConcurrencyStrategy 资料可以看：http://www.iteye.com/problems/49111
//READ_WRITE：严格读写缓存。用于对数据同步要求严格的情况，对于经常被读、较少修改的数据，可以采用此策略缓存。不支持分布式缓存。实际应用最广泛的缓存策略。
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE, region = "pojoCache")
@Cacheable(true)
@Entity
@Table(name = "file_myfile")
public class MyFile implements Serializable {

    @Id
    @GenericGenerator(name = "IdentifierGenerator", strategy = "identity")
    @GeneratedValue(generator = "IdentifierGenerator")
    @Column(name = "file_id", nullable = false)
    private Long 		fileId;
    @Column(name = "user_id", nullable = false)
    private Long 		userId;

    @Column(name = "parent_file_id", nullable = false)
    private Long		parentFileId;
    @Column(name = "file_size", nullable = true)
    private double		fileSize;

    @Column(name = "file_source", nullable = false)
    private String      fileSource;  // 文件来源： 0 系统  1 用户
    @Column(name = "file_name", nullable = false)
    private String 		fileName;
    @Column(name = "is_file", nullable = false)
    private String      isFile;      // 判断是文件夹，还是文件
    @Column(name = "file_type", nullable = false)
    private String 		fileType;    // 0 文件夹  1 图片  2 视频  3 音频  4文件
    @Column(name = "file_suffix", nullable = true)
    private String      fileSuffix;  // 文件的后缀
    @Column(name = "password", nullable = true)
    private String 		password;
    @Column(name = "is_lock", nullable = true)
    private String 		isLock;  // 0 没有锁  1 锁定

    //    private String 		shareDownload;
    @Column(name = "md5", nullable = true)
    private String 		md5;
    @Column(name = "description", nullable = true)
    private String 		description;
    @Column(name = "disk_id", nullable = false)
    private String 		diskId;
    @Column(name = "share_url", nullable = true)
    private String 		shareUrl;
    @Column(name = "create_date", nullable = false)
//    @Temporal(TemporalType.TIMESTAMP)
    private Date 		createDate;

    @Column(name = "is_share", nullable = true) // 0 share 1 not share
    private String 		isShare;

    @Column(name = "file_path", nullable = false)
    private String  	filePath;






    public Long getFileId() {
        return fileId;
    }

    public void setFileId(Long fileId) {
        this.fileId = fileId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getParentFileId() {
        return parentFileId;
    }

    public void setParentFileId(Long parentFileId) {
        this.parentFileId = parentFileId;
    }

    public double getFileSize() {
        return fileSize;
    }

    public void setFileSize(double fileSize) {
        this.fileSize = fileSize;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public String getFileSource() {
        return fileSource;
    }

    public void setFileSource(String fileSource) {
        this.fileSource = fileSource;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getIsFile() {
        return isFile;
    }

    public void setIsFile(String isFile) {
        this.isFile = isFile;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public String getFileSuffix() {
        return fileSuffix;
    }

    public void setFileSuffix(String fileSuffix) {
        this.fileSuffix = fileSuffix;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getIsLock() {
        return isLock;
    }

    public void setIsLock(String isLock) {
        this.isLock = isLock;
    }

    public String getIsShare() {
        return isShare;
    }

    public void setIsShare(String isShare) {
        this.isShare = isShare;
    }

    public String getMd5() {
        return md5;
    }

    public void setMd5(String md5) {
        this.md5 = md5;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return diskId;
    }

    public void setLocation(String diskId) {
        this.diskId = diskId;
    }

    public String getShareUrl() {
        return shareUrl;
    }

    public void setShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    @Override
    public String toString() {
         return "";
    }
}