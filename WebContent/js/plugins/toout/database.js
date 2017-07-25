jQuery(document).ready(function() {
	getoracleone();
	setInterval('getoracleone()', 6000);
	getoracletwo();
	setInterval('getoracletwo()', 6000);
	
});
function getoracleone() {
	$.ajax({
		url: "tooout/tooout!tooutoracleone.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			//console.info(dataall);
			
			var	mem_rate = dataall[0];//内存
			var	mem_warn = dataall[1];
			var mem_crit = dataall[2];
			var	cpu_rate = dataall[3];//cpu
			var	cpu_warn = dataall[4];
			var	cpu_crit = dataall[5];
			var	session_num = dataall[6];
			var	net_status = dataall[7];
			
			jQuery("#oracle_one_session").text(session_num);
			dashdashboard("#oracle_one_net_status", net_status);
			canvasPielittle('onacle_one_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('oracle_one_cpu', '#oracle_one_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        }
	
	});//AJAX-end
}
function getoracletwo() {
	$.ajax({
		url: "tooout/tooout!tooutoracletwo.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			//console.info(dataall);
			
			var	mem_rate = dataall[0];//内存
			var	mem_warn = dataall[1];
			var mem_crit = dataall[2];
			var	cpu_rate = dataall[3];//cpu
			var	cpu_warn = dataall[4];
			var	cpu_crit = dataall[5];
			var	session_num = dataall[6];
			var	net_status = dataall[7];
			
			jQuery("#oracle_two_session").text(session_num);
			dashdashboard("#oracle_two_net_status", net_status);
			canvasPielittle('onacle_two_mem', mem_rate, mem_warn, mem_crit);
			cpuPlugin('oracle_two_cpu', '#oracle_two_cpu_one', cpu_rate, cpu_warn, cpu_crit);
	        }
	
	});//AJAX-end
}

