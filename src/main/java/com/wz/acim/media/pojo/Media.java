package com.wz.acim.media.pojo;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

//
//
//@Cache(usage = CacheConcurrencyStrategy.READ_WRITE, region = "pojoCache")
//@Cacheable(true)
@Entity
@Table(name = "m_media")
public class Media {

    @Id
    @GenericGenerator(name = "IdentifierGenerator", strategy = "identity")
    @GeneratedValue(generator = "IdentifierGenerator")
    @Column(name = "media_id", nullable = false)
    private long mediaId;
    @Column(name = "media_name", nullable = false)
    private String mediaName;
    @Column(name = "media_type", nullable = false)
    private String mediaType;
    @Column(name = "media_kind", nullable = false)
    private String mediaKind;
    @Column(name = "media_source_type", nullable = false)
    private String mediaSourceType;
    @Column(name = "media_user_id", nullable = false)
    private long mediaUserId;
    @Column(name = "media_url", nullable = false)
    private String mediaUrl;
    @Column(name = "media_icon", nullable = true)
    private String  mediaIcon;
    @Column(name = "media_open_type", nullable = false)
    private String mediaOpenType;
    @Column(name = "media_discription", nullable = false)
    private String mediaDiscription;



    public String getMediaIcon() {
        return mediaIcon;
    }

    public void setMediaIcon(String mediaIcon) {
        this.mediaIcon = mediaIcon;
    }

    public String getMediaOpenType() {
        return mediaOpenType;
    }

    public void setMediaOpenType(String mediaOpenType) {
        this.mediaOpenType = mediaOpenType;
    }

    public String getMediaDiscription() {
        return mediaDiscription;
    }

    public void setMediaDiscription(String mediaDiscription) {
        this.mediaDiscription = mediaDiscription;
    }

    public long getMediaId() {
        return mediaId;
    }

    public long getMediaUserId() {
        return mediaUserId;
    }

    public void setMediaUserId(long mediaUserId) {
        this.mediaUserId = mediaUserId;
    }

    public void setMediaId(long mediaId) {
        this.mediaId = mediaId;
    }

    public String getMediaName() {
        return mediaName;
    }

    public void setMediaName(String mediaName) {
        this.mediaName = mediaName;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public String getMediaKind() {
        return mediaKind;
    }

    public void setMediaKind(String mediaKind) {
        this.mediaKind = mediaKind;
    }

    public String getMediaSourceType() {
        return mediaSourceType;
    }

    public void setMediaSourceType(String mediaSourceType) {
        this.mediaSourceType = mediaSourceType;
    }


    public String getMediaUrl() {
        return mediaUrl;
    }

    public void setMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
    }
}


