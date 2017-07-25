package com.bonc.dao.hadoop;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;


@Repository
public class HadoopDao extends SqlSessionDaoSupport{
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	public List cbss() {
		List cbss = getSqlSession().selectList("sqlhadoop.cbss");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + cbss);
		return cbss;
	}
	public List zxjg() {
		List zxjg = getSqlSession().selectList("sqlhadoop.zxjg");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + zxjg);
		return zxjg;
	}
	public List ythjq() {
		List ythjq = getSqlSession().selectList("sqlhadoop.ythjq");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + ythjq);
		return ythjq;
	}
	public List clpt() {
		List clpt = getSqlSession().selectList("sqlhadoop.clpt");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + clpt);
		return clpt;
	}
	public List dwfw() {
		List dwfw = getSqlSession().selectList("sqlhadoop.dwfw");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + dwfw);
		return dwfw;
	}
	public List nlkfptyz() {
		List nlkfptyz = getSqlSession().selectList("sqlhadoop.nlkfptyz");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + nlkfptyz);
		return nlkfptyz;
	}
	public List ipsyjq() {
		List ipsyjq = getSqlSession().selectList("sqlhadoop.ipsyjq");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + ipsyjq);
		return ipsyjq;
	}
	public List xlxdjq() {
		List xlxdjq = getSqlSession().selectList("sqlhadoop.xlxdjq");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + xlxdjq);
		return xlxdjq;
	}
	public List nlkfpt() {
		List nlkfpt = getSqlSession().selectList("sqlhadoop.nlkfpt");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + nlkfpt);
		return nlkfpt;
	}
	public List jzyx() {
		List jzyx = getSqlSession().selectList("sqlhadoop.jzyx");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + jzyx);
		return jzyx;
	}
	public List gwjq() {
		List gwjq = getSqlSession().selectList("sqlhadoop.gwjq");
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + gwjq);
		return gwjq;
	}
	

}
