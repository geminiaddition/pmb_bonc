jQuery(document).ready(function() {
	byu_yarm();
	setInterval('byu_yarm()', 6000);
	zxjg_yarm();
	setInterval('zxjg_yarm()', 6000);
	yybf();
	setInterval('yybf()', 6000);
	 sjjk();
	 setInterval('sjjk()', 6000);
	 
	 fwk();
	 setInterval('fwk()', 6000);
	 yjhj();
	 setInterval('yjhj()', 6000);
	 zxjg();
	 setInterval('zxjg()', 6000);
	 cbjg();
	 setInterval('cbjg()', 6000);
	
});
function byu_yarm() {
	$.ajax({
		url: "datacenter/datacenter!byu_yarm.action",
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
			//alert(active_nodes + "+"+total_nodes+"+"+deadnodes);
			
			jQuery("#byu_yarm_nodes_totol").text(total_nodes);
			jQuery("#byu_cunchu").text(storage_total);
			jQuery("#byu_yarm_job").text(job_num);
			
			//jQuery("#txt").text(file_num);
			fillnum('#byu_txt',file_num,file_num_warn,file_num_crit);
			canvasPie('byu_yarm_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('byu_yarm_svg1', '#byu_yarm_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#byu_yarm_nodes", active_nodes, total_nodes, deadnodes);}
	
	});//AJAX-end
}
function zxjg_yarm() {
	$.ajax({
		url: "datacenter/datacenter!zxjg_yarm.action",
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
			
			//alert(active_nodes + "+"+total_nodes+"+"+deadnodes);
			
			jQuery("#zxjg_yarm_nodes_totol").text(total_nodes);
			jQuery("#zxjg_cunchu").text(storage_total);
			jQuery("#zxjg_yarm_job").text(job_num);
			
			//jQuery("#txt").text(file_num);
			fillnum('#zxjg_txt',file_num,file_num_warn,file_num_crit);
			canvasPie('zxjg_yarm_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('zxjg_yarm_svg1', '#zxjg_yarm_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#zxjg_yarm_nodes", active_nodes, total_nodes, deadnodes);}
	
	});//AJAX-end
}
function yybf() {
	$.ajax({
		url: "datacenter/datacenter!yybf.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			//console.info(dataall);
			var total_nodes = dataall[0];
			var	mem_rate = dataall[1];//内存
			var	mem_warn = dataall[2];
			var mem_crit = dataall[3];
			var	cpu_rate = dataall[4];//cpu
			var	cpu_warn = dataall[5];
			var	cpu_crit = dataall[6];
			var process_nun=dataall[7];
		
			//alert(active_nodes + "+"+total_nodes+"+"+deadnodes);
			
			jQuery("#yybf_nodes_totol").text(total_nodes);
			jQuery("#yybf_process_nun").text(process_nun);
			canvasPie('yybf_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('yybf_svg1', '#yybf_svgnum', cpu_rate, cpu_warn, cpu_crit);}
	
	});//AJAX-end
}
function sjjk() {
	$.ajax({
		url: "datacenter/datacenter!sjjk.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			var	mem_rate = dataall[0];//内存
			var	mem_warn = dataall[1];
			var mem_crit = dataall[2];
			var	cpu_rate = dataall[3];//cpu
			var	cpu_warn = dataall[4];
			var	cpu_crit = dataall[5];
			var session_num=dataall[6];
			var net_status=dataall[7];
			
			canvasPielittle('sjjk_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('sjjk_svg1', '#sjjk_svgnum', cpu_rate, cpu_warn, cpu_crit);
			jQuery("#sjjk_session").text(session_num);
			jQuery("#sjjk_net").text(net_status);}
	
	});//AJAX-end
}
function fwk() {
	$.ajax({
		url: "datacenter/datacenter!fwk.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			var	mem_rate = dataall[0];//内存
			var	mem_warn = dataall[1];
			var mem_crit = dataall[2];
			var	cpu_rate = dataall[3];//cpu
			var	cpu_warn = dataall[4];
			var	cpu_crit = dataall[5];
			var session_num=dataall[6];
			var net_status=dataall[7];
			
			canvasPielittle('fwk_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('fwk_svg1', '#fwk_svgnum', cpu_rate, cpu_warn, cpu_crit);
			jQuery("#fwk_session").text(session_num);
			jQuery("#fwk_net").text(net_status);}
	
	});//AJAX-end
}
function yjhj() {
	$.ajax({
		url: "datacenter/datacenter!yjhj.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			var	mem_rate = dataall[0];//内存
			var	mem_warn = dataall[1];
			var mem_crit = dataall[2];
			var	cpu_rate = dataall[3];//cpu
			var	cpu_warn = dataall[4];
			var	cpu_crit = dataall[5];
			var session_num=dataall[6];
			var net_status=dataall[7];
			
			canvasPielittle('yjhj_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('yjhj_svg1', '#yjhj_svgnum', cpu_rate, cpu_warn, cpu_crit);
			jQuery("#yjhj_session").text(session_num);
			jQuery("#yjhj_net").text(net_status);}
	
	});//AJAX-end
}
function zxjg() {
	$.ajax({
		url: "datacenter/datacenter!zxjg.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			var	mem_rate = dataall[0];//内存
			var	mem_warn = dataall[1];
			var mem_crit = dataall[2];
			var	cpu_rate = dataall[3];//cpu
			var	cpu_warn = dataall[4];
			var	cpu_crit = dataall[5];
			var session_num=dataall[6];
			var net_status=dataall[7];
			
			canvasPielittle('zxjg_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('zxjg_svg1', '#zxjg_svgnum', cpu_rate, cpu_warn, cpu_crit);
			jQuery("#zxjg_session").text(session_num);
			jQuery("#zxjg_net").text(net_status);}
	
	});//AJAX-end
}
function cbjg() {
	$.ajax({
		url: "datacenter/datacenter!cbjg.action",
		type: "post",
		dataType: "json",
		success: function(data){
			var dataall = data.nameArray;
			var	mem_rate = dataall[0];//内存
			var	mem_warn = dataall[1];
			var mem_crit = dataall[2];
			var	cpu_rate = dataall[3];//cpu
			var	cpu_warn = dataall[4];
			var	cpu_crit = dataall[5];
			var session_num=dataall[6];
			var net_status=dataall[6];
			
			canvasPielittle('cbjg_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('cbjg_svg1', '#cbjg_svgnum', cpu_rate, cpu_warn, cpu_crit);
			jQuery("#cbjg_session").text(session_num);
			jQuery("#cbjg_net").text(net_status);}
	
	});//AJAX-end
}