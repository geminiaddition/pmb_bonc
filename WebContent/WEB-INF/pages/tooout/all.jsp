<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- 第一部分：整体情况 -->
<div class="col-sm-12">

					<div class="row ax-shape background-r50 marg-r-hf"
						>
						<span class="font-A4">整体情况</span>
					</div>
					<div class="row background-r30 marg-r-hf">

						<div class="col-sm-2 hborder-r hor-center">
							<div class="row ">
							<img height="48px" width="48px" src="img/datacenter/database.png">
								<span class="font-H1">当前运维主机</span>
							</div>
							<div class="row hor-center">
							<span class="font-H1" id="stotalone"></span>
							</div>
						</div>

						<div class="col-sm-2 hborder-r hor-center">
							<div class="row ">
							<img height="48px" width="48px" src="img/datacenter/database.png">
								<span class="font-H1">征信集群</span>
							</div>
							<div class="row hor-center">
							<span class="font-H1" id="stotaltwo"></span>
							</div>
						</div>
						<div class="col-sm-2 hborder-r hor-center">
							<div class="row ">
							<img height="48px" width="48px" src="img/datacenter/database.png">
								<span class="font-H1">沃营销</span>
							</div>
							<div class="row hor-center">
							<span class="font-H1" id="stotalthere"></span>
							</div>
						</div>
						<div class="col-sm-2 hborder-r hor-center">
							<div class="row ">
							<img height="48px" width="48px" src="img/datacenter/database.png">
								<span class="font-H1">能力开放平台</span>
							</div>
							<div class="row hor-center">
							<span class="font-H1" id="stotalfour"></span>
							</div>
						</div>
						<div class="col-sm-2 hborder-r hor-center">
							<div class="row ">
							<img height="48px" width="48px" src="img/datacenter/database.png">
								<span class="font-H1">矿砂项目</span>
							</div>
							<div class="row hor-center">
							<span class="font-H1" id="stotalfive"></span>
							</div>
						</div>
						<div class="col-sm-2  hor-center">
							<div class="row ">
							<img height="48px" width="48px" src="img/datacenter/database.png">
								<span class="font-H1">DMP</span>
							</div>
							<div class="row hor-center">
							<span class="font-H1" id="stotalsix"></span>
							</div>
						</div>
						
					</div>




				</div>
<script src="js/jquery-2.1.1.js"></script>
<script type="text/javascript">
jQuery(document).ready(function() {
	stotal();
//alert("zhjixing-------");
});
function stotal() {
	$.ajax({
		url : "datacenter/datacenter!stotal.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var total_num = dataall[0];
			var zx_num = dataall[1];
			var woyx_num = dataall[2];
			var open_num = dataall[3];
			var ks_num = dataall[4];
			var dmp_num = dataall[5];
			
			$("#stotalone").text(total_num);
			$("#stotaltwo").text(zx_num);
			$("#stotalthere").text(woyx_num);
			$("#stotalfour").text(open_num);
			$("#stotalfive").text(ks_num);
			$("#stotalsix").text(dmp_num);
		}

	});

}
</script>