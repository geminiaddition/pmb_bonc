<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
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

	<div id="getvalue" class="row" style="margin: auto;">

		<div class="col-sm-11" onclick="window.open('','_self')">
			<div class="panel panel-primary">
				<table class="table table-hover">
					<div class="panel-heading" style="font-weight: bold;">
						<span>稽核反馈</span>
					</div>


					<thead>
						<tr>
							<th style="font-size: large;">稽核标题</th>
						</tr>
						<tr>

							<th style="text-align: center;">稽核规则总量(个)</th>
							<th style="text-align: center;">问题列表(个)</th>
							<th style="text-align: center;">已反馈省份(个)</th>
							<th style="text-align: center;">稽核任务总量(个)</th>
							<th style="text-align: center;">已完成(个)</th>
							<th style="text-align: center;">运行异常(个)</th>
							<th style="text-align: center;">未及时响应省份</th>
							<th style="text-align: center;">t+3考核未回复省份</th>

						</tr>
					</thead>
					<s:iterator id="getaudit" value="getaudit">
						<tbody>
							<tr>
								<td align="center"><s:property value="check_rule_num" /></td>
								<td align="center"><s:property value="problem_num" /></td>
								<td align="center"><s:property value="answer_prov" /></td>
								<td align="center"><s:property value="etl_task_num" /></td>
								<td align="center"><s:property value="etl_task_finish" /></td>
								<td align="center"><s:property value="etl_task_err" /></td>
								<td align="center"><s:property value="unanswer_prov" /></td>
								<td align="center"><s:property value="examine_prov_t_3" /></td>
							</tr>
						</tbody>
					</s:iterator>
					<thead>
						<tr>
							<th style="font-size: large;">稽核明细</th>
						</tr>
						<tr>
						
						
							<th style="text-align: center;" colspan="2">稽核类型</th>
							<th style="text-align: center;">规则数量</th>
							<th style="text-align: center;">问题列表数量</th>
							<th style="text-align: center;"></th>
							<th >已回复省分</th>
							<th style="text-align: center;"></th>
							<th >未回复省分</th>
                             

						</tr>

					</thead>
					<s:iterator id="getad" value="getad">
						<tbody>

							<tr>
							
							
								<td align="center" colspan="2"><s:property value="check_type" /></td>
								<td align="center"><s:property value="check_rule_num" /></td>
								<td align="center"><s:property value="problem_num" /></td>
								<td align="center"></td>
								<td ><s:property value="answer_prov" /></td>
								<td align="center"></td>
								<td><s:property value="unanswer_prov" /></td>
								



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