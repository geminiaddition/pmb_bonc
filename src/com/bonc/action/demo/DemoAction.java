package com.bonc.action.demo;


import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;






import com.bonc.dao.demo.DemoDao;
import com.opensymphony.xwork2.ActionSupport;
/**
 * @Component
 * 此注解用于将action交给spring管理，并在spring中注册实体bean，id为demoAction
 * 
 * ***/
@Component
public class DemoAction extends ActionSupport{
	/**
	 * @Autowired
	 * 在调用dao层时，使用此注解，将在spring的bean配置中将action与dao进行引用关联
	 * 
	 * ***/
	@Autowired
private DemoDao dimpl ;
public String a;
public List list;
	
	public String execute() throws Exception {
		//dimpl.ThisYear();
		//dimpl.getuserinfo();
		//通过私有化调用service中的demoimpl类，调用到类中的方法。并获得方法中的参数
	 a="2017";
	 list=dimpl.getuserinfo();
		System.out.println(dimpl.getuserinfo());
		return "demoo";
	}

	public String getA() {
		return a;
	}

	public void setA(String a) {
		this.a = a;
	}

	public List getList() {
		return list;
	}

	public void setList(List list) {
		this.list = list;
	}
	
	
	

}
