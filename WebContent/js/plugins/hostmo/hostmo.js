
$(function() {
	initChart();
	data22setChart();
	cpu22setChart();
	mem22setChart();
	root67setChart();
	data67setChart();
	cpu67setChart();
	mem67setChart();
	root209setChart();
	data209setChart();
	cpu209setChart();
	mem209setChart();
	root208setChart();
	data208setChart();
	cpu208setChart();
	mem208setChart();
	root74setChart();
	data74setChart();
	cpu74setChart();
	mem74setChart();
	root75setChart();
	data75setChart();
	cpu75setChart();
	mem75setChart();
	root63setChart();
	data63setChart();
	cpu63setChart();
	mem63setChart();
	root69setChart();
	data69setChart();
	cpu69setChart();
	mem69setChart();
	root68setChart();
	data68setChart();
	cpu68setChart();
	mem68setChart();
	root62setChart();
	data62setChart();
	cpu62setChart();
	mem62setChart();
	root64setChart();
	data64setChart();
	cpu64setChart();
	mem64setChart();
	getData(); // 动态获取数据

});

var app = {};
app.timeTicket = setInterval(function() { // 定时刷新图表
	getData();
}, 6000);
var myChart;
var mydata22Chart;
var mycpu22Chart;
var mymem22Chart;

var myroot67Chart;
var mydata67Chart;
var mycpu67Chart;
var mymem67Chart;

var myroot209Chart;
var mydata209Chart;
var mycpu209Chart;
var mymem209Chart;

var myroot208Chart;
var mydata208Chart;
var mycpu208Chart;
var mymem208Chart;

var myroot74Chart;
var mydata74Chart;
var mycpu74Chart;
var mymem74Chart;

var myroot75Chart;
var mydata75Chart;
var mycpu75Chart;
var mymem75Chart;

var myroot69Chart;
var mydata69Chart;
var mycpu69Chart;
var mymem69Chart;

var myroot63Chart;
var mydata63Chart;
var mycpu63Chart;
var mymem63Chart;

var myroot68Chart;
var mydata68Chart;
var mycpu68Chart;
var mymem68Chart;

var myroot62Chart;
var mydata62Chart;
var mycpu62Chart;
var mymem62Chart;

var myroot64Chart;
var mydata64Chart;
var mycpu64Chart;
var mymem64Chart;

var jieTongData = [];
var data22array = [];
var cpu22array = [];
var mem22array = [];

var root67array = [];
var data67array = [];
var cpu67array = [];
var mem67array = [];

var root209array = [];
var data209array = [];
var cpu209array = [];
var mem209array = [];

var root208array = [];
var data208array = [];
var cpu208array = [];
var mem208array = [];

var root74array = [];
var data74array = [];
var cpu74array = [];
var mem74array = [];

var root75array = [];
var data75array = [];
var cpu75array = [];
var mem75array = [];

var root63array = [];
var data63array = [];
var cpu63array = [];
var mem63array = [];

var root69array = [];
var data69array = [];
var cpu69array = [];
var mem69array = [];

var root68array = [];
var data68array = [];
var cpu68array = [];
var mem68array = [];

var root62array = [];
var data62array = [];
var cpu62array = [];
var mem62array = [];

var root64array = [];
var data64array = [];
var cpu64array = [];
var mem64array = [];

var option = {};
var data22option = {};
var cpu22option = {};
var mem22option = {};

var root67option = {};
var data67option = {};
var cpu67option = {};
var mem67option = {};

var root209option = {};
var data209option = {};
var cpu209option = {};
var mem209option = {};

var root208option = {};
var data208option = {};
var cpu208option = {};
var mem208option = {};

var root74option = {};
var data74option = {};
var cpu74option = {};
var mem74option = {};

var root75option = {};
var data75option = {};
var cpu75option = {};
var mem75option = {};

var root63option = {};
var data63option = {};
var cpu63option = {};
var mem63option = {};

var root69option = {};
var data69option = {};
var cpu69option = {};
var mem69option = {};

var root68option = {};
var data68option = {};
var cpu68option = {};
var mem68option = {};

var root62option = {};
var data62option = {};
var cpu62option = {};
var mem62option = {};

var root64option = {};
var data64option = {};
var cpu64option = {};
var mem64option = {};
function initChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myChart = echarts.init(document.getElementById('22_root'));
	myChart.showLoading({
		text : "正在努力加载图表数据..."
	});
	option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : jieTongData

			} ]
		} ]
	};
}
function data22setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata22Chart = echarts.init(document.getElementById('22_data'));
	mydata22Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data22option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data22array

			} ]
		} ]
	};
}
function cpu22setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu22Chart = echarts.init(document.getElementById('22_cpu'));
	mycpu22Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu22option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu22array

			} ]
		} ]
	};
}
function mem22setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem22Chart = echarts.init(document.getElementById('22_mem'));
	mymem22Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem22option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem22array

			} ]
		} ]
	};
}
function root67setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myroot67Chart = echarts.init(document.getElementById('67_root'));
	myroot67Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	root67option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : root67array

			} ]
		} ]
	};
}
function data67setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata67Chart = echarts.init(document.getElementById('67_data'));
	mydata67Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data67option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data67array

			} ]
		} ]
	};
}
function cpu67setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu67Chart = echarts.init(document.getElementById('67_cpu'));
	mycpu67Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu67option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu67array

			} ]
		} ]
	};
}

function mem67setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem67Chart = echarts.init(document.getElementById('67_mem'));
	mymem67Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem67option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem67array

			} ]
		} ]
	};
}
function root209setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myroot209Chart = echarts.init(document.getElementById('209_root'));
	myroot209Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	root209option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : root209array

			} ]
		} ]
	};
}
function data209setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata209Chart = echarts.init(document.getElementById('209_data'));
	mydata209Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data209option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data209array

			} ]
		} ]
	};
}
function cpu209setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu209Chart = echarts.init(document.getElementById('209_cpu'));
	mycpu209Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu209option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu209array

			} ]
		} ]
	};
}
function mem209setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem209Chart = echarts.init(document.getElementById('209_mem'));
	mymem209Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem209option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem209array

			} ]
		} ]
	};
}

function root208setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myroot208Chart = echarts.init(document.getElementById('208_root'));
	myroot208Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	root208option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : root208array

			} ]
		} ]
	};
}
function data208setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata208Chart = echarts.init(document.getElementById('208_data'));
	mydata208Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data208option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data208array

			} ]
		} ]
	};
}
function cpu208setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu208Chart = echarts.init(document.getElementById('208_cpu'));
	mycpu208Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu208option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu208array

			} ]
		} ]
	};
}
function mem208setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem208Chart = echarts.init(document.getElementById('208_mem'));
	mymem208Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem208option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem208array

			} ]
		} ]
	};
}
function root74setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myroot74Chart = echarts.init(document.getElementById('74_root'));
	myroot74Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	root74option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : root74array

			} ]
		} ]
	};
}
function data74setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata74Chart = echarts.init(document.getElementById('74_data'));
	mydata74Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data74option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data74array

			} ]
		} ]
	};
}
function cpu74setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu74Chart = echarts.init(document.getElementById('74_cpu'));
	mycpu74Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu74option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu74array

			} ]
		} ]
	};
}
function mem74setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem74Chart = echarts.init(document.getElementById('74_mem'));
	mymem74Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem74option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem74array

			} ]
		} ]
	};
}
function root75setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myroot75Chart = echarts.init(document.getElementById('75_root'));
	myroot75Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	root75option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : root75array

			} ]
		} ]
	};
}
function data75setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata75Chart = echarts.init(document.getElementById('75_data'));
	mydata75Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data75option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data75array

			} ]
		} ]
	};
}
function cpu75setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu75Chart = echarts.init(document.getElementById('75_cpu'));
	mycpu75Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu75option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu75array

			} ]
		} ]
	};
}
function mem75setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem75Chart = echarts.init(document.getElementById('75_mem'));
	mymem75Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem75option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem75array

			} ]
		} ]
	};
}
function root63setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myroot63Chart = echarts.init(document.getElementById('63_root'));
	myroot63Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	root63option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : root63array

			} ]
		} ]
	};
}
function data63setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata63Chart = echarts.init(document.getElementById('63_data'));
	mydata63Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data63option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data63array

			} ]
		} ]
	};
}
function cpu63setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu63Chart = echarts.init(document.getElementById('63_cpu'));
	mycpu63Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu63option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu63array

			} ]
		} ]
	};
}
function mem63setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem63Chart = echarts.init(document.getElementById('63_mem'));
	mymem63Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem63option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem63array

			} ]
		} ]
	};
}
function root69setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myroot69Chart = echarts.init(document.getElementById('69_root'));
	myroot69Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	root69option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : root69array

			} ]
		} ]
	};
}
function data69setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata69Chart = echarts.init(document.getElementById('69_data'));
	mydata69Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data69option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data69array

			} ]
		} ]
	};
}
function cpu69setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu69Chart = echarts.init(document.getElementById('69_cpu'));
	mycpu69Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu69option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu69array

			} ]
		} ]
	};
}
function mem69setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem69Chart = echarts.init(document.getElementById('69_mem'));
	mymem69Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem69option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem69array

			} ]
		} ]
	};
}
function root68setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myroot68Chart = echarts.init(document.getElementById('68_root'));
	myroot68Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	root68option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : root68array

			} ]
		} ]
	};
}
function data68setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata68Chart = echarts.init(document.getElementById('68_data'));
	mydata68Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data68option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data68array

			} ]
		} ]
	};
}
function cpu68setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu68Chart = echarts.init(document.getElementById('68_cpu'));
	mycpu68Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu68option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu68array

			} ]
		} ]
	};
}
function mem68setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem68Chart = echarts.init(document.getElementById('68_mem'));
	mymem68Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem68option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem68array

			} ]
		} ]
	};
}
function root62setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myroot62Chart = echarts.init(document.getElementById('62_root'));
	myroot62Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	root62option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : root62array

			} ]
		} ]
	};
}
function data62setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata62Chart = echarts.init(document.getElementById('62_data'));
	mydata62Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data62option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data62array

			} ]
		} ]
	};
}
function cpu62setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu62Chart = echarts.init(document.getElementById('62_cpu'));
	mycpu62Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu62option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu62array

			} ]
		} ]
	};
}
function mem62setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem62Chart = echarts.init(document.getElementById('62_mem'));
	mymem62Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem62option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem62array

			} ]
		} ]
	};
}
function root64setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	myroot64Chart = echarts.init(document.getElementById('64_root'));
	myroot64Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	root64option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : root64array

			} ]
		} ]
	};
}
function data64setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mydata64Chart = echarts.init(document.getElementById('64_data'));
	mydata64Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	data64option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, 'lightgreen' ], [ 0.8, 'orange' ],
							[ 1, '#ff4500' ] ],
					width : 15
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 15, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 6
			},

			data : [ {
				value : data64array

			} ]
		} ]
	};
}
function cpu64setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mycpu64Chart = echarts.init(document.getElementById('64_cpu'));
	mycpu64Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	cpu64option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : cpu64array

			} ]
		} ]
	};
}
function mem64setChart() { // 初始化图表
	// 基于准备好的dom，初始化echarts图表
	mymem64Chart = echarts.init(document.getElementById('64_mem'));
	mymem64Chart.showLoading({
		text : "正在努力加载图表数据..."
	});
	mem64option = {
		series : [ {
			type : 'gauge',
			axisLine : { // 仪表盘轴线样式
				lineStyle : {
					color : [ [ 0.7, '#228b22' ], [ 0.8, '#48b' ],
							[ 1, '#ff4500' ] ],
					width : 8
				}
			},
			center : [ '50%', '50%' ],
			radius : '100%',
			detail : {
				formatter : '{value}%',
				textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					color : 'auto',
					fontSize : 15
				}
			},
			splitLine : { // 分隔线
				length : 18, // 属性length控制线长
				lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
					color : 'auto'
				}
			},
			pointer : {
				width : 5
			},

			data : [ {
				value : mem64array

			} ]
		} ]
	};
}

function clearoption() { // 清空option
	if (option != null && "" != option) {
		option.series[0].data[0].value = jieTongData;
	}
	if (data22option != null && "" != data22option) {
		data22option.series[0].data[0].value = data22array;
	}
	if (cpu22option != null && "" != cpu22option) {
		cpu22option.series[0].data[0].value = cpu22array;
	}
	if (mem22option != null && "" != mem22option) {
		mem22option.series[0].data[0].value = mem22array;
	}
	if (root67option != null && "" != root67option) {
		root67option.series[0].data[0].value = root67array;
	}
	if (data67option != null && "" != data67option) {
		data67option.series[0].data[0].value = data67array;
	}
	if (cpu67option != null && "" != cpu67option) {
		cpu67option.series[0].data[0].value = cpu67array;
	}
	if (mem67option != null && "" != mem67option) {
		mem67option.series[0].data[0].value = mem67array;
	}
	if (root209option != null && "" != root209option) {
		root209option.series[0].data[0].value = root209array;
	}
	if (data209option != null && "" != data209option) {
		data209option.series[0].data[0].value = data209array;
	}
	if (cpu209option != null && "" != cpu209option) {
		cpu209option.series[0].data[0].value = cpu209array;
	}
	if (mem209option != null && "" != mem209option) {
		mem209option.series[0].data[0].value = mem209array;
	}
	if (root208option != null && "" != root208option) {
		root208option.series[0].data[0].value = root208array;
	}
	if (data208option != null && "" != data208option) {
		data208option.series[0].data[0].value = data208array;
	}
	if (cpu208option != null && "" != cpu208option) {
		cpu208option.series[0].data[0].value = cpu208array;
	}
	if (mem208option != null && "" != mem208option) {
		mem208option.series[0].data[0].value = mem208array;
	}
	if (root74option != null && "" != root74option) {
		root74option.series[0].data[0].value = root74array;
	}
	if (data74option != null && "" != data74option) {
		data74option.series[0].data[0].value = data74array;
	}
	if (cpu74option != null && "" != cpu74option) {
		cpu74option.series[0].data[0].value = cpu74array;
	}
	if (mem74option != null && "" != mem74option) {
		mem74option.series[0].data[0].value = mem74array;
	}
	if (root75option != null && "" != root75option) {
		root75option.series[0].data[0].value = root75array;
	}
	if (data75option != null && "" != data75option) {
		data75option.series[0].data[0].value = data75array;
	}
	if (cpu75option != null && "" != cpu75option) {
		cpu75option.series[0].data[0].value = cpu75array;
	}
	if (mem75option != null && "" != mem75option) {
		mem75option.series[0].data[0].value = mem75array;
	}
	if (root63option != null && "" != root63option) {
		root63option.series[0].data[0].value = root63array;
	}
	if (data63option != null && "" != data63option) {
		data63option.series[0].data[0].value = data63array;
	}
	if (cpu63option != null && "" != cpu63option) {
		cpu63option.series[0].data[0].value = cpu63array;
	}
	if (mem63option != null && "" != mem63option) {
		mem63option.series[0].data[0].value = mem63array;
	}
	if (root69option != null && "" != root69option) {
		root69option.series[0].data[0].value = root69array;
	}
	if (data69option != null && "" != data69option) {
		data69option.series[0].data[0].value = data69array;
	}
	if (cpu69option != null && "" != cpu69option) {
		cpu69option.series[0].data[0].value = cpu69array;
	}
	if (mem69option != null && "" != mem69option) {
		mem69option.series[0].data[0].value = mem69array;
	}
	if (root68option != null && "" != root68option) {
		root68option.series[0].data[0].value = root68array;
	}
	if (data68option != null && "" != data68option) {
		data68option.series[0].data[0].value = data68array;
	}
	if (cpu68option != null && "" != cpu68option) {
		cpu68option.series[0].data[0].value = cpu68array;
	}
	if (mem68option != null && "" != mem68option) {
		mem68option.series[0].data[0].value = mem68array;
	}
	if (root62option != null && "" != root62option) {
		root62option.series[0].data[0].value = root62array;
	}
	if (data62option != null && "" != data62option) {
		data62option.series[0].data[0].value = data62array;
	}
	if (cpu62option != null && "" != cpu62option) {
		cpu62option.series[0].data[0].value = cpu62array;
	}
	if (mem62option != null && "" != mem62option) {
		mem62option.series[0].data[0].value = mem62array;
	}
	if (root64option != null && "" != root64option) {
		root64option.series[0].data[0].value = root64array;
	}
	if (data64option != null && "" != data64option) {
		data64option.series[0].data[0].value = data64array;
	}
	if (cpu64option != null && "" != cpu64option) {
		cpu64option.series[0].data[0].value = cpu64array;
	}
	if (mem64option != null && "" != mem64option) {
		mem64option.series[0].data[0].value = mem64array;
	}

}
function clearData() {// 清空数据
	if (jieTongData != null && jieTongData.length != 0) {
		jieTongData = [];
	}
	if (data22array != null && data22array.length != 0) {
		data22array = [];
	}
	if (cpu22array != null && cpu22array.length != 0) {
		cpu22array = [];
	}
	if (mem22array != null && mem22array.length != 0) {
		mem22array = [];
	}
	if (root67array != null && root67array.length != 0) {
		root67array = [];
	}
	if (data67array != null && data67array.length != 0) {
		data67array = [];
	}
	if (cpu67array != null && cpu67array.length != 0) {
		cpu67array = [];
	}
	if (mem67array != null && mem67array.length != 0) {
		mem67array = [];
	}
	if (root209array != null && root209array.length != 0) {
		root209array = [];
	}
	if (data209array != null && data209array.length != 0) {
		data209array = [];
	}
	if (cpu209array != null && cpu209array.length != 0) {
		cpu209array = [];
	}
	if (mem209array != null && mem209array.length != 0) {
		mem209array = [];
	}
	if (root208array != null && root208array.length != 0) {
		root208array = [];
	}
	if (data208array != null && data208array.length != 0) {
		data208array = [];
	}
	if (cpu208array != null && cpu208array.length != 0) {
		cpu208array = [];
	}
	if (mem208array != null && mem208array.length != 0) {
		mem208array = [];
	}
	if (root74array != null && root74array.length != 0) {
		root74array = [];
	}
	if (data74array != null && data74array.length != 0) {
		data74array = [];
	}
	if (cpu74array != null && cpu74array.length != 0) {
		cpu74array = [];
	}
	if (mem74array != null && mem74array.length != 0) {
		mem74array = [];
	}
	if (root75array != null && root75array.length != 0) {
		root75array = [];
	}
	if (data75array != null && data75array.length != 0) {
		data75array = [];
	}
	if (cpu75array != null && cpu75array.length != 0) {
		cpu75array = [];
	}
	if (mem75array != null && mem75array.length != 0) {
		mem75array = [];
	}
	if (root63array != null && root63array.length != 0) {
		root63array = [];
	}
	if (data63array != null && data63array.length != 0) {
		data63array = [];
	}
	if (cpu63array != null && cpu63array.length != 0) {
		cpu63array = [];
	}
	if (mem63array != null && mem63array.length != 0) {
		mem63array = [];
	}
	if (root69array != null && root69array.length != 0) {
		root69array = [];
	}
	if (data69array != null && data69array.length != 0) {
		data69array = [];
	}
	if (cpu69array != null && cpu69array.length != 0) {
		cpu69array = [];
	}
	if (mem69array != null && mem69array.length != 0) {
		mem69array = [];
	}
	if (root68array != null && root68array.length != 0) {
		root68array = [];
	}
	if (data68array != null && data68array.length != 0) {
		data68array = [];
	}
	if (cpu68array != null && cpu68array.length != 0) {
		cpu68array = [];
	}
	if (mem68array != null && mem68array.length != 0) {
		mem68array = [];
	}
	if (root62array != null && root62array.length != 0) {
		root62array = [];
	}
	if (data62array != null && data62array.length != 0) {
		data62array = [];
	}
	if (cpu62array != null && cpu62array.length != 0) {
		cpu62array = [];
	}
	if (mem62array != null && mem62array.length != 0) {
		mem62array = [];
	}
	if (root64array != null && root64array.length != 0) {
		root64array = [];
	}
	if (data64array != null && data64array.length != 0) {
		data64array = [];
	}
	if (cpu64array != null && cpu64array.length != 0) {
		cpu64array = [];
	}
	if (mem64array != null && mem64array.length != 0) {
		mem64array = [];
	}
}
function getData() {
	clearData();
	clearoption();
	$.ajax({
		url : "hostmo/hostmo!gethostmo.action",
		type : "post",
		dataType : "json",
		async : false,
		success : function(data) {
			var dataall = data.nameArray;
			var one = dataall[0];
			var two = dataall[1];
			var three = dataall[2];
			var four = dataall[3];
			var five = dataall[4];
			var six = dataall[5];
			var seven = dataall[6];
			var eight = dataall[7];
			var nine = dataall[8];
			var ten = dataall[9];
			var eleven = dataall[10];
			var oneStr = toarraystring(one);
			var one22root = oneStr[1];
			var one22data = oneStr[2];
			var one22cpu = oneStr[3];
			var one22mem = oneStr[4];
			var root22 = parseInt(one22root);
			jieTongData.push(root22);
			myChart.hideLoading();
			myChart.setOption(option);
			var data22 = parseInt(one22data);
			data22array.push(data22);
			mydata22Chart.hideLoading();
			mydata22Chart.setOption(data22option);
			var cpu22 = parseInt(one22cpu);
			cpu22array.push(cpu22);
			mycpu22Chart.hideLoading();
			mycpu22Chart.setOption(cpu22option);
			var mem22 = parseInt(one22mem);
			mem22array.push(mem22);
			mymem22Chart.hideLoading();
			mymem22Chart.setOption(mem22option);
			var twoStr = toarraystring(two);
			var two67root = twoStr[1];
			var two67data = twoStr[2];
			var two67cpu = twoStr[3];
			var two67mem = twoStr[4];
			var root67 = parseInt(two67root);
			root67array.push(root67);
			myroot67Chart.hideLoading();
			myroot67Chart.setOption(root67option);
			var data67 = parseInt(two67data);
			data67array.push(data67);
			mydata67Chart.hideLoading();
			mydata67Chart.setOption(data67option);
			var cpu67 = parseInt(two67cpu);
			cpu67array.push(cpu67);
			mycpu67Chart.hideLoading();
			mycpu67Chart.setOption(cpu67option);
			var mem67 = parseInt(two67mem);
			mem67array.push(mem67);
			mymem67Chart.hideLoading();
			mymem67Chart.setOption(mem67option);
			var threeStr = toarraystring(three);
			var three209root = threeStr[1];
			var three209data = threeStr[2];
			var three209cpu = threeStr[3];
			var three209mem = threeStr[4];
			var root209 = parseInt(three209root);
			root209array.push(root209);
			myroot209Chart.hideLoading();
			myroot209Chart.setOption(root209option);
			var data209 = parseInt(three209data);
			data209array.push(data209);
			mydata209Chart.hideLoading();
			mydata209Chart.setOption(data209option);
			var cpu209 = parseInt(three209cpu);
			cpu209array.push(cpu209);
			mycpu209Chart.hideLoading();
			mycpu209Chart.setOption(cpu209option);
			var mem209 = parseInt(three209mem);
			mem209array.push(mem209);
			mymem209Chart.hideLoading();
			mymem209Chart.setOption(mem209option);
			var fourStr = toarraystring(four);
			var four208root = fourStr[1];
			var four208data = fourStr[2];
			var four208cpu = fourStr[3];
			var four208mem = fourStr[4];
			var root208 = parseInt(four208root);
			root208array.push(root208);
			myroot208Chart.hideLoading();
			myroot208Chart.setOption(root208option);
			var data208 = parseInt(four208data);
			data208array.push(data208);
			mydata208Chart.hideLoading();
			mydata208Chart.setOption(data208option);
			var cpu208 = parseInt(four208cpu);
			cpu208array.push(cpu208);
			mycpu208Chart.hideLoading();
			mycpu208Chart.setOption(cpu208option);
			var mem208 = parseInt(four208mem);
			mem208array.push(mem208);
			mymem208Chart.hideLoading();
			mymem208Chart.setOption(mem208option);
			var fiveStr = toarraystring(five);
			var five74root = fiveStr[1];
			var five74data = fiveStr[2];
			var five74cpu = fiveStr[3];
			var five74mem = fiveStr[4];
			var root74 = parseInt(five74root);
			root74array.push(root74);
			myroot74Chart.hideLoading();
			myroot74Chart.setOption(root74option);
			var data74 = parseInt(five74data);
			data74array.push(data74);
			mydata74Chart.hideLoading();
			mydata74Chart.setOption(data74option);
			var cpu74 = parseInt(five74cpu);
			cpu74array.push(cpu74);
			mycpu74Chart.hideLoading();
			mycpu74Chart.setOption(cpu74option);
			var mem74 = parseInt(five74mem);
			mem74array.push(mem74);
			mymem74Chart.hideLoading();
			mymem74Chart.setOption(mem74option);
			var sixStr = toarraystring(six);
			var six75root = sixStr[1];
			var six75data = sixStr[2];
			var six75cpu = sixStr[3];
			var six75mem = sixStr[4];
			var root75 = parseInt(six75root);
			root75array.push(root75);
			myroot75Chart.hideLoading();
			myroot75Chart.setOption(root75option);
			var data75 = parseInt(six75data);
			data75array.push(data75);
			mydata75Chart.hideLoading();
			mydata75Chart.setOption(data75option);
			var cpu75 = parseInt(six75cpu);
			cpu75array.push(cpu75);
			mycpu75Chart.hideLoading();
			mycpu75Chart.setOption(cpu75option);
			var mem75 = parseInt(six75mem);
			mem75array.push(mem75);
			mymem75Chart.hideLoading();
			mymem75Chart.setOption(mem75option);
			var sevenStr = toarraystring(seven);
			var seven63root = sevenStr[1];
			var seven63data = sevenStr[2];
			var seven63cpu = sevenStr[3];
			var seven63mem = sevenStr[4];
			var root63 = parseInt(seven63root);
			root63array.push(root63);
			myroot63Chart.hideLoading();
			myroot63Chart.setOption(root63option);
			var data63 = parseInt(seven63data);
			data63array.push(data63);
			mydata63Chart.hideLoading();
			mydata63Chart.setOption(data63option);
			var cpu63 = parseInt(seven63cpu);
			cpu63array.push(cpu63);
			mycpu63Chart.hideLoading();
			mycpu63Chart.setOption(cpu63option);
			var mem63 = parseInt(seven63mem);
			mem63array.push(mem63);
			mymem63Chart.hideLoading();
			mymem63Chart.setOption(mem63option);
			var eightStr = toarraystring(eight);
			var eight69root = eightStr[1];
			var eight69data = eightStr[2];
			var eight69cpu = eightStr[3];
			var eight69mem = eightStr[4];
			var root69 = parseInt(eight69root);
			root69array.push(root69);
			myroot69Chart.hideLoading();
			myroot69Chart.setOption(root69option);
			var data69 = parseInt(eight69data);
			data69array.push(data69);
			mydata69Chart.hideLoading();
			mydata69Chart.setOption(data69option);
			var cpu69 = parseInt(eight69cpu);
			cpu69array.push(cpu69);
			mycpu69Chart.hideLoading();
			mycpu69Chart.setOption(cpu69option);
			var mem69 = parseInt(eight69mem);
			mem69array.push(mem69);
			mymem69Chart.hideLoading();
			mymem69Chart.setOption(mem69option);
			var nineStr = toarraystring(nine);
			var nine68root = nineStr[1];
			var nine68data = nineStr[2];
			var nine68cpu = nineStr[3];
			var nine68mem = nineStr[4];
			var root68 = parseInt(nine68root);
			root68array.push(root68);
			myroot68Chart.hideLoading();
			myroot68Chart.setOption(root68option);
			var data68 = parseInt(nine68data);
			data68array.push(data68);
			mydata68Chart.hideLoading();
			mydata68Chart.setOption(data68option);
			var cpu68 = parseInt(nine68cpu);
			cpu68array.push(cpu68);
			mycpu68Chart.hideLoading();
			mycpu68Chart.setOption(cpu68option);
			var mem68 = parseInt(nine68mem);
			mem68array.push(mem68);
			mymem68Chart.hideLoading();
			mymem68Chart.setOption(mem68option);
			var tenStr = toarraystring(ten);
			var ten62root = tenStr[1];
			var ten62data = tenStr[2];
			var ten62cpu = tenStr[3];
			var ten62mem = tenStr[4];
			var root62 = parseInt(ten62root);
			root62array.push(root62);
			myroot62Chart.hideLoading();
			myroot62Chart.setOption(root62option);
			var data62 = parseInt(ten62data);
			data62array.push(data62);
			mydata62Chart.hideLoading();
			mydata62Chart.setOption(data62option);
			var cpu62 = parseInt(ten62cpu);
			cpu62array.push(cpu62);
			mycpu62Chart.hideLoading();
			mycpu62Chart.setOption(cpu62option);
			var mem62 = parseInt(ten62mem);
			mem62array.push(mem62);
			mymem62Chart.hideLoading();
			mymem62Chart.setOption(mem62option);
			var elevenStr = toarraystring(eleven);
			var eleven64root = elevenStr[1];
			var eleven64data = elevenStr[2];
			var eleven64cpu = elevenStr[3];
			var eleven64mem = elevenStr[4];
			var root64 = parseInt(eleven64root);
			root64array.push(root64);
			myroot64Chart.hideLoading();
			myroot64Chart.setOption(root64option);
			var data64 = parseInt(eleven64data);
			data64array.push(data64);
			mydata64Chart.hideLoading();
			mydata64Chart.setOption(data64option);
			var cpu64 = parseInt(eleven64cpu);
			cpu64array.push(cpu64);
			mycpu64Chart.hideLoading();
			mycpu64Chart.setOption(cpu64option);
			var mem64 = parseInt(eleven64mem);
			mem64array.push(mem64);
			mymem64Chart.hideLoading();
			mymem64Chart.setOption(mem64option);

		}
	});
	window.onresize = myChart.resize;
}
