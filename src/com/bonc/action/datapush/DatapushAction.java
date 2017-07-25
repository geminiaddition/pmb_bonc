package com.bonc.action.datapush;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.datapush.DatapushDao;
import com.bonc.model.datapush.DatapushBean;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class DatapushAction extends ActionSupport{
	@Autowired
	public DatapushDao pushdao;
	
	public List<DatapushBean> datapush;
	public String init(){
		
		from();
		return "init";
	}
	public String from(){
		datapush=pushdao.datapush();
		return "from";
	}
	public List<DatapushBean> getDatapush() {
		return datapush;
	}
	public void setDatapush(List<DatapushBean> datapush) {
		this.datapush = datapush;
	}


}
