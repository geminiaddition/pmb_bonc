<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="row ">
	<div class="col-sm-6 ">
		<div class="row background-r30 ">



			<div class="col-md-6 hborder-r">
				<div class="row hor-center ">
					<span class="font-A1">301机房（YARN）</span>
				</div>
				
				<div class="row border-t-gray">
					<div class="col-md-6 hborder-r">
						<div class="row float-r hmarg-tr">
							<font class="font-T3">总结点</font>
							<span id="power_yarn_one_total"
								class=" font-success">141</span>
						</div>
						<div class="row float-r hor-center hmarg-tr">


							<span class="font-T3">内存占用</span>

							<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
							<!--Canvas画布定义的内存环形图-->
							<div>
								<canvas id="power_yarn_one_mem" class="marg-tx4 marg-l" width="62"
									height="62"></canvas>
							</div>
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="row float-r hmarg-tr">
							<font class="font-T4">存储</font>
							<span id="power_yarn_one_storage"
								class="font-success-l">2.93P</span>
						</div>
						<div class="row float-r  hmarg-tr">

							<div class="hor-center">
								<span class="font-T3">CPU使用率</span>
							</div>
							<div class="hor-center">
								<span id="power_yarn_one_cpu_one" class="font-success">0%</span>
								<embed class="hmarg-tl" id="power_yarn_one_cpu"
									src="css/plugins/datacenter/cpu.svg"
									width="100%" height="100%" type="image/svg+xml" />
							</div>
						</div>
					</div>

				</div>

				<div class="row border-t-gray hor-center">

					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-T4">job数</font>
						</div>
						<div class="row">
							<div id="power_yarn_one_job" class=" font-success-l">100</div>
						</div>

					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-T4">节点数</font>
						</div>
						<div class="row">
							<div id="power_yarn_one_acnode" class=" font-success-l">141/141</div>
						</div>
					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<span class="font-T4" id="powerforooneyarnid" onclick="changeto(this);" style="cursor: pointer;">队列使用情况</span>
							
						</div>
						<div class="row">
							<div id="power_yarn_one_query" class=" font-success-l">23.5%</div>
						</div>
					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-A3">文件数</font>
						</div>
						<div class="row">
							
							<div id="power_yarn_one_files" class=" font-success-l">23W</div>
						</div>
					</div>


				</div>

			</div>
			<div class="col-md-6 hborder-r">
				<div class="row hor-center ">
					<span class="font-A1">324机房（YARN）</span>
				</div>
				
				<div class="row border-t-gray">
					<div class="col-md-6 hborder-r">
						<div class="row float-r hmarg-tr">
							<font class="font-T3">总结点</font>
							<span id="power_yarn_four_total"
								class=" font-success">141</span>
						</div>
						<div class="row float-r hor-center hmarg-tr">


							<span class="font-T3">内存占用</span>

							<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
							<!--Canvas画布定义的内存环形图-->
							<div>
								<canvas id="power_yarn_four_mem" class="marg-tx4 marg-l" width="62"
									height="62"></canvas>
							</div>
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="row float-r hmarg-tr">
							<font class="font-T4">存储</font>
							<span id="power_yarn_four_storage"
								class=" font-success-l">2.93P</span>
						</div>
						<div class="row float-r  hmarg-tr">

							<div class="hor-center">
								<span class="font-T3">CPU使用率</span>
							</div>
							<div class="hor-center">
								<span id="power_yarn_four_cpu_one" class="font-success">0%</span>
								<embed class="hmarg-tl" id="power_yarn_four_cpu"
									src="css/plugins/datacenter/cpu.svg"
									width="100%" height="100%" type="image/svg+xml" />
							</div>
						</div>
					</div>

				</div>

				<div class="row border-t-gray hor-center">

					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-T4">job数</font>
						</div>
						<div class="row">
							<div id="power_yarn_four_job" class=" font-success-l">100</div>
						</div>

					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-T4">节点数</font>
						</div>
						<div class="row">
							<div id="power_yarn_four_acnode" class=" font-success-l">141/141</div>
						</div>
					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<span class="font-T4" id="powerfortfouryarnid" onclick="changeto(this);" style="cursor: pointer;">队列使用情况</span>
							
						</div>
						<div class="row">
							<div id="power_yarn_four_query" class=" font-success-l">15.5%</div>
						</div>
					</div>
					<div class="row col-xs-6  hmarg-tl">
						<div class="row">
							<font class="font-A3">文件数</font>
						</div>
						<div class="row">
							
							<div id="power_yarn_four_files" class=" font-success-l">23W</div>
						</div>
					</div>


				</div>

			</div>


		</div>
	</div>
	<div class="col-sm-6 ">
		<div class="row background-r30   marg-r-hf">
			<div class="row col-md-12 marg-r-hf">
				<div class="row  hor-center ">
					<font class="font-A1">419机房</font>
				</div>
			</div>
		</div>
		<div class="row background-r30  border-t-gray marg-r-hf">
			<div class="col-md-6 hborder-r">
				<div class="row hor-center ">
					<span class="font-A2">MPP</span>
				</div>

				<div class="row  marg-r-hf">
					<div class="row border-t-gray hor-center marg-r-hf">
						<div class="col-md-9 ">
							<div class="row float-r  hmarg-tr">
								<font class="font-T2">总结点</font>
								<span id="power_mpp_total"
									class=" font-success">141</span>
							</div>
						</div>
					</div>
					<div class="row hor-center ">
						<div class="col-md-6 hborder-r">

							<div class="row float-r hor-center hmarg-tr">


								<span class="font-T2 hor-center">内存占用</span>

								<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
								<!--Canvas画布定义的内存环形图-->
								<div>
									<canvas id="power_mpp_mem" class="marg-tx2 marg-l" width="62"
										height="62"></canvas>
								</div>
							</div>
						</div>
						<div class="col-md-6 ">

							<div class="row   hmarg-tr">

								<div class="hor-center">
									<span class="font-T3">CPU使用率</span>
								</div>
								<div class="hor-center">
									<span id="power_mpp_cpu_one" class="font-success">0%</span>
									<embed class="hmarg-tl" id="power_mpp_cpu"
										src="css/plugins/datacenter/cpu.svg"
										width="100%" height="100%" type="image/svg+xml" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row border-t-gray ">




					<div class="row col-xs-11 hor-center marg-r-hf hmarg-tl">
						<div class="row">
							<font class="font-A3">节点数</font>
						</div>
						<div class="row">
							<div id="power_mpp_acnode" class=" font-success">21/21</div>
						</div>
					</div>


				</div>

			</div>
			<div class="col-md-6 ">
				<div class="row hor-center ">
					<span class="font-A2">FTP</span>
				</div>

				<div class="row  marg-r-hf">
					<div class="row border-t-gray hor-center marg-r-hf">
						<div class="col-md-9 ">
							<div class="row float-r hmarg-tr">
								<font class="font-T2">总结点</font>
								<span id="pwoer_ftp_total"
									class=" font-success">141</span>
							</div>
						</div>
					</div>
					<div class="row hor-center ">
						<div class="col-md-6 hborder-r">

							<div class="row float-r hor-center hmarg-tr">


								<span class="font-T2 hor-center">内存占用</span>

								<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
								<!--Canvas画布定义的内存环形图-->
								<div>
									<canvas id="pwoer_ftp_mem" class="marg-tx2 marg-l" width="62"
										height="62"></canvas>
								</div>
							</div>
						</div>
						<div class="col-md-6 ">

							<div class="row   hmarg-tr">

								<div class="hor-center">
									<span class="font-T3">CPU使用率</span>
								</div>
								<div class="hor-center">
									<span id="pwoer_ftp_cpu_one" class="font-success">0%</span>
									<embed class="hmarg-tl" id="pwoer_ftp_cpu"
										src="css/plugins/datacenter/cpu.svg"
										width="100%" height="100%" type="image/svg+xml" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row border-t-gray ">
					<div class="row hor-center  marg-r-hf ">
						<div class="row col-xs-6 hmarg-tl ">
							<div class="row">
								<font class="font-A3">节点数</font>
							</div>
							<div class="row">
								<div id="pwoer_ftp_acnode" class=" font-success">20/20</div>
							</div>

						</div>
						<div class="row col-xs-6  hmarg-tl">
							<div class="row">
								<font class="font-A3">主机负载</font>
							</div>
							<div class="row">
								<div id="pwoer_ftp_pclode" class=" font-success">30</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>





	</div>
</div>
<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/toout/powerfor.js"></script>
