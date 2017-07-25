jQuery(document).ready(function() {
	getpoweroneyarn();
	setInterval('getpoweroneyarn()', 6000);
	getpowerfouryarn();
	setInterval('getpowerfouryarn()', 6000);
	getpowermpp();
	setInterval('getpowermpp()', 6000);
	getpowerftp();
	setInterval('getpowerftp()', 6000);
});
function getpoweroneyarn() {
	$.ajax({
		url: "tooout/tooout!tooutpoweroneyarn.action",
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
			
			jQuery("#power_yarn_one_total").text(total_nodes);
			jQuery("#power_yarn_one_storage").text(storage_total);
			jQuery("#power_yarn_one_job").text(job_num);
			
			//jQuery("#txt").text(file_num);
			fillnum('#power_yarn_one_files',file_num,file_num_warn,file_num_crit);
			canvasPie('power_yarn_one_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('power_yarn_one_cpu', '#power_yarn_one_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#power_yarn_one_acnode", active_nodes, total_nodes);}
	
	});//AJAX-end
}
function getpowerfouryarn() {
	$.ajax({
		url: "tooout/tooout!tooutpowerfouryarn.action",
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
			
			jQuery("#power_yarn_four_total").text(total_nodes);
			jQuery("#power_yarn_four_storage").text(storage_total);
			jQuery("#power_yarn_four_job").text(job_num);
			
			//jQuery("#txt").text(file_num);
			fillnum('#power_yarn_four_files',file_num,file_num_warn,file_num_crit);
			canvasPie('power_yarn_four_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('power_yarn_four_cpu', '#power_yarn_four_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#power_yarn_four_acnode", active_nodes, total_nodes);}
	
	});//AJAX-end
}
function getpowermpp() {
	$.ajax({
		url : "tooout/tooout!tooutpowermpp.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var total_nodes = dataall[0];
			
			var mem_rate = dataall[1];
			var mem_warn = dataall[2];
			var mem_crit = dataall[3];
			var cpu_rate = dataall[4];
			var cpu_warn = dataall[5];
			var cpu_crit = dataall[6];
			var active_nodes = dataall[7];
			
			$("#power_mpp_total").text(total_nodes);
			
			
			showActiveNode("#power_mpp_acnode", active_nodes, total_nodes);
			
			
			canvasPie("power_mpp_mem", cpu_rate, cpu_warn, cpu_crit);
			cpuPlugin('power_mpp_cpu', '#power_mpp_cpu_one', mem_rate,
					mem_warn, mem_crit);
		}
	});
}
function getpowerftp() {
	$.ajax({
		url : "tooout/tooout!tooutpowerftp.action",
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
			
			
			
			jQuery("#pwoer_ftp_total").text(total_nodes);
			
			jQuery("#pwoer_ftp_pclode").text(pc_load);
			
			//jQuery("#txt").text(file_num);
			
			canvasPie('pwoer_ftp_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('pwoer_ftp_cpu', '#pwoer_ftp_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#pwoer_ftp_acnode", active_nodes, total_nodes);}
	});
}
