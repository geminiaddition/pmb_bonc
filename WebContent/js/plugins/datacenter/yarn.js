jQuery(document).ready(function() {
	first_yarn();
	
});



function first_yarn() {
	$.ajax({
		url : "datacenter/datacenter!getfirstyarn.action",
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
			var one2 = dataall[11];
			var one3 = dataall[12];
			var one4 = dataall[13];
			var rateWarn1 = 100;
			
			
			var oneStrone= toarraystring(one);
			var oneStrone1=oneStrone[1];
			var oneStrone2=oneStrone[2];			
			var oneStr1Bar = '#orcl_memory1_dssdw1';
			var oneStr1Font = '#orcl_memfont_dssdw1';
			var oneStr1Fonta = 'orcl_memory1_bar_boss';
			processBarfen(oneStr1Bar,oneStr1Font,oneStrone1, rateWarn1,oneStr1Fonta, oneStrone2);
			var oneStrtwo= toarraystring(two);
			var oneStrtwo1=oneStrtwo[1];
			var oneStrtwo2=oneStrtwo[2];
			var oneStr2Bar = '#bdiyarn_bar';
			var oneStr2Font = '#bdiyarn_font';
			var oneStr2Fonta = 'bdiyarn_bar_boss';
			processBarfen(oneStr2Bar,oneStr2Font,oneStrtwo1, rateWarn1,oneStr2Fonta, oneStrtwo2);
			var oneStrthree= toarraystring(three);
			var oneStrthree1=oneStrthree[1];
			var oneStrthree2=oneStrthree[2];
			var oneStr3Bar = '#cpicyarn_bar';
			var oneStr3Font = '#cpicyarn_font';
			var oneStr3Fonta = 'cpicyarn_bar_boss';
			processBarfen(oneStr3Bar,oneStr3Font,oneStrthree1, rateWarn1,oneStr3Fonta, oneStrthree2);
			var oneStrfour= toarraystring(four);
			var oneStrfour1=oneStrfour[1];
			var oneStrfour2=oneStrfour[2];
			var oneStr4Bar = '#cspdevyarn_bar';
			var oneStr4Font = '#cspdevyarn_font';
			var oneStr4Fonta = 'cspdevyarn_bar_boss';
			processBarfen(oneStr4Bar,oneStr4Font,oneStrfour1, rateWarn1,oneStr4Fonta, oneStrfour2);
			var oneStrfive= toarraystring(five);
			var oneStrfive1=oneStrfive[1];
			var oneStrfive2=oneStrfive[1];
			var oneStr5Bar = '#cspproyarn_bar';
			var oneStr5Font = '#cspproyarn_font';
			var oneStr5Fonta = 'cspproyarn_bar_boss';
			processBarfen(oneStr5Bar,oneStr5Font,oneStrfive1, rateWarn1,oneStr5Fonta, oneStrfive2);
			var oneStrsix= toarraystring(six);
			var oneStrsix1=oneStrsix[1];
			var oneStrsix2=oneStrsix[2];
			var oneStr6Bar = '#defaultyarn_bar';
			var oneStr6Font = '#defaultyarn_font';
			var oneStr6Fonta = 'defaultyarn_bar_boss';
			processBarfen(oneStr6Bar,oneStr6Font,oneStrsix1, rateWarn1,oneStr6Fonta, oneStrsix2);
			var oneStrseven= toarraystring(seven);
			var oneStrseven1=oneStrseven[1];
			var oneStrseven2=oneStrseven[2];
			var oneStr7Bar = '#iayarn_bar';
			var oneStr7Font = '#iayarn_font';
			var oneStr7Fonta = 'iayarn_bar_boss';
			processBarfen(oneStr7Bar,oneStr7Font,oneStrseven1, rateWarn1,oneStr7Fonta, oneStrseven2);
			var oneStreight= toarraystring(eight);
			var oneStreight1=oneStreight[1];
			var oneStreight2=oneStreight[2];
			var oneStr8Bar = '#odsyarn_bar';
			var oneStr8Font = '#odsyarn_font';
			var oneStr8Fonta = 'odsyarn_bar_boss';
			processBarfen(oneStr8Bar,oneStr8Font,oneStreight1, rateWarn1,oneStr8Fonta, oneStreight2);
			var oneStrnine= toarraystring(nine);
			var oneStrnine1=oneStrnine[1];
			var oneStrnine2=oneStrnine[2];
			var oneStr9Bar = '#qqyarn_bar';
			var oneStr9Font = '#qqyarn_font';
			var oneStr9Fonta = 'qqyarn_bar_boss';
			processBarfen(oneStr9Bar,oneStr9Font,oneStrnine1, rateWarn1,oneStr9Fonta, oneStrnine2);
			var oneStrten= toarraystring(ten);
			var oneStrten1=oneStrten[1];
			var oneStrten2=oneStrten[2];
			var oneStr10Bar = '#rootyarn_bar';
			var oneStr10Font = '#rootyarn_font';
			var oneStr10Fonta = 'rootyarn_bar_bar_boss';
			$("#queue").text(oneStrten1+"%");
			processBar(oneStr10Bar,oneStr10Font,oneStrten1, rateWarn1,oneStr10Fonta, oneStrten2);
			var oneStrone1= toarraystring(one1);
			var oneStrone11=oneStrone1[1];
			var oneStrone12=oneStrone1[2];
			var oneStr11Bar = '#servyarn_bar';
			var oneStr11Font = '#servyarn_font';
			var oneStr11Fonta = 'serv_yarn_bar_boss';
			processBarfen(oneStr11Bar,oneStr11Font,oneStrone11, rateWarn1,oneStr11Fonta, oneStrone12);
			var oneStrone2=toarraystring(one2);
			var oneStrone21=oneStrone2[1];
			var oneStrone22=oneStrone2[2];
			var oneStr12Bar = '#temyarn_bar';
			var oneStr12Font = '#temyarn_font';
			var oneStr12Fonta = 'temyarn_bar_boss';
			processBarfen(oneStr12Bar,oneStr12Font,oneStrone21, rateWarn1,oneStr12Fonta, oneStrone22);
			var oneStrone3=toarraystring(one3);
			var oneStrone31=oneStrone3[1];
			var oneStrone32=oneStrone3[2];
			var oneStr13Bar = '#wckyarn_bar';
			var oneStr13Font = '#wckyarn_font';
			var oneStr13Fonta = 'wckyarn_bar_boss';
			processBarfen(oneStr13Bar,oneStr13Font,oneStrone31, rateWarn1,oneStr13Fonta, oneStrone32);
			var oneStrone4=toarraystring(one4);
			var oneStrone41=oneStrone4[1];
			var oneStrone42=oneStrone4[2];
			var oneStr14Bar = '#zcyarn_bar';
			var oneStr14Font = '#zcyarn_font';
			var oneStr14Fonta = 'zcyarn_bar_boss';
			processBarfen(oneStr14Bar,oneStr14Font,oneStrone41, rateWarn1,oneStr14Fonta, oneStrone42);
		}

	});// AJAX-end
}
