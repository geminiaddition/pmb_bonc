package com.bonc.model.datapush;

public class DatapushBean {
	public String prov_desc;
	public int serv_shl_num1;
    
	public int serv_num1 ;
	public int serv_shl_num2;
	public int serv_num2 ;
	public int shl_num ;
	public int put_num ;
	public String getProv_desc() {
		return prov_desc;
	}
	public void setProv_desc(String prov_desc) {
		this.prov_desc = prov_desc;
	}
	public int getServ_shl_num1() {
		return serv_shl_num1;
	}
	public void setServ_shl_num1(int serv_shl_num1) {
		this.serv_shl_num1 = serv_shl_num1;
	}
	public int getServ_num1() {
		return serv_num1;
	}
	public void setServ_num1(int serv_num1) {
		this.serv_num1 = serv_num1;
	}
	public int getServ_shl_num2() {
		return serv_shl_num2;
	}
	public void setServ_shl_num2(int serv_shl_num2) {
		this.serv_shl_num2 = serv_shl_num2;
	}
	public int getServ_num2() {
		return serv_num2;
	}
	public void setServ_num2(int serv_num2) {
		this.serv_num2 = serv_num2;
	}
	public int getShl_num() {
		return shl_num;
	}
	public void setShl_num(int shl_num) {
		this.shl_num = shl_num;
	}
	public int getPut_num() {
		return put_num;
	}
	public void setPut_num(int put_num) {
		this.put_num = put_num;
	}
	@Override
	public String toString() {
		return "DatapushBean [prov_desc=" + prov_desc + ", serv_shl_num1=" + serv_shl_num1 + ", serv_num1=" + serv_num1
				+ ", serv_shl_num2=" + serv_shl_num2 + ", serv_num2=" + serv_num2 + ", shl_num=" + shl_num
				+ ", put_num=" + put_num + "]";
	}
	
	
	

}
