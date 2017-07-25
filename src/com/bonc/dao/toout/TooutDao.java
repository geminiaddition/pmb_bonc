package com.bonc.dao.toout;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.bonc.model.datacenter.YarnBean;
import com.bonc.model.forinapp.ToindatalineBean;
import com.bonc.model.qianzhi.InterBean;
import com.bonc.model.toout.FtpBean;
import com.bonc.model.toout.HbaseBean;
import com.bonc.model.toout.MppBean;
import com.bonc.model.toout.OracleopenBean;
import com.bonc.model.toout.UnderBean;
import com.bonc.model.toout.WokafkaBean;
import com.bonc.model.toout.WoredisBean;
import com.bonc.model.toout.WoyarnBean;

@Repository
public class TooutDao extends SqlSessionDaoSupport {
	
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	
	
	public List<WoyarnBean> getyarn(){
		return getSqlSession().selectList("toout.getyarn");
	} 
	public List<WokafkaBean> getkafka(){
		return getSqlSession().selectList("toout.getkafka");
	} 
	public List<WoredisBean> getredismisql(){
		return getSqlSession().selectList("toout.getredismysql");
	}

	public List<WoredisBean> getredis(){
		return getSqlSession().selectList("toout.getredis");
	}
	public List<WoyarnBean> getdmpyarn(){
		return getSqlSession().selectList("toout.getdmpyarn");
	}
	public List<WokafkaBean> getdmpkafka(){
		return getSqlSession().selectList("toout.getdmpkafka");
	} 
	public List<FtpBean> getdmpftp(){
		return getSqlSession().selectList("toout.getdmpftp");
	}
	public List<WoyarnBean> getpoweroneyarn(){
		return getSqlSession().selectList("toout.getpoweroneyarn");
	} 
	public List<WoyarnBean> getpowerfouryarn(){
		return getSqlSession().selectList("toout.getpowerfouryarn");
	} 
	public List<MppBean> getpowermpp(){
		return getSqlSession().selectList("toout.getmpp");
	}
	public List<FtpBean> getpowerftp(){
		return getSqlSession().selectList("toout.getpowerftp");
	}
	public List<HbaseBean> getzxonehbase(){
		return getSqlSession().selectList("toout.getzxonehbase");
	}
	public List<HbaseBean> getzxfourhbase(){
		return getSqlSession().selectList("toout.getzxfourhbase");
	}
	public List<HbaseBean> getkshbase(){
		return getSqlSession().selectList("toout.getkshbase");
	}
	public List<WoredisBean> getksredis(){
		return getSqlSession().selectList("toout.getksredis");
	}
	public List<HbaseBean> getwoowhbase(){
		return getSqlSession().selectList("toout.getwoowhbase");
	}
	public List<OracleopenBean> getoracleone(){
		return getSqlSession().selectList("toout.getoracleone");
	}
	public List<OracleopenBean> getoracletwo(){
		return getSqlSession().selectList("toout.getoracletwo");
	}
	public List<YarnBean> gettooutwoyarn(){
		return getSqlSession().selectList("toout.gettooutwoyarn");
		
	}
	public List<YarnBean> gettooutdmpyarn(){
		return getSqlSession().selectList("toout.gettooutdmpyarn");
		
	}
	public List<YarnBean> gettooutthreeooneyarn(){
		return getSqlSession().selectList("toout.gettooutthreeooneyarn");
		
	}
	public List<YarnBean> gettooutthreetfouryarn(){
		return getSqlSession().selectList("toout.gettooutthreetfouryarn");
		
	}
	public List<ToindatalineBean> zxline(){
		return getSqlSession().selectList("toout.zxline");
	}
	public List<ToindatalineBean> woline(){
		return getSqlSession().selectList("toout.woline");
	}
	public List<UnderBean> jingzhun_wo(){
		return getSqlSession().selectList("toout.jingzhun_wo");
	}
	public List<UnderBean> zhengxin_xia(){
		return getSqlSession().selectList("toout.zhengxin_xia");
	}
	public List<InterBean> zhengxininner(){
		return getSqlSession().selectList("toout.zhengxininner");
	}
	public List<InterBean> jzyxinner(){
		return getSqlSession().selectList("toout.jzyxinner");
	}
}
