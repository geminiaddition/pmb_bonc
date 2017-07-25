package com.bonc.action.second;

import org.springframework.stereotype.Component;

import com.opensymphony.xwork2.ActionSupport;

@Component
public class TooutAction extends ActionSupport{
	
public String tout(){
		
		return "success";
	}

}
