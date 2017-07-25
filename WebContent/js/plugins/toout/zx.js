jQuery(document).ready(function() {
	getzxonehbase();
	setInterval('getzxonehbase()', 6000);
	getzxfourhbase();
	setInterval('getzxfourhbase()', 6000);
	setline();
	
	line_xia_zx();
	setInterval('line_xia_zx()', 6000);
});
function line_xia_zx() {
	$.ajax({
		url: "tooout/tooout!zhengxin_xia.action",
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
			jQuery("#zhengxin_cpu_xia").text(cpu_used +"%");
			jQuery("#zhengxin_nei_xia").text(mem_used +"%");
			jQuery("#zx_state_xia").text(ping_stat);
			storage('#zx_ci', root_used_rate,
					storage_rate_warn, storage_rate_crit);
			
			
			}
	
	});//AJAX-end
}
function setline() {

	var Chart = echarts.init(document.getElementById("zx_line"),
			'dark');
	Chart.showLoading({
		text : 'Loding...'
	});
	var categories = [];
	var values = [];
	var varueslea = [];
	$.ajax({
		url : "tooout/tooout!zxline.action",
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
					y : 30,
					x2 : 25,
					y2 : 20

				},
				tooltip : {
					show : true
				},
				legend : {
					data : [ '征信平台' ]
				},

				xAxis : {
					type : 'category',
					boundaryGap : false,
					data : categories
				},

				yAxis : [ {
					type : 'value',
					 name : '单位：百万',
					 axisLabel : {
                           formatter: function (value) {           
                        	                 return value=value/1000000;      
                        	                  }  
                     }
				} ],
				series : [ {
					name : '征信平台',
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
function getzxonehbase() {
	$.ajax({
		url : "tooout/tooout!tooutzxonehbase.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			// console.info(dataall);
			var total_nodes = dataall[0];
			var storage_total = dataall[1];// 存储
			var mem_rate = dataall[2];// 内存
			var mem_warn = dataall[3];
			var mem_crit = dataall[4];
			var cpu_rate = dataall[5];// cpu
			var cpu_warn = dataall[6];
			var cpu_crit = dataall[7];
			var active_nodes = dataall[8];
			var region_num = dataall[9];// job数
			var requst_num = dataall[10];// 队列使用情况
			var storage_rate = dataall[11];
			var storage_rate_warn = dataall[12];
			var storage_rate_crit = dataall[13];

			jQuery("#zx_one_hbase_total").text(total_nodes);
			jQuery("#zx_one_hbase_storage").text(storage_total);
			jQuery("#zx_one_hbase_region").text(region_num);
			jQuery("#zx_one_hbase_requst").text(requst_num);
			storage('#zx_one_hbase_storageper', storage_rate,
					storage_rate_warn, storage_rate_crit);
			canvasPie('zx_one_hbase_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('zx_one_hbase_cpu', '#zx_one_hbase_cpu_one', cpu_rate,
					cpu_warn, cpu_crit);
			showActiveNode("#zx_one_hbase_acnode", active_nodes, total_nodes);
		}

	});// AJAX-end
}
function getzxfourhbase() {
	$.ajax({
		url : "tooout/tooout!tooutzxfourhbase.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			// console.info(dataall);
			var total_nodes = dataall[0];
			var storage_total = dataall[1];// 存储
			var mem_rate = dataall[2];// 内存
			var mem_warn = dataall[3];
			var mem_crit = dataall[4];
			var cpu_rate = dataall[5];// cpu
			var cpu_warn = dataall[6];
			var cpu_crit = dataall[7];
			var active_nodes = dataall[8];
			var region_num = dataall[9];// job数
			var requst_num = dataall[10];// 队列使用情况
			var storage_rate = dataall[11];
			var storage_rate_warn = dataall[12];
			var storage_rate_crit = dataall[13];

			jQuery("#zx_four_hbase_total").text(total_nodes);
			jQuery("#zx_four_hbase_storage").text(storage_total);
			jQuery("#zx_four_hbase_region").text(region_num);
			jQuery("#zx_four_hbase_requst").text(requst_num);
			storage('#zx_four_hbase_storageper', storage_rate,
					storage_rate_warn, storage_rate_crit);
			canvasPie('zx_four_hbase_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('zx_four_hbase_cpu', '#zx_four_hbase_cpu_one', cpu_rate,
					cpu_warn, cpu_crit);
			showActiveNode("#zx_four_hbase_acnode", active_nodes, total_nodes);
		}

	});// AJAX-end
}
