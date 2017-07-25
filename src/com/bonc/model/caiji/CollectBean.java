package com.bonc.model.caiji;

public class CollectBean {

	public String interface_type;
	public String file_date;
	public Integer all_num;
	public Integer imp_num;
	public Integer latenum;
	public Integer ver_no;
	public String getInterface_type() {
		return interface_type;
	}
	public void setInterface_type(String interface_type) {
		this.interface_type = interface_type;
	}
	public String getFile_date() {
		return file_date;
	}
	public void setFile_date(String file_date) {
		this.file_date = file_date;
	}
	public Integer getAll_num() {
		return all_num;
	}
	public void setAll_num(Integer all_num) {
		this.all_num = all_num;
	}
	public Integer getImp_num() {
		return imp_num;
	}
	public void setImp_num(Integer imp_num) {
		this.imp_num = imp_num;
	}
	public Integer getLatenum() {
		return latenum;
	}
	public void setLatenum(Integer latenum) {
		this.latenum = latenum;
	}
	public Integer getVer_no() {
		return ver_no;
	}
	public void setVer_no(Integer ver_no) {
		this.ver_no = ver_no;
	}
	@Override
	public String toString() {
		return "CollectBean [interface_type=" + interface_type + ", file_date=" + file_date + ", all_num=" + all_num
				+ ", imp_num=" + imp_num + ", latenum=" + latenum + ", ver_no=" + ver_no + "]";
	}
	

	
	
	
}
