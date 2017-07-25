package com.bonc.dao.datasend;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class DatasendDao extends SqlSessionDaoSupport{
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	
	public List caixin() {
		List caixin = getSqlSession().selectList("datasend.caixin");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + caixin);
		return caixin;
	}
	
	public List ribao() {
		List ribao = getSqlSession().selectList("datasend.ribao");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + ribao);
		return ribao;
	}
	
	public List youjian() {
		List youjian = getSqlSession().selectList("datasend.youjian");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + youjian);
		return youjian;
	}
	
	public List yemian() {
		List yemian = getSqlSession().selectList("datasend.yemian");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + yemian);
		return yemian;
	}
	
	
}
