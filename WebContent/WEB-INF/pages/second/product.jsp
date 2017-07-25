<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
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
</head>
<body>
<jsp:include page="/WEB-INF/pages/include/sessionif.jsp"></jsp:include>
	<div id="wrapper">
	<jsp:include page="/WEB-INF/pages/include/leftside_home.jsp"></jsp:include>
		

		<div id="page-wrapper" class="gray-bg dashbard-1">
			<jsp:include page="/WEB-INF/pages/include/head.jsp"></jsp:include>
			<div class="row wrapper border-bottom white-bg page-heading">
                <div class="col-lg-5">
                    <h2>生产监控</h2>
                    <ol class="breadcrumb">
                    </ol>
                </div>
                
            </div>
            <div class="row">
            <br>
            </div>		

			<div class="row ">
			<div class="col-sm-4"
					onclick="window.open('bigproduct/bigproduct!bigproduct.action','_self')"
					style="cursor: pointer;">
					<div class="thumbnail">
						<img src="img/gallery/laptop.png">
						<div class="caption">
							<h3 align="center">大屏生产</h3>

						</div>
					</div>

				</div>
				<div class="col-sm-4" onclick="window.open('qianzhi/after!after.action','_self')"
					style="cursor: pointer;">
					<div class="thumbnail">
						<img src="img/gallery/tabs.png">
						<div class="caption">
							<h3 align="center">生产前置</h3>

						</div>
					</div>

				</div>
				<div class="col-sm-4" onclick="window.open('caiji/collect!collect.action','_self')"
					style="cursor: pointer;">
					<div class="thumbnail">
						<img src="img/gallery/icon.png">
						<div class="caption">
							<h3 align="center">数据采集</h3>

						</div>
					</div>

				</div>

				<div class="col-sm-4" onclick="window.open('jiagong/work!work.action','_self')"
					style="cursor: pointer;">
					<div class="thumbnail">
						<img src="img/gallery/steam-logo.png">
						<div class="caption">
							<h3 align="center">数据加工</h3>

						</div>
					</div>

				</div>
				<div class="col-sm-4" onclick="window.open('jihe/audit!audit.action','_self')"
					style="cursor: pointer;">
					<div class="thumbnail">
						<img src="img/gallery/table-grid.png">
						<div class="caption">
							<h3 align="center">数据稽核</h3>

						</div>
					</div>

				</div>
				<div class="col-sm-4" onclick="window.open('datapush/datapush!init.action','_self')"
					style="cursor: pointer;">
					<div class="thumbnail">
						<img src="img/gallery/hosting.png">
						<div class="caption">
							<h3 align="center">数据推送</h3>

						</div>
					</div>

				</div>
				<div class="col-sm-4" onclick="window.open('datasend/datasend!init.action','_self')"
					style="cursor: pointer;">
					<div class="thumbnail">
						<img src="img/gallery/upload-button.png">
						<div class="caption">
							<h3 align="center">数据发布</h3>

						</div>
					</div>

				</div>
			</div>




		</div>



	</div>

	<!-- Mainly scripts -->
	<script src="js/jquery-2.1.1.js"></script>
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





</body>
</html>