<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="row background-r30   marg-r-hf">
	<div class="col-md-6 hborder-r">
		<div class="row hor-center ">
			<span class="font-T3">324机房（HBase）</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">总结点</font>
					<span id="ks_hbase_total"
						class=" font-success">141</span>
				</div>
				<div class="row float-r hor-center hmarg-tr">


					<span class="font-T3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="ks_hbase_mem" class="marg-tx4 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">存储</font>
					<span id="ks_hbase_storage"
						class=" font-success">2.93P</span>
				</div>
				<div class="row float-r  hmarg-tr">

					<div class="hor-center">
						<span class="font-T3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="ks_hbase_cpu_one" class="font-success">0%</span>
						<embed class="hmarg-tl" id="ks_hbase_cpu"
							src="css/plugins/datacenter/cpu.svg"
							width="100%" height="100%" type="image/svg+xml" />
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">
			<div class="row hor-center  marg-r-hf ">
				<div class="row col-xs-6 hmarg-tl ">
					<div class="row">
						<font class="font-T5">节点数</font>
					</div>
					<div class="row">
						<div id="ks_hbase_acnode" class=" font-success-l">66/66</div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T5">REGION数</font>
					</div>
					<div class="row">
						<div id="ks_hbase_region" class=" font-success-l">100000</div>
					</div>
				</div>
			</div>
			<div class="row hor-center marg-r-hf">

				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T5">REQUEST数</font>
					</div>
					<div class="row">
						<div id="ks_hbase_requst" class=" font-success-l">100000</div>
					</div>
				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T5">存储使用率</font>
					</div>
					<div class="row">
						<div id="ks_hbase_storageper" class=" font-success-l">60%</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6">
		<div class="row hor-center ">
			<span class="font-T3">419机房（Redis）</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">总结点</font>
					<span id="ks_redis_total"
						class="font-success">141</span>
				</div>
				<div class="row float-r hor-center hmarg-tr">


					<span class="font-T3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="ks_redis_mem" class="marg-tx4 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">存储</font>
					<span id="ks_redis_storage"
						class="font-success-l">2.93P</span>
				</div>
				<div class="row float-r  hmarg-tr">

					<div class="hor-center">
						<span class="font-T3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="ks_redis_cpu_one" class="font-success">0%</span>
						<embed class="hmarg-tl" id="ks_redis_cpu"
							src="css/plugins/datacenter/cpu.svg"
							width="100%" height="100%" type="image/svg+xml" />
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">
			<div class="row hor-center  marg-r-hf ">
				<div class="row col-xs-6 hmarg-tl ">
					<div class="row">
						<font class="font-T5">代理存活数量</font>
					</div>
					<div class="row">
						<div id="ks_redis_proxy" class=" font-success-l">6</div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T5">数组存活数量</font>
					</div>
					<div class="row">
						<div id="ks_redis_query" class=" font-success-l">6</div>
					</div>
				</div>
			</div>
			<div class="row hor-center marg-r-hf">

				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T5">dashboard状态</font>
					</div>
					<div class="row">
						<div id="ks_redis_dashboard" class=" font-success-l">正常</div>
					</div>
				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T5">存储使用率</font>
					</div>
					<div class="row">
						<div id="ks_redis_saveuse" class=" font-success-l">60%</div>
					</div>
				</div>
			</div>
		</div>
	</div>


</div>
<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/toout/ks.js"></script>