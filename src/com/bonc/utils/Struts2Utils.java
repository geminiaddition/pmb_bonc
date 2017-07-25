package com.bonc.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

public class Struts2Utils {
	public static final HttpServletRequest getRequest()
	  {
	    return ServletActionContext.getRequest();
	  }

	  public static final HttpServletResponse getResponse()
	  {
	    return ServletActionContext.getResponse();
	  }
}
