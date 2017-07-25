<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <% 
String path = request.getContextPath(); 
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/"; 
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath%>" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>数据统一服务平台</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
   <style type="text/css">
   body{ text-align:center} 
#logo{margin:0 auto;border:1px solid #000;width:300px;height:100px} 
   </style>
</head>
<body>
  <div class="middle-box text-center loginscreen animated fadeInDown">
        <div >

            <div >
               <h2 class="logo-name" >BONC</h2>

            </div>
            <h3>Technology By BONC</h3>
            <p>欢迎使用东方国信统一数据服务平台
                
            </p>
            <p>登录以进入</p>
            <div style="color: white;" >${LoginMsg }</div>
            <form class="m-t" role="form" action="login/login!login.action" method="post">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="LoginId" name="login_id">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" name="password">
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">登录</button>

              
               
                
            </form>
            <p class="m-t"> <small>Copyright &copy; 2017.|<a href="http://www.bonc.com.cn/"
			target="_blank" title="bonc">BONC</a>|- Collect from YZYW</small> </p>
        </div>
    </div>

    <!-- Mainly scripts -->
    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>