package com.bonc.filter;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.bonc.model.login.UserBean;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class SessionIterceptor extends AbstractInterceptor {

	@Override
	public String intercept(ActionInvocation actionInvocation) throws Exception {
		//取得请求的URL    
        String url = ServletActionContext.getRequest().getRequestURL().toString();    
        HttpServletResponse response=ServletActionContext.getResponse();    
        response.setHeader("Pragma","No-cache");              
        response.setHeader("Cache-Control","no-cache");       
        response.setHeader("Cache-Control", "no-store");       
        response.setDateHeader("Expires",0);    
        UserBean loginUser = null;    
        //对登录与注销请求直接放行,不予拦截    
        if (url.indexOf("login")!=-1 || url.indexOf("loginout")!=-1){    
            return actionInvocation.invoke();    
        }    
        else{    
            //验证Session是否过期    
            if(!ServletActionContext.getRequest().isRequestedSessionIdValid()){    
                //session过期,转向session过期提示页,最终跳转至登录页面    
                System.out.println("session过期");  
                return "toLogin";    
            }    
            else{    
                loginUser = (UserBean)ServletActionContext.getRequest().getSession().getAttribute("login_id");    
                //验证是否已经登录    
                if (loginUser==null){    
                    //尚未登录,跳转至登录页面    
                    return "toLogin";    
                }else{                        
                    return actionInvocation.invoke();    
                }                    
            }                
        }     
		
	}

}
