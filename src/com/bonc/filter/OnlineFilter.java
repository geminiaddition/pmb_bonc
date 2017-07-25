package com.bonc.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

public class OnlineFilter extends HttpServlet implements Filter{
	 private static final long serialVersionUID = 1L;  
	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		  String url = ServletActionContext.getRequest().getRequestURL().toString();    
		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/pages/login/login-login.jsp");//这里设置如果没有登陆将要转发到的页面  
		  HttpServletRequest req = (HttpServletRequest) request;  
		  HttpServletResponse res = (HttpServletResponse) response;  
		  HttpSession session = req.getSession(true);  
		  
		//  System.out.println(((HttpServletRequest) request).getRequestURI());  
		  if (url.indexOf("login")!=-1 || url.indexOf("loginout")!=-1){    
			  dispatcher.forward(request,response);  
	        }    else{
		  // 从session里取的用户名信息  
		  String username = (String) session.getAttribute("login_id");//这里获取session，为了检查session里有没有保存用户信息，没有的话回转发到登陆页面  
		  
		  // 判断如果没有取到用户信息,就跳转到登陆页面  
		  if (username == null || "".equals(username))  
		  {  
		   // 跳转到登陆页面  
		   dispatcher.forward(request,response);  
		//   System.out.println("用户没有登陆，不允许操作");  
		     
		   res.setHeader("Cache-Control","no-store");     
		   res.setDateHeader("Expires",0);  
		   res.setHeader("Pragma","no-cache");  
		  }  
		  else  
		  {  
		   // 已经登陆,继续此次请求  
		   chain.doFilter(request,response);  
		//   System.out.println("用户已经登陆，允许操作");  
		  }  
	        }
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}

}
