package com.bonc.model.datacenter;

public class ThreehbaseBean {
	public int TOTAL_NODES;
	public String STORAGE_TOTAL;
	public String MEM_RATE;
	public String MEM_WARN;
	public String MEM_CRIT;
	public String CPU_RATE;
	public String CPU_WARN;
	public String CPU_CRIT;
	public int ACTIVE_NODES;
	public String region_num;
	public String requst_num;
	public String STORAGE_rate;
	public String STORAGE_rate_warn;
	public String STORAGE_rate_crit;
	public int getTOTAL_NODES() {
		return TOTAL_NODES;
	}
	public void setTOTAL_NODES(int tOTAL_NODES) {
		TOTAL_NODES = tOTAL_NODES;
	}
	public String getSTORAGE_TOTAL() {
		return STORAGE_TOTAL;
	}
	public void setSTORAGE_TOTAL(String sTORAGE_TOTAL) {
		STORAGE_TOTAL = sTORAGE_TOTAL;
	}
	public String getMEM_RATE() {
		return MEM_RATE;
	}
	public void setMEM_RATE(String mEM_RATE) {
		MEM_RATE = mEM_RATE;
	}
	public String getMEM_WARN() {
		return MEM_WARN;
	}
	public void setMEM_WARN(String mEM_WARN) {
		MEM_WARN = mEM_WARN;
	}
	public String getMEM_CRIT() {
		return MEM_CRIT;
	}
	public void setMEM_CRIT(String mEM_CRIT) {
		MEM_CRIT = mEM_CRIT;
	}
	public String getCPU_RATE() {
		return CPU_RATE;
	}
	public void setCPU_RATE(String cPU_RATE) {
		CPU_RATE = cPU_RATE;
	}
	public String getCPU_WARN() {
		return CPU_WARN;
	}
	public void setCPU_WARN(String cPU_WARN) {
		CPU_WARN = cPU_WARN;
	}
	public String getCPU_CRIT() {
		return CPU_CRIT;
	}
	public void setCPU_CRIT(String cPU_CRIT) {
		CPU_CRIT = cPU_CRIT;
	}
	public int getACTIVE_NODES() {
		return ACTIVE_NODES;
	}
	public void setACTIVE_NODES(int aCTIVE_NODES) {
		ACTIVE_NODES = aCTIVE_NODES;
	}
	public String getRegion_num() {
		return region_num;
	}
	public void setRegion_num(String region_num) {
		this.region_num = region_num;
	}
	public String getRequst_num() {
		return requst_num;
	}
	public void setRequst_num(String requst_num) {
		this.requst_num = requst_num;
	}
	public String getSTORAGE_rate() {
		return STORAGE_rate;
	}
	public void setSTORAGE_rate(String sTORAGE_rate) {
		STORAGE_rate = sTORAGE_rate;
	}
	public String getSTORAGE_rate_warn() {
		return STORAGE_rate_warn;
	}
	public void setSTORAGE_rate_warn(String sTORAGE_rate_warn) {
		STORAGE_rate_warn = sTORAGE_rate_warn;
	}
	public String getSTORAGE_rate_crit() {
		return STORAGE_rate_crit;
	}
	public void setSTORAGE_rate_crit(String sTORAGE_rate_crit) {
		STORAGE_rate_crit = sTORAGE_rate_crit;
	}
	

}
