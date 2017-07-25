package com.bonc.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;

import com.bonc.dao.demo.DemoDao;
import com.bonc.model.demo.DemoBean;




public class LoginFilter implements Filter {
	@Override
	 public void init(FilterConfig filterConfig) throws ServletException {
	  // TODO Auto-generated method stub
	 }
	@Override
	public void doFilter(ServletRequest servletRequest,
			ServletResponse servletResponse, FilterChain filterChain)
			throws IOException, ServletException {
		// 判断是否是http请求
		if (!(servletRequest instanceof HttpServletRequest)
				|| !(servletResponse instanceof HttpServletResponse)) {
			throw new ServletException(
					"OncePerRequestFilter just supports HTTP requests");
		}
		// 获得在下面代码中要用的request,response,session对象
		HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;
		HttpServletResponse httpResponse = (HttpServletResponse) servletResponse;
		HttpSession session = httpRequest.getSession(true);

		String[] strs = { "loginpage", "login", "logout", "static" }; // 路径中包含这些字符串的,可以不用登录直接访问
		StringBuffer url = httpRequest.getRequestURL();
		String tojs =url.toString();
		
		/**
		 * 过滤掉根目录
		 */
		String path = httpRequest.getContextPath();
		String protAndPath = httpRequest.getServerPort() == 80 ? "" : ":"
				+ httpRequest.getServerPort();
		String basePath = httpRequest.getScheme() + "://"
				+ httpRequest.getServerName() + protAndPath + path + "/";
		if (basePath.equalsIgnoreCase(url.toString())) {
			filterChain.doFilter(servletRequest, servletResponse);
			return;
		}
		// 特殊用途的路径可以直接访问
		if (strs != null && strs.length > 0) {
			for (String str : strs) {
				if (url.indexOf(str) >= 0) {
					filterChain.doFilter(servletRequest, servletResponse);
					return;
				}
			}
		}
	  String login_id = (String) session.getAttribute("login_id");
	  String password = (String) session.getAttribute("password");
	  
	 
	  // 判断如果没有取到信息,就跳转到登陆页面
	  if (null == login_id || "" == login_id || null == password || "" == password) {
	   // 跳转到登陆页面
		  filterChain.doFilter(servletRequest, servletResponse);
	  } else if(tojs.contains(".css") || tojs.contains(".js")){
		  filterChain.doFilter(servletRequest, servletResponse);
	  } 
	  else {

		// 用户不存在,踢回登录页面
		  httpRequest.getRequestDispatcher("/login-login.jsp").forward(httpRequest, httpResponse);
					return;
	  }
	 }
	 @Override
	 public void destroy() {
	  // TODO Auto-generated method stub
	 }
	}

