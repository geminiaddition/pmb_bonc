jQuery(document).ready(function() {
	wo_324_yarn();
	setInterval('wo_324_yarn()', 6000);
});

function wo_324_yarn() {
	$.ajax({
		url : "tooout/tooout!gettooutwoyarn.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var one = dataall[0];
			var two = dataall[1];
			var three = dataall[2];
			var four = dataall[3];
			var rateWarn1 = 100;
			
			
			var oneStrone= toarraystring(one);
			var oneStrone1=oneStrone[1];
			var oneStrone2=oneStrone[2];			
			var oneStr1Bar = '#woo_324_yarn_bak_bar';
			var oneStr1Font = '#woo_324_yarn_bak_font';
			var oneStr1Fonta = 'woo_324_yarn_bak_bar_boss';
			processBarfen(oneStr1Bar,oneStr1Font,oneStrone1, rateWarn1,oneStr1Fonta, oneStrone2);
			var oneStrtwo= toarraystring(two);
			var oneStrtwo1=oneStrtwo[1];
			var oneStrtwo2=oneStrtwo[2];
			var oneStr2Bar = '#woo_324_yarn_bonc_bar';
			var oneStr2Font = '#woo_324_yarn_bonc_font';
			var oneStr2Fonta = 'woo_324_yarn_bonc_bar_boss';
			processBarfen(oneStr2Bar,oneStr2Font,oneStrtwo1, rateWarn1,oneStr2Fonta, oneStrtwo2);
			var oneStrthree= toarraystring(three);
			var oneStrthree1=oneStrthree[1];
			var oneStrthree2=oneStrthree[2];
			var oneStr3Bar = '#woo_324_yarn_default_bar';
			var oneStr3Font = '#woo_324_yarn_default_font';
			var oneStr3Fonta = 'woo_324_yarn_default_bar_boss';
			processBarfen(oneStr3Bar,oneStr3Font,oneStrthree1, rateWarn1,oneStr3Fonta, oneStrthree2);
			var oneStrfour= toarraystring(four);
			var oneStrfour1=oneStrfour[1];
			var oneStrfour2=oneStrfour[2];
			var oneStr4Bar = '#woo_324_yarn_root_yarn_bar';
			var oneStr4Font = '#woo_324_yarn_root_yarn_font';
			var oneStr4Fonta = 'woo_324_yarn_root_bar_boss';		
			$("#wo_yarn_query").text(oneStrfour1+"%");
			processBar(oneStr4Bar,oneStr4Font,oneStrfour1, rateWarn1,oneStr4Fonta, oneStrfour2);
			
			
			
		}
	});		
}

