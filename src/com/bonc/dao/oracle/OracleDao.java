package com.bonc.dao.oracle;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.bonc.model.oracle.OracleBean;

@Repository
public class OracleDao extends SqlSessionDaoSupport {

	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	
	public List<OracleBean> getdw1(){
		return getSqlSession().selectList("oracleinfo.dw1");
	} 
	public List<OracleBean> getdw2(){
		return getSqlSession().selectList("oracleinfo.dw2");
	} 
	public List<OracleBean> getdw3(){
		return getSqlSession().selectList("oracleinfo.dw3");
	} 
	public List<OracleBean> getdw4(){
		return getSqlSession().selectList("oracleinfo.dw4");
	} 
	public List<OracleBean> getdwe1(){
		return getSqlSession().selectList("oracleinfo.dwe1");
	} 
	public List<OracleBean> getdwe2(){
		return getSqlSession().selectList("oracleinfo.dwe2");
	} 
	public List<OracleBean> getdb1(){
		return getSqlSession().selectList("oracleinfo.db1");
	} 
	public List<OracleBean> getdb2(){
		return getSqlSession().selectList("oracleinfo.db2");
	} 
	public List<OracleBean> get12c1(){
		return getSqlSession().selectList("oracleinfo.12c1");
	} 
	public List<OracleBean> get12c2(){
		return getSqlSession().selectList("oracleinfo.12c2");
	} 
}
