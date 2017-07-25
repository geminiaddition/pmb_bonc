<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<div class="row marg-r-hf hor-center background-r30">
	<div class="row">
		<div class="hor-center ">
			<span class="font-A1">301机房</span>
		</div>
	</div>
</div>
<div class="row marg-r-hf hor-center background-r30 border-t-gray">
	<div class="row  hor-center marg-r-hf  ">
		<div class="col-md-6 col-xs-5 col-sm-6  hborder-r ">
			<div id="forinyarn" onclick="changeto(this);" style="cursor: pointer;" class="font-T3">YARN</div>
		</div>
		<!-- <div class="col-md-4 col-xs-5 col-sm-6 hborder-r ">
			<div class="font-T3">Kafka</div>
		</div> -->
		<div class="col-md-6 col-xs-5 col-sm-6  ">
			<div id="forinredis" onclick="changeto(this);" style="cursor: pointer;" class="font-T3">Redis</div>
		</div>
	</div>
</div>
<!-- 饼图 -->
<div
	class="row hor-center border-t-gray marg-r-hf background-r30 font-A2 ">
	<div class="col-md-3 col-xs-5 col-sm-6  ">
		<div>
			总结点<span class="font-success" id="cunl_yarm_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="cunl_yarm_pie" class="marg-tx2 marg-l" width="62"
				height="62"></canvas>
		</div>
	</div>
	<div class="col-md-3 col-xs-5 col-sm-6 hborder-r ">
		<div>
			存储<span class="font-success" id="cunl_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="cunl_yarm_svgnum" class="font-success">0%</span>
			<embed class="hmarg-tw" id="cunl_yarm_svg1"
				src="css/plugins//datacenter/cpu.svg" width="100%" height="62px"
				type="image/svg+xml" />
		</div>
	</div>


<!-- 
	<div class="col-md-2 col-xs-5 col-sm-6  ">
		<div>
			总结点<span class="font-success">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<img height="48px" width="48px" src="img/datacenter/bingtu.png">
		</div>
	</div>
	<div class="col-md-2 col-xs-5 col-sm-6 hborder-r ">
		<div>
			存储<span class="font-success">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<img height="50px" width="50px" src="img/datacenter/svg.png">
		</div>
	</div> -->



	<div class="col-md-3 col-xs-5 col-sm-6  ">
		<div>
			总结点<span class="font-success" id="cunl_redis_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="cunl_redis_pie" class="marg-tx2 marg-l" width="62"
				height="62"></canvas>
		</div>
	</div>
	<div class="col-md-3 col-xs-5 col-sm-6  ">
		<div>
			存储<span class="font-success" id="cunl_redis_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="cunl_redis_svgnum" class="font-success">0%</span>
			<embed class="hmarg-tw" id="cunl_redis_svg1"
				src="css/plugins//datacenter/cpu.svg" width="100%" height="62px"
				type="image/svg+xml" />
		</div>
	</div>

</div>


<!-- job数 -->
<div class="row border-t-gray marg-r-hf font-A2 background-r30 hor-center">
	<div class="col-md-6 col-xs-5 col-sm-6  hborder-r">

		<div>
			节点数<span class="font-success" id="cunl_yarm_nodes">107/107</span>
		</div>
		<div>
			文件数<span class="font-success" id="cunl_txt"></span>
		</div>
		<div id="xlxdjq" onclick="changeto(this);" style="cursor: pointer;">
			队列使用情况<span class="font-success" id="clpt_quen"></span>
		</div>
	</div>
	
	
	
	<!-- 
	<div class="col-md-4 col-xs-5 col-sm-6  hborder-r">
		<div>
			实时网络流量<span class="font-success" id="">1000</span>
		</div>
		<div>
			存储使用率<span class="font-success" id="">60%</span>
		</div>

	</div> -->
	<div class="col-md-6 col-xs-5 col-sm-6  ">
		<div>
			代理存活数量<span class="font-success" id="cunl_redis_proxy">4</span>
		</div>
		<div>
			组数存活数量<span class="font-success" id="cunl_redis_group">4</span>
		</div>
		<div>
			dashboard状态<span class="font-success" id="cunl_redis_dashboard">正常</span>
		</div>
		<div>
			存储使用率<span class="font-success" id="cunl_redis_rate">60%</span>
		</div>
	</div>
</div>
<div class="row marg-r-hf hor-center background-r30 ">
	<div class="row">
		<div class="hor-center ">
			<span class="font-T5">&nbsp;</span>
		</div>
	</div>
</div>
<div class="row marg-r-hf hor-center background-r30 border-t-gray">
	<div class="row">
		<div class="hor-center ">
			<span class="font-A1">324机房</span>
		</div>
	</div>
</div>
<div class="row marg-r-hf hor-center background-r30 ">
	<div class="row">
		<div class="hor-center ">
			<span class="font-T5">&nbsp;</span>
		</div>
	</div>
</div>
<div class="row marg-r-hf hor-center background-r30 border-t-gray">
	<div class="row  hor-center marg-r-hf  ">
		<div class="col-md-4 col-xs-5 col-sm-6  hborder-r ">
			<div class="font-T3">Storm</div>
		</div>
		<div class="col-md-4 col-xs-5 col-sm-6 hborder-r ">
			<div class="font-T3">Kafka</div>
		</div>
		<div class="col-md-4 col-xs-5 col-sm-6  ">
			<div class="font-T3">Redis</div>
		</div>
	</div>
</div>
<!-- 饼图 -->
<div
	class="row hor-center border-t-gray marg-r-hf background-r30 font-A2 ">
	<!-- -------------storm-------------- -->
	<div class="col-md-2 col-xs-5 col-sm-6  ">
		<div>
			总结点<span class="font-success" id="cunl_storm_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="cunl_storm_pie" class="marg-tx2 marg-l" width="62"
				height="62"></canvas>
		</div>
	</div>
	<div class="col-md-2 col-xs-5 col-sm-6 hborder-r ">
		<div>
			存储<span class="font-success" id="cunl_storm_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="cunl_storm_svgnum" class="font-success">0%</span>
			<embed class="hmarg-tw" id="cunl_storm_svg1"
				src="css/plugins//datacenter/cpu.svg" width="100%" height="62px"
				type="image/svg+xml" />
		</div>
	</div>
	
	<!-- ---------------kafka----------- -->
	<div class="col-md-2 col-xs-5 col-sm-6  ">
		<div>
			总结点<span class="font-success" id="cunl_kafka_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="cunl_kafka_pie" class="marg-tx2 marg-l" width="62"
				height="62"></canvas>
		</div>
	</div>
	<div class="col-md-2 col-xs-5 col-sm-6 hborder-r ">
		<div>
			存储<span class="font-success" id="cunl_kafka_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="cunl_kafka_svgnum" class="font-success">0%</span>
			<embed class="hmarg-tw" id="cunl_kafka_svg1"
				src="css/plugins//datacenter/cpu.svg" width="100%" height="62px"
				type="image/svg+xml" />
		</div>
	</div>
	
	
	
	
	<!-- -----------------redis------------ -->
	<div class="col-md-2 col-xs-5 col-sm-6  ">
		<div>
			总结点<span class="font-success" id="cunl2_redis_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="cunl2_redis_pie" class="marg-tx2 marg-l" width="62"
				height="62"></canvas>
		</div>
	</div>
	<div class="col-md-2 col-xs-5 col-sm-6  ">
		<div>
			存储<span class="font-success" id="cunl2_redis_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="cunl2_redis_svgnum" class="font-success">0%</span>
			<embed class="hmarg-tw" id="cunl2_redis_svg1"
				src="css/plugins//datacenter/cpu.svg" width="100%" height="62px"
				type="image/svg+xml" />
		</div>
	</div>

</div>


<!-- job数 -->
<div class="row border-t-gray marg-r-hf font-A2 background-r30 hor-center">
<!-- --------------strom ----------------------------->
	<div class="col-md-4 col-xs-5 col-sm-6  hborder-r">
		<!-- <div>
			job数<span class="font-success" id="">100</span>
		</div> -->
		<div>
			节点数<span class="font-success" id="cunl_storm_nodes">107/107</span>
		</div>
		<div>
			slot数<span class="font-success" id="cunl_storm_slot">正常</span>
		</div>
		<div>
			tasks数<span class="font-success" id="cunl_storm_tasks">正常</span>
		</div>
		<div>
			executors数<span class="font-success" id="cunl_storm_executors">正常</span>
		</div>
	</div>
	<!-- -----------------kafka-------------------- -->
	<div class="col-md-4 col-xs-5 col-sm-6  hborder-r">
		<div>
			 topic数量<span class="font-success" id="cunl_kafka_shishi">1000</span>
		</div>
		<div>
			存储使用率<span class="font-success" id="cunl_rate">60%</span>
		</div>

	</div>
	
	
	
	
	
	
	<!-- -------------------redis---------------- -->
	<div class="col-md-4 col-xs-5 col-sm-6  ">
		<div>
			代理存活数量<span class="font-success" id="cunl2_redis_proxy">4</span>
		</div>
		<div>
			组数存活数量<span class="font-success" id="cunl2_redis_group">4</span>
		</div>
		<div>
			dashboard状态<span class="font-success" id="cunl2_redis_dashboard">正常</span>
		</div>
		<div>
			存储使用率<span class="font-success" id="cunl2_redis_rate">60%</span>
		</div>
	</div>
</div>
<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/forinapp/cunliang.js"></script>