<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="row background-r30   marg-r-hf">
	<div class="col-md-12 ">
		<div class="row hor-center ">
			<span class="font-T4">324机房（HBase）</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row hor-center hmarg-tr">
					<font class="font-T5">总结点</font>

				</div>
				<div class="row hor-center hmarg-tr">
					<div id="woow_hbase_total" class=" font-success-l">40</div>
				</div>
				<div class="row hor-center hmarg-tr">


					<span class="font-T5">内存占用</span>

				</div>

				<div class="row hor-center hmarg-tr ">
					<div>
						<canvas id="woow_hbase_mem" class="marg-tx2 marg-ll5" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row hor-center hmarg-tr">
					<font class="font-T5">存储</font>

				</div>
				<div class="row hor-center hmarg-tr">
					<div id="woow_hbase_storage"
						class="font-success-l">2.93P</div>
				</div>
				<div class="row hor-center hmarg-tr">

					<div class="hor-center">
						<span class="font-T5">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="woow_hbase_cpu_one" class="font-success-l">0%</span>
						<embed class=" marg-ll8"  id="woow_hbase_cpu" src="css/plugins/datacenter/cpu2.svg"
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
						<div id="woow_hbase_acnode" class=" font-success-l">66/66</div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T5">REGION数</font>
					</div>
					<div class="row">
						<div id="woow_hbase_region" class=" font-success-l">100000</div>
					</div>
				</div>
			</div>
			<div class="row hor-center marg-r-hf">

				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T5">REQUEST数</font>
					</div>
					<div class="row">
						<div id="woow_hbase_requst" class=" font-success-l">100000</div>
					</div>
				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T5">存储使用率</font>
					</div>
					<div class="row">
						<div id="woow_hbase_storageper" class=" font-success-l">60%</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/toout/woow.js"></script>