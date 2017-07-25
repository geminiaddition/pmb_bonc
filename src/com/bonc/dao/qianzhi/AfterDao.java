package com.bonc.dao.qianzhi;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.bonc.model.caiji.CollectBean;
import com.bonc.model.qianzhi.AfterBean;

@Repository
public class AfterDao extends SqlSessionDaoSupport{

	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	
	public List<AfterBean>getinter(){
		return getSqlSession().selectList("afterinfo.inter");
	}
	public List<AfterBean> getetl(){
		return getSqlSession().selectList("afterinfo.etl");
	}
	public List<AfterBean> getmsg(){
		return getSqlSession().selectList("afterinfo.msg");
	}
	public List<AfterBean> getcode(){
		return getSqlSession().selectList("afterinfo.code");
	}
	public List<AfterBean> getlate(){
		return getSqlSession().selectList("afterinfo.late");
	}
}
