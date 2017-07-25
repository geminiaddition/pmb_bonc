<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

</head>
<body>
  <%    
             if(session.getAttribute("login_id") == null) {      
   %>    
          <script type="text/javascript" language="javascript">        
            alert("您还没有登录，请登录...");   
           top.location.href="<%=basePath%>login/login!login.action";  
           </script>   
   <%    
       }    
   %>  
   <%    
  
   Object a=session.getAttribute("state");
             if("2".equals(a) ) {
            	 
   %>    
          <script type="text/javascript" language="javascript">        
         
  		

 document.getElementById("sc").style.display="none"; 
 document.getElementById("datacenter").style.display="none"; 
 document.getElementById("forin").style.display="none"; 
 document.getElementById("toout").style.display="none"; 
 document.getElementById("home_scjk").style.display="none";
 document.getElementById("home_back111").style.display="none";
 document.getElementById("home_sjzx").style.display="none";
 document.getElementById("home_dnyy").style.display="none";
 document.getElementById("home_back112").style.display="none";
 document.getElementById("home_dwyy").style.display="none";

  	
           </script>   
   <%    
       } 
   %> 
</body>
</html>