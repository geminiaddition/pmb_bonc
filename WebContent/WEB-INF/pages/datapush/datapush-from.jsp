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
   <div id="getvalue" class="row"  style="margin: auto; ">
					

					<div class="col-sm-11" onclick="window.open('','_self')">
						<div class="panel panel-primary">
							<table class="table table-striped">
							<div class="panel-heading" style="font-weight: bold;">
										数据推送</div>
									<thead>
										<tr >
											<th style="text-align: center;">省分</th>
											<th style="text-align: center;">全国一批应下发</th>
											<th style="text-align: center;">全国一批已下发</th>
											<th style="text-align: center;">全国二批应下发</th>
											<th style="text-align: center;">全国二批已下发</th>
											<th style="text-align: center;">原始数据应下发</th>
											<th style="text-align: center;">已下发</th>
										</tr>
									</thead>
								<s:iterator id="datapush" value="datapush">
									
									<tbody>

										<tr >
											
											<td align="center"><s:property value="prov_desc" /></td>
											<td align="center"><s:property value="serv_shl_num1" /></td>
											<td align="center" ><s:property value="serv_num1" /></td>
											<td align="center"><s:property value="serv_shl_num2" /></td>
											<td align="center"><s:property value="serv_num2" /></td>
											<td align="center"><s:property value="shl_num" /></td>
											<td align="center"><s:property value="put_num" /></td>

											
										</tr>

									</tbody>
								</s:iterator>
							</table>
						</div>
					</div>
				</div>
<!--加载进度条显示js  -->
			<script src="js/plugins/pace/pace.min.js"></script>
</body>
</html>