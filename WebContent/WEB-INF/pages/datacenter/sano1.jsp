<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 301机房 -->
<!-- 一体化  bss -->
<div class="row marg-r-hf background-r30">
	<div class="col-md-8 col-xs-5 col-sm-6 hborder-r">
		<div class="row ">
			<div class="hor-center">
				<span id="dataonecluster" onclick="changeto(this);" style="cursor: pointer;" class="font-A2">一体化集群</span>
			</div>

			<div class="col-md-6 col-xs-5 col-sm-6 hborder-r border-t-gray">
				<span id="allNodesOrcl" class="font-A3">互联网分)析、综采话单处理
					结算业务、cbss数据下发(YARN </span>
			</div>
			<div class="col-md-6 col-xs-5 col-sm-6 border-t-gray">
				<span id="allNodesOrcl" class="font-A3">cbss历史详单查询(hbase) </span>
			</div>
		</div>
	</div>
	<div class="col-md-4 col-xs-5 col-sm-6 ">
		<div class="hor-center">
			<span class="font-A2">BSS采集整合</span>
		</div>
	</div>



</div>
<div class="row background-r30 marg-r-hf">
<!-- -------------yarm cpu---------- -->
	<div class="col-md-2 hborder-r font-A3 border-t-gray">
		<div>
			总结点<span class="font-success" id="yarm_nodes_totol"></span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="yarm_pie" class="marg-tx4 marg-l" width="62" height="62"></canvas>
		</div>
	</div>
	<div class="col-md-2 hborder-r font-A3 border-t-gray">
		<div>
			存储<span class="font-success" id="cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div class="hor-center">
			<span id="yarm_svgnum" class="font-success">0%</span>
			<embed id="yarm_svg1"
				src="css/plugins/datacenter/cpu.svg"
				width="80px" height="62px" type="image/svg+xml" />
		</div>
	</div>
<!-- -------------hbase  cpu---------- -->

	<div class="col-md-2 hborder-r font-A3 border-t-gray">
		<div>
			总结点<span class="font-success" id="hbase_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="hbase_pie" class="marg-tx4 marg-l" width="62" height="62"></canvas>
		</div>
	</div>
	<div class="col-md-2 hborder-r font-A3 border-t-gray">
		<div>
			存储<span class="font-success" id="hbase_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="hbase_svgnum" class="font-success">0%</span>
			<embed id="hbase_svg1"
				src="css/plugins/datacenter/cpu.svg"
				width="80px" height="62px" type="image/svg+xml" />
		</div>
	</div>
	
<!-- -------------bss cpu---------- -->
	<div class="col-md-2 hborder-r font-A3 border-t-gray">
		<div>
			总结点<span class="font-success" id="bss_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="bss_pie" class="marg-tx4 marg-l" width="62" height="62"></canvas>
		</div>
	</div>
	<div class="col-md-2  font-A3 border-t-gray">
		<div>
			存储<span class="font-success" id="bss_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="bss_svgnum" class="font-success">0%</span>
			<embed id="bss_svg1"
				src="css/plugins/datacenter/cpu.svg"
				width="80px" height="62px" type="image/svg+xml" />
		</div>
	</div>
</div>


<!-- job数、节点数 -->
<div class="row background-r30 marg-r-hf">

<!-- -------------yarm job数、节点数---------- -->

	<div class="col-md-4  font-A3 border-t-gray hborder-r">
		<div>
			job数&nbsp;<span class="font-success" id ="yarm_job"></span>节点数<span
				class="font-success" id="yarm_nodes"></span>
		</div>
		<div class="border-t-gray"><span id="firstquery" onclick="changeto(this);" style="cursor: pointer;">队列使用情况</span><span class="font-success" id="queue">23.9%</span></div>
		<div>
			文件数：<span class="font-success" id="txt">23W</span>
		</div>
	</div>
<!-- -------------hbase job数、节点数---------- -->

	<div class="col-md-4  font-A3 border-t-gray hborder-r">
		<div>
			节点数<span class="font-success" id="hbase_nodes">107/107</span>
		</div>
		<div>
			REGION数<span class="font-success" id="hbase_region">100000</span>
		</div>
		<div>
			REQUST数 <span class="font-success"  id="hbase_requst">10000</span>
		</div>
		<div>
			存储使用率<span class="font-success"  id="hbase_rate"></span>
		</div>
	</div>
	
<!-- -------------bss job数、节点数---------- -->

	<div class="col-md-4  font-A3 border-t-gray ">
		<div>
			job数&nbsp;<span class="font-success" id ="bss_job">100</span>节点数<span
				class="font-success" id="bss_nodes">636/636</span>
		</div>
		<div class="border-t-gray"><span id="bssgetall" onclick="changeto(this);" style="cursor: pointer;">队列使用情况</span><span class="font-success" id="bss_queue">23.9%</span></div>
		<div>
			文件数：<span class="font-success" id="bss_txt">23W</span>
		</div>
	</div>

</div>

<!-- 一体化集群--cbss实时 -->
<div class="row background-r30 marg-r-hf border-t-gray">
	<div class="hor-center">
		<span id="dataoneclustercb" onclick="changeto(this);" style="cursor: pointer;" class="font-A2">一体化集群--cbss实时</span>
	</div>
</div>




<div class="row background-r30  border-t-gray marg-r-hf">



	<div class="col-md-3 hborder-r">
		<div class="row hor-center ">
			<span class="font-A2">HBase</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-A3">总结点</font>
					<span id="threehbaseall"
						class=" font-success-l">141</span> 
				</div>
				<div class="row float-r hor-center ">


					<span class="font-A3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div class="float-r hmarg-tl">
						<canvas id="threehbasepie" class="marg-tx4 marg-l hor-center" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-A3">存储</font>
					<span id="threehbaseinput"
						class=" font-success-l">2.93P</span>
				</div>
				<div class="row float-r  hor-center">

					
						<span class="font-A3">CPU使用率</span>
					
					<div class=" hor-center">
						<span id="threehbasecpuone" class="font-success-l">0%</span>
						
						<embed class="hmarg-tl" id="threehbasecpupic"
							src="css/plugins/datacenter/cpu.svg"
							width="100%" height="62px" type="image/svg+xml" />
							
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
						<div id="threehbasenodes" class=" font-success-l">6</div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">REGION数</font>
					</div>
					<div class="row">
						<div id="threehbaseregion" class=" font-success-l">6</div>
					</div>
				</div>
			</div>
			<div class="row hor-center marg-r-hf">

				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">REQUEST数</font>
					</div>
					<div class="row">
						<div id="threehbaserequest" class=" font-success-l">10000</div>
					</div>
				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">存储使用率</font>
					</div>
					<div class="row">
						<div id="threehbasesaveuse" class=" font-success-l">60%</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-3 hborder-r">
		<div class="row hor-center ">
			<span class="font-A2">Storm</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-A3">总结点</font>
					<span id="threestormall"
						class=" font-success-l">31</span>
				</div>
				<div class="row float-r hor-center ">


					<span class="font-A3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div class="float-r hmarg-tl">
						<canvas id="threestormpie" class="marg-tx4 marg-l hor-center" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-A3">存储</font>
					<span id="threestrominput"
						class="font-success-l">2.93P</span>
				</div>
				<div class="row float-r  hor-center">

					
						<span class="font-A3">CPU使用率</span>
					
					<div class=" hor-center">
						<span id="threestormcpuone" class="font-success-l">0%</span>
						
						<embed class="hmarg-tl" id="threestormcpupic"
							src="css/plugins/datacenter/cpu.svg"
							width="100%" height="62px" type="image/svg+xml" />
							
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
						<div id="threestormnodes" class=" font-success-l">31/31</div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T4">slot数</font>
					</div>
					<div class="row">
						<div id="threestormslot" class=" font-success-l">100</div>
					</div>
				</div>
			</div>
			<div class="row hor-center marg-r-hf">

				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T4">executors数</font>
					</div>
					<div class="row">
						<div id="threestormexecutors" class=" font-success-l">1000</div>
					</div>
				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T4">tasks数</font>
					</div>
					<div class="row">
						<div id="threestormtasks" class=" font-success-l">100</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-3 hborder-r">
		<div class="row hor-center ">
			<span class="font-A2">Kafka</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-A3">总结点</font>
					<span id="threekafkaall"
						class="font-success-l">31</span>
				</div>
				<div class="row float-r hor-center ">


					<span class="font-A3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div class="float-r hmarg-tl">
						<canvas id="threekafkapie" class="marg-tx4 marg-l hor-center" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-A3">存储</font>
					<span id="threekafkainput"
						class="font-success-l">2.93P</span>
				</div>
				<div class="row float-r  hor-center">

					
						<span class="font-A3">CPU使用率</span>
					
					<div class=" hor-center">
						<span id="threekafkacpuone" class="font-success-l">0%</span>
						
						<embed class="hmarg-tl" id="threekafkacpupic"
							src="css/plugins/datacenter/cpu.svg"
							width="100%" height="62px" type="image/svg+xml" />
							
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">

			<div class="row col-xs-6  hmarg-tl">
				<div class="row hor-center" >
					<font class="font-A3">topic数量</font>
				</div>
				<div class="row hor-center">
					<div id="threekafkanetwork" class=" font-success-l">100</div>
				</div>

			</div>
			<div class="row col-xs-6 hor-center  hmarg-tl">
				<div class="row">
					<font class="font-A3">存储使用率</font>
				</div>
				<div class="row hor-center">
					<div id="threekafkasaveuse" class=" font-success-l">60%</div>
				</div>
			</div>



		</div>
	</div>
	<div class="col-md-3 ">
		<div class="row hor-center ">
			<span class="font-A2">Redis</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-A3">总结点</font>
					<span id="threeredisall"
						class=" font-success-l">31</span>
				</div>
				<div class="row float-r hor-center ">


					<span class="font-A3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div class="float-r hmarg-tl">
						<canvas id="threeredispie" class="marg-tx4 marg-l hor-center" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-A3">存储</font>
					<span id="threeredisinput"
						class=" font-success-l">2.93P</span>
				</div>
				<div class="row float-r  hor-center">

					
						<span class="font-A3">CPU使用率</span>
					
					<div class=" hor-center">
						<span id="threerediscpuone" class="font-success-l">0%</span>
						
						<embed class="hmarg-tl" id="threerediscpupic"
							src="css/plugins/datacenter/cpu.svg"
							width="100%" height="62px" type="image/svg+xml" />
							
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">
			<div class="row hor-center  marg-r-hf ">
				<div class="row col-xs-6 hmarg-tl ">
					<div class="row">
						<font class="font-T4">代理存活数量</font>
					</div>
					<div class="row">
						<div id="threeredisproxy" class=" font-success-l">18</div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">数组存活数量</font>
					</div>
					<div class="row">
						<div id="threeredisgroup" class=" font-success-l">18</div>
					</div>
				</div>
			</div>
			<div class="row hor-center marg-r-hf">

				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">dashboard状态</font>
					</div>
					<div class="row">
						<div id="threeredisdashboard" class=" font-success-l">正常</div>
					</div>
				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A3">存储使用率</font>
					</div>
					<div class="row">
						<div id="threeredissaveuse" class=" font-success-l">60%</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/datacenter/sano1.js"></script>












