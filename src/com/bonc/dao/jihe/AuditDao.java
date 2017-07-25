package com.bonc.dao.jihe;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.bonc.model.jihe.AuditBean;
import com.bonc.model.jihe.AuditdatilBean;

@Repository
public class AuditDao extends SqlSessionDaoSupport{
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}

	public List<AuditBean> getaudit(){
		return getSqlSession().selectList("auditinfo.getaudit");
	}
	public List<AuditdatilBean> getauditdatil(){
		return getSqlSession().selectList("auditinfo.getauditdatil");
	}
}
