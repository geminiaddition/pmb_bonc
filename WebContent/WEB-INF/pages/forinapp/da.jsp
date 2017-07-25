<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="row marg-r-hf background-r30">
	<div class="hor-center ">
		<span class="font-A2">应用服务器访问量</span>
	</div>
</div>
<div class="row border-t-gray marg-r-hf background-r30">
	<div class="row  ">
		<div class="col-md-6 col-xs-5 col-sm-6 ">
			<div id="data_center_line" style="width: 390px; height: 220px"></div>

		</div>
	</div>

	<div class="row ">

		<div class="col-md-6 col-xs-5 col-sm-6 hborder-r ">




			<div class="font-T3">数据分析系统</div>

			<div class="row hor-center">
				<div class="col-md-6 ">
					<div class="row">
						<div class="font-T4 ">当前访问量</div>

					</div>
					<div class="row">
						<span id="get_line_down_to_fenxi_first" class="font-success-l">10</span>
					</div>
				</div>
				<div class="col-md-6 ">

					<div class="row">
						<div class="font-T4">服务运行状态</div>

					</div>

					<div class="row">
						<span id="get_line_down_to_fenxi_server" class="font-success-l">正常</span>
					</div>
				</div>
			</div>

			<div class="row hor-center">
				<div class="col-md-6 ">
					<div class="row">

						<div class="font-T4">磁盘使用率</div>

					</div>
					<div class="row">
						<span id="get_line_down_to_fenxi_mem" class="font-success-l">60%</span>
					</div>
				</div>
				<div class="col-md-6 ">
					<div class="row">
						<div class="font-T4">服务压力</div>
					</div>
					<div class="row">
						<span id="get_line_down_to_fenxi_power" class="font-success-l">10</span>
					</div>
				</div>
			</div>

		</div>
		<div class="col-md-6 col-xs-5 col-sm-6 ">
			<div class="font-T3">领导首页</div>

			<div class="row hor-center">
				<div class="col-md-6 ">

					<div class="row">
						<div class="font-T4 ">当前访问量</div>

					</div>

					<div class="row ">
						<span id="get_line_down_to_leader_first" class="font-success-l">10</span>
					</div>
				</div>
				<div class="col-md-6 ">
					<div class="row">

						<div class="font-T4">服务运行状态</div>

					</div>
					<div class="row">
						<span id="get_line_down_to_leader_server" class="font-success-l">正常</span>
					</div>
				</div>
			</div>

			<div class="row hor-center">
				<div class="col-md-6 ">

					<div class="row">
						<div class="font-T4">磁盘使用率</div>

					</div>
					<div class="row">
						<span id="get_line_down_to_leader_mem" class="font-success-l">60%</span>
					</div>
				</div>
				<div class="col-md-6 ">
					<div class="row">
						<div class="font-T4">服务压力</div>
					</div>
					<div class="row">
						<span id="get_line_down_to_leader_power" class="font-success-l">10</span>
					</div>
				</div>
			</div>
		</div>

	</div>

</div>
<div class=" row hor-center border-t-gray background-r30 marg-r-hf">
	<span class="font-A2">数据库</span>
</div>
<div class=" row hor-center border-t-gray background-r30 marg-r-hf">
	<span class="font-A2">DM集市</span>
</div>
<div class="row hor-center font-A2 background-r30 marg-r-hf">
	<div class="col-md-6 col-xs-5 col-sm-6 hborder-r ">
		<div>
			<span class="font-A2">节点1</span>
		</div>
		<div class="row border-t-gray">
			<div class="col-md-6 col-xs-5 col-sm-6  ">
				<div class="font-T3">内存占用</div>
				<div>
					<canvas id="dm_pie" class="marg-tx2 marg-l" width="62" height="62"></canvas>
				</div>
			</div>
			<div class="col-md-6 col-xs-5 col-sm-6  ">
				<div class="font-T3">CPU使用率</div>
				<div>
					<span id="dm_svgnum" class="font-success">0%</span>
					<embed class="hmarg-tw" id="dm_svg1"
						src="css/plugins//datacenter/cpu.svg" width="100%" height="62px"
						type="image/svg+xml" />
				</div>
			</div>

		</div>
		<div class="border-t-gray font-T4">
			session数<span class="font-success" id="dm_session">636</span>
		</div>
		<div class=" font-T4">
			网络连接状态<span class="font-success" id="dm_net">正常</span>
		</div>


	</div>
	<div class="col-md-6 col-xs-5 col-sm-6 ">
		<div>
			<span class="font-A2">节点2</span>
		</div>
		<div class="row border-t-gray">
			<div class="col-md-6 col-xs-5 col-sm-6  ">
				<div class="font-T3">内存占用</div>
				<div>
					<canvas id="dm2_pie" class="marg-tx2 marg-l" width="62" height="62"></canvas>
				</div>
			</div>
			<div class="col-md-6 col-xs-5 col-sm-6  ">
				<div class="font-T3">CPU使用率</div>
				<div>
					<span id="dm2_svgnum" class="font-success">0%</span>
					<embed class="hmarg-tw" id="dm2_svg1"
						src="css/plugins//datacenter/cpu.svg" width="100%" height="62px"
						type="image/svg+xml" />
				</div>
			</div>

		</div>
		<div class="border-t-gray font-T4">
			session数<span class="font-success" id="dm2_session">636</span>
		</div>
		<div class=" font-T4">
			网络连接状态<span class="font-success" id="dm2_net">正常</span>
		</div>
	</div>

</div>
<script src="js/jquery-2.1.1.js"></script>
<script src="js/echarts.js"></script>
<script src="js/plugins/forinapp/sjfx.js"></script>
