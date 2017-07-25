<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="row background-r30   marg-r-hf">



	<div class="col-md-4 hborder-r">
		<div class="row hor-center ">
			<span class="font-A2">301机房（HBase）</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">总结点</font>
					<span id="zx_one_hbase_total"
						class=" font-success">141</span>
				</div>
				<div class="row float-r hor-center hmarg-tr">


					<span class="font-T3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="zx_one_hbase_mem" class="marg-tx4 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">存储</font>
					<span id="zx_one_hbase_storage"
						class=" font-success">2.93P</span>
				</div>
				<div class="row float-r  ">

					<div class="hor-center">
						<span class="font-T3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="zx_one_hbase_cpu_one" class="font-success">0%</span>
						<embed class="hmarg-trr" id="zx_one_hbase_cpu" src="css/plugins/datacenter/cpu.svg"
							width="100%" height="72" type="image/svg+xml" />
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">
			<div class="row hor-center  marg-r-hf ">
				<div class="row col-xs-6 hmarg-tl ">
					<div class="row">
						<font class="font-T4">节点数</font>
					</div>
					<div class="row">
						<div id="zx_one_hbase_acnode" class=" font-success-l">66/66</div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">REGION数</font>
					</div>
					<div class="row">
						<div id="zx_one_hbase_region" class=" font-success-l">100000</div>
					</div>
				</div>
			</div>
			<div class="row hor-center marg-r-hf">

				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">REQUEST数</font>
					</div>
					<div class="row">
						<div id="zx_one_hbase_requst" class=" font-success-l">100000</div>
					</div>
				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">存储使用率</font>
					</div>
					<div class="row">
						<div id="zx_one_hbase_storageper" class=" font-success-l">60%</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="col-md-4 hborder-r">
		<div class="row hor-center ">
			<span class="font-A2">324机房（HBase）</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">总结点</font>
					<span id="zx_four_hbase_total"
						class=" font-success">141</span>
				</div>
				<div class="row float-r hor-center hmarg-tr">


					<span class="font-T3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="zx_four_hbase_mem" class="marg-tx4 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">存储</font>
					<span id="zx_four_hbase_storage"
						class=" font-success-l">2.93P</span>
				</div>
				<div class="row float-r ">

					<div class="hor-center">
						<span class="font-T3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="zx_four_hbase_cpu_one" class="font-success">0%</span>
						<embed class="hmarg-trr" id="zx_four_hbase_cpu" src="css/plugins/datacenter/cpu.svg"
							width="100%" height="72" type="image/svg+xml" />
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">
			<div class="row hor-center  marg-r-hf ">
				<div class="row col-xs-6 hmarg-tl ">
					<div class="row">
						<font class="font-T4">节点数</font>
					</div>
					<div class="row">
						<div id="zx_four_hbase_acnode" class=" font-success-l">66/66</div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">REGION数</font>
					</div>
					<div class="row">
						<div id="zx_four_hbase_region" class=" font-success-l">100000</div>
					</div>
				</div>
			</div>
			<div class="row hor-center marg-r-hf">

				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">REQUEST数</font>
					</div>
					<div class="row">
						<div id="zx_four_hbase_requst" class=" font-success-l">100000</div>
					</div>
				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">存储使用率</font>
					</div>
					<div class="row">
						<div id="zx_four_hbase_storageper" class=" font-success-l">60%</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-4 ">
		<div class="row background-r30   marg-r-hf">
			<div class="row  marg-r-hf">
				<div class="row  col-md-12 ">
					<div class="row  hor-center ">
						<span id="zxinnerrr" onclick="changeto(this);" style="cursor: pointer;" class="font-A2">征信平台       应用服务器</span>
					</div>
				</div>
			</div>
			<div class="row  marg-r-hf">
				<div class="col-md-12 "  >
			<div   id="zx_line" style="width: 245px; height: 135px"></div></div>
			</div>
			</div>
			<div class="row border-t-gray hor-center marg-r-hf ">

				<div class="row col-xs-6 hborder-r hmarg-tl ">
					<div class="row">
						<font class="font-T3">CPU使用率</font>
					</div>
					<div class="row">
						<div id="zhengxin_cpu_xia" class=" font-success"></div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T3">内存占用率</font>
					</div>
					<div class="row">
						<div id="zhengxin_nei_xia" class=" font-success"></div>
					</div>
				</div>

			</div>
			<div class="row hor-center marg-r-hf ">

				<div class="row col-xs-6 hborder-r hmarg-tl ">
					<div class="row">
						<font class="font-T3">服务运行状态</font>
					</div>
					<div class="row">
						<div id="zx_state_xia" class=" font-success"></div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T3">磁盘使用率</font>
					</div>
					<div class="row">
						<div id="zx_ci" class=" font-success"></div>
					</div>
				</div>

			</div>
			
			
		</div>


	</div>
</div>
<script src="js/jquery-2.1.1.js"></script>
<script src="js/echarts.js"></script>
<script src="js/plugins/toout/zx.js"></script>