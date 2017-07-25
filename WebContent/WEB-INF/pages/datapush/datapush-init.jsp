<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
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
	<div>
		<%-- <jsp:include page="/WEB-INF/pages/include/leftside.jsp"></jsp:include> --%>
		<jsp:include page="/WEB-INF/pages/include/leftside_product.jsp"></jsp:include>


		<div id="page-wrapper" class="gray-bg dashbard-1">
			<jsp:include page="/WEB-INF/pages/include/head.jsp"></jsp:include>

			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-5">
					<h2>数据推送</h2>
					
				</div>

			</div>
			<div class="row">
				<br>
			</div>


			<div>
				<jsp:include page="datapush-from.jsp"></jsp:include>
			</div>
		</div>
	</div>




	<!-- Mainly scripts -->
	<script src="js/jquery-2.1.1.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<!-- AjaxSubmit -->
	<script src="js/plugins/AjaxSubmit.js"></script>

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
	$(function(){
		// var id1=document.getElementById("sc");
		 
		 $('#sc').toggleClass('active');
		/*  $('#ul').removeClass('nav nav-second-level collapse');
		 $('#ul').toggleClass('nav nav-second-level'); */
		 $('#shengchanxq').toggleClass('active');
		/*  $('#scxqul').removeClass('nav nav-second-level collapse');
		 $('#scxqul').toggleClass('nav nav-second-level'); */
		 $('#tuisong').toggleClass('active');
		
		/*  $("#sc").click(function(){				
			 $('#ul').removeClass('nav nav-second-level');	
			 $('#ul').toggleClass('nav nav-second-level  collapse');			
			});
		 $("#shengchanxq").click(function(){			 
			 $('#scxqul').removeClass('nav nav-second-level');		
			 $('#scxqul').toggleClass('nav nav-second-level  collapse');
		
			}); */
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
	<script src="js/pmb_bonc.js" type="text/javascript"></script>
	<script type="text/javascript">
		getdata();

		function getdata() {

			$.ajax({
				type : "post",
				url : "datapush/datapush!from.action",
				success : function(html) {

					$("#getvalue").html(html);
				}
			})
		};

		setInterval(getdata, 10000);
	</script>

</body>
</html>