package com.bonc.action.datacenter;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.bonc.dao.datacenter.DatacenterDao;
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
import com.bonc.utils.JsonUtils;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class DatacenterAction  extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2312406732630581400L;
	@Autowired
	public DatacenterDao datadao;
	public List<FouronenineBean> getfour;
	public List<ThreehbaseBean> gethbase;
	public List<ThreestormBean> getstorm;
    public List<ThreekafkaBean> getkafka;
    public List<ThreeredisBean> getredis;
    public List<YarmBean> getyarm;
	public List<YarmBean> bss_cjzh;
	public List<HbaseBean> gethhbase;
	public List<HbaseBean> ipsuyuan;
	public List<LsxdbfBean> lsxdbf;
	public List<KafkaBean>  kafka;
	public List<RedisBean>  redis;
	public List<YarmBean> xinling;
	public List<HbaseBean> yzwk_hbase;
	public List<KafkaBean>  yzwk_kafka;
	public List<StormBean> yzwk_storm;
	public List<RedisBean>  yzwk_redis;
	public List<HbaseBean> llcx;
	public List<YarmBean> byu_yarm;
	public List<YarmBean> zxjg_yarm;
	public List<YybsBean> yybf;
	public List<SjjkBean> sjjk;
	public List<SjjkBean> fwk;
	public List<SjjkBean> yjhj;
	public List<SjjkBean> cbjg;
	public List<SjjkBean> zxjg;
	public List<YarnBean> getyarn;
	public List<YtotalBean> ytotal;
	public List<EtotalBean> etotal;
	public List<StotalBean> stotal;
	public String datacenter(){
		return "index";
	}
	public String foronenine(){		
		getfour=datadao.getfour();	
		System.err.println(getfour);
		JsonUtils.tojson(getfour);
		return Action.NONE;
	}
	public String threetooneTruetimeHBase(){
		gethbase=datadao.getthreehbase();
		System.err.println(gethbase);
		JsonUtils.tojson(gethbase);		
		return Action.NONE;
	}
	public String ThreetooneTruetimeStorm(){
		getstorm=datadao.getthreestorm();
		System.err.println(getstorm);
		JsonUtils.tojson(getstorm);		
		return Action.NONE;
	}
	public String ThreetooneTruetimeKafka(){
		getkafka=datadao.getthreekafka();
		System.err.println(getkafka);
		JsonUtils.tojson(getkafka);	
		return Action.NONE;
	}
	
	public String ThreetooneTruetimeRedis(){
		getredis=datadao.getthreeredis();
		System.err.println(getredis);
		JsonUtils.tojson(getredis);	
		return Action.NONE;
	}
	public String yarm(){		
		getyarm=datadao.getyarm();
		JsonUtils.tojson(getyarm);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+getyarm);		
		return Action.NONE;
	}
	public String hbase(){		
		gethhbase=datadao.gethbase();
		JsonUtils.tojson(gethhbase);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+getyarm);		
		return Action.NONE;
	}
	public String bss_cjzh(){		
		bss_cjzh=datadao.bss_cjzh();
		JsonUtils.tojson(bss_cjzh);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+getyarm);		
		return Action.NONE;
	}
	
	public String ipsuyuan(){
		ipsuyuan=datadao.getipsuyuan();
		JsonUtils.tojson(ipsuyuan);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+ipsuyuan);		
		
		
		return Action.NONE;
	}
	public String lsxdbf(){
		lsxdbf=datadao.lsxdbf();
		JsonUtils.tojson(lsxdbf);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+lsxdbf);		
		
		
		return Action.NONE;
	}
	public String kafka(){
		kafka=datadao.kafka();
		JsonUtils.tojson(kafka);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+kafka);		
		
		
		return Action.NONE;
	}
	public String redis(){
		redis=datadao.redis();
		JsonUtils.tojson(redis);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+redis);		
		
		
		return Action.NONE;
	}
	public String xinling(){		
		xinling=datadao.getxinling();
		JsonUtils.tojson(xinling);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+xinling);		
		return Action.NONE;
	}
	public String yzwk_hbase(){		
		yzwk_hbase=datadao.yzwk_hbase();
		JsonUtils.tojson(yzwk_hbase);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+yzwk_hbase);		
		return Action.NONE;
	}
	
	public String yzwk_kafka(){
		yzwk_kafka=datadao.yzwk_kafka();
		JsonUtils.tojson(yzwk_kafka);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+yzwk_kafka);		
		
		
		return Action.NONE;
	}
	public String yzwk_storm(){
		yzwk_storm=datadao.storm();
		JsonUtils.tojson(yzwk_storm);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+yzwk_storm);		
		
		
		return Action.NONE;
	}
	
	public String yzwk_redis(){
		yzwk_redis=datadao.yzwk_redis();
		JsonUtils.tojson(yzwk_redis);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+yzwk_redis);		
		
		
		return Action.NONE;
	}
	public String llcx(){
		llcx=datadao.llcx();
		JsonUtils.tojson(llcx);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+llcx);		
		
		
		return Action.NONE;
	}
	public String byu_yarm(){		
		byu_yarm=datadao.byu_yarn();
		JsonUtils.tojson(byu_yarm);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+byu_yarm);		
		return Action.NONE;
	}
	public String zxjg_yarm(){		
		zxjg_yarm=datadao.zxjg_yarn();
		JsonUtils.tojson(zxjg_yarm);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+zxjg_yarm);		
		return Action.NONE;
	}
	public String yybf(){		
		yybf=datadao.yybf();
		JsonUtils.tojson(yybf);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+yybf);		
		return Action.NONE;
	}
	public String sjjk(){		
		sjjk=datadao.sjjk();
		JsonUtils.tojson(sjjk);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+sjjk);		
		return Action.NONE;
	}
	public String fwk(){		
		fwk=datadao.fwk();
		JsonUtils.tojson(fwk);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+fwk);		
		return Action.NONE;
	}
	public String yjhj(){		
		yjhj=datadao.yjhj();
		JsonUtils.tojson(yjhj);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+yjhj);		
		return Action.NONE;
	}
	public String zxjg(){		
		zxjg=datadao.zxjg();
		JsonUtils.tojson(zxjg);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+zxjg);		
		return Action.NONE;
	}
	public String cbjg(){		
		cbjg=datadao.cbjg();
		JsonUtils.tojson(cbjg);
		System.err.println("返回的当前list是这个----------------------------------------------------------"+cbjg);		
		return Action.NONE;
	}
	public String getfirstyarn(){
		getyarn=datadao.getfirstyarn();
		System.err.println(getyarn);
		JsonUtils.tolistjson(getyarn);	
		return Action.NONE;
	}	
	
	public String bssgetyarn(){
		getyarn=datadao.getbssallyarn();
		System.err.println(getyarn);
		JsonUtils.tolistjson(getyarn);	
		return Action.NONE;
	}
	
	
	public String ytotal(){
		ytotal=datadao.ytotal();
		System.err.println(ytotal);
		JsonUtils.tojson(ytotal);	
		return Action.NONE;
	}
	public String etotal(){
		etotal=datadao.etotal();
		System.err.println(etotal);
		JsonUtils.tojson(etotal);	
		return Action.NONE;
	}
	public String stotal(){
		stotal=datadao.stotal();
		System.err.println(stotal);
		JsonUtils.tojson(stotal);	
		return Action.NONE;
	}
	public String cbjgjq(){
		getyarn=datadao.cbjgjq();
		System.err.println(getyarn);
		JsonUtils.tolistjson(getyarn);	
		return Action.NONE;
	}
	public String zxjgjq(){
		getyarn=datadao.zxjgjq();
		System.err.println(getyarn);
		JsonUtils.tolistjson(getyarn);	
		return Action.NONE;
	}
	public String xlxdjq(){
		getyarn=datadao.xlxdjq();
		System.err.println(getyarn);
		JsonUtils.tolistjson(getyarn);	
		return Action.NONE;
	}
	
	public String onecluster(){
		return "onecluster";
	}
	public String onecluster_cb(){
		return "oneclustercb";
	}
	public String Byarn(){
		return "byarn";
	}
	public String column(){
		return "column";
	}
	public String app(){
		return "app";
	}
	public String IPsource(){
		return "ipsource";
	}
	public String history(){
		return "history";
	}
	public String event(){
		return "event";
	}
	public String xl(){
		return "xl";
	}
	public String fourIPsource(){
		return "fouroneipsource";
	}
	public String onetofive(){
		return "onetofive";
	}
	
	
}
