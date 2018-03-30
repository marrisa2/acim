# 创建数据库，并创建权限用户

#drop database acim;
#drop user acim@'%';


#CREATE DATABASE `acim` CHARACTER SET utf8;
#CREATE USER 'acim'@'%' IDENTIFIED BY 'acim';
#GRANT ALL PRIVILEGES ON acim.* TO 'acim'@'%';
#FLUSH PRIVILEGES;

CREATE TABLE `sys_user` (
  `sys_user_id` bigint(20) NOT NULL,
  `sys_user_login_name` varchar(45) NOT NULL,
  `sys_user_login_password` varchar(45) DEFAULT NULL,
  `sys_user_is_delete` varchar(5) DEFAULT '0',
  `sys_user_register_datetime` datetime NOT NULL DEFAULT '1990-01-01 00:00:00',
  `sys_user_email` varchar(45) DEFAULT NULL,
  `sys_user_mobile` varchar(20) DEFAULT NULL,
  `sys_user_other` varchar(200) DEFAULT '--',
  `sys_register_kind` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`sys_user_id`)
)  ENGINE=InnoDB DEFAULT CHARSET=big5;


insert  into `sys_user`(`sys_user_id`,`sys_user_login_name`,`sys_user_login_password`,`sys_user_is_delete`,`sys_user_register_datetime`,`sys_user_email`,`sys_user_mobile`) values (1,'YouMeek1','e10adc3949ba59abbe56e057f20f883e','N','2016-02-24 00:12:23','363379441@qq.com','13800000001');


 CREATE TABLE `m_media` (
  `mediaId` int(11) NOT NULL COMMENT '媒介 id',
  `mediaType` varchar(3) NOT NULL DEFAULT '0' COMMENT '媒介类型： 0 文件， 1 mp3， 2 mp4， 3 图片',
  `mediaSourceType` varchar(3) DEFAULT NULL COMMENT '媒介的来源：0 系统自己 1 用户',
  `mediaSourceId` varchar(50) DEFAULT NULL COMMENT '媒介来源的 用户ID',
  `mediaName` varchar(45) DEFAULT NULL COMMENT '媒介 名称',
  `mediaUrl` varchar(45) NOT NULL COMMENT '媒介链接地址',
  `mediaKind` varchar(3) DEFAULT NULL COMMENT '媒介种类： 文件：work pdf excel ppt  音频：MP3， 视频 MP4 。图片。.jpg  ',
  `media_icon` varchar(45) DEFAULT NULL COMMENT '媒介 图标',
  `media_discription` varchar(45) DEFAULT NULL COMMENT '媒介 说明',
  `media_openType` varchar(45) DEFAULT NULL COMMENT '媒介 打开类型',
  PRIMARY KEY (`mediaId`,`mediaUrl`)
) ENGINE=InnoDB DEFAULT CHARSET=big5;


CREATE TABLE `f_myfile` (
  `fileID` INT NOT NULL,
  `userId` INT NULL,
  `parentFileId;` INT NULL,
  `fileSize` DECIMAL(18) NULL,
  `fileSource` VARCHAR(3) NULL COMMENT '0 系统 1 用户',
  `fileName` VARCHAR(45) NULL,
  `isFile` VARCHAR(3) NULL COMMENT '0 文件夹 1 文件',
  `fileType` VARCHAR(3) NULL COMMENT '// 0 文件夹  1 图片  2 视频  3 音频  4文件',
  `fileSuffix` VARCHAR(10) NULL,
  `password` VARCHAR(45) NULL,
  `isLock` VARCHAR(3) NULL DEFAULT 0 COMMENT '0 没加锁  1 加锁',
  `md5` VARCHAR(100) NULL,
  `description` VARCHAR(200) NULL,
  `location` VARCHAR(45) NULL,
  `shareUrl` VARCHAR(45) NULL,
  `createDate` DATETIME NULL,
  PRIMARY KEY (`fileID`));


