jQuery(document).ready(function() {
	tooout_dmp_yarn();
	setInterval('tooout_dmp_yarn()', 6000);
});

function tooout_dmp_yarn() {
	$.ajax({
		url : "tooout/tooout!gettooutdmpyarn.action",
		type : "post",
		dataType : "json",
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
			var one1 = dataall[10];
			var rateWarn1 = 100;
			
			var oneStrone= toarraystring(one);
			var oneStrone1=oneStrone[1];
			var oneStrone2=oneStrone[2];			
			var oneStr1Bar = '#dmp_yarn_default_bar';
			var oneStr1Font = '#dmp_yarn_default_font';
			var oneStr1Fonta = 'dmp_yarn_default_bar_boss';
			processBarfen(oneStr1Bar,oneStr1Font,oneStrone1, rateWarn1,oneStr1Fonta, oneStrone2);
			var oneStrtwo= toarraystring(two);
			var oneStrtwo1=oneStrtwo[1];
			var oneStrtwo2=oneStrtwo[2];
			var oneStr2Bar = '#dmp_yarn_ia_bar';
			var oneStr2Font = '#dmp_yarn_ia_font';
			var oneStr2Fonta = 'dmp_yarn_ia_bar_boss';
			processBarfen(oneStr2Bar,oneStr2Font,oneStrtwo1, rateWarn1,oneStr2Fonta, oneStrtwo2);
			var oneStrthree= toarraystring(three);
			var oneStrthree1=oneStrthree[1];
			var oneStrthree2=oneStrthree[2];
			var oneStr3Bar = '#dmp_yarn_iadev_bar';
			var oneStr3Font = '#dmp_yarn_iadev_font';
			var oneStr3Fonta = 'dmp_yarn_iadev_bar_boss';
			processBarfen(oneStr3Bar,oneStr3Font,oneStrthree1, rateWarn1,oneStr3Fonta, oneStrthree2);
			var oneStrfour= toarraystring(four);
			var oneStrfour1=oneStrfour[1];
			var oneStrfour2=oneStrfour[2];
			var oneStr4Bar = '#dmp_yarn_iart_bar';
			var oneStr4Font = '#dmp_yarn_iart_font';
			var oneStr4Fonta = 'dmp_yarn_iart_bar_boss';
			processBarfen(oneStr4Bar,oneStr4Font,oneStrfour1, rateWarn1,oneStr4Fonta, oneStrfour2);
			var oneStrfive= toarraystring(five);
			var oneStrfive1=oneStrfive[1];
			var oneStrfive2=oneStrfive[1];
			var oneStr5Bar = '#dmp_yarn_iaana_bar';
			var oneStr5Font = '#dmp_yarn_iaana_font';
			var oneStr5Fonta = 'dmp_yarn_iaana_bar_boss';
			processBarfen(oneStr5Bar,oneStr5Font,oneStrfive1, rateWarn1,oneStr5Fonta, oneStrfive2);
			var oneStrsix= toarraystring(six);
			var oneStrsix1=oneStrsix[1];
			var oneStrsix2=oneStrsix[2];
			var oneStr6Bar = '#dmp_yarn_iadzh_bar';
			var oneStr6Font = '#dmp_yarn_iadzh_font';
			var oneStr6Fonta = 'dmp_yarn_iadzh_bar_boss';
			processBarfen(oneStr6Bar,oneStr6Font,oneStrsix1, rateWarn1,oneStr6Fonta, oneStrsix2);
			var oneStrseven= toarraystring(seven);
			var oneStrseven1=oneStrseven[1];
			var oneStrseven2=oneStrseven[2];
			var oneStr7Bar = '#dmp_yarn_iainserv_bar';
			var oneStr7Font = '#dmp_yarn_iainserv_font';
			var oneStr7Fonta = 'dmp_yarn_iainserv_bar_boss';
			processBarfen(oneStr7Bar,oneStr7Font,oneStrseven1, rateWarn1,oneStr7Fonta, oneStrseven2);
			var oneStreight= toarraystring(eight);
			var oneStreight1=oneStreight[1];
			var oneStreight2=oneStreight[2];
			var oneStr8Bar = '#dmp_yarn_iaserv_bar';
			var oneStr8Font = '#dmp_yarn_iaserv_font';
			var oneStr8Fonta = 'dmp_yarn_iaserv_bar_boss';
			processBarfen(oneStr8Bar,oneStr8Font,oneStreight1, rateWarn1,oneStr8Fonta, oneStreight2);
			var oneStrnine= toarraystring(nine);
			var oneStrnine1=oneStrnine[1];
			var oneStrnine2=oneStrnine[2];
			var oneStr9Bar = '#dmp_yarn_iazh_bar';
			var oneStr9Font = '#dmp_yarn_iazh_font';
			var oneStr9Fonta = 'dmp_yarn_iazh_bar_boss';
			processBarfen(oneStr9Bar,oneStr9Font,oneStrnine1, rateWarn1,oneStr9Fonta, oneStrnine2);
			var oneStrten= toarraystring(ten);
			var oneStrten1=oneStrten[1];
			var oneStrten2=oneStrten[2];
			var oneStr10Bar = '#dmp_yarn_root_yarn_bar';
			var oneStr10Font = '#dmp_yarn_root_yarn_font';
			var oneStr10Fonta = 'dmp_yarn_root_yarn_bar_boss';
			$("#dmp_yarn_query").text(oneStrten1+"%");
			processBar(oneStr10Bar,oneStr10Font,oneStrten1, rateWarn1,oneStr10Fonta, oneStrten2);
			var oneStrone1= toarraystring(one1);
			var oneStrone11=oneStrone1[1];
			var oneStrone12=oneStrone1[2];
			var oneStr11Bar = '#dmp_yarn_zc_bar';
			var oneStr11Font = '#dmp_yarn_zc_font';
			var oneStr11Fonta = 'dmp_yarn_zc_bar_boss';
			processBarfen(oneStr11Bar,oneStr11Font,oneStrone11, rateWarn1,oneStr11Fonta, oneStrone12);
			
			
			
		}
	});		
}

