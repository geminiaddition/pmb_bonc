jQuery(document).ready(function() {
	cunl_yarm();
	setInterval('cunl_yarm()', 6000);
	cunl_redis();
	setInterval('cunl_redis()', 6000);
	cunl_redis2();
	setInterval('cunl_redis2()', 6000);
	cunl_kafka2();
	setInterval('cunl_kafka2()', 6000);
	cunl_storm();
	setInterval('cunl_storm()', 6000);
})

function cunl_yarm() {
	$.ajax({
		url : "forinapp/forinapp!cunl_yarm.action",
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
			var active_nodes = dataall[8];/*
											 * var job_num = dataall[9];//job数
											 * var queue_info =
											 * dataall[10];//队列使用情况
											 */
			var file_num = dataall[9];// 文件数
			var file_num_warn = dataall[10];
			var file_num_crit = dataall[11];
			var deadnodes = total_nodes - active_nodes;

			 //alert(active_nodes + "+"+total_nodes+"+"+deadnodes);

			jQuery("#cunl_yarm_nodes_totol").text(total_nodes);
			jQuery("#cunl_cunchu").text(storage_total);
			/*
			 * jQuery("#cunl_yarm_job").text(job_num);
			 * jQuery("#cunl_queue").text(queue_info);
			 */
			// jQuery("#txt").text(file_num);
			fillnum('#cunl_txt', file_num, file_num_warn, file_num_crit);
			canvasPie('cunl_yarm_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('cunl_yarm_svg1', '#cunl_yarm_svgnum', cpu_rate,
					cpu_warn, cpu_crit);
			showActiveNode("#cunl_yarm_nodes", active_nodes, total_nodes,
					deadnodes);
		}

	});//AJAX-end
}
function cunl_redis() {
	$.ajax({
		url: "forinapp/forinapp!cunl_redis.action",
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
			jQuery("#cunl_redis_nodes_totol").text(total_nodes);
			jQuery("#cunl_redis_cunchu").text(storage_total);
			canvasPie('cunl_redis_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('cunl_redis_svg1', '#cunl_redis_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        //showActiveNode("#redis_nodes", active_nodes, total_nodes, deadnodes);
	        /*jQuery("#kafka_region").text(region_num);
	        jQuery("#kafka_requst").text(requst_num);*/
			jQuery("#cunl_redis_proxy").text(proxy_num);
			jQuery("#cunl_redis_group").text(group_num);
			jQuery("#cunl_redis_dashboard").text(dashboard);
	        storage("#cunl_redis_rate",storage_rate,storage_rate_warn,storage_rate_crit);}

	});//AJAX-end
}
function cunl_redis2() {
	$.ajax({
		url: "forinapp/forinapp!cunl_redis2.action",
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
			jQuery("#cunl2_redis_nodes_totol").text(total_nodes);
			jQuery("#cunl2_redis_cunchu").text(storage_total);
			canvasPie('cunl2_redis_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('cunl2_redis_svg1', '#cunl2_redis_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        //showActiveNode("#redis_nodes", active_nodes, total_nodes, deadnodes);
	        /*jQuery("#kafka_region").text(region_num);
	        jQuery("#kafka_requst").text(requst_num);*/
			jQuery("#cunl2_redis_proxy").text(proxy_num);
			jQuery("#cunl2_redis_group").text(group_num);
			jQuery("#cunl2_redis_dashboard").text(dashboard);
	        storage("#cunl2_redis_rate",storage_rate,storage_rate_warn,storage_rate_crit);}

	});//AJAX-end
}

function cunl_kafka2() {
	$.ajax({
		url : "forinapp/forinapp!cunl_kafka2.action",
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
			var ss_network = dataall[8];
			var storage_total_rate = dataall[9];
			var storage_total_warn = dataall[10];
			var storage_total_crit = dataall[11];

			$("#cunl_kafka_nodes_totol").text(total_nodes);
			$("#cunl_kafka_cunchu").text(storage_total);
			$("#cunl_kafka_shishi").text(ss_network);

			process("#cunl_rate", storage_total_rate,
					storage_total_warn, storage_total_crit);
			canvasPie("cunl_kafka_pie", cpu_rate, cpu_warn, cpu_crit);
			cpuPlugin('cunl_kafka_svg1', '#cunl_kafka_svgnum', mem_rate,
					mem_warn, mem_crit);

		}

	});

}

function cunl_storm() {
	$.ajax({
		url: "forinapp/forinapp!cunl_storm.action",
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
			jQuery("#cunl_storm_nodes_totol").text(total_nodes);
			jQuery("#cunl_storm_cunchu").text(storage_total);
			
			//jQuery("#yzwk_shishi").text(ss_network);
			canvasPie('cunl_storm_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('cunl_storm_svg1', '#cunl_storm_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#cunl_storm_nodes", active_nodes, total_nodes, deadnodes);
	        jQuery("#cunl_storm_slot").text(slot_num);
	        jQuery("#cunl_storm_executors").text(executors_num);
	        jQuery("#cunl_storm_tasks").text(tasks_num);
	        /*jQuery("#kafka_region").text(region_num);
	        jQuery("#kafka_requst").text(requst_num);*/
	       // storage("#yzwk_kafka_rate",storage_rate,storage_rate_warn,storage_rate_crit);}
		}
	});//AJAX-end
}