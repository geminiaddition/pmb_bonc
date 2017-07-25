package com.bonc.action.hadoop;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.hadoop.HadoopDao;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class HadoopAction extends ActionSupport {

	@Autowired
	public HadoopDao hadoopdao;
	private List cbss;
	private List zxjg;
	private List ythjq;
	private List clpt;
	private List dwfw;
	private List nlkfptyz;
	private List ipsyjq;
	private List xlxdjq;
	private List nlkfpt;
	private List jzyx;
	private List gwjq;

	public String init() {
		/*cbss=hadoopdao.cbss();
		zxjg=hadoopdao.zxjg();
		ythjq=hadoopdao.ythjq();
		clpt=hadoopdao.clpt();
		dwfw=hadoopdao.dwfw();
		nlkfptyz=hadoopdao.nlkfptyz();
		ipsyjq=hadoopdao.ipsyjq();
		xlxdjq=hadoopdao.xlxdjq();
		nlkfpt=hadoopdao.nlkfpt();
		jzyx=hadoopdao.jzyx();
		gwjq=hadoopdao.gwjq();*/
		from();
		return "init";
	}
	public String from(){
		
		cbss=hadoopdao.cbss();
		zxjg=hadoopdao.zxjg();
		ythjq=hadoopdao.ythjq();
		clpt=hadoopdao.clpt();
		dwfw=hadoopdao.dwfw();
		nlkfptyz=hadoopdao.nlkfptyz();
		ipsyjq=hadoopdao.ipsyjq();
		xlxdjq=hadoopdao.xlxdjq();
		nlkfpt=hadoopdao.nlkfpt();
		jzyx=hadoopdao.jzyx();
		gwjq=hadoopdao.gwjq();
		
		return "from";
	}

	public HadoopDao getHadoopdao() {
		return hadoopdao;
	}

	public void setHadoopdao(HadoopDao hadoopdao) {
		this.hadoopdao = hadoopdao;
	}

	public List getCbss() {
		return cbss;
	}

	public void setCbss(List cbss) {
		this.cbss = cbss;
	}

	public List getZxjg() {
		return zxjg;
	}

	public void setZxjg(List zxjg) {
		this.zxjg = zxjg;
	}

	public List getYthjq() {
		return ythjq;
	}

	public void setYthjq(List ythjq) {
		this.ythjq = ythjq;
	}

	public List getClpt() {
		return clpt;
	}

	public void setClpt(List clpt) {
		this.clpt = clpt;
	}

	public List getDwfw() {
		return dwfw;
	}

	public void setDwfw(List dwfw) {
		this.dwfw = dwfw;
	}

	public List getNlkfptyz() {
		return nlkfptyz;
	}

	public void setNlkfptyz(List nlkfptyz) {
		this.nlkfptyz = nlkfptyz;
	}

	public List getIpsyjq() {
		return ipsyjq;
	}

	public void setIpsyjq(List ipsyjq) {
		this.ipsyjq = ipsyjq;
	}

	public List getXlxdjq() {
		return xlxdjq;
	}

	public void setXlxdjq(List xlxdjq) {
		this.xlxdjq = xlxdjq;
	}

	public List getNlkfpt() {
		return nlkfpt;
	}

	public void setNlkfpt(List nlkfpt) {
		this.nlkfpt = nlkfpt;
	}

	public List getJzyx() {
		return jzyx;
	}

	public void setJzyx(List jzyx) {
		this.jzyx = jzyx;
	}

	public List getGwjq() {
		return gwjq;
	}

	public void setGwjq(List gwjq) {
		this.gwjq = gwjq;
	}

	

}
