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
					<li id="dapingshengchan"><a href="bigproduct/bigproduct!bigproduct.action">大屏生产</a></li>
					<li id="shengchanxq"><a>生产详情<span class="fa arrow"></span></a>
					<ul id="scxqul" class="nav nav-third-level collapse">
						<li  id="qianzhi"  ><a href="qianzhi/after!after.action">生产前置</a></li>
						<li id="caiji"><a href="caiji/collect!collect.action">数据采集</a></li>
						<li id="jiagong"><a href="jiagong/work!work.action">数据加工</a></li>
						<li id="jihe"><a href="jihe/audit!audit.action">数据稽核</a></li>
						<li id="tuisong"><a href="datapush/datapush!init.action">数据推送 </a></li>
						<li id="fabu"><a href="datasend/datasend!init.action">数据发布</a></li>
						</ul></li>
					</ul></li>
	<li id="datacenter"><a href="datacenter/datacenter!datacenter.action"><i class="fa fa-gears"></i><span
						class="nav-label">数据中心</span> </a></li>
						<li id="forin"><a href="forinapp/forinapp!forinapp.action"><i class="fa fa-gears"></i><span
						class="nav-label">对内应用</span> </a></li>
						<li id="toout" style="display: "><a href="tooout/tooout!tooout.action"><i class="fa fa-gears"></i><span
						class="nav-label">对外应用</span> </a></li>
						
					
						<li id="hostmo"><a href="hostmo/hostmo!hostmo.action"><i class="fa fa-gears"></i><span
						class="nav-label">永洪报表</span> </a></li>
				
					
			</ul>
		</div>
		</nav>
		
