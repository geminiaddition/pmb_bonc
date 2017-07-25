package com.bonc.action.support;

import org.springframework.stereotype.Component;

import com.opensymphony.xwork2.ActionSupport;

@Component
public class SupportAction extends ActionSupport{
	
	public String support(){
		return "index";
	}

}
