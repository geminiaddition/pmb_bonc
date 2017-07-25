jQuery(document).ready(function() {
	getdmpyarn();
	setInterval('getdmpyarn()', 6000);
	getdmpkafka();
	setInterval('getdmpkafka()', 6000);
	getdmpftp();
	setInterval('getdmpftp()', 6000);
});
function getdmpyarn() {
	$.ajax({
		url: "tooout/tooout!tooutdmpyarn.action",
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
			
			jQuery("#dmp_yarn_total").text(total_nodes);
			jQuery("#dmp_yarn_storage").text(storage_total);
			jQuery("#dmp_yarn_job").text(job_num);
			
			//jQuery("#txt").text(file_num);
			fillnum('#dmp_yarn_files',file_num,file_num_warn,file_num_crit);
			canvasPie('dmp_yarn_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('dmp_yarn_cpu', '#dmp_yarn_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#dmp_yarn_acnode", active_nodes, total_nodes);}
	
	});//AJAX-end
}
function getdmpkafka() {
	$.ajax({
		url: "tooout/tooout!tooutdmpkafka.action",
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
			
			
			
			jQuery("#dmp_kafka_total").text(total_nodes);
			jQuery("#dmp_kafka_storage").text(storage_total);
			jQuery("#dmp_kafka_ssnetwork").text(ss_network);
			storage('#dmp_kafka_storage_per',storage_total_rate,storage_total_warn,storage_total_crit);
			canvasPie('dmp_kafka_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('dmp_kafka_cpu', '#dmp_kafka_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        }
	
	});//AJAX-end
}
function getdmpftp() {
	$.ajax({
		url : "tooout/tooout!tooutdmpftp.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			//console.info(dataall);
			var total_nodes = dataall[0];
			
			var	mem_rate = dataall[1];//内存
			var	mem_warn = dataall[2];
			var mem_crit = dataall[3];
			var	cpu_rate = dataall[4];//cpu
			var	cpu_warn = dataall[5];
			var	cpu_crit = dataall[6];
			var	active_nodes = dataall[7];
			var	pc_load = dataall[8];
			
			
			
			jQuery("#dmp_ftp_total").text(total_nodes);
			
			jQuery("#dmp_ftp_pclode").text(pc_load);
			
			//jQuery("#txt").text(file_num);
			
			canvasPie('dmp_ftp_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('dmp_ftp_cpu', '#dmp_ftp_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#dmp_ftp_acnode", active_nodes, total_nodes);}
	});
}

