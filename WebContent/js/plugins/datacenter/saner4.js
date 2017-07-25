jQuery(document).ready(function() {
ipsuyuan();
	setInterval('ipsuyuan()', 6000);
	lsxdbf() ;
	setInterval('lsxdbf()', 6000);
	kafka();
	setInterval('kafka()', 6000);
	redis();
	setInterval('redis()', 6000);
	xinling();
	setInterval('xinling()', 6000);
	yzwk_hbase();
	setInterval('yzwk_hbase()', 6000);
	yzwk_kafka();
	setInterval('yzwk_kafka()', 6000);
	yzwk_storm();
	setInterval('yzwk_storm()', 6000);
	yzwk_redis();
	setInterval('yzwk_redis()', 6000);
});
function ipsuyuan() {
	$.ajax({
		url: "datacenter/datacenter!ipsuyuan.action",
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
			var region_num = dataall[9];
			var requst_num =dataall[10];
			var storage_rate =dataall[11];
			var storage_rate_warn =dataall[12];
			var storage_rate_crit =dataall[13];
			var deadnodes =total_nodes-active_nodes;
			
			//alert(cpu_rate);
			jQuery("#ipsuyuan_nodes_totol").text(total_nodes);
			jQuery("#ipsuyuan_cunchu").text(storage_total);
			
			canvasPie('ipsuyuan_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('ipsuyuan_svg1a', '#ipsuyuan_svgnuma', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#ipsuyuan_nodes", active_nodes, total_nodes, deadnodes);
	        jQuery("#ipsuyuan_region").text(region_num);
	        jQuery("#ipsuyuan_requst").text(requst_num);
	        storage("#ipsuyuan_rate",storage_rate,storage_rate_warn,storage_rate_crit);}

	});//AJAX-end
}
function lsxdbf() {
	$.ajax({
		url: "datacenter/datacenter!lsxdbf.action",
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
			var deadnodes =total_nodes-active_nodes;
			jQuery("#lsxdbf_nodes_totol").text(total_nodes);
			jQuery("#lsxdbf_cunchu").text(storage_total);
			canvasPie('lsxdbf_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('lsxdbf_svg1', '#lsxdbf_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#lsxdbf_nodes", active_nodes, total_nodes, deadnodes);
	        }

	});//AJAX-end
}


function kafka() {
		$.ajax({
			url: "datacenter/datacenter!kafka.action",
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
				var storage_rate =dataall[9];
				var storage_rate_warn =dataall[10];
				var storage_rate_crit =dataall[11];
				var	ss_network = dataall[12];
				var deadnodes =total_nodes-active_nodes;
				jQuery("#kafka_nodes_totol").text(total_nodes);
				jQuery("#kafka_cunchu").text(storage_total);
				
				jQuery("#shishi").text(ss_network);
				canvasPie('kafka_pie', mem_rate, mem_warn, mem_crit);
				cpuPlugin('kafka_svg1', '#kafka_svgnum', cpu_rate, cpu_warn, cpu_crit);
		        showActiveNode("#kafka_nodes", active_nodes, total_nodes, deadnodes);
		        /*jQuery("#kafka_region").text(region_num);
		        jQuery("#kafka_requst").text(requst_num);*/
		        storage("#kafka_rate",storage_rate,storage_rate_warn,storage_rate_crit);}

		});//AJAX-end
	}
function redis() {
	$.ajax({
		url: "datacenter/datacenter!redis.action",
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
			var	proxy_num = dataall[8];
			var	group_num = dataall[9];
			var	dashboard = dataall[10];
			var storage_rate =dataall[11];
			var storage_rate_warn =dataall[12];
			var storage_rate_crit =dataall[13];
			jQuery("#redis_nodes_totol").text(total_nodes);
			jQuery("#redis_cunchu").text(storage_total);
			canvasPie('redis_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('redis_svg1', '#redis_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        //showActiveNode("#redis_nodes", active_nodes, total_nodes, deadnodes);
	        /*jQuery("#kafka_region").text(region_num);
	        jQuery("#kafka_requst").text(requst_num);*/
			jQuery("#redis_proxy").text(proxy_num);
			jQuery("#redis_group").text(group_num);
			jQuery("#redis_dashboard").text(dashboard);
	        storage("#redis_rate",storage_rate,storage_rate_warn,storage_rate_crit);}

	});//AJAX-end
}
function xinling(){
	$.ajax({
		url: "datacenter/datacenter!xinling.action",
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
			var deadnodes =total_nodes-active_nodes;
			jQuery("#xinling_nodes_totol").text(total_nodes);
			jQuery("#xinling_cunchu").text(storage_total);
			jQuery("#xinling_job").text(job_num);
		
			//jQuery("#txt").text(file_num);
			fillnum('#xinling_txt',file_num,file_num_warn,file_num_crit);
			canvasPie('xinling_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('xinling_svg1', '#xinling_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#xinling_nodes", active_nodes, total_nodes, deadnodes);}
	
	})
}
function yzwk_hbase() {
	$.ajax({
		url: "datacenter/datacenter!yzwk_hbase.action",
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
			var region_num = dataall[9];
			var requst_num =dataall[10];
			var storage_rate =dataall[11];
			var storage_rate_warn =dataall[12];
			var storage_rate_crit =dataall[13];
			var deadnodes =total_nodes-active_nodes;
			jQuery("#yzwk_hbase_nodes_totol").text(total_nodes);
			jQuery("#yzwk_hbase_cunchu").text(storage_total);
			
			canvasPie('yzwk_hbase_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('yzwk_hbase_svg1', '#yzwk_hbase_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#yzwk_hbase_nodes", active_nodes, total_nodes, deadnodes);
	        jQuery("#yzwk_hbase_region").text(region_num);
	        jQuery("#yzwk_hbase_requst").text(requst_num);
	        storage("#yzwk_hbase_rate",storage_rate,storage_rate_warn,storage_rate_crit);}

	});//AJAX-end
}
function yzwk_kafka() {
	$.ajax({
		url: "datacenter/datacenter!yzwk_kafka.action",
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
			var storage_rate =dataall[9];
			var storage_rate_warn =dataall[10];
			var storage_rate_crit =dataall[11];
			var	ss_network = dataall[12];
			var deadnodes =total_nodes-active_nodes;
			jQuery("#yzwk_kafka_nodes_totol").text(total_nodes);
			jQuery("#yzwk_kafka_cunchu").text(storage_total);
			//alert(cpu_rate);
			jQuery("#yzwk_shishi").text(ss_network);
			canvasPie('yzwk_kafka_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('yzwk_kafka_svg1', '#yzwk_kafka_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#yzwk_kafka_nodes", active_nodes, total_nodes, deadnodes);
	        /*jQuery("#kafka_region").text(region_num);
	        jQuery("#kafka_requst").text(requst_num);*/
	        storage("#yzwk_kafka_rate",storage_rate,storage_rate_warn,storage_rate_crit);}

	});//AJAX-end
}
function yzwk_storm() {
	$.ajax({
		url: "datacenter/datacenter!yzwk_storm.action",
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
			var slot_num =dataall[9];
			var executors_num =dataall[10];
			var tasks_num =dataall[11];
			var deadnodes =total_nodes-active_nodes;
			jQuery("#yzwk_storm_nodes_totol").text(total_nodes);
			jQuery("#yzwk_storm_cunchu").text(storage_total);
			
			//jQuery("#yzwk_shishi").text(ss_network);
			canvasPie('yzwk_storm_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('yzwk_storm_svg1', '#yzwk_storm_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#yzwk_storm_nodes", active_nodes, total_nodes, deadnodes);
	        jQuery("#yzwk_storm_slot").text(slot_num);
	        jQuery("#yzwk_storm_executors").text(executors_num);
	        jQuery("#yzwk_storm_tasks").text(tasks_num);
	        /*jQuery("#kafka_region").text(region_num);
	        jQuery("#kafka_requst").text(requst_num);*/
	       // storage("#yzwk_kafka_rate",storage_rate,storage_rate_warn,storage_rate_crit);}
		}
	});//AJAX-end
}
function yzwk_redis() {
	$.ajax({
		url: "datacenter/datacenter!yzwk_redis.action",
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
			var	proxy_num = dataall[8];
			var	group_num = dataall[9];
			var	dashboard = dataall[10];
			var storage_rate =dataall[11];
			var storage_rate_warn =dataall[12];
			var storage_rate_crit =dataall[13];
			jQuery("#yzwk_redis_nodes_totol").text(total_nodes);
			jQuery("#yzwk_redis_cunchu").text(storage_total);
			canvasPie('yzwk_redis_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('yzwk_redis_svg1', '#yzwk_redis_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        //showActiveNode("#redis_nodes", active_nodes, total_nodes, deadnodes);
	        /*jQuery("#kafka_region").text(region_num);
	        jQuery("#kafka_requst").text(requst_num);*/
			jQuery("#yzwk_redis_proxy").text(proxy_num);
			jQuery("#yzwk_redis_group").text(group_num);
			jQuery("#yzwk_redis_dashboard").text(dashboard);
	        storage("#yzwk_redis_rate",storage_rate,storage_rate_warn,storage_rate_crit);}

	});//AJAX-end
}