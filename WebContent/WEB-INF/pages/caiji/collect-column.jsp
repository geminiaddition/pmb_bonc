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
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="font-awesome/css/font-awesome.css" rel="stylesheet">

<!-- Toastr style -->
<link href="css/plugins/toastr/toastr.min.css" rel="stylesheet">

<!-- Gritter -->
<link href="js/plugins/gritter/jquery.gritter.css" rel="stylesheet">

<link href="css/animate.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
</head>
<body>
	<jsp:include page="/WEB-INF/pages/include/sessionif.jsp"></jsp:include>

	<div id="getvalue" class="row" style="margin: auto;">
		<div class="col-sm-11" onclick="window.open('','_self')">
			<div class="panel panel-primary">
				<div class="panel-heading"
					style="font-weight: bold; text-align: center;">
					<span>采集详单</span>
				</div>

				<div class="row">

					<div class="col-sm-2" onclick="window.open('','_self')">

						<table class="table table-hover">
							<thead>
								<tr>
									<th style="text-align: center;">综采</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td align="center">短信：71,418.67</td>
								</tr>
								<tr>
									<td align="center">数据：71,418.67</td>
								</tr>
								<tr>
									<td align="center">语音：71,418.67</td>
								</tr>
								<tr>
									<td align="center">小计：71,418.67</td>
								</tr>

							</tbody>
						</table>

					</div>

					<div class="col-sm-3" onclick="window.open('','_self')">

						<table class="table table-hover">
							<thead>
								<tr>
									<th style="text-align: center;">CBSS详单</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td align="center">短信：71,418.67</td>
								</tr>
								<tr>
									<td align="center">数据：71,418.67</td>
								</tr>
								<tr>
									<td align="center">语音：71,418.67</td>
								</tr>
								<tr>
									<td align="center">小计：71,418.67</td>
								</tr>

							</tbody>
						</table>

					</div>
					<div class="col-sm-2" onclick="window.open('','_self')">

						<table class="table table-hover">
							<thead>
								<tr>
									<th style="text-align: center;">网间结算详单</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td align="center">短信：71,418.67</td>
								</tr>
								<tr>
									<td align="center">数据：71,418.67</td>
								</tr>
								<tr>
									<td align="center">语音：71,418.67</td>
								</tr>
								<tr>
									<td align="center">小计：71,418.67</td>
								</tr>

							</tbody>
						</table>

					</div>
					<div class="col-sm-3" onclick="window.open('','_self')">

						<table class="table table-hover">
							<thead>
								<tr>
									<th style="text-align: center;">纵向详单</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td align="center">短信：71,418.67</td>
								</tr>
								<tr>
									<td align="center">数据：71,418.67</td>
								</tr>
								<tr>
									<td align="center">语音：71,418.67</td>
								</tr>
								<tr>
									<td align="center">小计：71,418.67</td>
								</tr>

							</tbody>
						</table>

					</div>
					<div class="col-sm-2" onclick="window.open('','_self')">

						<table class="table table-hover">
							<thead>
								<tr>
									<th style="text-align: center;">纵向详单</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td align="center">短信：71,418.67</td>
								</tr>
								<tr>
									<td align="center">数据：71,418.67</td>
								</tr>
								<tr>
									<td align="center">语音：71,418.67</td>
								</tr>
								<tr>
									<td align="center">小计：71,418.67</td>
								</tr>

							</tbody>
						</table>

					</div>
				</div>
			</div>
		</div>
	</div>


</body>
</html>