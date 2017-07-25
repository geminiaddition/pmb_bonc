<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<div id="basejsp" class="col-sm-12 background-r30 marg-r-hf">

	<div class="row ax-shape  background-r50 ">
		<span class="font-A4">301机房 一体化集群队列</span>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">root</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="rootyarn_bar_bar_boss">
				<div id="rootyarn_bar"  class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="rootyarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t ">
		<div class="col-sm-1">
			<span class="font-A1   float-l">ana</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c " id="orcl_memory1_bar_boss">
				<div id="orcl_memory1_dssdw1" 
					class="pro-bar pro-bar-success" aria-valuemin="0"
					aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="orcl_memfont_dssdw1" class="font-success ">0%</font>
		</div>
	</div>




	<div class="row hor-center marg-t ">
		<div class="col-sm-1">
			<span class="font-A1 float-l">bdi</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="bdiyarn_bar_boss">
				<div id="bdiyarn_bar" class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="bdiyarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">cpic</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="cpicyarn_bar_boss">
				<div id="cpicyarn_bar" class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="cpicyarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">cspdev</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="cspdevyarn_bar_boss">
				<div id="cspdevyarn_bar"  class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="cspdevyarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">csppro</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="cspproyarn_bar_boss">
				<div id="cspproyarn_bar" class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="cspproyarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">default</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="defaultyarn_bar_boss">
				<div id="defaultyarn_bar" 
					class="pro-bar pro-bar-success" aria-valuemin="0"
					aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="defaultyarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">ia</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="iayarn_bar_boss">
				<div id="iayarn_bar"  class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="iayarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">ods</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="odsyarn_bar_boss">
				<div id="odsyarn_bar"  class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="odsyarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">qq</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="qqyarn_bar_boss">
				<div id="qqyarn_bar"  class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="qqyarn_font" class="font-success">0%</font>
		</div>
	</div>

	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">serv</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="serv_yarn_bar_boss">
				<div id="servyarn_bar"  class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="servyarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">tem</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="temyarn_bar_boss">
				<div id="temyarn_bar"  class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="temyarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">wck</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c"  id="wckyarn_bar_boss">
				<div id="wckyarn_bar"  class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="wckyarn_font" class="font-success">0%</font>
		</div>
	</div>
	<div class="row hor-center marg-t">
		<div class="col-sm-1">
			<span class="font-A1 float-l">zc</span>
		</div>
		<div class="col-sm-6">
			<div
				class="progress-new pro-bar-more-smler float-l marg-t-half tfloat-c" id="zcyarn_bar_boss">
				<div id="zcyarn_bar" class="pro-bar pro-bar-success"
					aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
			</div>
		</div>
		<div class="col-sm-5">
			<font id="zcyarn_font" class="font-success">0%</font>
		</div>
	</div>
</div>


<script src="js/jquery-2.1.1.js"></script>
<script src="js/plugins/datacenter/yarn.js"></script>