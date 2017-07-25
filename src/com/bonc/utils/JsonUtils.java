package com.bonc.utils;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import com.alibaba.fastjson.JSON;

public class JsonUtils {
	public static void writeJson(Object object, HttpServletResponse response) {
		writeJsonByFilter(object, response);
	}

	public static void writeJsonByFilter(Object object, HttpServletResponse response) {
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");
		try {
			response.getWriter().write(JSON.toJSONString(object));
		} catch (IOException e) {
			e.printStackTrace();
		} finally {

		}
	}

	public static void tojson(List obj) {
		String[] nameArray = new String[GetBean.method(obj.get(0)).size()];
		for (int j = 0; j < GetBean.method(obj.get(0)).size(); j++) {
			String toString = GetBean.method(obj.get(0)).get(j).toString();
			nameArray[j] = toString;
		}
		String arr = Arrays.toString(nameArray);
		System.err.println(arr);
		Map<String, Object> json = new HashMap<String, Object>();
		json.put("nameArray", nameArray);
		writeJson(json, StrutsUtils.getResponse());

	}

	public static void tolistjson(List obj) {
		String[] nameArrayall = new String[obj.size()];
		for (int i = 0; i < obj.size(); i++) {
			String[] nameArray = new String[GetBean.method(obj.get(i)).size()];
			for (int j = 0; j < GetBean.method(obj.get(i)).size(); j++) {
				String toString = GetBean.method(obj.get(i)).get(j).toString();
				nameArray[j] = toString;
			}			
			String toarrayall = Arrays.toString(nameArray);
			nameArrayall[i] = toarrayall;
		}
		String arr = Arrays.toString(nameArrayall);
		System.err.println(arr);
		Map<String, Object> json = new HashMap<String, Object>();
		json.put("nameArray", nameArrayall);
	
		writeJson(json, StrutsUtils.getResponse());

	}
	public static void tolistforonelinejson(List obj) {
		String [] getline=new String [2];
		
		String[] nameArrayfirst = new String[obj.size()];
		String[] nameArraysecond = new String[obj.size()];
		for (int i = 0; i < obj.size(); i++) {
		String first_name=(String) GetBean.method(obj.get(i)).get(0);
		String second_name=(String) GetBean.method(obj.get(i)).get(1);	
		nameArrayfirst[i]=first_name;
		nameArraysecond[i]=second_name;	
		}
		
		String arrfirst = Arrays.toString(nameArrayfirst);
		String arrseond = Arrays.toString(nameArraysecond);
		getline[0]=arrfirst;
		getline[1]=arrseond;
		String arrall = Arrays.toString(getline);
		
		System.err.println(arrall);
		Map<String, Object> json = new HashMap<String, Object>();
		json.put("nameArray", getline);
	
		writeJson(json, StrutsUtils.getResponse());

	}
	public static void tolistforTWOlinejson(List obj) {
		String [] getline=new String [3];
		
		String[] nameArrayfirst = new String[obj.size()];
		String[] nameArraysecond = new String[obj.size()];
		String[] nameArraythird = new String[obj.size()];
		for (int i = 0; i < obj.size(); i++) {
		String first_name=(String) GetBean.method(obj.get(i)).get(0);
		String second_name=(String) GetBean.method(obj.get(i)).get(1);
		String third_name=(String) GetBean.method(obj.get(i)).get(2);	
		nameArrayfirst[i]=first_name;
		nameArraysecond[i]=second_name;	
		nameArraythird[i]=third_name;
		}
		
		String arrfirst = Arrays.toString(nameArrayfirst);
		String arrseond = Arrays.toString(nameArraysecond);
		String arrthird = Arrays.toString(nameArraythird);
		getline[0]=arrfirst;
		getline[1]=arrseond;
		getline[2]=arrthird;
		String arrall = Arrays.toString(getline);
		
		System.err.println(arrall);
		Map<String, Object> json = new HashMap<String, Object>();
		json.put("nameArray", getline);
	
		writeJson(json, StrutsUtils.getResponse());

	}

}
