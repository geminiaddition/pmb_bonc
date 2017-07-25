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
<body class="skin-black">
	<jsp:include page="/WEB-INF/pages/include/sessionif.jsp"></jsp:include>
	<div id="wrapper">
		<jsp:include page="/WEB-INF/pages/include/leftside_home.jsp"></jsp:include>

		<div id="page-wrapper" class="gray-bg dashbard-1"
			style="background: black;">
			<jsp:include page="/WEB-INF/pages/include/head.jsp"></jsp:include>

			<div class="row wrapper border-bottom white-bg page-heading"
				style="background-color: black;">
				<div class="col-lg-5">
					<h2 style="color: white;">数据中心对外应用</h2>
					<ol id="ol_parent" class="breadcrumb">
						<li id="baseli"><a id="data_center" onclick="change(this);"
							style="font-weight: bold;">对外应用</a></li>
					</ol>
				</div>

			</div>
			<div id="wo324yarn_2" style="display: none;">
				<jsp:include page="wo324yarn.jsp"></jsp:include>


			</div>
			<div id="dmpyarnqueryid_2" style="display: none;">
				<jsp:include page="dmpyarn.jsp"></jsp:include>


			</div>
			<div id="powerforooneyarnid_2" style="display: none;">
				<jsp:include page="powerfor301.jsp"></jsp:include>


			</div>
			<div id="powerfortfouryarnid_2" style="display: none;">
				<jsp:include page="powerfor324.jsp"></jsp:include>


			</div>
			<div id="zxinnerrr_2" style="display: none;">
				<jsp:include page="tooout-zxinner.jsp"></jsp:include>


			</div>
			<div id="jzyxinnerrr_2" style="display: none;">
				<jsp:include page="tooout-jzyxinner.jsp"></jsp:include>


			</div>
			<div id="toooutappks_2" style="display: none;">
				<div class="col-sm-12"
					style="position: absolute; height: 82%; width: 100%;">
					<iframe
						src="http://10.162.6.13/ganglia/?r=hour&cs=&ce=&m=load_one&s=by+name&c=lf-324-01-ks&tab=m&vn=&hide-hf=false"
						style="height: 100%; width: 100%; border: #000; solid: 1px; border-top: none; border-bottom: none;"></iframe>
				</div>


			</div>


			<div id="toooutapppowerfor_2" style="display: none;">
				<div class="col-sm-12"
					style="position: absolute; height: 82%; width: 100%;">
					<iframe
						src="http://10.162.6.15/ganglia/?r=hour&cs=&ce=&m=load_one&s=by+name&c=lf-324-03-open1&tab=m&vn=&hide-hf=false"
						style="height: 100%; width: 100%; border: #000; solid: 1px; border-top: none; border-bottom: none;"></iframe>
				</div>



			</div>
			<div id="toooutappwo_2" style="display: none;">
				<div class="col-sm-12"
					style="position: absolute; height: 82%; width: 100%;">
					<iframe
						src="http://10.162.6.15/ganglia/?r=hour&cs=&ce=&m=load_one&s=by+name&c=lf-324-04-jzyx&tab=m&vn=&hide-hf=false"
						style="height: 100%; width: 100%; border: #000; solid: 1px; border-top: none; border-bottom: none;"></iframe>
				</div>


			</div>
			<div id="toooutappdmp_2" style="display: none;">
				<div class="col-sm-12"
					style="position: absolute; height: 82%; width: 100%;">
					<iframe src="http://10.162.166.189/ganglia"
						style="height: 100%; width: 100%; border: #000; solid: 1px; border-top: none; border-bottom: none;"></iframe>
				</div>


			</div>
			<div id="the_total_page">
				<div class="row">
					<jsp:include page="all.jsp"></jsp:include>
				</div>

				<div class="row marg-t3">
					<div class="col-sm-5 ">

						<div class="row ax-shape background-r50 marg-r-hf">
							<span id="toooutappwo" onclick="changeto(this);"
								style="cursor: pointer;" class="font-A4">沃营销</span>
						</div>
						<jsp:include page="woo.jsp"></jsp:include>
					</div>

					<div class="col-sm-7 ">

						<div class="row ax-shape background-r50 marg-r-hf">
							<span id="toooutapppowerfor" onclick="changeto(this);"
								style="cursor: pointer;" class="font-A4">能力开放平台</span>

						</div>
						<jsp:include page="powerfor.jsp"></jsp:include>


					</div>

					<div class="col-sm-7 marg-t3">

						<div class="row ax-shape background-r50 marg-r-hf">
							<span class="font-A4">征信集群</span>

						</div>

						<jsp:include page="zx.jsp"></jsp:include>

					</div>

					<div class="row marg-t3">
						<div class="  col-sm-5 ">

							<div class="row ax-shape marg-r-hf background-r50">
								<span id="toooutappdmp" onclick="changeto(this);"
									style="cursor: pointer;" class="font-A4">DMP</span>
							</div>
							<jsp:include page="DMP.jsp"></jsp:include>

						</div>

						<div class=" col-md-7 ">
							<div class="row ">
								<div class="col-xs-6 ">
									<div class="row ax-shape background-r50 marg-r-hf ">
										<span id="toooutappks" onclick="changeto(this);"
											style="cursor: pointer;" class="font-A4">矿砂项目</span>

									</div>
									<jsp:include page="kuangsha.jsp"></jsp:include>
								</div>
								<div class="col-xs-2 ">
									<div class="row ax-shape background-r50 marg-r-hf">
										<span class="font-A4">沃位置</span>
									</div>
									<jsp:include page="woow.jsp"></jsp:include>
								</div>
								<div class="col-xs-4 marg-r-hf">
									<div class="row ax-shape background-r50 marg-r-hf">
										<span class="font-A4">数据库</span>
									</div>
									<jsp:include page="database.jsp"></jsp:include>
								</div>
							</div>


						</div>



					</div>

				</div>


			</div>
		</div>

	</div>






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

			$('#toout').toggleClass('active');

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

	<%-- <script type="text/javascript">

var urll="http://10.249.217.246:8080/auth-wscreen/datamonitorPro/index"  // 响应的URL,以后可以改为一些动态处理页,会用Ajax的都知道，这在页里可以有目的返回不同的数据vv


$(function(){

        $.ajax({
        	type: "GET",
            url:urll,
            dataType:"html",
            error: function(XHR,textStatus,errorThrown) {
                alert ("XHR="+XHR+"\ntextStatus="+textStatus+"\nerrorThrown=" + errorThrown);
            },
            success: function(data,textStatus) {
                $("basejsp").append(data);
            }
         
        });
		    }); 

</script> --%>
	<script src="js/plugins/commonPlugins.js"></script>
	<script type="text/javascript">
		function changeto(obj) {
			var id = obj.id;

			var id1 = "资源使用情况";

			$("#the_total_page").css('display', 'none');
			$("#data_center").css('font-weight', '');
			var ol = document.getElementById("ol_parent");
			var li = document.createElement("li");
			li.setAttribute("id", id + "_1");
			li.setAttribute("style", "font-weight: bold;color: white;");
			li.innerHTML = id1;
			ol.appendChild(li);
			$("#" + id + "_2").css('display', '');

		};

		function change(obj) {
			var id = obj.id;
			var id1 = document.getElementById(id);
			var father1 = id1.parentNode;
			var father0 = father1.parentNode;
			var lc = father0.lastChild.id;
			var str = lc.substr(0, lc.indexOf('_'));
			$("#" + lc).remove();
			$("#the_total_page").css('display', '');
			$("#data_center").css('font-weight', 'bold');
			$("#" + str + "_2").css('display', 'none');

		};
	</script>
</body>
</html>