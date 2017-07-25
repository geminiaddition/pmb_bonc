package com.bonc.action.bigproduct;

import org.springframework.stereotype.Component;

import com.opensymphony.xwork2.ActionSupport;

@Component

public class BigproductAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3257919879704413442L;

	
	public String bigproduct(){
		
		return "index";
	}
}
