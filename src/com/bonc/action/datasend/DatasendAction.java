package com.bonc.action.datasend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.datasend.DatasendDao;
import com.opensymphony.xwork2.ActionSupport;
import com.sun.org.apache.regexp.internal.recompile;

@Component
public class DatasendAction extends ActionSupport{
	@Autowired
	public DatasendDao senddao;
	private List caixin;
	private List ribao;
	private List youjian;
	private List yemian;
	
	public String init(){
		
		from();
		return "init";
	}
	public String from() {
		caixin=senddao.caixin();
		ribao=senddao.ribao();
		youjian=senddao.youjian();
		yemian=senddao.yemian();
		return "from";
	}

	public DatasendDao getSenddao() {
		return senddao;
	}

	public void setSenddao(DatasendDao senddao) {
		this.senddao = senddao;
	}

	public List getCaixin() {
		return caixin;
	}

	public void setCaixin(List caixin) {
		this.caixin = caixin;
	}

	public List getRibao() {
		return ribao;
	}

	public void setRibao(List ribao) {
		this.ribao = ribao;
	}

	public List getYoujian() {
		return youjian;
	}

	public void setYoujian(List youjian) {
		this.youjian = youjian;
	}

	public List getYemian() {
		return yemian;
	}

	public void setYemian(List yemian) {
		this.yemian = yemian;
	}

}
