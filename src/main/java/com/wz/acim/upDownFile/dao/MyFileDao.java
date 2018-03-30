package com.wz.acim.upDownFile.dao;

/**
 * marrisa
 * date:2018-01-18
 */

import com.wz.acim.upDownFile.pojo.MyFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * 注意：对于内置 JPA 规范方法是可以不需要写在 Dao 里面的，但是写也无所谓的，写的话比较好在这里进行统计
 * 官网文档：http://docs.spring.io/spring-data/jpa/docs/1.10.1.RELEASE/reference/html/
 */

@Repository
public interface MyFileDao extends JpaRepository<MyFile, Long> {



	
}  