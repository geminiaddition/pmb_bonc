package com.bonc.model.datacenter;

public class KafkaBean {
	public String total_nodes;
	public String storage_total;
	public String mem_rate;
	public String mem_warn;
	public String mem_crit;
	public String cpu_rate;
	public String cpu_warn;
	public String cpu_crit;
	public String active_nodes;
	
	public String storage_total_rate;
	public String storage_total_warn;
	public String storage_total_crit;
	public String ss_network;
	public String getActive_nodes() {
		return active_nodes;
	}
	public void setActive_nodes(String active_nodes) {
		this.active_nodes = active_nodes;
	}
	public String getTotal_nodes() {
		return total_nodes;
	}
	public void setTotal_nodes(String total_nodes) {
		this.total_nodes = total_nodes;
	}
	public String getStorage_total() {
		return storage_total;
	}
	public void setStorage_total(String storage_total) {
		this.storage_total = storage_total;
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
	public String getSs_network() {
		return ss_network;
	}
	public void setSs_network(String ss_network) {
		this.ss_network = ss_network;
	}
	public String getStorage_total_rate() {
		return storage_total_rate;
	}
	public void setStorage_total_rate(String storage_total_rate) {
		this.storage_total_rate = storage_total_rate;
	}
	public String getStorage_total_warn() {
		return storage_total_warn;
	}
	public void setStorage_total_warn(String storage_total_warn) {
		this.storage_total_warn = storage_total_warn;
	}
	public String getStorage_total_crit() {
		return storage_total_crit;
	}
	public void setStorage_total_crit(String storage_total_crit) {
		this.storage_total_crit = storage_total_crit;
	}
	
	
	 

}
