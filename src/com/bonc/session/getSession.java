package com.bonc.session;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class getSession {
	
	public static  void sendinfo(String login_id, String password) {
		
		HttpServletRequest request = null;
		HttpServletResponse response;
		HttpSession session = request.getSession();
		session.setAttribute("login_id", login_id);
	}
	public static void  logout(){
		HttpServletRequest request = null;
		HttpSession session = request.getSession();
		session.removeAttribute("login_id");
	}
}
