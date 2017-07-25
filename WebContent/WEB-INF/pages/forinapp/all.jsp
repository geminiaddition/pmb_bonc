<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 第一部分：整体情况 -->
<div class="col-sm-12">

	<div class="row ax-shape background-r50 marg-r-hf">
		<span class="font-A4">整体情况</span>
	</div>
	<div class="row background-r30 marg-r-hf">

		<div class="col-sm-4 hborder-r hor-center">
			<div class="row ">
				<img height="48px" width="48px" src="img/datacenter/database.png">
				<span class="font-H1">当前运维机器</span>
			</div>
			<div class="row hor-center">
				<span class="font-H1" id="etotalone"></span>
			</div>
		</div>

		<div class="col-sm-4 hborder-r hor-center">
			<div class="row ">
				<img height="48px" width="48px" src="img/datacenter/database.png">
				<span class="font-H1">数据分析</span>
			</div>
			<div class="row hor-center">
				<span class="font-H1" id="etotaltwo"></span>
			</div>
		</div>
		<div class="col-sm-4  hor-center">
			<div class="row ">
				<img height="48px" width="48px" src="img/datacenter/database.png">
				<span class="font-H1">存量平台</span>
			</div>
			<div class="row hor-center">
				<span class="font-H1" id="etotalthere"></span>
			</div>
		</div>


	</div>




</div>

<script src="js/jquery-2.1.1.js"></script>
<script type="text/javascript">
jQuery(document).ready(function() {
	etotal();
//alert("zhjixing-------");
});
function etotal() {
	$.ajax({
		url : "datacenter/datacenter!etotal.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var total_num = dataall[0];
			var jf_num = dataall[1];
			var cl_num = dataall[2];
			$("#etotalone").text(total_num);
			$("#etotaltwo").text(jf_num);
			$("#etotalthere").text(cl_num);
		}

	});

}
</script>