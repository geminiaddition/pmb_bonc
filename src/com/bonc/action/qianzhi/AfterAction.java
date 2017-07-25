package com.bonc.action.qianzhi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.qianzhi.AfterDao;
import com.bonc.model.caiji.CollectBean;
import com.bonc.model.qianzhi.AfterBean;
import com.opensymphony.xwork2.ActionSupport;
@Component
public class AfterAction extends ActionSupport{

	@Autowired
	public AfterDao adao;
	public List<AfterBean> getinter;
	public List<AfterBean> getetl;
	public List<AfterBean> getmsg;
	public List<AfterBean> getcode;
	public List<AfterBean> getlate;
	
	public String after(){
		from();
		return "index";
	}
	public String from(){
		getinter = adao.getinter();
		getetl = adao.getetl();
		getmsg = adao.getmsg();
		getcode = adao.getcode();
		getlate = adao.getlate();
		return "from";
	}
}
