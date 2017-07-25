package com.bonc.action.second;

import org.springframework.stereotype.Component;

import com.opensymphony.xwork2.ActionSupport;
@Component
public class MonitorAction extends ActionSupport{
	public String login_id;
	public String password;	

public String monitor(){
	
	return "success";
}
public String getLogin_id() {
	return login_id;
}
public void setLogin_id(String login_id) {
	this.login_id = login_id;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
}
