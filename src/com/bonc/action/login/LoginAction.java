package com.bonc.action.login;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.login.UserDao;
import com.bonc.session.getSession;
import com.bonc.model.login.UserBean;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class LoginAction extends ActionSupport {
	/**
	 * 
	 */
	private static final long serialVersionUID = -5393563428299193836L;
	@Autowired
	public UserDao udao;
	public UserBean u;
	public String login_id;
	public String password;
	public String state;
	public String LoginMsg;

	
	public String login() {
		System.err.println(login_id + "00000000000000000000000000000"
				+ password);
		Map map = new HashMap();
		map.put("login_id", login_id);
		map.put("password", password);
		if(null==login_id||"".equals(login_id)||null==password||"".equals(password)){
			LoginMsg = "用户名或密码不能为空，请重新输入！";
			return "login";
		}
		List<UserBean> list = udao.userinfo(map);
		System.err.println(list + "----------------------------------");
		if (null == list || list.isEmpty()) {
			LoginMsg = "用户名或秘密错误，请重新输入！";
			System.out.println(LoginMsg);
			return "login";

		} else {
			List<UserBean> listss = udao.userinfo(map);
			state=listss.get(0).getState();
			ServletActionContext.getRequest().getSession().setMaxInactiveInterval(60000);
			ServletActionContext.getRequest().getSession().setAttribute("login_id",login_id);
			System.err.println(state);
			ServletActionContext.getRequest().getSession().setAttribute("state",state);
			/*ActionContext actionContext = ActionContext.getContext();
	        Map session = actionContext.getSession();
	        
	        session.put("login_id",login_id);
			*/
			
			return "index";

		}
	

	}
	public String index(){
		
		
		
		return "index";
	}
	public String loginout() {
		ActionContext actionContext = ActionContext.getContext();
        Map session = actionContext.getSession();
        session.clear();
		return "login";
	}

	public String getLogin_id() {
		return login_id;
	}

	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}

}
