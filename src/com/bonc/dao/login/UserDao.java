package com.bonc.dao.login;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.bonc.model.login.UserBean;

@Repository
public class UserDao extends SqlSessionDaoSupport {

	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
public List<UserBean> userinfo(Map map){
	
	getSqlSession().selectList("userinfo.getUser",map);
	System.err.println(getSqlSession().selectList("userinfo.getUser",map));
	return getSqlSession().selectList("userinfo.getUser",map);
}
public UserBean userbean(Map map) {
	getSqlSession().selectOne("userinfo.getUser",map);
	System.err.println("sqlget-----------------------"+getSqlSession().selectOne("userinfo.getUser",map));
	return getSqlSession().selectOne("userinfo.getUser",map);
}
}
