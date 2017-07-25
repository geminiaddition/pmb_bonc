<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 324机房 -->
<!-- 头 -->
<div class="row marg-r-hf background-r30">
	<div class="col-md-8 col-xs-5 col-sm-6 hborder-r">
		<div class="row">
			<div class="col-md-3 col-xs-5 col-sm-6 hborder-r">
				<div class="hor-center">
					<span id="dataIPsource" onclick="changeto(this);" style="cursor: pointer;" class="font-A2">IP溯源(Hbase)</span>
				</div>
				<div></div>
			</div>
			<div class="col-md-3 col-xs-5 col-sm-6 hborder-r">
				<div class="hor-center">
					<span id="datahistory" onclick="changeto(this);" style="cursor: pointer;" class="font-A2">历史详单备份(MPP)</span>
				</div>


			</div>
			<div class="col-md-6 col-xs-5 col-sm-6 ">
				<div class="hor-center">
					<span id="dataevent" onclick="changeto(this);" style="cursor: pointer;" class="font-A2">事务服务</span>
				</div>
				<div class="row hor-center">
					<div class="col-md-6  font-A3  hborder-r">
						<span class="font-A3">Kafka</span>
					</div>
					<div class="col-md-6 font-A3  ">
						<span class="font-A3">Redis</span>
					</div>
				</div>


			</div>

		</div>
	</div>


	<div class="col-md-4 col-xs-5 col-sm-6 ">
		<div class="hor-center">
			<span id="dataxlxlxlxl" onclick="changeto(this);" style="cursor: pointer;" class="font-A2">信令</span>
		</div>

	</div>



</div>
<!-- 饼图 SVG -->
<div class="row background-r30 marg-r-hf">
	<!-- --------------IP溯源----------- -->
	<div class="col-md-1 hborder-r font-A3 border-t-gray">
		<div>
			总结点<span class="font-success" id="ipsuyuan_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="ipsuyuan_pie" class="marg-tx4 marg-l" width="62"
				height="62"></canvas>
		</div>
	</div>
	<div class="col-md-1 hborder-r font-A3 border-t-gray">
		<div>
			存储<span class="font-success" id="ipsuyuan_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="ipsuyuan_svgnuma" class="font-success"></span>
			<embed id="ipsuyuan_svg1a" src="css/plugins//datacenter/cpu.svg"
				width="80px" height="62px" type="image/svg+xml" />
		</div>
	</div>

	<!-- --------------历史详单备份（MPP）----------- -->
	<div class="col-md-1 hborder-r font-A3 border-t-gray">
		<div>
			总结点<span class="font-success" id="lsxdbf_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="lsxdbf_pie" class="marg-tx4 marg-l" width="62"
				height="62"></canvas>
		</div>
	</div>
	<div class="col-md-1 hborder-r font-A3 border-t-gray">
		<div>
			存储<span class="font-success" id="lsxdbf_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="lsxdbf_svgnum" class="font-success">0%</span>
			<embed id="lsxdbf_svg1" src="css/plugins//datacenter/cpu.svg"
				width="80px" height="62px" type="image/svg+xml" />
		</div>
	</div>

	<!-- --------------事件服务（kafka）----------- -->
	<div class="col-md-1 hborder-r font-A3 border-t-gray">
		<div>
			总结点<span class="font-success" id="kafka_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="kafka_pie" class="marg-tx4 marg-l" width="62" height="62"></canvas>
		</div>
	</div>
	<div class="col-md-1  font-A3 border-t-gray hborder-r">
		<div>
			存储<span class="font-success" id="kafka_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="kafka_svgnum" class="font-success">0%</span>
			<embed id="kafka_svg1" src="css/plugins//datacenter/cpu.svg"
				width="80px" height="62px" type="image/svg+xml" />
		</div>
	</div>
	<!-- --------------事件服务（Redis））----------- -->
	<div class="col-md-1 hborder-r font-A3 border-t-gray">
		<div>
			总结点<span class="font-success" id="redis_nodes_totol">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="redis_pie" class="marg-tx4 marg-l" width="62" height="62"></canvas>
		</div>
	</div>
	<div class="col-md-1  font-A3 border-t-gray hborder-r">
		<div>
			存储<span class="font-success" id="redis_cunchu">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<div>
			<span id="redis_svgnum" class="font-success">0%</span>
			<embed id="redis_svg1" src="css/plugins//datacenter/cpu.svg"
				width="80px" height="62px" type="image/svg+xml" />
		</div>
	</div>
	<!-- --------------信令----------- -->
	<div class="col-md-2 hborder-r font-A3 border-t-gray hor-center">
		<div>
			总结点<span class="font-success">636</span>
		</div>
		<div>内存占用</div>
		<div>
			<canvas id="xinling_pie" class="marg-tx4 marg-l" width="62"
				height="62"></canvas>
		</div>
	</div>
	<div class="col-md-2  font-A3 border-t-gray hor-center">
		<div>
			存储<span class="font-success">2.93gp</span>
		</div>
		<div>CPU使用率</div>
		<span id="xinling_svgnum" class="font-success">0%</span>
		<div>
			
			<embed id="xinling_svg1" src="css/plugins//datacenter/cpu.svg"
				width="60px" height="62px" type="image/svg+xml" />
		</div>
	</div>
</div>


<!-- job数 -->
<div class="row background-r30 marg-r-hf">
	<!-- --------------IP溯源----------- -->
	<div class="col-md-2  font-A3 border-t-gray hborder-r">
		<div>
			节点数<span class="font-success" id="ipsuyuan_nodes">107/107</span>
		</div>
		<div>
			REGION数<span class="font-success" id="ipsuyuan_region">100000</span>
		</div>
		<div>
			REQUST数 <span class="font-success" id="ipsuyuan_requst">10000</span>
		</div>
		<div>
			存储使用率<span class="font-success" id="ipsuyuan_rate">60%</span>
		</div>
	</div>
	<!-- --------------历史详单备份----------- -->
	<div class="col-md-2  font-A3 border-t-gray hborder-r">
		<div>
			节点数<span class="font-success" id="lsxdbf_nodes">636/636</span>
		</div>

	</div>
	<!-- --------------事物服务（kafka）----------- -->
	<div class="col-md-2  font-A3 border-t-gray hborder-r">
		<div>
			节点数<span class="font-success" id="kafka_nodes">636/636</span>
		</div>
		<div>
			 topic数量<span class="font-success" id="shishi">1000</span>
		</div>
		<div>
			存储使用率：<span class="font-success" id="kafka_rate">70%</span>
		</div>
	</div>
	<!-- --------------事物服务（Redis）----------- -->
	<div class="col-md-2  font-A3 border-t-gray hborder-r">
		<div>
			代理存活数量<span class="font-success" id="redis_proxy">4</span>
		</div>
		<div>
			组数存活数量<span class="font-success" id="redis_group">4</span>
		</div>
		<div>
			dashboard状态<span class="font-success" id="redis_dashboard">正常</span>
		</div>
		<div>
			存储使用率<span class="font-success" id="redis_rate">60%</span>
		</div>
	</div>
	<!-- --------------信令----------- -->
	<div class="col-md-4  font-A3 border-t-gray hor-center">
		<div class="row">
			<div class="col-md-6 col-xs-5 col-sm-6 ">
				<div>
					job数：<span class="font-success" id="xinling_job">100</span>
				</div>
			</div>
			<div class="col-md-6 col-xs-5 col-sm-6 ">
				<div>
					节点数：<span class="font-success" id="xinling_nodes">100/100</span>
				</div>
			</div>
		</div>
		<div class="row border-t-gray">
			<div class="font-T5" id="xlxdjq" onclick="changeto(this);" style="cursor: pointer;">
				队列使用情况<span class="font-success" id="xinling_queue">23.5%</span>
			</div>
			<div>
				文件数<span class="font-success" id="xinling_txt">12W</span>
			</div>

		</div>
	</div>

</div>
<div class="row ">
	<div class="col-sm-8 ">

		<div class="row background-r30  border-t-gray marg-r-hf">
			<div class="row  marg-r-hf">

				<div class="row col-md-12 ">

					<div class="row  hor-center ">
						<span id="dataonetofive" onclick="changeto(this);" style="cursor: pointer;" class="font-A2">一证五卡</span>

					</div>

				</div>
			</div>

		</div>
		<div class="row background-r30  border-t-gray marg-r-hf">



			<div class="col-md-3 hborder-r">
				<div class="row hor-center ">
					<span class="font-A2">Hbase</span>
				</div>

				<div class="row border-t-gray">
					<div class="col-md-6 hborder-r">
						<div class="row float-r hmarg-tr">
							<font class="font-T3">总结点</font>
							<span id="yzwk_hbase_nodes_totol"
								class=" font-success">141</span>
						</div>

						<div class="row float-r hor-center hmarg-tr">


							<span class="font-T3">内存占用</span>

							<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
							<!--Canvas画布定义的内存环形图-->
							<div>
								<canvas id="yzwk_hbase_pie" class="marg-tx2 marg-l" width="62"
									height="62"></canvas>
							</div>
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="row hor-center hmarg-tr">
							<div class="col-md-9 ">
								<div class="row float-r ">
									<font class="font-T3">存储</font>
									<span id="yzwk_hbase_cunchu"
										class=" font-success">2.93P</span>

								</div>
							</div>
						</div>
						<div class="row hor-center  hmarg-tr">

							<div class="hor-center">
								<span class="font-T3">CPU使用率</span>
							</div>
							<div class="hor-center">
								<span id="yzwk_hbase_svgnum" class="font-success">0%</span>
								<embed class="hmarg-tw" id="yzwk_hbase_svg1"
									src="css/plugins//datacenter/cpu.svg" width="100%"
									height="62px" type="image/svg+xml" />
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
								<div id="yzwk_hbase_nodes" class=" font-success-l">21/21</div>
							</div>

						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">REGION数</font>
							</div>
							<div class="row">
								<div id="yzwk_hbase_region" class=" font-success-l">100000</div>
							</div>
						</div>
					</div>
					<div class="row hor-center marg-r-hf">

						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">REQUEST数</font>
							</div>
							<div class="row">
								<div id="yzwk_hbase_requst" class=" font-success-l">100000</div>
							</div>
						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">存储使用率</font>
							</div>
							<div class="row">
								<div id="yzwk_hbase_rate" class=" font-success-l">60%</div>
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
							<font class="font-T3">总结点</font>
							<span id="yzwk_storm_nodes_totol"
								class="font-success">141</span>
						</div>
						<div class="row float-r hor-center hmarg-tr">


							<span class="font-T3">内存占用</span>

							<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
							<!--Canvas画布定义的内存环形图-->
							<div>
								<canvas id="yzwk_storm_pie" class="marg-tx2 marg-l" width="62"
									height="62"></canvas>
							</div>
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="row hor-center hmarg-tr">
							<div class="col-md-9 ">
								<div class="row float-r ">
									<font class="font-T3">存储</font>
									<span id="yzwk_storm_cunchu"
										class="font-success">2.93P</span>
								</div>
							</div>
						</div>
						<div class="row hor-center  hmarg-tr">

							<div class="hor-center">
								<span class="font-T3">CPU使用率</span>
							</div>
							<div class="hor-center">
								<span id="yzwk_storm_svgnum" class="font-success">0%</span>
								<embed class="hmarg-tw" id="yzwk_storm_svg1"
									src="css/plugins//datacenter/cpu.svg" width="100%"
									height="62px" type="image/svg+xml" />
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
								<div id="yzwk_storm_nodes" class=" font-success-l">21/21</div>
							</div>

						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">slot数</font>
							</div>
							<div class="row">
								<div id="yzwk_storm_slot" class=" font-success-l">100000</div>
							</div>
						</div>
					</div>
					<div class="row hor-center marg-r-hf">

						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">executors数</font>
							</div>
							<div class="row">
								<div id="yzwk_storm_executors" class=" font-success-l">100000</div>
							</div>
						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">tasks数</font>
							</div>
							<div class="row">
								<div id="yzwk_storm_tasks" class=" font-success-l">100000</div>
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
							<font class="font-T3">总结点</font>
							<span id="yzwk_kafka_nodes_totol"
								class="font-success">141</span>
						</div>
						<div class="row float-r hor-center hmarg-tr">


							<span class="font-T3">内存占用</span>

							<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
							<!--Canvas画布定义的内存环形图-->
							<div>
								<canvas id="yzwk_kafka_pie" class="marg-tx2 marg-l" width="62"
									height="62"></canvas>
							</div>
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="row hor-center hmarg-tr">
							<div class="col-md-9 ">
								<div class="row float-r ">
									<font class="font-T3">存储</font>
									<span id="yzwk_kafka_cunchu"
										class=" font-success-l">2.93P</span>
								</div>
							</div>
						</div>
						<div class="row float-r  hmarg-tr">

							<div class="hor-center">
								<span class="font-T3">CPU使用率</span>
							</div>
							<div class="hor-center">
								<span id="yzwk_kafka_svgnum" class="font-success">0%</span>
								<embed class="hmarg-tw" id="yzwk_kafka_svg1"
									src="css/plugins//datacenter/cpu.svg" width="100%"
									height="62px" type="image/svg+xml" />
							</div>
						</div>
					</div>

				</div>

				<div class="row border-t-gray ">
					<div class="row hor-center  marg-r-hf ">
						<div class="row col-xs-6 hmarg-tl ">
							<div class="row">
								<font class="font-T4"> topic数量</font>
							</div>
							<div class="row">
								<div id="yzwk_shishi" class=" font-success-l"></div>
							</div>

						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">节点数</font>
							</div>
							<div class="row">
								<div id="yzwk_kafka_nodes" class=" font-success-l"></div>
							</div>
						</div>
					</div>
					<div class="row hor-center marg-r-hf">

						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">存储使用率</font>
							</div>
							<div class="row">
								<div id="yzwk_kafka_rate" class=" font-success-l"></div>
							</div>
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
							<font class="font-T3">总结点</font>
							<span id="yzwk_redis_nodes_totol"
								class=" font-success">141</span>
						</div>
						<div class="row float-r hor-center hmarg-tr">


							<span class="font-T3">内存占用</span>

							<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
							<!--Canvas画布定义的内存环形图-->
							<div>
								<canvas id="yzwk_redis_pie" class="marg-tx2 marg-l" width="62"
									height="62"></canvas>
							</div>
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="row hor-center hmarg-tr">
							<div class="col-md-9 ">
								<div class="row float-r ">
									<font class="font-T3">存储</font>
									<span id="yzwk_redis_cunchu"
										class=" font-success">2.93P</span>
								</div>
							</div>
						</div>
						<div class="row float-r  hmarg-tr">

							<div class="hor-center">
								<span class="font-T3">CPU使用率</span>
							</div>
							<div class="hor-center">
								<span id="yzwk_redis_svgnum" class="font-success">0%</span>
								<embed class="hmarg-tw" id="yzwk_redis_svg1"
									src="css/plugins//datacenter/cpu.svg" width="100%"
									height="62px" type="image/svg+xml" />
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
								<div id="yzwk_redis_proxy" class=" font-success-l">6</div>
							</div>

						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">数组存活数量</font>
							</div>
							<div class="row">
								<div id="yzwk_redis_group" class=" font-success-l">6</div>
							</div>
						</div>
					</div>
					<div class="row hor-center marg-r-hf">

						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">dashboard状态</font>
							</div>
							<div class="row">
								<div id="yzwk_redis_dashboard" class=" font-success-l">正常</div>
							</div>
						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">存储使用率</font>
							</div>
							<div class="row">
								<div id="yzwk_redis_rate" class=" font-success-l">60%</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

	<div class="col-sm-4 ">

		<jsp:include page="fortoonine.jsp"></jsp:include>
	</div>

</div>

<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/datacenter/saner4.js"></script>