package com.bonc.utils;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

public class sendasJson {
	 public static final void sendAsJson(HttpServletResponse response, String str)
	  {
	    response.setContentType("application/json;charset=UTF-8");
	    if (null != str)
	      try {
	        response.getWriter().write(str);
	      } catch (IOException e) {
	        e.printStackTrace();
	      }
	  }
}
