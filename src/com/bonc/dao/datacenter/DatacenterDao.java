package com.bonc.dao.datacenter;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.bonc.model.datacenter.EtotalBean;
import com.bonc.model.datacenter.FouronenineBean;
import com.bonc.model.datacenter.HbaseBean;
import com.bonc.model.datacenter.KafkaBean;
import com.bonc.model.datacenter.LsxdbfBean;
import com.bonc.model.datacenter.RedisBean;
import com.bonc.model.datacenter.SjjkBean;
import com.bonc.model.datacenter.StormBean;
import com.bonc.model.datacenter.StotalBean;
import com.bonc.model.datacenter.ThreehbaseBean;
import com.bonc.model.datacenter.ThreekafkaBean;
import com.bonc.model.datacenter.ThreeredisBean;
import com.bonc.model.datacenter.ThreestormBean;
import com.bonc.model.datacenter.YarmBean;
import com.bonc.model.datacenter.YarnBean;
import com.bonc.model.datacenter.YtotalBean;
import com.bonc.model.datacenter.YybsBean;

@Repository
public class DatacenterDao  extends SqlSessionDaoSupport {

	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	public List<FouronenineBean> getfour(){
		return getSqlSession().selectList("datacenter.getfour");
	} 
	public List<ThreehbaseBean> getthreehbase(){
		return getSqlSession().selectList("datacenter.getthreehbase");
	} 
	public List<ThreestormBean> getthreestorm(){
		return getSqlSession().selectList("datacenter.getthreestorm");
	}
	public List<ThreekafkaBean> getthreekafka(){
		return getSqlSession().selectList("datacenter.getthreekafka");
	}
	public List<ThreeredisBean> getthreeredis(){
		return getSqlSession().selectList("datacenter.getthreeredis");
	}
	public List<YarmBean> getyarm(){
		return getSqlSession().selectList("datacenter.yth_yarn");
	} 
	public List<HbaseBean> gethbase(){
		return getSqlSession().selectList("datacenter.cbss_hbase");
	} 
	public List<YarmBean> bss_cjzh(){
		return getSqlSession().selectList("datacenter.bss_cjzh");
	} 
	public List<HbaseBean> getipsuyuan(){
		return getSqlSession().selectList("datacenter.ipsuyuan");
	}
	public List<LsxdbfBean> lsxdbf(){
		return getSqlSession().selectList("datacenter.lsxdbf");
	}
	public List<KafkaBean> kafka(){
		return getSqlSession().selectList("datacenter.kafka");
	}
	public List<RedisBean> redis(){
		return getSqlSession().selectList("datacenter.redis");
	}
	public List<YarmBean> getxinling(){
		return getSqlSession().selectList("datacenter.xinling");
	} 
	public List<HbaseBean> yzwk_hbase(){
		return getSqlSession().selectList("datacenter.yzwk_hbase");
	}
	public List<KafkaBean> yzwk_kafka(){
		return getSqlSession().selectList("datacenter.yzwk_kafka");
	}
	public List<StormBean> storm(){
		return getSqlSession().selectList("datacenter.yzwk_storm");
	}
	public List<RedisBean> yzwk_redis(){
		return getSqlSession().selectList("datacenter.yzwk_redis");
	}
	public List<HbaseBean> llcx(){
		return getSqlSession().selectList("datacenter.llcx");
	} 
	public List<YarmBean> byu_yarn(){
		return getSqlSession().selectList("datacenter.byu_yarn");
	}
	public List<YarmBean> zxjg_yarn(){
		return getSqlSession().selectList("datacenter.zxjg_yarn");
	}
	public List<YybsBean> yybf(){
		return getSqlSession().selectList("datacenter.yybf");
	}
	public List<SjjkBean> sjjk(){
		return getSqlSession().selectList("datacenter.sjjk");
	}
	public List<SjjkBean> fwk(){
		return getSqlSession().selectList("datacenter.fwk");
	}
	public List<SjjkBean> yjhj(){
		return getSqlSession().selectList("datacenter.yjhj");
	}
	public List<SjjkBean> zxjg(){
		return getSqlSession().selectList("datacenter.zxjg");
	}
	public List<SjjkBean> cbjg(){
		return getSqlSession().selectList("datacenter.cbjg");
	}
	public List<YarnBean> getfirstyarn(){
		return getSqlSession().selectList("datacenter.getfirstyarn");
		
	}
	public List<YarnBean> getbssallyarn(){
		return getSqlSession().selectList("datacenter.getbssgetall");
		
	}
	public List<YtotalBean> ytotal(){
		return getSqlSession().selectList("datacenter.ytotal");
		
	}
	public List<EtotalBean> etotal(){
		return getSqlSession().selectList("datacenter.etotal");
		
	}
	public List<StotalBean> stotal(){
		return getSqlSession().selectList("datacenter.stotal");
		
	}
	public List<YarnBean> cbjgjq(){
		return getSqlSession().selectList("datacenter.cbjgjq");
		
	}
	public List<YarnBean> zxjgjq(){
		return getSqlSession().selectList("datacenter.zxjgjq");
		
	}
	public List<YarnBean> xlxdjq(){
		return getSqlSession().selectList("datacenter.xlxdjq");
		
	}
}
