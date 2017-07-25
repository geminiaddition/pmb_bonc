package com.bonc.dao.caiji;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.bonc.model.caiji.CollectBean;
import com.bonc.model.caiji.CollectzxBean;


@Repository
public class CollectDao extends SqlSessionDaoSupport {
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	
	public List<CollectBean> getdetail_portrait(){
		return getSqlSession().selectList("collectinfo.cb_collect");
	} 
	
	public List<CollectzxBean> getcbss_jiekou(){
		return getSqlSession().selectList("collectinfo.zx_collect");
	} 
	
}
