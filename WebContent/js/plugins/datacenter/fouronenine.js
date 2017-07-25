jQuery(document).ready(function() {
getllcx();
	setInterval('getllcx()', 6000);
});
function getllcx() {
	$.ajax({
		url: "datacenter/datacenter!llcx.action",
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
			
			//alert(active_nodes + "+"+total_nodes+"+"+deadnodes);
			
			jQuery("#llcx_nodes_totol").text(total_nodes);
			jQuery("#llcx_cunchu").text(storage_total);
			
			canvasPie('llcx_pie', mem_rate, mem_warn, mem_crit);
			cpuPlugin('llcx_svg1', '#llcx_svgnum', cpu_rate, cpu_warn, cpu_crit);
	        showActiveNode("#llcx_nodes", active_nodes, total_nodes, deadnodes);
	        jQuery("#llcx_region").text(region_num);
	        jQuery("#llcx_requst").text(requst_num);
	        storage("#llcx_rate",storage_rate,storage_rate_warn,storage_rate_crit);}

	});//AJAX-end
}