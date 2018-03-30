package com.wz.acim.upDownFile.pojo;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

//region = pojoCache，表示：指定缓存的区域，这个是配置在 ehcache.xml 中
//CacheConcurrencyStrategy 资料可以看：http://www.iteye.com/problems/49111
//READ_WRITE：严格读写缓存。用于对数据同步要求严格的情况，对于经常被读、较少修改的数据，可以采用此策略缓存。不支持分布式缓存。实际应用最广泛的缓存策略。
//@Cache(usage = CacheConcurrencyStrategy.READ_WRITE, region = "pojoCache")
//@Cacheable(true)
@Entity
@Table(name = "file_disk")
public class fileDisk {

    @Id
    @GenericGenerator(name = "IdentifierGenerator", strategy = "identity")
    @GeneratedValue(generator = "IdentifierGenerator")
    @Column(name = "disk_id", nullable = false)
    private long diskId;
    @Column(name = "disk_name", nullable = false)
    private String diskName;
    @Column(name = "disk_size", nullable = false)
    private double diskSize;
    @Column(name = "disk_used_size", nullable = false)
    private double diskUsedSize;
    @Column(name = "disk_empty_size", nullable = false)
    private double diskEmptySize;
    @Column(name = "file_number", nullable = false)
    private int  fileNumber;
    @Column(name = "file_share_number", nullable = false)
    private int  fileShareNumber;

    public long getFileDisk() {
        return diskId;
    }

    public void setFileDisk(long diskId) {
        this.diskId = diskId;
    }

    public String getDiskName() {
        return diskName;
    }

    public void setDiskName(String diskName) {
        this.diskName = diskName;
    }

    public double getDiskSize() {
        return diskSize;
    }

    public void setDiskSize(double diskSize) {
        this.diskSize = diskSize;
    }

    public double getDiskUsedSize() {
        return diskUsedSize;
    }

    public void setDiskUsedSize(double diskUsedSize) {
        this.diskUsedSize = diskUsedSize;
    }

    public double getDiskEmptySize() {
        return diskEmptySize;
    }

    public void setDiskEmptySize(double diskEmptySize) {
        this.diskEmptySize = diskEmptySize;
    }

    public int getFileNumber() {
        return fileNumber;
    }

    public void setFileNumber(int fileNumber) {
        this.fileNumber = fileNumber;
    }

    public int getFileShareNumber() {
        return fileShareNumber;
    }

    public void setFileShareNumber(int fileShareNumber) {
        this.fileShareNumber = fileShareNumber;
    }
}
