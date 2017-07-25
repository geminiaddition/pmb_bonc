<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<div class="row background-r30 marg-r-hf">
	<div class="col-md-4 hborder-r">
		<div class="row hor-center ">
			<span id="dataByarn" onclick="changeto(this);" style="cursor: pointer;" class="font-A1">B域数据处理（YARN）</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">总结点</font>
					<sapn id="byu_yarm_nodes_totol" class="font-success">141</span>
				</div>
				<div class="row float-r hor-center hmarg-tr">


					<span class="font-T3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="byu_yarm_pie" class="marg-tx2 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">存储</font> <span id="byu_cunchu"
						class="font-success">2.93P</span>
				</div>
				<div class="row float-r  hmarg-tr">

					<div class="hor-center">
						<span class="font-T3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="byu_yarm_svgnum" class="font-success">0%</span>
						<embed class="hmarg-tw" id="byu_yarm_svg1"
							src="css/plugins/datacenter/cpu.svg" width="100%" height="62px"
							type="image/svg+xml" />
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray  hor-center">

			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">job数</font>
				</div>
				<div class="row">
					<div id="byu_yarm_job" class=" font-success-l">100</div>
				</div>

			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">节点数</font>
				</div>
				<div class="row">
					<div id="storedTotalHbaseIP" class=" font-success-l">141/141</div>
				</div>
			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<span class="font-T4" id="cbjgjq" onclick="changeto(this);"
						style="cursor: pointer;">队列使用情况</span>
				</div>
				<div class="row">
					<span class="font-success-l" id="byu_queue">23.5%</span>

				</div>

			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">文件数</font>
					<div id="byu_txt" class=" font-success-l">23W</div>
				</div>
			</div>
		</div>

	</div>
	<!-- end hive -->

	<div class="col-md-4 hborder-r">
		<div class="row hor-center ">
			<span id="datacolumn" onclick="changeto(this);" style="cursor: pointer;" class="font-A1">纵向加工（YARN）</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">总结点</font> <span id="zxjg_yarm_nodes_totol"
						class="font-success">141</span>
				</div>
				<div class="row float-r hor-center hmarg-tr">


					<span class="font-T3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="zxjg_yarm_pie" class="marg-tx2 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">存储</font> <span id="zxjg_cunchu"
						class="font-success-l">2.93P</span>
				</div>
				<div class="row float-r  hmarg-tr">

					<div class="hor-center">
						<span class="font-T3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="zxjg_yarm_svgnum" class="font-success">0%</span>
						<embed class="hmarg-tw" id="zxjg_yarm_svg1"
							src="css/plugins/datacenter/cpu.svg" width="100%" height="62px"
							type="image/svg+xml" />
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
					<div id="zxjg_yarm_job" class=" font-success-l">100</div>
				</div>

			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">节点数</font>
				</div>
				<div class="row">
					<div id="zxjg_yarm_nodes" class=" font-success-l">141/141</div>
				</div>
			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<span class="font-T4" id="zxjgjq" onclick="changeto(this);"
						style="cursor: pointer;"> 队列使用情况 </span>

				</div>
				<div class="row">
					<span class="font-success-l" id="zxjgjq_queue">23.5%</span>
				</div>
			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">文件数</font>
					<div id="zxjg_txt" class=" font-success-l">23W</div>
				</div>
			</div>

		</div>

	</div>
	<!-- end hive-IP -->

	<div class="col-md-4 ">
		<div class="row hor-center ">
			<span id="dataabababaapp" onclick="changeto(this);" style="cursor: pointer;" class="font-A1">应用部署</span>
		</div>

		<div class="row border-t-gray marg-r-hf">
			<div class="row  hor-center ">
				<div class="col-md-9 ">
					<div class="row float-r hmarg-tr">
						<font class="font-T3">总结点</font> <span id="yybf_nodes_totol"
							class="font-success">141</span>
					</div>
				</div>
			</div>
			<div class="row hor-center ">
				<div class="col-md-6 hborder-r">

					<div class="row float-r hor-center hmarg-tr">


						<span class="font-T3">内存占用</span>

						<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
						<!--Canvas画布定义的内存环形图-->
						<div>
							<canvas id="yybf_pie" class="marg-tx2 marg-l" width="62"
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
							<span id="yybf_svgnum" class="font-success">0%</span>
							<embed class="hmarg-tw" id="yybf_svg1"
								src="css/plugins/datacenter/cpu.svg" width="100%" height="62px"
								type="image/svg+xml" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row border-t-gray hor-center marg-r-hf">
			<div class="col-md-8 ">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">进程数</font> <span id="yybf_process_nun"
						class=" font-success">100</span>
				</div>
			</div>
		</div>


	</div>
	<!-- end HBase-Search-->
</div>

<div class="row background-r30  border-t-gray marg-r-hf">
	<div class="row  marg-r-hf">

		<div class="row col-md-12 ">

			<div class="row  hor-center ">
				<font class="font-A1">数据库</font>

			</div>

		</div>
	</div>
</div>
<div class="row background-r30 border-t-gray marg-r-hf">
	<div class="col-md-3 hborder-r">
		<div class="row hor-center ">
			<span class="font-A1">数据管控</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">

				<div class="row hor-center hmarg-tr">


					<span class="font-A2-3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="sjjk_pie" class="marg-tx2 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">

				<div class="row float-r  hmarg-tr">

					<div class="hor-center">
						<span class="font-T4">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="sjjk_svgnum" class="font-success">0%</span>
						<embed class="hmarg-tw" id="sjjk_svg1"
							src="css/plugins/datacenter/cpu2.svg" width="100%" height="100%"
							type="image/svg+xml" />
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">

			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">session数</font>
				</div>
				<div class="row">
					<div id="sjjk_session" class=" font-success-l">100</div>
				</div>

			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">网络连接状态</font>
				</div>
				<div class="row">
					<div id="sjjk_net" class=" font-success-l">正常</div>
				</div>
			</div>



		</div>

	</div>
	<div class="col-md-3 hborder-r">
		<div class="row hor-center ">
			<span class="font-A1">cB加工</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hor-center hborder-r">

				<div class="row  hor-center hmarg-tr">


					<span class="font-A2-3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="cbjg_pie" class="marg-tx2 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">

				<div class="row hor-center  hmarg-tr">

					<div class="hor-center">
						<span class="font-T4">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="cbjg_svgnum" class="font-success">0%</span>
						<embed class=" hmarg-tw" id="cbjg_svg1"
							src="css/plugins/datacenter/cpu2.svg" width="80px" height="62px"
							type="image/svg+xml" />
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">

			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">session数</font>
				</div>
				<div class="row">
					<div id="cbjg_session" class=" font-success-l">100</div>
				</div>

			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">网络连接状态</font>
				</div>
				<div class="row">
					<div id="cbjg_net" class=" font-success-l">正常</div>
				</div>
			</div>



		</div>

	</div>
	<div class="col-md-2 hborder-r">
		<div class="row hor-center ">
			<span class="font-A1">服务库</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">

				<div class="row  hor-center hmarg-tr">


					<span class="font-A2-3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="fwk_pie" class="marg-tx4 marg-ll5" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">

				<div class="row float-r  hmarg-tr">

					<div class="hor-center">
						<span class="font-A3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="fwk_svgnum" class="font-success">0%</span>
						<embed class=" marg-ll8" id="fwk_svg1"
							src="css/plugins/datacenter/cpu2.svg" width="100%" height="100%"
							type="image/svg+xml" />
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">

			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">session数</font>
				</div>
				<div class="row">
					<div id="fwk_session" class=" font-success-l">100</div>
				</div>

			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">网络连接状态</font>
				</div>
				<div class="row">
					<div id="fwk_net" class=" font-success-l">正常</div>
				</div>
			</div>



		</div>

	</div>
	<div class="col-md-2 hborder-r">
		<div class="row hor-center ">
			<span class="font-A1">应急环境</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">

				<div class="row hor-center hmarg-tr">


					<span class="font-A2-3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="yjhj_pie" class="marg-tx4 marg-ll5" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">

				<div class="row hor-center  hmarg-tr">

					<div class="hor-center">
						<span class="font-A3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="yjhj_svgnum" class="font-success">0%</span>
						<embed class=" marg-ll8" id="yjhj_svg1"
							src="css/plugins/datacenter/cpu2.svg" width="100%" height="100%"
							type="image/svg+xml" />
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">

			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">session数</font>
				</div>
				<div class="row">
					<div id="yjhj_session" class=" font-success-l">100</div>
				</div>

			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">网络连接状态</font>
				</div>
				<div class="row">
					<div id="yjhj_net" class=" font-success-l">正常</div>
				</div>
			</div>



		</div>

	</div>
	<div class="col-md-2 ">
		<div class="row hor-center ">
			<span class="font-A1">纵向加工</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 col-xs-5 col-sm-6 hborder-r">

				<div class="row  hor-center hmarg-tr">


					<span class="font-A2-3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="zxjg_pie" class="marg-tx4 marg-ll5" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">

				<div class="row   hmarg-tr">

					<div class="hor-center">
						<span class="font-A3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="zxjg_svgnum" class="font-success">0%</span>
						<embed class=" marg-ll8" id="zxjg_svg1"
							src="css/plugins/datacenter/cpu2.svg" width="60px" height="60px"
							type="image/svg+xml" />
					</div>
				</div>
			</div>

		</div>

		<div class="row border-t-gray ">

			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">session数</font>
				</div>
				<div class="row">
					<div id="zxjg_session" class=" font-success-l">100</div>
				</div>

			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">网络连接状态</font>
				</div>
				<div class="row">
					<div id="zxjg_net" class=" font-success-l">正常</div>
				</div>
			</div>



		</div>

	</div>


</div>
<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/datacenter/fourm1.js"></script>