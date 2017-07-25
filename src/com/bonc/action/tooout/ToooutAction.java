package com.bonc.action.tooout;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.toout.TooutDao;
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
import com.bonc.utils.JsonUtils;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;
@Component
public class ToooutAction extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2340869084718049690L;
	
	@Autowired
	public TooutDao tooutdao;
	public List<WoyarnBean> getyarn;
	public List<WokafkaBean> getkafka;
	public List<WoredisBean> getredis;
	public List<FtpBean> getftp;
	public List<MppBean> getmpp;
	public List<HbaseBean> gethbase;
	public List<OracleopenBean> getoracle;
	public List<YarnBean> getbaseyarn;
	public List<ToindatalineBean> getline;
	public List<UnderBean> line_xia;
	public List<InterBean> getzxinner;
	public List<InterBean> getjzyxinner;
	public String tooout(){
		zxinner();
		jzyxinner();
		return "index";
	}
	public String tooutyarn(){
		getyarn=tooutdao.getyarn();
		System.err.println(getyarn);
		JsonUtils.tojson(getyarn);	
		
		return Action.NONE;
	}
	public String tooutkafka(){
		getkafka=tooutdao.getkafka();
		System.err.println(getkafka);
		JsonUtils.tojson(getkafka);	
		
		return Action.NONE;
	}
	public String tooutredismysql(){
		getredis=tooutdao.getredismisql();
		System.err.println(getredis);
		JsonUtils.tojson(getredis);	
		
		return Action.NONE;
	}
	public String tooutredis(){
		getredis=tooutdao.getredis();
		System.err.println(getredis);
		JsonUtils.tojson(getredis);	
		
		return Action.NONE;
	}
	public String tooutdmpyarn(){
		getyarn=tooutdao.getdmpyarn();
		System.err.println(getyarn);
		JsonUtils.tojson(getyarn);	
		
		return Action.NONE;
	}
	public String tooutdmpkafka(){
		getkafka=tooutdao.getdmpkafka();
		System.err.println(getkafka);
		JsonUtils.tojson(getkafka);	
		
		return Action.NONE;
	}
	public String tooutdmpftp(){
		getftp=tooutdao.getdmpftp();
		System.err.println(getftp);
		JsonUtils.tojson(getftp);	
		
		return Action.NONE;
	}
	public String tooutpoweroneyarn(){
		getyarn=tooutdao.getpoweroneyarn();
		System.err.println(getyarn);
		JsonUtils.tojson(getyarn);	
		
		return Action.NONE;
	}
	public String tooutpowerfouryarn(){
		getyarn=tooutdao.getpowerfouryarn();
		System.err.println(getyarn);
		JsonUtils.tojson(getyarn);	
		
		return Action.NONE;
	}
	public String tooutpowermpp(){
		getmpp=tooutdao.getpowermpp();
		System.err.println(getmpp);
		JsonUtils.tojson(getmpp);	
		
		return Action.NONE;
	}
	public String tooutpowerftp(){
		getftp=tooutdao.getpowerftp();
		System.err.println(getftp);
		JsonUtils.tojson(getftp);	
		
		return Action.NONE;
	}
	public String tooutzxonehbase(){
		gethbase=tooutdao.getzxonehbase();
		System.err.println(gethbase);
		JsonUtils.tojson(gethbase);	
		
		return Action.NONE;
	}
	public String tooutzxfourhbase(){
		gethbase=tooutdao.getzxfourhbase();
		System.err.println(gethbase);
		JsonUtils.tojson(gethbase);	
		
		return Action.NONE;
	}
	public String tooutkshbase(){
		gethbase=tooutdao.getkshbase();
		System.err.println(gethbase);
		JsonUtils.tojson(gethbase);	
		
		return Action.NONE;
	}
	public String tooutksredis(){
		getredis=tooutdao.getksredis();
		System.err.println(getredis);
		JsonUtils.tojson(getredis);	
		
		return Action.NONE;
	}
	public String tooutwoowhbase(){
		gethbase=tooutdao.getwoowhbase();
		System.err.println(gethbase);
		JsonUtils.tojson(gethbase);	
		
		return Action.NONE;
	}
	public String tooutoracleone(){
		getoracle=tooutdao.getoracleone();
		System.err.println(getoracle);
		JsonUtils.tojson(getoracle);	
		
		return Action.NONE;
	}
	public String tooutoracletwo(){
		getoracle=tooutdao.getoracletwo();
		System.err.println(getoracle);
		JsonUtils.tojson(getoracle);	
		
		return Action.NONE;
	}
	public String gettooutwoyarn(){
		getbaseyarn=tooutdao.gettooutwoyarn();
		System.err.println(getbaseyarn);
		JsonUtils.tolistjson(getbaseyarn);	
		return Action.NONE;
	}
	public String gettooutdmpyarn(){
		getbaseyarn=tooutdao.gettooutdmpyarn();
		System.err.println(getbaseyarn);
		JsonUtils.tolistjson(getbaseyarn);	
		return Action.NONE;
	}
	public String gettooutthreeooneyarn(){
		getbaseyarn=tooutdao.gettooutthreeooneyarn();
		System.err.println(getbaseyarn);
		JsonUtils.tolistjson(getbaseyarn);	
		return Action.NONE;
	}
	public String gettooutthreetfouryarn(){
		getbaseyarn=tooutdao.gettooutthreetfouryarn();
		System.err.println(getbaseyarn);
		JsonUtils.tojson(getbaseyarn);	
		return Action.NONE;
	}
	public String zxline(){		
		getline=tooutdao.zxline();
		JsonUtils.tolistforonelinejson(getline);
		System.err.println(getline);		
		return Action.NONE;
	}
	public String woline(){		
		getline=tooutdao.woline();
		JsonUtils.tolistforonelinejson(getline);
		System.err.println(getline);		
		return Action.NONE;
	}
	public String jingzhun_wo(){		
		line_xia=tooutdao.jingzhun_wo();
		JsonUtils.tojson(line_xia);
		System.err.println(line_xia);		
		return Action.NONE;
	}
	public String zhengxin_xia(){		
		line_xia=tooutdao.zhengxin_xia();
		JsonUtils.tojson(line_xia);
		System.err.println(line_xia);		
		return Action.NONE;
	}
	public String appwo(){
		return "appwo";
	}
	public String apppowerfor(){
		return "apppowerfor";
	}
	public String appks(){
		return "appks";
	}
	public String appdmp(){
		return "appdmp";
	}
	public String zxinner(){
		getzxinner=tooutdao.zhengxininner();
		return "zxinner";
	}
	public String jzyxinner(){
		getjzyxinner=tooutdao.jzyxinner();
		return "jzyxinner";
	}
}
