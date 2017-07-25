package com.bonc.utils;

import java.beans.IntrospectionException;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

public class GetBean {
	public static List method(Object obj) {
		 List list =new ArrayList<>(); 
		 try {  
		        Class clazz = obj.getClass();  
		        Field[] fields = obj.getClass().getDeclaredFields();//获得属性  
		        for (Field field : fields) {  
		            PropertyDescriptor pd = new PropertyDescriptor(field.getName(),  
		                    clazz);  
		            Method getMethod = pd.getReadMethod();//获得get方法  
		           
		            Object o = getMethod.invoke(obj);//执行get方法返回一个Object  
		           //System.err.println(o);  
		            list.add(o);
		        }  
		    } catch (SecurityException e) {  
		        e.printStackTrace();  
		    } catch (IllegalArgumentException e) {  
		        e.printStackTrace();  
		    } catch (IntrospectionException e) {  
		        e.printStackTrace();  
		    } catch (IllegalAccessException e) {  
		        e.printStackTrace();  
		    } catch (InvocationTargetException e) {  
		        e.printStackTrace();  
		    }
		return list;  
	}

}
