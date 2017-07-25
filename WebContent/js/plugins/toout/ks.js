jQuery(document).ready(function() {
	getks324hbase();
	setInterval('getks324hbase()', 6000);
	getksredis();
	setInterval('getksredis()', 6000);
	
});
function getks324hbase() {
	$.ajax({
		url: "tooout/tooout!tooutkshbase.action",
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
			var	region_num = dataall[9];//job数
			var	requst_num = dataall[10];//队列使用情况
			var	storage_rate = dataall[11];
			var	storage_rate_warn = dataall[12];
			var	storage_rate_crit = dataall[13];
			
			jQuery("#ks_hbase_total").text(total_nodes);
			jQuery("#ks_hbase_storage").text(storage_total);
			jQuery("#ks_hbase_region").text(region_num);
			jQuery("#ks_hbase_requst").text(requst_num);	
			storage('#ks_hbase_storageper',storage_rate,storage_rate_warn,storage_rate_crit);
			canvasPie('ks_hbase_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('ks_hbase_cpu', '#ks_hbase_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#ks_hbase_acnode", active_nodes, total_nodes);}
	
	});//AJAX-end
}
function getksredis() {
	$.ajax({
		url: "tooout/tooout!tooutksredis.action",
		type: "post",
		dataType: "json",
		success: function(data){
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

			$("#ks_redis_total").text(total_nodes);
			$("#ks_redis_storage").text(storage_total);
			$("#ks_redis_proxy").text(proxy_num);
			$("#ks_redis_query").text(group_num);

			dashdashboard("#ks_redis_dashboard", dashboard);
			process("#ks_redis_saveuse", storage_total_rate,
					storage_total_warn, storage_total_crit);
			canvasPie("ks_redis_mem", cpu_rate, cpu_warn, cpu_crit);
			cpuPlugin('ks_redis_cpu', '#ks_redis_cpu_one', mem_rate,
					mem_warn, mem_crit);
		}
	
	});//AJAX-end
}

