package com.bonc.dao.jiagong;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.bonc.model.jiagong.WorkBean;

@Repository
public class WorkDao  extends SqlSessionDaoSupport{
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}

	public List<WorkBean> getcbwork(){
		return getSqlSession().selectList("workinfo.cb_jiagong");
	}
	public List<WorkBean> gethxwork(){
		return getSqlSession().selectList("workinfo.hx_jiagong");
	}
	public List<WorkBean> getxkjwork(){
		return getSqlSession().selectList("workinfo.xkj_jiagong");
	}
	public List<WorkBean> getzcwork(){
		return getSqlSession().selectList("workinfo.zc_jiagong");
	}
	public List<WorkBean> getzxwork(){
		return getSqlSession().selectList("workinfo.zx_jiagong");
	}
	public List<WorkBean> getoywork(){
		return getSqlSession().selectList("workinfo.oy_jiagong");
	}
	
}
