<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath%>" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<jsp:include page="/WEB-INF/pages/include/sessionif.jsp"></jsp:include>
  <div id="getvalue">
   <div  class="row"  style="margin: auto; ">
			
				<div class="col-sm-4" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									<span>cb加工</span>
								</div>
							
								
								<thead>
									<tr>
										<th style="text-align: center;">省分</th>
										<th style="text-align: center;">加工总数</th>
										<th style="text-align: center;">加工成功</th>
										<th style="text-align: center;">加工失败</th>
										<th style="text-align: center;">加工进行中</th>
									</tr>
								</thead>
								<s:iterator id="getcb" value="getcb">
								<tbody>
									<tr>
										
									<td align="center"><s:property value="prov_desc" /> </td>
									<td align="center"><s:property value="totals" /> </td>
									<td align="center"><s:property value="succnum" /> </td>
									<td align="center"><s:property value="failnum" /> </td>
									<td align="center"><s:property value="procingNum" /> </td>
										

									</tr>
								</tbody>
							</s:iterator>
						</table>
					</div>
				</div>
				<div class="col-sm-4" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									<span>O域加工</span>
								</div>
							
								
								<thead>
									<tr>
										<th style="text-align: center;">省分</th>
										<th style="text-align: center;">加工总数</th>
										<th style="text-align: center;">加工成功</th>
										<th style="text-align: center;">加工失败</th>
										<th style="text-align: center;">加工进行中</th>
									</tr>
								</thead>
								<s:iterator id="getoy" value="getoy">
								<tbody>
									<tr>
										
									<td align="center"><s:property value="prov_desc" /> </td>
									<td align="center"><s:property value="totals" /> </td>
									<td align="center"><s:property value="succnum" /> </td>
									<td align="center"><s:property value="failnum" /> </td>
									<td align="center"><s:property value="procingNum" /> </td>
										

									</tr>
								</tbody>
							</s:iterator>
						</table>
					</div>
				</div>
				<div class="col-sm-4" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									<span>横向加工</span>
								</div>
							
								
								<thead>
									<tr>
										<th style="text-align: center;">省分</th>
										<th style="text-align: center;">加工总数</th>
										<th style="text-align: center;">加工成功</th>
										<th style="text-align: center;">加工失败</th>
										<th style="text-align: center;">加工进行中</th>
									</tr>
								</thead>
								<s:iterator id="gethx" value="gethx">
								<tbody>
									<tr>
										
									<td align="center"><s:property value="prov_desc" /> </td>
									<td align="center"><s:property value="totals" /> </td>
									<td align="center"><s:property value="succnum" /> </td>
									<td align="center"><s:property value="failnum" /> </td>
									<td align="center"><s:property value="procingNum" /> </td>
										

									</tr>
								</tbody>
							</s:iterator>
						</table>
					</div>
				</div>
				
				 
				
				
				
			</div>
		
		 <div   class="row"  style="margin: auto; ">
		 <div class="col-sm-4" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									<span>新口径加工</span>
								</div>
							
								
								<thead>
									<tr>
										<th style="text-align: center;">省分</th>
										<th style="text-align: center;">加工总数</th>
										<th style="text-align: center;">加工成功</th>
										<th style="text-align: center;">加工失败</th>
										<th style="text-align: center;">加工进行中</th>
									</tr>
								</thead>
								<s:iterator id="getxkj" value="getxkj">
								<tbody>
									<tr>
										
									<td align="center"><s:property value="prov_desc" /> </td>
									<td align="center"><s:property value="totals" /> </td>
									<td align="center"><s:property value="succnum" /> </td>
									<td align="center"><s:property value="failnum" /> </td>
									<td align="center"><s:property value="procingNum" /> </td>
										

									</tr>
								</tbody>
							</s:iterator>
						</table>
					</div>
				</div>
		 <div class="col-sm-4" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									<span>纵向加工</span>
								</div>
							
								
								<thead>
									<tr>
										<th style="text-align: center;">省分</th>
										<th style="text-align: center;">加工总数</th>
										<th style="text-align: center;">加工成功</th>
										<th style="text-align: center;">加工失败</th>
										<th style="text-align: center;">加工进行中</th>
									</tr>
								</thead>
								<s:iterator id="getzx" value="getzx">
								<tbody>
									<tr>
										
									<td align="center"><s:property value="prov_desc" /> </td>
									<td align="center"><s:property value="totals" /> </td>
									<td align="center"><s:property value="succnum" /> </td>
									<td align="center"><s:property value="failnum" /> </td>
									<td align="center"><s:property value="procingNum" /> </td>
										

									</tr>
								</tbody>
							</s:iterator>
						</table>
					</div>
				</div>
		 <div class="col-sm-4" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									<span>综采加工</span>
								</div>
							
								
								<thead>
									<tr>
										<th style="text-align: center;">省分</th>
										<th style="text-align: center;">加工总数</th>
										<th style="text-align: center;">加工成功</th>
										<th style="text-align: center;">加工失败</th>
										<th style="text-align: center;">加工进行中</th>
									</tr>
								</thead>
								<s:iterator id="getzc" value="getzc">
								<tbody>
									<tr>
										
									<td align="center"><s:property value="prov_desc" /> </td>
									<td align="center"><s:property value="totals" /> </td>
									<td align="center"><s:property value="succnum" /> </td>
									<td align="center"><s:property value="failnum" /> </td>
									<td align="center"><s:property value="procingNum" /> </td>
										

									</tr>
								</tbody>
							</s:iterator>
						</table>
					</div>
				</div>
		 </div>
		</div> 
		 
		 
		
<!--加载进度条显示js  -->
			<script src="js/plugins/pace/pace.min.js"></script>
</body>
</html>