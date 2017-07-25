<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="row background-r30   marg-r-hf">
	<div class="col-sm-12 ">
		<div class="row background-r30   marg-r-hf">
			<div class="row col-md-12 marg-r-hf">
				<div class="row  hor-center ">
					<font class="font-A2">应用及开放</font>
				</div>
			</div>
		</div>
		<div class="row background-r30  border-t-gray marg-r-hf">
			<div class="col-md-6 hborder-r">
				<div class="row hor-center ">
					<span class="font-A2">节点1</span>
				</div>

				<div class="row border-t-gray  marg-r-hf">


					<div class="col-md-6  hborder-r">

						<div class="row hor-center hmarg-tr">


							<span class="font-A2-3">内存占用</span>

						</div>

						<div class="row hor-center hmarg-tr ">
							<div>
								<canvas id="onacle_one_mem" class="marg-tx4 marg-ll5" width="62"
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
								<span id="oracle_one_cpu_one" class="font-success-l">0%</span>
								<embed class=" marg-ll8" id="oracle_one_cpu"
									src="css/plugins/datacenter/cpu2.svg" width="100%"
									height="100%" type="image/svg+xml" />
							</div>
						</div>
					</div>

				</div>

				<div class="row border-t-gray ">
					<div class="row hor-center  marg-r-hf ">
						<div class="row col-xs-12 hmarg-tl ">
							<div class="row">
								<font class="font-T4">session数</font>
							</div>
							<div class="row">
								<div id="oracle_one_session" class=" font-success">100</div>
							</div>

						</div>
						<div class="row col-xs-12  hmarg-tl">
							<div class="row">
								<font class="font-T4">网络连接状态</font>
							</div>
							<div class="row">
								<div id="oracle_one_net_status" class=" font-success">正常</div>
							</div>
						</div>
					</div>

				</div>

			</div>
			<div class="col-md-6 ">
				<div class="row hor-center ">
					<span class="font-A2">节点2</span>
				</div>

				<div class="row border-t-gray  marg-r-hf">
					<div class="col-md-6  hborder-r">

						<div class="row hor-center hmarg-tr">


							<span class="font-A2-3">内存占用</span>

						</div>

						<div class="row hor-center hmarg-tr ">
							<div>
								<canvas id="onacle_two_mem" class="marg-tx4 marg-ll5" width="62"
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
								<span id="oracle_two_cpu_one" class="font-success-l">0%</span>
								<embed class=" marg-ll8" id="oracle_two_cpu"
									src="css/plugins/datacenter/cpu2.svg" width="100%"
									height="100%" type="image/svg+xml" />
							</div>
						</div>
					</div>

				</div>

				<div class="row border-t-gray ">
					<div class="row hor-center  marg-r-hf ">
						<div class="row col-xs-12 hmarg-tl ">
							<div class="row">
								<font class="font-T4">session数</font>
							</div>
							<div class="row">
								<div id="oracle_two_session" class=" font-success">100</div>
							</div>

						</div>
						<div class="row col-xs-12  hmarg-tl">
							<div class="row">
								<font class="font-T4">网络连接状态</font>
							</div>
							<div class="row">
								<div id="oracle_two_net_status" class=" font-success">正常</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>





	</div>

</div>
<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/toout/database.js"></script>