package com.bonc.dao.demo;

import java.util.List;


import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;


/**
 * @Repository
 * 该注解用于在spring的配置文件中注册id为demoDao的实体bean
 * 
 * */


@Repository//该注解用于在spring的配置文件中注册id为demoDao的实体bean
public class DemoDao extends SqlSessionDaoSupport {
/***
 * 
 * @Resource
 * 此注解下的setSqlSessionFactory方法为spring bean的实体sqlSessionFactory调用
 * 在dao层调用这个方法，并使用@Resource即可直接在dao层写书写sql
 * 
 * **/
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}

	public List list;

	public List getuserinfo() {
		list = getSqlSession().selectList("Userinfo.getUser");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + list);
		return list;
	}

}
