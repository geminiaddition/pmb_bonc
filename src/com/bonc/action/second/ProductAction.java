package com.bonc.action.second;

import org.springframework.stereotype.Component;

import com.opensymphony.xwork2.ActionSupport;
@Component
public class ProductAction extends ActionSupport{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5983959558642551222L;

	public String datacenter(){
		
		return "datacenter";
	}
public String forinapp(){
		
		return "forinapp";
	}
public String tooout(){
	
	return "tooout";
}
public String product(){
	
	return "success";
}
	
}
