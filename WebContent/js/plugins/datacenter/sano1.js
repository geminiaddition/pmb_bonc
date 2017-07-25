jQuery(document).ready(function() {
getHbase();
	setInterval('getHbase()', 6000);
	getStorm();
	setInterval('getStorm()', 6000);
	getKafka();
	setInterval('getKafka()', 6000);
	getRedis();
	setInterval('getRedis()', 6000);
	getyarm();
	setInterval('getyarm()', 6000);
	gethbase();
	setInterval('gethbase()', 6000);
	bss_cjzh();
	setInterval('bss_cjzh()', 6000);
});
function getHbase() {
	$.ajax({
		url : "datacenter/datacenter!threetooneTruetimeHBase.action",
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
			var active_nodes = dataall[8];
			var region_num = dataall[9];
			var requst_num = dataall[10];
			var storage_rate = dataall[11];
			var storage_rate_warn = dataall[12];
			var storage_rate_crit = dataall[13];

			$("#threehbaseall").text(total_nodes);
			$("#threehbaseinput").text(storage_total);
			$("#threehbaseregion").text(region_num);
			$("#threehbaserequest").text(requst_num);
			showActiveNode("#threehbasenodes", active_nodes, total_nodes);
			process("#threehbasesaveuse", storage_rate, storage_rate_warn,
					storage_rate_crit);
			canvasPie("threehbasepie", mem_rate, mem_warn, mem_crit);
			cpuPlugin('threehbasecpupic', '#threehbasecpuone', cpu_rate,
					cpu_warn, cpu_crit);

		}

	});

}
function getStorm() {
	$.ajax({
		url : "datacenter/datacenter!ThreetooneTruetimeStorm.action",
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
			var active_nodes = dataall[8];
			var slot_num = dataall[9];
			var executors_num = dataall[10];
			var tasks_num = dataall[11];

			$("#threestormall").text(total_nodes);
			$("#threestrominput").text(storage_total);
			$("#threestormslot").text(slot_num);
			$("#threestormexecutors").text(executors_num);
			$("#threestormtasks").text(tasks_num);
			showActiveNode("#threestormnodes", active_nodes, total_nodes);
			// process("#threehbasesaveuse",storage_rate,storage_rate_warn,storage_rate_crit);
			canvasPie("threestormpie", mem_rate, mem_warn, mem_crit);
			cpuPlugin('threestormcpupic', '#threestormcpuone', cpu_rate,
					cpu_warn, cpu_crit);
		}
	});
}
function getKafka() {
	$.ajax({
		url : "datacenter/datacenter!ThreetooneTruetimeKafka.action",
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

			$("#threekafkaall").text(total_nodes);
			$("#threekafkainput").text(storage_total);
			$("#threekafkanetwork").text(ss_network);

			process("#threekafkasaveuse", storage_total_rate,
					storage_total_warn, storage_total_crit);
			canvasPie("threekafkapie", mem_rate, mem_warn, mem_crit);
			cpuPlugin('threekafkacpupic', '#threekafkacpuone', cpu_rate,
					cpu_warn, cpu_crit);

		}

	});

}

function getRedis() {
	$.ajax({
		url : "datacenter/datacenter!ThreetooneTruetimeRedis.action",
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

			$("#threeredisall").text(total_nodes);
			$("#threeredisinput").text(storage_total);
			$("#threeredisproxy").text(proxy_num);
			$("#threeredisgroup").text(group_num);

			dashdashboard("#threeredisdashboard", dashboard);
			process("#threeredissaveuse", storage_total_rate,
					storage_total_warn, storage_total_crit);
			canvasPie("threeredispie", mem_rate, mem_warn, mem_crit);
			cpuPlugin('threerediscpupic', '#threerediscpuone', cpu_rate,
					cpu_warn, cpu_crit);
		}
	});
}
function getyarm() {
	$.ajax({
				url : "datacenter/datacenter!yarm.action",
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
					var job_num = dataall[9];// job数
					var queue_info = dataall[10];// 队列使用情况
					var file_num = dataall[11];// 文件数
					var file_num_warn = dataall[12];
					var file_num_crit = dataall[13];
					var deadnodes = total_nodes - active_nodes;
					// alert(active_nodes + "+"+total_nodes+"+"+deadnodes);

					jQuery("#yarm_nodes_totol").text(total_nodes);
					jQuery("#cunchu").text(storage_total);
					jQuery("#yarm_job").text(job_num);
					//jQuery("#queue").text(queue_info);
					// jQuery("#txt").text(file_num);
					fillnum('#txt', file_num, file_num_warn, file_num_crit);
					canvasPie('yarm_pie', mem_rate, mem_warn, mem_crit);
					cpuPlugin('yarm_svg1', '#yarm_svgnum', cpu_rate, cpu_warn,
							cpu_crit);
					showActiveNode("#yarm_nodes", active_nodes, total_nodes,
							deadnodes);
				}

			});// AJAX-end
}

function gethbase() {
	$.ajax({
				url : "datacenter/datacenter!hbase.action",
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
					var region_num = dataall[9];
					var requst_num = dataall[10];
					var storage_rate = dataall[11];
					var storage_rate_warn = dataall[12];
					var storage_rate_crit = dataall[13];
					var deadnodes = total_nodes - active_nodes;

					// alert(active_nodes + "+"+total_nodes+"+"+deadnodes);

					jQuery("#hbase_nodes_totol").text(total_nodes);
					jQuery("#hbase_cunchu").text(storage_total);

					canvasPie('hbase_pie', mem_rate, mem_warn, mem_crit);
					cpuPlugin('hbase_svg1', '#hbase_svgnum', cpu_rate,
							cpu_warn, cpu_crit);
					showActiveNode("#hbase_nodes", active_nodes, total_nodes,
							deadnodes);
					jQuery("#hbase_region").text(region_num);
					jQuery("#hbase_requst").text(requst_num);
					process("#hbase_rate", storage_rate, storage_rate_warn,
							storage_rate_crit);
				}

			});// AJAX-end
}

function bss_cjzh() {
	$.ajax({
		url : "datacenter/datacenter!bss_cjzh.action",
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
			var job_num = dataall[9];// job数
			var queue_info = dataall[10];// 队列使用情况
			var file_num = dataall[11];// 文件数
			var file_num_warn = dataall[12];
			var file_num_crit = dataall[13];
			var deadnodes = total_nodes - active_nodes;
			// alert(active_nodes + "+"+total_nodes+"+"+deadnodes);

			jQuery("#bss_nodes_totol").text(total_nodes);
			jQuery("#bss_cunchu").text(storage_total);
			jQuery("#bss_job").text(job_num);
			// jQuery("#txt").text(file_num);
			fillnum('#bss_txt', file_num, file_num_warn, file_num_crit);
			canvasPie('bss_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('bss_svg1', '#bss_svgnum', cpu_rate, cpu_warn, cpu_crit);
			showActiveNode("#bss_nodes", active_nodes, total_nodes, deadnodes);
		}

	});
}

