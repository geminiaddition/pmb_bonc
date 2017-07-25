package com.bonc.action.forinapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.forinapp.ForinappDao;
import com.bonc.model.datacenter.RedisBean;
import com.bonc.model.datacenter.SjjkBean;
import com.bonc.model.datacenter.StormBean;
import com.bonc.model.datacenter.ThreekafkaBean;
import com.bonc.model.datacenter.YarnBean;
import com.bonc.model.forinapp.ForinappBean;
import com.bonc.model.forinapp.TodatalinedownBean;
import com.bonc.model.forinapp.TodatalinetowBean;
import com.bonc.model.forinapp.ToindatalineBean;
import com.bonc.utils.JsonUtils;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class ForinappAction extends ActionSupport {
	private static final long serialVersionUID = 2312406732630581400L;
	@Autowired
	public ForinappDao dao;
	public List<SjjkBean> dmjishi;
	public List<SjjkBean> dmjishi2;
	public List<ForinappBean> cunl_yarm;
	public List<RedisBean> cunl_redis;
	public List<RedisBean> cunl_redis2;
	public List<ThreekafkaBean> cunl_kafka2; 
	public List<StormBean> cunl_storm;
	public List<YarnBean> getyarn;
	public List<ToindatalineBean> getdataline;
	public List<TodatalinedownBean> getlinedown;
	public List<TodatalinetowBean> getlinedowntow;
	public String forinapp() {

		return "index";
	}
	public String dmjishi(){		
		dmjishi=dao.dmjishi();
		JsonUtils.tojson(dmjishi);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+dmjishi);		
		return Action.NONE;
	}
	public String dmjishi2(){		
		dmjishi2=dao.dmjishi2();
		JsonUtils.tojson(dmjishi2);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+dmjishi2);		
		return Action.NONE;
	}
	public String cunl_yarm(){		
		cunl_yarm=dao.cunl_yarm();
		JsonUtils.tojson(cunl_yarm);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+cunl_yarm);		
		return Action.NONE;
	}
	public String cunl_redis(){		
		cunl_redis=dao.cunl_redis();
		JsonUtils.tojson(cunl_redis);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+cunl_redis);		
		return Action.NONE;
	}
	public String cunl_redis2(){		
		cunl_redis2=dao.cunl_redis2();
		JsonUtils.tojson(cunl_redis2);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+cunl_redis2);		
		return Action.NONE;
	}
	public String cunl_kafka2(){		
		cunl_kafka2=dao.cunl_kafka2();
		JsonUtils.tojson(cunl_kafka2);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+cunl_kafka2);		
		return Action.NONE;
	}
	public String cunl_storm(){		
		cunl_storm=dao.cunl_storm();
		JsonUtils.tojson(cunl_storm);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+cunl_storm);		
		return Action.NONE;
	}
	public String clpt(){
		getyarn=dao.clpt();
		System.err.println(getyarn);
		JsonUtils.tolistjson(getyarn);	
		return Action.NONE;
	}
	public String datacenterline(){		
		getdataline=dao.getdatacenterline();
		JsonUtils.tolistforTWOlinejson(getdataline);
		System.err.println(getdataline);		
		return Action.NONE;
	}
	public String getlinedown(){		
		getlinedown=dao.getdatacenterlinedown();
		JsonUtils.tojson(getlinedown);
		System.err.println(getlinedown);		
		return Action.NONE;
	}
	public String getlinedowntow(){		
		getlinedowntow=dao.getdatacenterlinedowntow();
		JsonUtils.tojson(getlinedowntow);
		System.err.println(getlinedowntow);		
		return Action.NONE;
	}
	public String cunliangyarn() {

		return "cunliangyarn";
	}
	public String cunliangredis() {

		return "cunliangredis";
	}
}
