package com.bonc.action.appser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.appser.AppserDao;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class AppserAction extends ActionSupport {
	@Autowired
	public AppserDao appdao;
	public List sjfx;
	public List ldsy;
	public List llcx;

	public String init() {
		from();
		return "init";
	}
	public String from() {
		sjfx = appdao.sjfx();
		ldsy = appdao.ldsy();
		llcx = appdao.llcx();
		return "from";
	}
	public AppserDao getAppdao() {
		return appdao;
	}

	public void setAppdao(AppserDao appdao) {
		this.appdao = appdao;
	}

	public List getSjfx() {
		return sjfx;
	}

	public void setSjfx(List sjfx) {
		this.sjfx = sjfx;
	}

	public List getLdsy() {
		return ldsy;
	}

	public void setLdsy(List ldsy) {
		this.ldsy = ldsy;
	}

	public List getLlcx() {
		return llcx;
	}

	public void setLlcx(List llcx) {
		this.llcx = llcx;
	}

}
