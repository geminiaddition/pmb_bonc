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
   <div  id="getvalue"   style="margin: auto; ">
   <div class="row ">
					<div class="col-sm-1" onclick="window.open('','_self')"></div>

					<div class="col-sm-5" onclick="window.open('','_self')">
						<div class="panel panel-primary">
							<table class="table table-striped">

								<div class="panel-heading" style="font-weight: bold;">
									CBSS彩信发送</div>
								<thead>
									<tr>
										<th>内容</th>
										<th>状态</th>

									</tr>
								</thead>
								<tbody>
									<s:iterator id="caixin" value="caixin">
										<tr>
											<td id="two"><s:property value="index_name" /></td>

											<td id="three"><s:if
													test="#caixin.index_value=='已完成'">
													<span style="color: green"><s:property value="index_value" /></span>
												</s:if> <s:elseif test="#caixin.index_value=='异常'">
													<span style="color: #CC0033"><s:property value="index_value" /> </span>
												</s:elseif> <s:else>
												<s:property value="index_value" /> 
												</s:else></td>

										</tr>
									</s:iterator>
								</tbody>

							</table>
						</div>
					</div>
					<div class="col-sm-5" onclick="window.open('','_self')">
						<div class="panel panel-primary">
							<table class="table table-striped">

								<div class="panel-heading" style="font-weight: bold;">
									日报发布</div>
								<thead>
									<tr>
										<th>内容</th>
										<th>状态</th>

									</tr>
								</thead>
								<tbody>
									<s:iterator id="ribao" value="ribao">
										<tr>
											<td id="two"><s:property value="index_name" /></td>

											<td id="three"><s:if
													test="#ribao.index_value=='已完成'">
													<span style="color: green"><s:property value="index_value" /></span>
												</s:if> <s:elseif test="#ribao.index_value=='未开始'">
													<span style="color: #CC0033"><s:property value="index_value" /> </span>
												</s:elseif> <s:else>
												<s:property value="index_value" /> 
												</s:else></td>

										</tr>
									</s:iterator>
								</tbody>

							</table>
						</div>
					</div>
				</div>
				<div class="row ">
					<div class="col-sm-1" onclick="window.open('','_self')"></div>
					<div class="col-sm-5" onclick="window.open('','_self')">
						<div class="panel panel-primary">
							<table class="table table-striped">

								<div class="panel-heading" style="font-weight: bold;">
									VOP日报</div>
								<thead>
									<tr>
										<th>内容</th>
										<th>状态</th>

									</tr>
								</thead>
								<tbody>
									<s:iterator id="youjian" value="youjian">
										<tr>
											<td id="two"><s:property value="index_name" /></td>

											<td id="three"><s:if
													test="#youjian.index_value=='已完成'">
													<span style="color: green"><s:property value="index_value" /></span>
												</s:if> <s:elseif test="#youjian.index_value=='未开始'">
													<span style="color: #CC0033"><s:property value="index_value" /> </span>
												</s:elseif> <s:else>
												<s:property value="index_value" /> 
												</s:else></td>

										</tr>
									</s:iterator>
								</tbody>

							</table>
						</div>
					</div>
					<div class="col-sm-5" onclick="window.open('','_self')">
						<div class="panel panel-primary">
							<table class="table table-striped">

								<div class="panel-heading" style="font-weight: bold;">
									页面发布</div>
								<thead>
									<tr>
										<th>内容</th>
										<th>状态</th>

									</tr>
								</thead>
								<tbody>
									<s:iterator id="yemian" value="yemian">
										<tr>
											<td id="two"><s:property value="index_name" /></td>
											<td id="three"><s:if
													test="#yemian.index_value=='已完成'">
													<span style="color: green"><s:property value="index_value" /></span>
												</s:if> <s:elseif test="#yemian.index_value=='异常'">
													<span style="color: #CC0033"><s:property value="index_value" /> </span>
												</s:elseif> <s:else>
												<s:property value="index_value" /> 
												</s:else></td>

										</tr>
									</s:iterator>
								</tbody>
								<tr>
									<td id="two">&nbsp;</td>



								</tr>

							</table>
						</div>
					</div>



				</div>
   
   </div>
   <!--加载进度条显示js  -->
			<script src="js/plugins/pace/pace.min.js"></script>

</body>
</html>