<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="row background-r30   marg-r-hf">



	<div class="col-md-4  hborder-r">
		<div class="row hor-center ">
			<span class="font-A2">YARN</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font  class="font-T3">总结点</font>
					<span id="dmp_yarn_total"
						class=" font-success">141</span>
				</div>
				<div class="row float-r hor-center hmarg-tr">


					<span class="font-T3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="dmp_yarn_mem" class="marg-tx4 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-T4">存储</font>
					<span id="dmp_yarn_storage"
						class=" font-success-l">2.93P</span>
				</div>
				<div class="row float-r  hmarg-tr">

					<div class="hor-center">
						<span class="font-T3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="dmp_yarn_cpu_one" class="font-success">0%</span>
						<embed class="hmarg-tl" id="dmp_yarn_cpu"
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
					<div id="dmp_yarn_job" class=" font-success-l">100</div>
				</div>

			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-T4">节点数</font>
				</div>
				<div class="row">
					<div id="dmp_yarn_acnode" class=" font-success-l">141/141</div>
				</div>
			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<span class="font-T4" id="dmpyarnqueryid" onclick="changeto(this);" style="cursor: pointer;">队列使用情况</span>
					
				</div>
				<div class="row">
					<div id="dmp_yarn_query" class=" font-success-l">22.3%</div>
				</div>
			</div>
			<div class="row col-xs-6  hmarg-tl">
				<div class="row">
					<font class="font-A3">文件数</font>
				</div>
				<div class="row">
					
					<div id="dmp_yarn_files" class=" font-success-l">23W</div>
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
					<span id="dmp_kafka_total"
						class=" font-success">141</span>
				</div>
				<div class="row float-r hor-center hmarg-tr">


					<span class="font-T3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="dmp_kafka_mem" class="marg-tx4 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">存储</font>
					<span id="dmp_kafka_storage"
						class="font-success">2.93P</span>
				</div>
				<div class="row float-r  hmarg-tr">

					<div class="hor-center">
						<span class="font-T3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="dmp_kafka_cpu_one" class="font-success">0%</span>
						<embed class="hmarg-tl" id="dmp_kafka_cpu"
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
						<div id="dmp_kafka_ssnetwork" class=" font-success-l">12</div>
					</div>
				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-T4">存储使用率</font>
					</div>
					<div class="row">
						<div id="dmp_kafka_storage_per" class=" font-success-l">60%</div>
					</div>
				</div>
			</div>


		</div>

	</div>

	<div class="col-md-4 ">
		<div class="row hor-center ">
			<span class="font-A2">FTP</span>
		</div>

		<div class="row border-t-gray">
			<div class="col-md-6 hborder-r">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">总结点</font>
					<span id="dmp_ftp_total"
						class=" font-success">141</span>
				</div>
				<div class="row float-r hor-center hmarg-tr">


					<span class="font-T3">内存占用</span>

					<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
					<!--Canvas画布定义的内存环形图-->
					<div>
						<canvas id="dmp_ftp_mem" class="marg-tx4 marg-l" width="62"
							height="62"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="row float-r hmarg-tr">
					<font class="font-T3">存储</font>
					<span id="storedTotalHbaseIP"
						class="font-success">2.93P</span>
				</div>
				<div class="row float-r  hmarg-tr">

					<div class="hor-center">
						<span class="font-T3">CPU使用率</span>
					</div>
					<div class="hor-center">
						<span id="dmp_ftp_cpu_one" class="font-success">0%</span>
						<embed class="hmarg-tl" id="dmp_ftp_cpu"
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
						<font class="font-A2">节点数</font>
					</div>
					<div class="row">
						<div id="dmp_ftp_acnode" class=" font-success">20/20</div>
					</div>

				</div>
				<div class="row col-xs-6  hmarg-tl">
					<div class="row">
						<font class="font-A2">主机负载</font>
					</div>
					<div class="row">
						<div id="dmp_ftp_pclode" class=" font-success">30</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>
<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/toout/dmp.js"></script>
