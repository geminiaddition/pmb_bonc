/**
 * 定义有颜色变化的插件
 * author: panxw
 */

/**
 * 活跃结点的显示及变色
 * 
 * @param elementId
 * @param numerator
 * @param denominator
 */
function showActiveNode(elementId, numerator, denominator) {

	var deadNodes = denominator - numerator;

	$(elementId).text(numerator + "/" + denominator);

	if (deadNodes == 0) {
		$(elementId).css('color', '#80FF80');
	} else if (deadNodes == 1) {
		// 如果dead节点=1出现黄色警告
		$(elementId).css('color', '#FFE972');
	} else if (deadNodes >= 2) {
		// 如果dead节点>=2出现红色警告
		$(elementId).css('color', '#FF0000');
	}
}
/**
 * 显示存活节点正常
 * @param elementId
 * @param dashboard
 * 
 * **/
function dashdashboard(elementId,dashboard){
	if(dashboard=="正常"){
		$(elementId).css('color', '#80FF80');	
	}else{
		$(elementId).text(dashboard);
		$(elementId).css('color', '#FF0000');
	}
}
function storage(elementId,onerate, onewarn, onecrit) {
	var one_rate=  parseInt(onerate);
	var one_warn=  parseInt(onewarn);
	var one_crit=  parseInt(onecrit);
	
	jQuery(elementId).text(one_rate+"%");
	
		  if(one_rate <one_warn){
			  jQuery(elementId).css('color','#80FF80');
		    }else if(one_rate>=one_warn&&one_rate < one_crit){
		        //如果dead节点=1出现黄色警告
		    	jQuery(elementId).css('color','#FFE972');
		    }else if(one_rate >= one_crit) {
		        //如果dead节点>=2出现红色警告
		    	jQuery(elementId).css('color','#FF0000');
		    }
}
function fillnum(elementId,onerate, onewarn, onecrit) {
	
	var one_rate=  parseInt(onerate);
	var one_warn=  parseInt(onewarn);
	var one_crit=  parseInt(onecrit);
	jQuery(elementId).text(one_rate+"W");
	  if(one_warn>one_rate){	 
		  jQuery(elementId).css('color','#80FF80');
	    }else if(one_rate>=one_warn&&one_rate < one_crit){
	       
	    	jQuery(elementId).css('color','#FFE972');
	    }else if(one_rate >= one_crit) {	    	
	      
	    	jQuery(elementId).css('color','#FF0000');
	    }
}
/**
 * 字符串截取
 * 
 * @param one
 */

function toarraystring(one){	
	var right=one.indexOf("]");
    var tustring=one.substring(1,right); 
	var strs= new Array(); 
	strs=tustring.split(","); 
	return strs;
}

/**
 * 显示进度条
 * 
 * @param elementId
 * @param numerator
 * @param denominator
 */
function processBar(elementIdBar,elementIdFont,hdfsUsed, hdfsusedWarn,elementIdFonta, hdfsusedCrit) {

    var hdfsUsed = parseFloat(hdfsUsed);
    var    hdfsusedWarn = parseInt(hdfsusedWarn);
    var   hdfsusedCrit = "absolute:"+hdfsusedCrit+"%";

    $(elementIdBar).css('aria-valuenow',hdfsUsed + "%");
    $(elementIdBar).css('width',hdfsUsed + "%");
    $(elementIdFont).text(hdfsUsed + "%");
   document.getElementById(elementIdFonta).setAttribute("title",hdfsusedCrit);
  
    if(hdfsUsed < hdfsusedWarn){
        $(elementIdBar).addClass("pro-bar-success");
        $(elementIdFont).addClass("font-success");
    
    }else if(hdfsUsed >= hdfsusedWarn){
        //红色警告
        $(elementIdBar).addClass("pro-bar-danger");
        $(elementIdFont).addClass("font-danger");
    }
}
/**
 * 显示进度条总选
 * 
 * @param elementId
 * @param numerator
 * @param denominator
 */
function processBarfen(elementIdBar,elementIdFont,hdfsUsed, hdfsusedWarn,elementIdFonta, hdfsusedCrit) {
	var fen =hdfsUsed*hdfsusedCrit/100;

	var hdfsusedC=parseFloat(hdfsusedCrit);
    var hdfsUsed = parseFloat(hdfsUsed);
    var    hdfsusedWarn = parseInt(hdfsusedWarn);
    var   hdfsusedCrit = "absolute:"+hdfsusedCrit+"%";
    
    
  // alert(hdfsusedC);
if(hdfsusedC=="0"){
    $(elementIdBar).css('width',hdfsUsed + "%");
}else{
	$(elementIdBar).css('width',fen + "%");
}
    $(elementIdFont).text(hdfsUsed + "%");
   document.getElementById(elementIdFonta).setAttribute("title",hdfsusedCrit);
  
    if(hdfsUsed < hdfsusedWarn){
        $(elementIdBar).addClass("pro-bar-success");
        $(elementIdFont).addClass("font-success");
    
    }else if(hdfsUsed >= hdfsusedWarn){
        //红色警告
        $(elementIdBar).addClass("pro-bar-warning");
        $(elementIdFont).addClass("font-warning");
    }
}

/**
 * 显示job数的运行中和等待状态的结点
 * 
 * @param elementId
 * @param numerator
 * @param denominator
 */
function jobNumRunOrWait(elementId, numerator, denominator, jobWarn, jobCrit) {

	var numerator = parseInt(numerator), jobWarn = parseInt(jobWarn), jobCrit = parseInt(jobCrit);

	if (denominator == "" || denominator == null) {
		$(elementId).text(numerator);
	} else {
		$(elementId).text(numerator + "/" + denominator);
	}

	if (numerator < jobWarn) {
		$(elementId).css('color', '#80FF80');
	} else if (numerator >= jobWarn && numerator < jobCrit) {
		// 黄色警告
		$(elementId).css('color', '#FFE972');
	} else if (numerator >= jobCrit) {
		// 红色警告
		$(elementId).css('color', '#FF0000');
	}
}

/**
 * 进度条插件显示与变色
 * 
 * @param elementIdBar
 * @param elementIdFont
 * @param hdfsUsed
 * @param hdfsusedWarn
 * @param hdfsusedCrit
 */
function process(elementIdFont, hdfsUsed, hdfsusedWarn, hdfsusedCrit) {

	var hdfsUsed = parseInt(hdfsUsed);
	var hdfsusedWarn = parseInt(hdfsusedWarn);
	var hdfsusedCrit = parseInt(hdfsusedCrit);

	// $(elementIdBar).css('width',hdfsUsed + "%");
	$(elementIdFont).text(hdfsUsed + "%");

	if (hdfsUsed < hdfsusedWarn) {
		// $(elementIdBar).addClass("pro-bar-success");
		$(elementIdFont).addClass("font-success");
	} else if (hdfsUsed >= hdfsusedWarn && hdfsUsed < hdfsusedCrit) {
		// 黄色警告
		// $(elementIdBar).addClass("pro-bar-warning");
		$(elementIdFont).addClass("font-warning");
	} else if (hdfsUsed >= hdfsusedCrit) {
		// 红色警告
		// $(elementIdBar).addClass("pro-bar-danger");
		$(elementIdFont).addClass("font-danger");
	}
}

/**
 * 使用原生Html5 Canvas画布 定义内存环形图
 * 
 * @param elementId
 * @param memUsed
 * @param memWarn
 * @param memCrit
 */
function canvasPie(elementId, memUsed, memWarn, memCrit) {

	var memUsedComm = parseInt(memUsed);
	var memWarnComm = parseInt(memWarn);
	var memCritComm = parseInt(memCrit);

	var canvas = document.getElementById(elementId);
	var context = canvas.getContext('2d');

	var piecolor;
	if (memUsedComm < memWarnComm) {
		piecolor = '#72DC72';
	} else if (memUsedComm >= memWarnComm && memUsedComm < memCritComm) {
		piecolor = '#FFE972';
	} else if (memUsedComm >= memCritComm) {
		piecolor = '#FF0000';
	}

	var rand = Math.floor((Math.random() * 10).toFixed(1) - 0), arry = [ -5,
			-4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ];
	// console.info(arry[rand]);
	memUsedComm = memUsedComm + arry[rand];
	if (memUsedComm >= 100) {
		memUsedComm = 99;
	} else if (memUsedComm < 0) {
		memUsedComm = 0;
	}

	/*
	 * $("#"+elementId).height(60); $("#"+elementId).width(60);
	 */
	// ctx.fillStyle='#FF0000';
	// context.fillRect(0,0,80,80);
	// ***开始画一个灰色的圆 333333 1F1F1F
	context.clearRect(0, 0, 80, 100);
	context.beginPath();
	// 坐标移动到圆心
	context.moveTo(29, 29);
	// 画圆,圆心是29,29,半径29,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针
	context.arc(29, 29, 29, 0, Math.PI * 2, false);
	context.closePath();
	// 填充颜色
	// context.fillStyle = '#ddd';
	context.fillStyle = '#333333';
	context.fill();
	// ***灰色的圆画完
	// 画进度
	context.beginPath();
	// 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形
	context.moveTo(29, 29);
	// 跟上面的圆唯一的区别在这里,不画满圆,画个扇形
	context.arc(29, 29, 29, 0, Math.PI * 2 * memUsedComm / 100, false);
	context.closePath();
	context.fillStyle = piecolor;
	context.fill();

	// 画内部空白
	context.beginPath();
	context.moveTo(29, 29);
	context.arc(29, 29, 24, 0, Math.PI * 2, true);
	context.closePath();
	context.fillStyle = '#1F1F1F';
	context.fill();
	// 在中间写字
	context.font = "9pt Arial";
	context.fillStyle = piecolor;
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	context.moveTo(29, 29);
	context.fillText(memUsedComm + "%", 29, 29);

}
/**
 * 使用原生Html5 Canvas画布 定义内存环形图小圆
 * 
 * @param elementId
 * @param memUsed
 * @param memWarn
 * @param memCrit
 */
function canvasPielittle(elementId, memUsed, memWarn, memCrit) {

	var memUsedComm = parseInt(memUsed);
	var memWarnComm = parseInt(memWarn);
	var memCritComm = parseInt(memCrit);

	var canvas = document.getElementById(elementId);
	var context = canvas.getContext('2d');

	var piecolor;
	if (memUsedComm < memWarnComm) {
		piecolor = '#72DC72';
	} else if (memUsedComm >= memWarnComm && memUsedComm < memCritComm) {
		piecolor = '#FFE972';
	} else if (memUsedComm >= memCritComm) {
		piecolor = '#FF0000';
	}

	var rand = Math.floor((Math.random() * 10).toFixed(1) - 0), arry = [ -5,
			-4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ];
	// console.info(arry[rand]);
	memUsedComm = memUsedComm + arry[rand];
	if (memUsedComm >= 100) {
		memUsedComm = 99;
	} else if (memUsedComm < 0) {
		memUsedComm = 0;
	}

	/*
	 * $("#"+elementId).height(60); $("#"+elementId).width(60);
	 */
	// ctx.fillStyle='#FF0000';
	// context.fillRect(0,0,80,80);
	// ***开始画一个灰色的圆 333333 1F1F1F
	context.clearRect(0, 0, 80, 100);
	context.beginPath();
	// 坐标移动到圆心
	context.moveTo(20, 20);
	// 画圆,圆心是29,29,半径29,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针
	context.arc(20, 20, 20, 0, Math.PI * 2, false);
	context.closePath();
	// 填充颜色
	// context.fillStyle = '#ddd';
	context.fillStyle = '#333333';
	context.fill();
	// ***灰色的圆画完
	// 画进度
	context.beginPath();
	// 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形
	context.moveTo(20, 20);
	// 跟上面的圆唯一的区别在这里,不画满圆,画个扇形
	context.arc(20, 20, 20, 0, Math.PI * 2 * memUsedComm / 100, false);
	context.closePath();
	context.fillStyle = piecolor;
	context.fill();

	// 画内部空白
	context.beginPath();
	context.moveTo(20, 20);
	context.arc(20, 20, 15, 0, Math.PI * 2, true);
	context.closePath();
	context.fillStyle = '#1F1F1F';
	context.fill();
	// 在中间写字
	context.font = "9pt Arial";
	context.fillStyle = piecolor;
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	context.moveTo(20, 20);
	context.fillText(memUsedComm + "%", 20, 20);

}



/**
 * ECHARTS 共同 内存环形图的定义（）
 * 
 * @param elementId
 * @param memUsed
 * @param memWarn
 * @param memCrit
 */
function echartPie(elementId, memUsed, memWarn, memCrit) {

	var memUsedComm = parseInt(memUsed), memWarnComm = parseInt(memWarn), memCritComm = parseInt(memCrit);

	// 路径配置
	require.config({
		paths : {
			echarts : '../resources/plugins/echarts/dist'
		}
	});

	// 使用
	require([ 'echarts', 'echarts/chart/pie' ], function(ec) {
		// 基于准备好的dom，初始化echarts图表
		var myChartPie1 = ec.init(document.getElementById(elementId));
		var piecolor;
		if (memUsedComm < memWarnComm) {
			piecolor = '#72DC72';
		} else if (memUsedComm >= memWarnComm && memUsedComm < memCritComm) {
			piecolor = '#FFE972';
		} else if (memUsedComm >= memCritComm) {
			piecolor = '#FF0000';
		}

		var labelTop = {
			normal : {
				color : '#333333',
				label : {
					show : true,
					position : 'center',
					formatter : '{b}',
					textStyle : {
						baseline : 'bottom'
					}
				},
				labelLine : {
					show : false
				}
			}
		};
		var labelFromatter = {
			normal : {
				label : {
					formatter : function(params) {
						return params.value + '%';
						// return params.value;
					},
					textStyle : {
						baseline : 'center',
						color : piecolor
					}
				}
			},
		}
		var labelBottom = {
			normal : {
				color : piecolor,
				label : {
					show : true,
					position : 'center',
				// formatter : '{b}',
				},
				labelLine : {
					show : false
				}
			}
		};
		var radius = [ 25, 30 ];
		option_pie1 = {
			series : [ {
				type : 'pie',
				center : [ '50%', '50%' ],
				radius : radius,
				x : '0%', // for funnel
				itemStyle : labelFromatter,
				data : [ {
					name : '',
					value : memUsedComm,
					itemStyle : labelBottom
				}, {
					name : '',
					value : 100 - memUsedComm,
					itemStyle : labelTop
				} ]
			} ]
		};

		myChartPie1.setOption(option_pie1);

	});
}

/**
 * 扩展操作SVG文件的CPU数据显示插件
 * 
 * @param elementId
 * @param cpuUsed
 * @param cpuusedWarn
 * @param cpuusedCrit
 */
function cpuPlugin(elementId, elementFontId, cpuUsed, cpuusedWarn, cpuusedCrit) {

	var svgDoc = document.getElementById(elementId).getSVGDocument();

	var cpu = parseInt(cpuUsed), cpuRateWarn = parseInt(cpuusedWarn), cpuRateCrit = parseInt(cpuusedCrit);

	if (cpu == 0) {
		cpu = 1;
	} else if (cpu == 100) {
		cpu = 99;
	}

	// 显示CPU占用率的数据
	$(elementFontId).text(cpu + "%");

	// 初始化颜色 fill:#5E5E5E;stroke-width:1; stroke:#1F1F1F
	for (var ini = 1; ini <= 100; ini++) {
		svgDoc.getElementById(ini).setAttribute("style",
				"fill:#5E5E5E;stroke-width:1; stroke:#1F1F1F");
	}

	if (cpu < cpuRateWarn) {
		// 显示字体颜色
		$(elementFontId).css('color', '#80FF80');

		for (c = 1; c <= cpu; c++) {
			// 绿色提示
			svgDoc.getElementById(c).setAttribute("style",
					"fill:#80FF80;stroke-width:1; stroke:#1F1F1F");
		}
	} else if (cpu >= cpuRateWarn && cpu < cpuRateCrit) {
		// 显示字体颜色
		$(elementFontId).css('color', '#FFE972');

		for (w = 1; w <= cpu; w++) {
			// 黄色警告
			svgDoc.getElementById(w).setAttribute("style",
					"fill:#FFE972;stroke-width:1; stroke:#1F1F1F");
		}
	} else if (cpu >= cpuRateCrit) {
		// 显示字体颜色
		$(elementFontId).css('color', '#FF0000');

		for (t = 1; t <= cpu; t++) {
			// 红色警告
			svgDoc.getElementById(t).setAttribute("style",
					"fill:#FF0000;stroke-width:1; stroke:#1F1F1F");
		}
	}

}
