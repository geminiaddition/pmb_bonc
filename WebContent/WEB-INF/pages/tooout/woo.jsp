<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="row ">
	<div class="col-sm-12 ">

		<div class="row background-r30   marg-r-hf">

			
				<div class=" col-md-8 hborder-r">

					<div class="row  hor-center ">
						<font class="font-A1">324机房</font>

					</div>

				</div>
				<div class=" col-md-4 ">

					<div class="row  hor-center ">
						<font class="font-A1">419机房</font>

					</div>

				</div>

			
		</div>
		<div class="row background-r30  border-t-gray marg-r-hf">



			<div class="col-md-4 hborder-r">
				<div class="row hor-center ">
					<span class="font-A2">YARN</span>
				</div>

				<div class="row border-t-gray">
					<div class="col-md-6 hborder-r">
						<div class="row float-r hmarg-tr">
							<font class="font-T3">总结点</font>
							<span id="wo_yarn_total"
								class=" font-success">141</span>
						</div>
						<div class="row float-r hor-center hmarg-tr">


							<span class="font-T3">内存占用</span>

							<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
							<!--Canvas画布定义的内存环形图-->
							<div>
								<canvas id="wo_yarn_mem" class="marg-tx4 marg-l" width="62"
									height="62"></canvas>
							</div>
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="row float-r hmarg-tr">
							<font class="font-T4">存储</font>
							<span id="wo_yarn_storage"
								class=" font-success-l">2.93P</span>
						</div>
						<div class="row float-r  hmarg-tr">

							<div class="hor-center">
								<span class="font-T3">CPU使用率</span>
							</div>
							<div class="hor-center">
								<span id="wo_yarn_cpu_one" class="font-success">0%</span>
								<embed class="hmarg-tl" id="wo_yarn_cpu"
									src="css/plugins/datacenter/cpu.svg"
									width="100%" height="100%" type="image/svg+xml" />
							</div>
						</div>
					</div>

				</div>

				<div class="row border-t-gray hor-center ">

					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-T4">job数</font>
						</div>
						<div class="row">
							<div id="wo_yarn_job" class=" font-success-l">100</div>
						</div>

					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-T4">节点数</font>
						</div>
						<div class="row">
							<div id="wo_yarn_acnode" class=" font-success-l">141/141</div>
						</div>
					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<span class="font-T4" id="wo324yarn" onclick="changeto(this);" style="cursor: pointer;">队列使用情况</span>
							
						</div>
						<div class="row">
							<div id="wo_yarn_query" class="font-success-l">23.5%</div>
						</div>
					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-A3">文件数</font>
						</div>
						<div class="row">
							
							<div id="wo_yarn_files" class=" font-success-l">23W</div>
						</div>
					</div>


				</div>

			</div>
			<div class="col-md-4 hborder-r">
				<div class="row hor-center ">
					<span class="font-A2">Kafka</span>
				</div>

				<div class="row border-t-gray">
					<div class="col-md-6 hborder-r">
						<div class="row float-r hmarg-tr">
							<font class="font-T3">总结点</font>
							<span id="wo_kafka_total"
								class=" font-success">141</span>
						</div>
						<div class="row float-r hor-center hmarg-tr">


							<span class="font-T3">内存占用</span>

							<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
							<!--Canvas画布定义的内存环形图-->
							<div>
								<canvas id="wo_kafka_mem" class="marg-tx4 marg-l" width="62"
									height="62"></canvas>
							</div>
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="row float-r hmarg-tr">
							<font class="font-T3">存储</font>
							<span id="wo_kafka_storage"
								class=" font-success">2.93P</span>
						</div>
						<div class="row float-r  hmarg-tr">

							<div class="hor-center">
								<span class="font-T3">CPU使用率</span>
							</div>
							<div class="hor-center">
								<span id="wo_kafka_cpu_one" class="font-success">0%</span>
								<embed  class="hmarg-tl" id="wo_kafka_cpu"
									src="css/plugins/datacenter/cpu.svg"
									width="100%" height="100%" type="image/svg+xml" />
							</div>
						</div>
					</div>

				</div>

				<div class="row border-t-gray ">




					<div class="row hor-center marg-r-hf">

						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-T4"> topic数量</font>
							</div>
							<div class="row">
								<div id="wo_kafka_ssnetwork" class=" font-success-l">12</div>
							</div>
						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-T4">存储使用率</font>
							</div>
							<div class="row">
								<div id="wo_kafka_storage_per" class=" font-success-l">60%</div>
							</div>
						</div>
					</div>


				</div>

			</div>

			<div class="col-md-4 ">
				<div class="row hor-center ">
					<span class="font-A2">Redis、Mysql</span>
				</div>

				<div class="row border-t-gray">
					<div class="col-md-6 hborder-r">
						<div class="row float-r hmarg-tr">
							<font class="font-T3">总结点</font>
							<span id="wo_ry_total"
								class="font-success">141</span>
						</div>
						<div class="row float-r hor-center hmarg-tr">


							<span class="font-T3">内存占用</span>

							<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
							<!--Canvas画布定义的内存环形图-->
							<div>
								<canvas id="wo_rm_mem" class="marg-tx4 marg-l" width="62"
									height="62"></canvas>
							</div>
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="row float-r hmarg-tr">
							<font class="font-T3">存储</font>
							<span id="wo_rm_storage"
								class=" font-success">2.93P</span>
						</div>
						<div class="row float-r  hmarg-tr">

							<div class="hor-center">
								<span class="font-T3">CPU使用率</span>
							</div>
							<div class="hor-center">
								<span id="wo_rm_cpu_one" class="font-success">0%</span>
								<embed class="hmarg-tl" id="wo_rm_cpu"
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
								<font class="font-T4">代理存活数量</font>
							</div>
							<div class="row">
								<div id="wo_rm_proxy" class=" font-success-l">6</div>
							</div>

						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">数组存活数量</font>
							</div>
							<div class="row">
								<div id="wo_rm_query" class=" font-success-l">6</div>
							</div>
						</div>
					</div>
					<div class="row hor-center marg-r-hf">

						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">dashboard状态</font>
							</div>
							<div class="row">
								<div id="wo_rm_dashboard" class=" font-success-l">正常</div>
							</div>
						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">存储使用率</font>
							</div>
							<div class="row">
								<div id="wo_rm_saveuse" class=" font-success-l">60%</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>



</div>
<div class="row ">
	<div class="col-sm-12 ">

		<div class="row background-r30  border-t-gray marg-r-hf">

			<div class="col-md-4 hborder-r">
				<div class="row hor-center ">
					<span class="font-A2">301机房（Redis）</span>
				</div>

				<div class="row border-t-gray">
					<div class="col-md-6 hborder-r">
						<div class="row float-r hmarg-tr">
							<font class="font-T3">总结点</font>
							<span id="wo_redis_total"
								class="font-success">141</span>
						</div>
						<div class="row float-r hor-center hmarg-tr">


							<span class="font-T3">内存占用</span>

							<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
							<!--Canvas画布定义的内存环形图-->
							<div>
								<canvas id="wo_redis_mem" class="marg-tx4 marg-l" width="62"
									height="62"></canvas>
							</div>
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="row float-r hmarg-tr">
							<font class="font-T3">存储</font>
							<span id="wo_redis_storage"
								class=" font-success">2.93P</span>
						</div>
						<div class="row float-r  hmarg-tr">

							<div class="hor-center">
								<span class="font-T3">CPU使用率</span>
							</div>
							<div class="hor-center">
								<span id="wo_redis_cpu_one" class="font-success">0%</span>
								<embed class="hmarg-tl" id="wo_redis_cpu"
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
								<font class="font-T4">代理存活数量</font>
							</div>
							<div class="row">
								<div id="wo_redis_proxy" class=" font-success-l">6</div>
							</div>

						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">数组存活数量</font>
							</div>
							<div class="row">
								<div id="wo_redis_query" class=" font-success-l">6</div>
							</div>
						</div>
					</div>
					<div class="row hor-center marg-r-hf">

						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">dashboard状态</font>
							</div>
							<div class="row">
								<div id="wo_redis_dashboard" class=" font-success-l">正常</div>
							</div>
						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">存储使用率</font>
							</div>
							<div class="row">
								<div id="wo_redis_saveuse" class=" font-success-l">60%</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-8 ">
				<div class="row background-r30   marg-r-hf">
					<div class="row  marg-r-hf">
						<div class="row col-md-12 ">
							<div class="row  hor-center ">
								<span id="jzyxinnerrr" onclick="changeto(this);" style="cursor: pointer;" class="font-A2">应用服务器</span>
							</div>
						</div>
					</div>
				</div>
				<div class="row hor-center marg-r-hf " id="wo_line_1" style="width: 320px; height: 140px"></div>
				<div class="row border-t-gray hor-center marg-r-hf ">

					<div class="row col-xs-6 hborder-r hmarg-tl ">
						<div class="row">
							<font class="font-A2">CPU使用率</font>
						</div>
						<div class="row">
							<div id="CPU_wosy" class=" font-success"></div>
						</div>

					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-A2">内存占用率</font>
						</div>
						<div class="row">
							<div id="men_wozy" class=" font-success"></div>
						</div>
					</div>

				</div>
				<div class="row hor-center marg-r-hf ">

					<div class="row col-xs-6 hborder-r hmarg-tl ">
						<div class="row">
							<font class="font-A2">服务运行状态</font>
						</div>
						<div class="row">
							<div id="fuwu_zt" class=" font-success"></div>
						</div>

					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-A2">磁盘使用率</font>
						</div>
						<div class="row">
							<div id="cipan_wo" class=" font-success"></div>
						</div>
					</div>

				</div>





			</div>



		</div>

	</div>



</div>

<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/toout/wo.js"></script>
<script src="js/echarts.js"></script>