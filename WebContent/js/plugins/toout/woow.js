jQuery(document).ready(function() {
	getkshbase();
	setInterval('getkshbase()', 6000);
	
});
function getkshbase() {
	$.ajax({
		url: "tooout/tooout!tooutwoowhbase.action",
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
			
			jQuery("#woow_hbase_total").text(total_nodes);
			jQuery("#woow_hbase_storage").text(storage_total);
			jQuery("#woow_hbase_region").text(region_num);
			jQuery("#woow_hbase_requst").text(requst_num);	
			storage('#woow_hbase_storageper',storage_rate,storage_rate_warn,storage_rate_crit);
			canvasPielittle('woow_hbase_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('woow_hbase_cpu', '#woow_hbase_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#woow_hbase_acnode", active_nodes, total_nodes);}
	
	});//AJAX-end
}

