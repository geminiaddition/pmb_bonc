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
				
		<div class="row">
		<div class="col-sm-12" onclick="window.open('','_self')" >
					<div class="panel panel-primary"  >
						<table class="table table-hover">
							
								<div class="panel-heading" style="font-weight: bold;">
									<span>cb采集</span>
								</div>
									<thead>
									<tr>
									<th style="text-align: center;" ><span>分类</span></th>
									<th style="text-align: center;" ><span>时间</span></th>
									<th style="text-align: center;" ><span>应采集</span></th>
									<th style="text-align: center;" ><span>已完成</span></th>
									<th style="text-align: center;" ><span>迟传次数</span></th>
									<th style="text-align: center;" ><span>重传次数</span></th>
									</tr>
									</thead>							
								<tbody >
									<s:iterator id="cb" value="cb" status="index">
									<tr >
                                        
										<td align="center" ><s:property value="interface_type" />
																			
										</td>
										<td align="center" ><s:property value="file_date" />										
										
										</td>
										<td align="center" ><s:property value="all_num" />										
										
										</td>
										<td align="center"  ><s:property value="imp_num" />										
										
										</td>
										<td align="center"  ><s:property value="latenum" />										
										
										</td>
										<td align="center" ><s:property value="ver_no" />										
										
										</td>

									</tr>
									
									</s:iterator>
										
								</tbody>
																																																						
						</table>
					</div>
				</div>
				
				
				</div>
			<div class="row">
			<div class="col-sm-12" onclick="window.open('','_self')">
					<div class="panel panel-primary">
						<table class="table table-hover">
							
								<div class="panel-heading" style="font-weight: bold;">
									<span>纵向采集</span>
								</div>	
								<thead>
								<tr>
								<th style="text-align: center;" ><span>日期</span></th>
								<th style="text-align: center;" ><span>省分</span></th>
								<th style="text-align: center;" ><span>总文件数</span></th>
								<th style="text-align: center;" ><span>上传文件数</span></th>
								<th style="text-align: center;" ><span>采集文件数</span></th>
								<th style="text-align: center;" ><span>迟传文件数</span></th>
								<th style="text-align: center;" ><span>上传文件次数</span></th>
								</tr>
								</thead>							
								<tbody >
									<s:iterator id="zx" value="zx" status="index">
									<tr >
                                        
										<td align="center" ><s:property value="filedate" />
																			
										</td>
										<td align="center" ><s:property value="prov_desc" />										
										
										</td>
										<td align="center" ><s:property value="totals" />										
										
										</td>
										<td align="center" ><s:property value="sumup" />										
										
										</td>
										<td align="center" ><s:property value="sumimp" />										
										
										</td>
										<td align="center" ><s:property value="sumlate" />										
										
										</td>
										<td align="center" ><s:property value="sumtrantimes" />										
										
										</td>

									</tr>
									
									</s:iterator>
									
									
																		
								</tbody>
																																																						
						</table>
					</div>
				</div>
			</div>	
			
				
				
				
			</div>
			<!--加载进度条显示js  -->
			<script src="js/plugins/pace/pace.min.js"></script>

</body>
</html>