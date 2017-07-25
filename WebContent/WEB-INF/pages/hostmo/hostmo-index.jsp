<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<base href="<%=basePath%>" />

<title>统一数据服务平台</title>

<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="font-awesome/css/font-awesome.css" rel="stylesheet">

<!-- Toastr style -->
<link href="css/plugins/toastr/toastr.min.css" rel="stylesheet">

<!-- Gritter -->
<link href="js/plugins/gritter/jquery.gritter.css" rel="stylesheet">

<link href="css/animate.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/oper-monitor.css" rel="stylesheet">
<link href="css/tools.css" rel="stylesheet">
</head>
<body >
	
	<div id="wrapper">
		<jsp:include page="/WEB-INF/pages/include/leftside_home.jsp"></jsp:include>

		<div id="page-wrapper" class="gray-bg dashbard-1">
			<jsp:include page="/WEB-INF/pages/include/head.jsp"></jsp:include>

			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-5">
					<h2 >永洪报表监控</h2>
					
				</div>

			</div>				
			<div id="the_total_page">


				
				<div class="row marg-t3">
					

					<div class="col-sm-12 ">

						<div class="row background-rwhite marg-r-hf" >
							<span class="font-A223" >主机信息</span>

						</div>

						<jsp:include page="hostttt.jsp"></jsp:include>

					</div>


				</div>
				

			</div>



		</div>

	</div>



<jsp:include page="/WEB-INF/pages/include/sessionif.jsp"></jsp:include>


	<!-- Mainly scripts -->
	<script src="js/jquery-2.1.1.js"></script>
	<script src="js/echarts.js"></script>
	<script src="js/dark.js"></script>
	<script src="js/plugins/AjaxSubmit.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
	<script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

	<!-- Flot -->
	<script src="js/plugins/flot/jquery.flot.js"></script>
	<script src="js/plugins/flot/jquery.flot.tooltip.min.js"></script>
	<script src="js/plugins/flot/jquery.flot.spline.js"></script>
	<script src="js/plugins/flot/jquery.flot.resize.js"></script>
	<script src="js/plugins/flot/jquery.flot.pie.js"></script>

	<!-- Peity -->
	<script src="js/plugins/peity/jquery.peity.min.js"></script>
	<script src="js/demo/peity-demo.js"></script>

	<!-- Custom and plugin javascript -->
	<script type="text/javascript" defer="defer">
		$(function() {
			// var id1=document.getElementById("sc");

			$('#hostmo').toggleClass('active');

		});
	</script>
	<script src="js/inspinia.js"></script>
	<script src="js/plugins/pace/pace.min.js"></script>

	<!-- jQuery UI -->
	<script src="js/plugins/jquery-ui/jquery-ui.min.js"></script>

	<!-- GITTER -->
	<script src="js/plugins/gritter/jquery.gritter.min.js"></script>

	<!-- Sparkline -->
	<script src="js/plugins/sparkline/jquery.sparkline.min.js"></script>

	<!-- Sparkline demo data  -->
	<script src="js/demo/sparkline-demo.js"></script>

	<!-- ChartJS-->
	<script src="js/plugins/chartJs/Chart.min.js"></script>

	<!-- Toastr -->
	<script src="js/plugins/toastr/toastr.min.js"></script>
	<script src="js/plugins/toastr/toastr.min.js"></script>

	<script src="js/plugins/commonPlugins.js"></script>



</body>
</html>