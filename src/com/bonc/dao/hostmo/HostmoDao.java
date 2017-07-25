package com.bonc.dao.hostmo;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.bonc.model.hostmo.HostmoBean;
@Repository
public class HostmoDao extends SqlSessionDaoSupport {
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	
	public List<HostmoBean> gethostmo(){
		
		return getSqlSession().selectList("hostmo.gethostmo");
	}
}
