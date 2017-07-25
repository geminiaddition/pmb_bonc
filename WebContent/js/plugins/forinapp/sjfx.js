jQuery(document).ready(function() {
	setChartBar();

	sjjk();
	setInterval('sjjk()', 6000);
	sjjk2();
	setInterval('sjjk2()', 6000);
	getline_down();
	setInterval('getline_down()', 6000);
	get_line_two();
	setInterval('get_line_two()', 6000);

});


function setChartBar() {

	var Chart = echarts.init(document.getElementById("data_center_line"),
			'dark');
	Chart.showLoading({
		text : 'Loding...'
	});
	var categories = [];
	var values = [];
	var varueslea = [];
	$.ajax({
		url : "forinapp/forinapp!datacenterline.action",
		dataType : "json",
		type : 'post',
		success : function(data) {
			var dataall = data.nameArray;
			var kpi_desc = dataall[0];
			var kpi_value = dataall[1];
			var kpi_value1 = dataall[2];
			categories = toarraystring(kpi_desc);
			values = toarraystring(kpi_value);
			varueslea = toarraystring(kpi_value1);
			var option = {
				grid : {

					y : 28,
					x2 : 15,
					y2 : 35

				},
				tooltip : {
					show : true
				},
				legend : {
					data : [ '数据分析', '领导首页' ]
				},

				xAxis : {
					type : 'category',
					boundaryGap : false,
					data : categories
				},

				yAxis : [ {
					type : 'value',
					 name : '单位：条'
				} ],
				series : [ {
					name : '数据分析',
					type : 'line',
					
					data : values
				}, {
					name : '领导首页',
					type : 'line',

					data : varueslea
				}

				]

			};
			Chart.hideLoading();
			Chart.setOption(option);
			
		}
	});
	window.onresize = myChart.resize;
}

function sjjk() {
	$.ajax({
		url : "forinapp/forinapp!dmjishi.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var mem_rate = dataall[0];// 内存
			var mem_warn = dataall[1];
			var mem_crit = dataall[2];
			var cpu_rate = dataall[3];// cpu
			var cpu_warn = dataall[4];
			var cpu_crit = dataall[5];
			var session_num = dataall[6];
			var net_status = dataall[7];

			canvasPie('dm_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('dm_svg1', '#dm_svgnum', cpu_rate, cpu_warn, cpu_crit);
			jQuery("#dm_session").text(session_num);
			jQuery("#dm_net").text(net_status);
		}

	});// AJAX-end
}
function sjjk2() {
	$.ajax({
		url : "forinapp/forinapp!dmjishi2.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var mem_rate = dataall[0];// 内存
			var mem_warn = dataall[1];
			var mem_crit = dataall[2];
			var cpu_rate = dataall[3];// cpu
			var cpu_warn = dataall[4];
			var cpu_crit = dataall[5];
			var session_num = dataall[6];
			var net_status = dataall[7];

			canvasPie('dm2_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('dm2_svg1', '#dm2_svgnum', cpu_rate, cpu_warn, cpu_crit);
			jQuery("#dm2_session").text(session_num);
			jQuery("#dm2_net").text(net_status);
		}

	});// AJAX-end
}
function getline_down() {
	$.ajax({
		url : "forinapp/forinapp!getlinedown.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var mem_rate = dataall[0];// 内存
			var mem_warn = dataall[1];
		
			jQuery("#get_line_down_to_fenxi_first").text(mem_rate);
			jQuery("#get_line_down_to_leader_first").text(mem_warn);
		}

	});// AJAX-end
}
function get_line_two() {
	$.ajax({
		url : "forinapp/forinapp!getlinedowntow.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var mem_rate = dataall[0];// 内存
			var mem_warn = dataall[1];
			var mem_crit = dataall[2];
			var cpu_rate = dataall[3];// cpu
			var cpu_warn = dataall[4];
			
			storage("#get_line_down_to_fenxi_mem",mem_rate,mem_warn,mem_crit);
			storage("#get_line_down_to_leader_mem",mem_rate,mem_warn,mem_crit);

			jQuery("#get_line_down_to_leader_server").text(cpu_rate);
			jQuery("#get_line_down_to_fenxi_server").text(cpu_rate);
			jQuery("#get_line_down_to_fenxi_power").text(cpu_warn);
			jQuery("#get_line_down_to_leader_power").text(cpu_warn);
		}

	});// AJAX-end
}