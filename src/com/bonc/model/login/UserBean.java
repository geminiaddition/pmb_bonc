package com.bonc.model.login;

public class UserBean {
	public String login_id;
	public String password;
	public String state;
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
	
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	
	@Override
	public String toString() {
		return "login_id=" + login_id + ", password=" + password+", state="+state;
	}
	
}
