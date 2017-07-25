package com.bonc.action.oracle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.oracle.OracleDao;
import com.bonc.model.oracle.OracleBean;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class OracleAction extends ActionSupport{
	@Autowired
	public OracleDao odao;
	public List<OracleBean> dw1;
	public List<OracleBean> dw2;
	public List<OracleBean> dw3;
	public List<OracleBean> dw4;
	public List<OracleBean> dwe1;
	public List<OracleBean> dwe2;
	public List<OracleBean> db1;
	public List<OracleBean> db2;
	public List<OracleBean> twoc1;
	public List<OracleBean> twoc2;
	public String oracle(){
		 /*dw1=odao.getdw1();
		dw2=odao.getdw2();
		dw3=odao.getdw3();
		dw4=odao.getdw4();
		dwe1=odao.getdwe1();
		dwe2=odao.getdwe2();
		db1=odao.getdb1();
		db2=odao.getdb2();
		twoc1=odao.get12c1();
		twoc2=odao.get12c2();*/
		
		from();
		return "database";
	}
	public String  from(){
		 dw1=odao.getdw1();
			dw2=odao.getdw2();
			dw3=odao.getdw3();
			dw4=odao.getdw4();
			dwe1=odao.getdwe1();
			dwe2=odao.getdwe2();
			db1=odao.getdb1();
			db2=odao.getdb2();
			twoc1=odao.get12c1();
			twoc2=odao.get12c2();
			
		return "from";
	}
	public OracleDao getOdao() {
		return odao;
	}
	public void setOdao(OracleDao odao) {
		this.odao = odao;
	}
	public List<OracleBean> getDw1() {
		return dw1;
	}
	public void setDw1(List<OracleBean> dw1) {
		this.dw1 = dw1;
	}
	public List<OracleBean> getDw2() {
		return dw2;
	}
	public void setDw2(List<OracleBean> dw2) {
		this.dw2 = dw2;
	}
	public List<OracleBean> getDw3() {
		return dw3;
	}
	public void setDw3(List<OracleBean> dw3) {
		this.dw3 = dw3;
	}
	public List<OracleBean> getDw4() {
		return dw4;
	}
	public void setDw4(List<OracleBean> dw4) {
		this.dw4 = dw4;
	}
	public List<OracleBean> getDwe1() {
		return dwe1;
	}
	public void setDwe1(List<OracleBean> dwe1) {
		this.dwe1 = dwe1;
	}
	public List<OracleBean> getDwe2() {
		return dwe2;
	}
	public void setDwe2(List<OracleBean> dwe2) {
		this.dwe2 = dwe2;
	}
	public List<OracleBean> getDb1() {
		return db1;
	}
	public void setDb1(List<OracleBean> db1) {
		this.db1 = db1;
	}
	public List<OracleBean> getDb2() {
		return db2;
	}
	public void setDb2(List<OracleBean> db2) {
		this.db2 = db2;
	}
	public List<OracleBean> getTwoc1() {
		return twoc1;
	}
	public void setTwoc1(List<OracleBean> twoc1) {
		this.twoc1 = twoc1;
	}
	public List<OracleBean> getTwoc2() {
		return twoc2;
	}
	public void setTwoc2(List<OracleBean> twoc2) {
		this.twoc2 = twoc2;
	}

}
