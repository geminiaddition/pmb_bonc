package com.bonc.action.jiagong;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.jiagong.WorkDao;
import com.bonc.model.jiagong.WorkBean;
import com.opensymphony.xwork2.ActionSupport;
@Component
public class WorkAction extends ActionSupport{
	
	@Autowired
	public WorkDao wdao;
	public List<WorkBean> getcb;
	public List<WorkBean> gethx;
	public List<WorkBean> getxkj;
	public List<WorkBean> getzc;
	public List<WorkBean> getzx;
	public List<WorkBean> getoy;
	public String work(){
		from();
		return "index";
	}
	public String from(){
		getcb=wdao.getcbwork();
		gethx=wdao.gethxwork();
		getxkj=wdao.getxkjwork();
		getzc=wdao.getzcwork();
		getzx=wdao.getzxwork();
		getoy=wdao.getoywork();
		return "from";
	}
	public List<WorkBean> getGetcb() {
		return getcb;
	}
	public void setGetcb(List<WorkBean> getcb) {
		this.getcb = getcb;
	}
	public List<WorkBean> getGethx() {
		return gethx;
	}
	public void setGethx(List<WorkBean> gethx) {
		this.gethx = gethx;
	}
	public List<WorkBean> getGetxkj() {
		return getxkj;
	}
	public void setGetxkj(List<WorkBean> getxkj) {
		this.getxkj = getxkj;
	}
	public List<WorkBean> getGetzc() {
		return getzc;
	}
	public void setGetzc(List<WorkBean> getzc) {
		this.getzc = getzc;
	}
	public List<WorkBean> getGetzx() {
		return getzx;
	}
	public void setGetzx(List<WorkBean> getzx) {
		this.getzx = getzx;
	}
	public List<WorkBean> getGetoy() {
		return getoy;
	}
	public void setGetoy(List<WorkBean> getoy) {
		this.getoy = getoy;
	}
	
	

}
