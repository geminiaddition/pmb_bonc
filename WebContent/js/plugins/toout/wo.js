jQuery(document).ready(function() {
	getwoyarn();
	setInterval('getwoyarn()', 6000);
	getwokafka();
	setInterval('getwokafka()', 6000);
	getRedismysql();
	setInterval('getRedismysql()', 6000);
	getRedis();
	setInterval('getRedis()', 6000);
	setwoline();
	line_xia_wo();
	setInterval('line_xia_wo()', 6000);
});
function line_xia_wo() {
	$.ajax({
		url: "tooout/tooout!jingzhun_wo.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			//console.info(dataall);
			var cpu_used = dataall[0];
			var	mem_used = dataall[1];//存储
			var	ping_stat = dataall[2];//内存
			var	root_used_rate = dataall[3];
		
			//alert(active_nodes + "+"+total_nodes+"+"+deadnodes);
			var storage_rate_warn = 75;
			var storage_rate_crit = 80;
			jQuery("#CPU_wosy").text(cpu_used +"%");
			jQuery("#men_wozy").text(mem_used +"%");
			jQuery("#fuwu_zt").text(ping_stat);
			storage('#cipan_wo', root_used_rate,
					storage_rate_warn, storage_rate_crit);
			
			
			}
	
	});//AJAX-end
}
function setwoline() {

	var Chart = echarts.init(document.getElementById("wo_line_1"),
			'dark');
	Chart.showLoading({
		text : 'Loding...'
	});
	var categories = [];
	var values = [];
	var varueslea = [];
	$.ajax({
		url : "tooout/tooout!woline.action",
		dataType : "json",
		type : 'post',
		success : function(data) {
			var dataall = data.nameArray;
			var kpi_desc = dataall[0];
			var kpi_value = dataall[1];
			
			categories = toarraystring(kpi_desc);
			values = toarraystring(kpi_value);
		
			var option = {
				grid : {
                    x:25,
					y : 29,
					x2 : 20,
					y2 : 20

				},
				tooltip : {
					show : true
				},
				legend : {
					data : [ '精准营销' ]
				},

				xAxis : {
					type : 'category',
					boundaryGap : false,
					data : categories
				},

				yAxis : [ {
					type : 'value',
					name:'单位：条',
					 axisLabel:{ //调整y轴的lable  
				            textStyle:{
				                fontSize:10// 让字体变大
				            }
				} }],
				series : [ {
					name : '精准营销',
					type : 'line',

					data : values
				}
				]

			};
			Chart.hideLoading();
			Chart.setOption(option);
			window.onresize = Chart.resize;
		}
	});
}
function getwoyarn() {
	$.ajax({
		url: "tooout/tooout!tooutyarn.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			//console.info(dataall);
			var total_nodes = dataall[0];
			var	storage_total = dataall[1];//存储
			var	mem_rate = dataall[2];//内存
			var	mem_warn = dataall[3];
			var mem_crit = dataall[4];
			var	cpu_rate = dataall[5];//cpu
			var	cpu_warn = dataall[6];
			var	cpu_crit = dataall[7];
			var	active_nodes = dataall[8];
			var	job_num = dataall[9];//job数
			var	queue_info = dataall[10];//队列使用情况
			var	file_num = dataall[11];//文件数
			var	file_num_warn = dataall[12];
			var	file_num_crit = dataall[13];
			//alert(active_nodes + "+"+total_nodes+"+"+deadnodes);
			
			jQuery("#wo_yarn_total").text(total_nodes);
			jQuery("#wo_yarn_storage").text(storage_total);
			jQuery("#wo_yarn_job").text(job_num);
			
			//jQuery("#txt").text(file_num);
			fillnum('#wo_yarn_files',file_num,file_num_warn,file_num_crit);
			canvasPie('wo_yarn_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('wo_yarn_cpu', '#wo_yarn_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#wo_yarn_acnode", active_nodes, total_nodes);}
	
	});//AJAX-end
}
function getwokafka() {
	$.ajax({
		url: "tooout/tooout!tooutkafka.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			//console.info(dataall);
			var total_nodes = dataall[0];
			var	storage_total = dataall[1];//存储
			var	mem_rate = dataall[2];//内存
			var	mem_warn = dataall[3];
			var mem_crit = dataall[4];
			var	cpu_rate = dataall[5];//cpu
			var	cpu_warn = dataall[6];
			var	cpu_crit = dataall[7];
			var	ss_network = dataall[8];
			var	storage_total_rate = dataall[9];
			var	storage_total_warn = dataall[10];
			var	storage_total_crit = dataall[11];
			
			
			
			jQuery("#wo_kafka_total").text(total_nodes);
			jQuery("#wo_kafka_storage").text(storage_total);
			jQuery("#wo_kafka_ssnetwork").text(ss_network);
			storage('#wo_kafka_storage_per',storage_total_rate,storage_total_warn,storage_total_crit);
			canvasPie('wo_kafka_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('wo_kafka_cpu', '#wo_kafka_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        }
	
	});//AJAX-end
}
function getRedismysql() {
	$.ajax({
		url : "tooout/tooout!tooutredismysql.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var total_nodes = dataall[0];
			var storage_total = dataall[1];
			var mem_rate = dataall[2];
			var mem_warn = dataall[3];
			var mem_crit = dataall[4];
			var cpu_rate = dataall[5];
			var cpu_warn = dataall[6];
			var cpu_crit = dataall[7];
			var proxy_num = dataall[8];
			var group_num = dataall[9];
			var dashboard = dataall[10];
			var storage_total_rate = dataall[11];
			var storage_total_warn = dataall[12];
			var storage_total_crit = dataall[13];

			$("#wo_ry_total").text(total_nodes);
			$("#wo_rm_storage").text(storage_total);
			$("#wo_rm_proxy").text(proxy_num);
			$("#wo_rm_query").text(group_num);

			dashdashboard("#wo_rm_dashboard", dashboard);
			process("#wo_rm_saveuse", storage_total_rate,
					storage_total_warn, storage_total_crit);
			canvasPie("wo_rm_mem", cpu_rate, cpu_warn, cpu_crit);
			cpuPlugin('wo_rm_cpu', '#wo_rm_cpu_one', mem_rate,
					mem_warn, mem_crit);
		}
	});
}
function getRedis() {
	$.ajax({
		url : "tooout/tooout!tooutredis.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var total_nodes = dataall[0];
			var storage_total = dataall[1];
			var mem_rate = dataall[2];
			var mem_warn = dataall[3];
			var mem_crit = dataall[4];
			var cpu_rate = dataall[5];
			var cpu_warn = dataall[6];
			var cpu_crit = dataall[7];
			var proxy_num = dataall[8];
			var group_num = dataall[9];
			var dashboard = dataall[10];
			var storage_total_rate = dataall[11];
			var storage_total_warn = dataall[12];
			var storage_total_crit = dataall[13];

			$("#wo_redis_total").text(total_nodes);
			$("#wo_redis_storage").text(storage_total);
			$("#wo_redis_proxy").text(proxy_num);
			$("#wo_redis_query").text(group_num);

			dashdashboard("#wo_redis_dashboard", dashboard);
			process("#wo_redis_saveuse", storage_total_rate,
					storage_total_warn, storage_total_crit);
			canvasPie("wo_redis_mem", cpu_rate, cpu_warn, cpu_crit);
			cpuPlugin('wo_redis_cpu', '#wo_redis_cpu_one', mem_rate,
					mem_warn, mem_crit);
		}
	});
}
