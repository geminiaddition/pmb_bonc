<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


					<div class="row ax-shape background-r50 marg-r-hf">
						<span class="font-A4">419机房</span>

					</div>
					<div class="row background-r30   marg-r-hf">
						<div class="col-md-12 ">
							<div class="row hor-center ">
								<span id="datafourIPsource" onclick="changeto(this);" style="cursor: pointer;" class="font-A2">IP溯源（Hbase）</span>
							</div>

							<div class="row border-t-gray">
								<div class="col-md-6 hborder-r">
									<div class="row  hor-center hmarg-tr">
										<div class="col-md-9 ">
											<div class="row float-r">
												<font class="font-A2">总结点</font>
												<span id="llcx_nodes_totol"
													class=" font-success"></span>
											</div>
										</div>
									</div>
									<div class="row  hor-center hmarg-tr">


										<span class="font-T3">内存占用</span>

										<%--<div id="hbase_ip_pie" class="marg-tx2 hpie-size" ></div>--%>
										<!--Canvas画布定义的内存环形图-->
										<div>
											<canvas id="llcx_pie" class="marg-tx2 marg-l" width="62"
												height="62"></canvas>
										</div>
									</div>
								</div>
								<div class="col-md-6 ">
									<div class="row  hor-center hmarg-tr">
										<div class="col-md-9 ">
											<div class="row float-r">
												<font class="font-A2">存储</font>
												<span id="llcx_cunchu"
													class=" font-success">2.93P</span>
											</div>
										</div>
									</div>
									<div class="row hor-center  hmarg-tr">

										<div class="hor-center">
											<span class="font-T3">CPU使用率</span>
										</div>
										<div class="hor-center">
											<span id="llcx_svgnum" class="font-success">0%</span>
											<embed class="hmarg-bbig" id="llcx_svg1"
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
											<font class="font-A3">节点数</font>
										</div>
										<div class="row">
											<div id="llcx_nodes" class=" font-success">21/21</div>
										</div>

									</div>
									<div class="row col-xs-6  hmarg-tl">
										<div class="row">
											<font class="font-A3">REGION数</font>
										</div>
										<div class="row">
											<div id="llcx_region" class=" font-success">100000</div>
										</div>
									</div>
								</div>
								<div class="row hor-center marg-r-hf">

									<div class="row col-xs-6  hmarg-tl">
										<div class="row">
											<font class="font-A3">REQUEST数</font>
										</div>
										<div class="row">
											<div id="llcx_requst" class=" font-success">100000</div>
										</div>
									</div>
									<div class="row col-xs-6  hmarg-tl">
										<div class="row">
											<font class="font-A3">存储使用率</font>
										</div>
										<div class="row">
											<div id="llcx_rate" class=" font-success">12</div>
										</div>
									</div>
								</div>

							</div>

						</div>


					</div>


<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/datacenter/fouronenine.js"></script>