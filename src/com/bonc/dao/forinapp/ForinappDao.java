package com.bonc.dao.forinapp;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.bonc.model.datacenter.RedisBean;
import com.bonc.model.datacenter.SjjkBean;
import com.bonc.model.datacenter.StormBean;
import com.bonc.model.datacenter.ThreekafkaBean;
import com.bonc.model.datacenter.YarnBean;
import com.bonc.model.forinapp.ForinappBean;
import com.bonc.model.forinapp.TodatalinedownBean;
import com.bonc.model.forinapp.TodatalinetowBean;
import com.bonc.model.forinapp.ToindatalineBean;

@Repository
public class ForinappDao extends SqlSessionDaoSupport{
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	public List<SjjkBean> dmjishi(){
		return getSqlSession().selectList("forinapp.dmjishi");
	}
	public List<SjjkBean> dmjishi2(){
		return getSqlSession().selectList("forinapp.dmjishi2");
	}
	public List<ForinappBean> cunl_yarm(){
		return getSqlSession().selectList("forinapp.cun_yarm");
	}
	public List<RedisBean> cunl_redis(){
		return getSqlSession().selectList("forinapp.cunl_redis");
	}
	public List<RedisBean> cunl_redis2(){
		return getSqlSession().selectList("forinapp.cunl_redis2");
	}
	public List<ThreekafkaBean> cunl_kafka2(){
		return getSqlSession().selectList("forinapp.cunl_kafka2");
	}
	public List<StormBean> cunl_storm(){
		return getSqlSession().selectList("forinapp.cunl_storm");
	}
	public List<YarnBean> clpt(){
		return getSqlSession().selectList("forinapp.clpt");		
	}	
	public List<ToindatalineBean> getdatacenterline(){
		return getSqlSession().selectList("forinapp.datalinedatacenter");
	}
	public List<TodatalinedownBean> getdatacenterlinedown(){
		return getSqlSession().selectList("forinapp.datalinedowncenter");
	}
	public List<TodatalinetowBean> getdatacenterlinedowntow(){
		return getSqlSession().selectList("forinapp.datalinedowntwo");
	}
}
