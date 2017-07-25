package com.bonc.dao.appser;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class AppserDao extends SqlSessionDaoSupport{
	
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	
	public List sjfx(){
		
		List sjfx=getSqlSession().selectList("appser.sjfx");
		
		
		return sjfx;
	}
	public List ldsy(){
			
			List ldsy=getSqlSession().selectList("appser.ldsy");
			
			
			return ldsy;
		}
	public List llcx(){
			
			List llcx=getSqlSession().selectList("appser.llcx");
			
			
			return llcx;
		}
}
