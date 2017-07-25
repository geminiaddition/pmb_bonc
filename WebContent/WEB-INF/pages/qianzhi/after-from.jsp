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
   <div  id="getvalue"  class="row"  style="margin: auto; ">
   
				<div class=row>
				<div  class="col-sm-1"></div>
				<div class="col-sm-10" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									<span>采集接口</span>
								</div>
							
								
								<thead>
									<tr>
										<th>IP</th>
										<th style="text-align: center;">应用名称</th>
										<th style="text-align: center;">CPU使用率</th>
										<th style="text-align: center;">内存占用率</th>
										<th style="text-align: center;">根目录使用率</th>
										<th style="text-align: center;">连接状态</th>
									</tr>
								</thead>
								<s:iterator id="getinter" value="getinter">
								<tbody>
									<tr>
										<td>
												<s:property value="host" /> 
										</td>
									<td align="center">
												<s:property value="projects" /> 
										</td>
										<td align="center">
										<s:if
													test="#getinter.cpu_used>=80">
												<span style="background: #FF0000; color: #FFF"><s:property value="cpu_used" />%</span>
												</s:if>
												<s:elseif test="#getinter.cpu_used>=75&&#getinter.cpu_used<80">
												
												<span style="color: #CC0033"><s:property value="cpu_used" />%</span>
												</s:elseif>
												<s:else><span style="color:green"><s:property value="cpu_used" />%</span></s:else>
										</td>
										<td align="center">
												<s:if
													test="#getinter.mem_used>=80">
												<span style="background: #FF0000; color: #FFF"><s:property value="mem_used" />%</span>
												</s:if>
												<s:elseif test="#getinter.mem_used>=75&&#getinter.mem_used<80">
												
												<span style="color: #CC0033"><s:property value="mem_used" />%</span>
												</s:elseif>
												<s:else><span style="color:green"><s:property value="mem_used" />%</span></s:else>
										
										</td>
										<td align="center">
										<s:if
													test="#getinter.root_used_rate>=80">
												<span style="background: #FF0000; color: #FFF"><s:property value="root_used_rate" />%</span>
												</s:if>
												<s:elseif test="#getinter.root_used_rate>=75&&#getinter.root_used_rate<80">
												
												<span style="color: #CC0033"><s:property value="root_used_rate" />%</span>
												</s:elseif>
												<s:else><span style="color:green"><s:property value="root_used_rate" />%</span></s:else>
												
										</td>
										<td align="center">
											<span style="color:green"><s:property value="ping_stat" /></span>
											
										
										</td>

									</tr>
								</tbody>
							</s:iterator>
						</table>
					</div>
				</div>
				</div>
				<div class="row">
				<div class="col-sm-1" ></div>
					<div class="col-sm-5" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									迟传报备
								</div>
							<s:iterator id="getlate" value="getlate">
								
								
								<tbody>
									<tr>

										<td> 
										<s:property value="index_name"/>
										</td>
										<td>
										<s:property value="index_value"/>
										</td>
										<td>
										</td>

									</tr>
								</tbody>
							</s:iterator>
						</table>
					</div>
				</div>
			
				
				 <div class="col-sm-5" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									ETL
								</div>
								
								
								<tbody>
							<s:iterator id="getetl" value="getetl">
									<tr>

										<td> 
										<s:property value="index_name"/>
										</td>
										<td align="center">
										<s:if
												test="#getetl.index_value=='正常'||#getetl.index_value=='已完成'">
												<span style="color: green"><s:property value="index_value" /></span>
											</s:if>
											 <s:else>
												<span style="background: #FF0000; color: #FFF"><s:property value="index_value" /></span>
											</s:else> 
										
										
										</td>
										<td>
										</td>

									</tr>
									
							</s:iterator>
							
								</tbody>
						</table>
					</div>
				</div>
<div class="col-sm-1" ></div>
</div><div class="row">
				<div class="col-sm-1" ></div>
				<div class="col-sm-5" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									编码管理
								</div>
							<s:iterator id="getcode" value="getcode">
								
								
								<tbody>
									<tr>

										<td> 
										<s:property value="index_name"/>
										</td>
										<td>
										<s:if
												test="#getetl.index_value=='正常'||#getetl.index_value=='已完成'">
												<span style="color: green"><s:property value="index_value" /></span>
											</s:if>
											 <s:else>
												<span style="background: #FF0000; color: #FFF"><s:property value="index_value" /></span>
											</s:else> 
										</td>
										<td>
										</td>

									</tr>
								</tbody>
							</s:iterator>
							<tr><td>&nbsp;</td><td>&nbsp;</td></tr>
						</table>
					</div>
				</div>

			
					<div class="col-sm-5" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
						<div class="panel-heading" style="font-weight: bold;">
									短信预警
								</div>
							<s:iterator id="getmsg" value="getmsg">
								
								
								<tbody>
									<tr>

										<td> 
										<s:property value="index_name"/>
										</td>
										<td>
										<s:property value="index_value"/>
										</td>
										<td>
										</td>

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