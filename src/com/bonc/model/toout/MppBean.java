package com.bonc.model.toout;

public class MppBean {
	public int total_nodes;
	public String mem_rate;
	public String mem_warn;
	public String mem_crit;
	public String cpu_rate;
	public String cpu_warn;
	public String cpu_crit;
	public int active_nodes;
	public int getTotal_nodes() {
		return total_nodes;
	}
	public void setTotal_nodes(int total_nodes) {
		this.total_nodes = total_nodes;
	}
	public String getMem_rate() {
		return mem_rate;
	}
	public void setMem_rate(String mem_rate) {
		this.mem_rate = mem_rate;
	}
	public String getMem_warn() {
		return mem_warn;
	}
	public void setMem_warn(String mem_warn) {
		this.mem_warn = mem_warn;
	}
	public String getMem_crit() {
		return mem_crit;
	}
	public void setMem_crit(String mem_crit) {
		this.mem_crit = mem_crit;
	}
	public String getCpu_rate() {
		return cpu_rate;
	}
	public void setCpu_rate(String cpu_rate) {
		this.cpu_rate = cpu_rate;
	}
	public String getCpu_warn() {
		return cpu_warn;
	}
	public void setCpu_warn(String cpu_warn) {
		this.cpu_warn = cpu_warn;
	}
	public String getCpu_crit() {
		return cpu_crit;
	}
	public void setCpu_crit(String cpu_crit) {
		this.cpu_crit = cpu_crit;
	}
	public int getActive_nodes() {
		return active_nodes;
	}
	public void setActive_nodes(int active_nodes) {
		this.active_nodes = active_nodes;
	}
	

}
