jQuery(document).ready(function() {
	pwoerfor_301_yarn();
	setInterval('pwoerfor_301_yarn()', 6000);
});

function pwoerfor_301_yarn() {
	$.ajax({
		url : "tooout/tooout!gettooutthreeooneyarn.action",
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
			
			var rateWarn1 = 100;
			
			var oneStrone= toarraystring(one);
			var oneStrone1=oneStrone[1];
			var oneStrone2=oneStrone[2];			
			var oneStr1Bar = '#powerfor_301_AOP_bar';
			var oneStr1Font = '#powerfor_301_AOP_font';
			var oneStr1Fonta = 'powerfor_301_AOP_bar_boss';
			processBarfen(oneStr1Bar,oneStr1Font,oneStrone1, rateWarn1,oneStr1Fonta, oneStrone2);
			var oneStrtwo= toarraystring(two);
			var oneStrtwo1=oneStrtwo[1];
			var oneStrtwo2=oneStrtwo[2];
			var oneStr2Bar = '#powerfor_301_AOPB_bar';
			var oneStr2Font = '#powerfor_301_AOPB_font';
			var oneStr2Fonta = 'powerfor_301_AOPB_bar_boss';
			processBarfen(oneStr2Bar,oneStr2Font,oneStrtwo1, rateWarn1,oneStr2Fonta, oneStrtwo2);
			var oneStrthree= toarraystring(three);
			var oneStrthree1=oneStrthree[1];
			var oneStrthree2=oneStrthree[2];
			var oneStr3Bar = '#powerfor_301_cpic_bar';
			var oneStr3Font = '#powerfor_301_cpic_font';
			var oneStr3Fonta = 'powerfor_301_cpic_bar_boss';
			processBarfen(oneStr3Bar,oneStr3Font,oneStrthree1, rateWarn1,oneStr3Fonta, oneStrthree2);
			var oneStrfour= toarraystring(four);
			var oneStrfour1=oneStrfour[1];
			var oneStrfour2=oneStrfour[2];
			var oneStr4Bar = '#powerfor_301_norten_bar';
			var oneStr4Font = '#powerfor_301_norten_font';
			var oneStr4Fonta = 'powerfor_301_norten_bar_boss';
			processBarfen(oneStr4Bar,oneStr4Font,oneStrfour1, rateWarn1,oneStr4Fonta, oneStrfour2);
			var oneStrfive= toarraystring(five);
			var oneStrfive1=oneStrfive[1];
			var oneStrfive2=oneStrfive[1];
			var oneStr5Bar = '#powerfor_301_open_076_bar';
			var oneStr5Font = '#powerfor_301_open_076_font';
			var oneStr5Fonta = 'powerfor_301_open_076_bar_boss';
			processBarfen(oneStr5Bar,oneStr5Font,oneStrfive1, rateWarn1,oneStr5Fonta, oneStrfive2);
			var oneStrsix= toarraystring(six);
			var oneStrsix1=oneStrsix[1];
			var oneStrsix2=oneStrsix[2];
			var oneStr6Bar = '#powerfor_301_open_090_bar';
			var oneStr6Font = '#powerfor_301_open_090_font';
			var oneStr6Fonta = 'powerfor_301_open_090_bar_boss';
			processBarfen(oneStr6Bar,oneStr6Font,oneStrsix1, rateWarn1,oneStr6Fonta, oneStrsix2);
			var oneStrseven= toarraystring(seven);
			var oneStrseven1=oneStrseven[1];
			var oneStrseven2=oneStrseven[2];
			var oneStr7Bar = '#powerfor_301_open_do_bar';
			var oneStr7Font = '#powerfor_301_open_do_font';
			var oneStr7Fonta = 'powerfor_301_open_do_bar_boss';
			processBarfen(oneStr7Bar,oneStr7Font,oneStrseven1, rateWarn1,oneStr7Fonta, oneStrseven2);
			var oneStreight= toarraystring(eight);
			var oneStreight1=oneStreight[1];
			var oneStreight2=oneStreight[2];
			var oneStr8Bar = '#powerfor_301_open_serv_mucfc_bar';
			var oneStr8Font = '#powerfor_301_open_serv_mucfc_font';
			var oneStr8Fonta = 'powerfor_301_open_serv_mucfc_bar_boss';
			processBarfen(oneStr8Bar,oneStr8Font,oneStreight1, rateWarn1,oneStr8Fonta, oneStreight2);
			var oneStrnine= toarraystring(nine);
			var oneStrnine1=oneStrnine[1];
			var oneStrnine2=oneStrnine[2];
			var oneStr9Bar = '#powerfor_301_qc_bar';
			var oneStr9Font = '#powerfor_301_qc_font';
			var oneStr9Fonta = 'powerfor_301_qc_bar_boss';
			processBarfen(oneStr9Bar,oneStr9Font,oneStrnine1, rateWarn1,oneStr9Fonta, oneStrnine2);
			var oneStrten= toarraystring(ten);
			var oneStrten1=oneStrten[1];
			var oneStrten2=oneStrten[2];
			var oneStr10Bar = '#powerfor_301_root_yarn_bar';
			var oneStr10Font = '#powerfor_301_root_yarn_font';
			var oneStr10Fonta = 'powerfor_301_root_yarn_bar_boss';
			$("#power_yarn_one_query").text(oneStrten1+"%");
			processBar(oneStr10Bar,oneStr10Font,oneStrten1, rateWarn1,oneStr10Fonta, oneStrten2);
			
			
			
			
		}
	});		
}

