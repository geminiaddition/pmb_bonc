<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 第一部分：整体情况 -->
<div class="col-sm-12">

	<div class="row ax-shape background-r50 marg-r-hf">
		<span class="font-A4">整体情况</span>
	</div>
	<div class="row background-r30 marg-r-hf">

		<div class="col-sm-2 hborder-r hor-center">
			<div class="row ">
				<img height="48px" width="48px" src="img/datacenter/database.png">
				<span class="font-H1">当前运维主机</span>
			</div>
			<div class="row hor-center">
				<span class="font-H1" id="ytotalone"></span>
			</div>
		</div>

		<div class="col-sm-3 hborder-r hor-center">
			<div class="row ">
				<img height="48px" width="48px" src="img/datacenter/database.png">
				<span class="font-H1">301机房</span>
			</div>
			<div class="row hor-center">
				<span class="font-H1" id="ytotaltwo"></span>
			</div>
		</div>
		<div class="col-sm-2 hborder-r hor-center">
			<div class="row ">
				<img height="48px" width="48px" src="img/datacenter/database.png">
				<span class="font-H1">4M1机房</span>
			</div>
			<div class="row hor-center">
				<span class="font-H1" id="ytotalthere"></span>
			</div>
		</div>
		<div class="col-sm-3 hborder-r hor-center">
			<div class="row ">
				<img height="48px" width="48px" src="img/datacenter/database.png">
				<span class="font-H1">324机房</span>
			</div>
			<div class="row hor-center">
				<span class="font-H1" id="ytotalfour"></span>
			</div>
		</div>
		<div class="col-sm-2  hor-center">
			<div class="row ">
				<img height="48px" width="48px" src="img/datacenter/database.png">
				<span class="font-H1">419机房</span>
			</div>
			<div class="row hor-center">
				<span class="font-H1" id="ytotalfive"></span>
			</div>
		</div>

	</div>




</div>
<script src="js/jquery-2.1.1.js"></script>
<script type="text/javascript">
jQuery(document).ready(function() {
	ytotal();
//alert("zhjixing-------");
});
function ytotal() {
	$.ajax({
		url : "datacenter/datacenter!ytotal.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var total_num = dataall[0];
			var sly_jf_num = dataall[1];
			var sm1_jf_num = dataall[2];
			var ses_jf_num = dataall[3];
			var syj_jf_num = dataall[4];
			

			$("#ytotalone").text(total_num);
			$("#ytotaltwo").text(sly_jf_num);
			$("#ytotalthere").text(sm1_jf_num);
			$("#ytotalfour").text(ses_jf_num);
			$("#ytotalfive").text(syj_jf_num);
		

		}

	});

}
</script>

