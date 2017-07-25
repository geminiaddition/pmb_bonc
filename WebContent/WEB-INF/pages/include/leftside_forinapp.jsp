<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<nav class="navbar-default navbar-static-side" role="navigation">
	<div class="sidebar-collapse">
		<ul class="nav metismenu" id="side-menu">
			<li class="nav-header">
				<div class="dropdown profile-element"
					onclick="window.open('login/login!index.action','_self')"
					style="cursor: pointer;">

					<h2 style="color: white;">
						<i class="fa fa-home"></i>监控平台主页
					</h2>

				</div>
				<div class="logo-element"
					onclick="window.open('login/login!index.action','_self')"
					style="cursor: pointer;">
					<i class="fa fa-home"></i>
				</div>
			</li>

			<li id="sc"><a><i class="fa fa-gears"></i> <span
					class="nav-label">生产监控</span> <span class="fa arrow"></span></a>
				<ul id="ul" class="nav nav-second-level collapse">
					<li id="dapingshengchan"><a
						href="bigproduct/bigproduct!bigproduct.action">大屏生产</a></li>
					<li id="shengchanxq"><a>生产详情<span class="fa arrow"></span></a>
						<ul id="scxqul" class="nav nav-third-level collapse">
							<li id="qianzhi"><a href="qianzhi/after!after.action">生产前置</a></li>
							<li id="caiji"><a href="caiji/collect!collect.action">数据采集</a></li>
							<li id="jiagong"><a href="jiagong/work!work.action">数据加工</a></li>
							<li id="jihe"><a href="jihe/audit!audit.action">数据稽核</a></li>
							<li id="tuisong"><a href="datapush/datapush!init.action">数据推送
							</a></li>
							<li id="fabu"><a href="datasend/datasend!init.action">数据发布</a></li>
						</ul></li>
				</ul></li>
			<li id="data_center"><a><i class="fa fa-gears"></i> <span
					class="nav-label">数据中心</span> <span class="fa arrow"></span></a>
				<ul id="data_ul" class="nav nav-second-level collapse">
					<li id="data_monitor"><a
						href="datacenter/datacenter!datacenter.action">平台监控 </a></li>
					<li id="data_xl"><a href="datacenter/datacenter!xl.action">信令
					</a></li>
					<li id="data_event"><a
						href="datacenter/datacenter!event.action">事件服务 </a></li>
					<li id="data_app"><a href="datacenter/datacenter!app.action">应用部署
					</a></li>
					<li id="data_onetofive"><a
						href="datacenter/datacenter!onetofive.action">一证五卡 </a></li>
					<li id="data_IPsource"><a
						href="datacenter/datacenter!IPsource.action">IP溯源(HB) </a></li>


					<li id="data_onecluster"><a
						href="datacenter/datacenter!onecluster.action">一体化集群 </a></li>
					<li id="data_onecluster_cb"><a
						href="datacenter/datacenter!onecluster_cb.action">一体化集群(CB)</a></li>
					<li id="data_Byarn"><a
						href="datacenter/datacenter!Byarn.action">B域数据(YARN) </a></li>
					<li id="data_column"><a
						href="datacenter/datacenter!column.action">纵向加工(YARN) </a></li>


					<li id="data_history"><a
						href="datacenter/datacenter!history.action">历史详单(MPP) </a></li>


					<li id="data_fourIPsource"><a
						href="datacenter/datacenter!fourIPsource.action">419IP溯源(HB)</a></li>

				</ul></li>
			<li id="forin_app"><a><i class="fa fa-gears"></i> <span
					class="nav-label">对内应用</span> <span class="fa arrow"></span></a>
				<ul id="forin_ul" class="nav nav-second-level collapse in">
					<li id="forin_appmonitor"><a
						href="forinapp/forinapp!forinapp.action">应用监控</a></li>
					<li id="forin_yarn"><a
						href="forinapp/forinapp!cunliangyarn.action">301存量yarn</a></li>
					<li id="forin_redis"><a
						href="forinapp/forinapp!cunliangredis.action">301存量redis</a></li>
				</ul></li>
			<li id="tooout_app"><a><i class="fa fa-gears"></i> <span
					class="nav-label">对外应用</span> <span class="fa arrow"></span></a>
				<ul id="tooout_ul" class="nav nav-second-level collapse">
					<li id="tooout_appmonitor"><a
						href="tooout/tooout!tooout.action">应用监控</a></li>
					<li id="tooout_appks"><a href="tooout/tooout!appks.action">矿砂</a></li>
					<li id="tooout_appdmp"><a href="tooout/tooout!appdmp.action">DMP</a></li>
					<li id="tooout_appwo"><a href="tooout/tooout!appwo.action">沃营销</a></li>
					<li id="tooout_apppowerfor"><a
						href="tooout/tooout!apppowerfor.action">能力开放</a></li>

				</ul></li>




		</ul>
	</div>
</nav>

