jQuery(document).ready(function() {
	bss_all_yarn();
	setInterval('bss_all_yarn()', 6000);
});

function bss_all_yarn() {
	$.ajax({
		url : "datacenter/datacenter!bssgetyarn.action",
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
			var one5 = dataall[14];
			var one6 = dataall[15];
			var one7 = dataall[16];
			var one8 = dataall[17];
			var one9 = dataall[18];
			var two0 = dataall[19];
			var two1 = dataall[20];
			var two2 = dataall[21];
			var two3 = dataall[22];
			var two4 = dataall[23];
			var two5 = dataall[24];
			var rateWarn1 = 100;
			
			
			var oneStrone= toarraystring(one);
			var oneStrone1=oneStrone[1];
			var oneStrone2=oneStrone[2];			
			var oneStr1Bar = '#bss_all_000_bss_bar';
			var oneStr1Font = '#bss_all_000_bss_font';
			var oneStr1Fonta = 'bss_all_000_bss_bar_boss';
			processBarfen(oneStr1Bar,oneStr1Font,oneStrone1, rateWarn1,oneStr1Fonta, oneStrone2);
			var oneStrtwo= toarraystring(two);
			var oneStrtwo1=oneStrtwo[1];
			var oneStrtwo2=oneStrtwo[2];
			var oneStr2Bar = '#bss_all_010_bss_bar';
			var oneStr2Font = '#bss_all_010_bss_font';
			var oneStr2Fonta = 'bss_all_010_bss_bar_boss';
			processBarfen(oneStr2Bar,oneStr2Font,oneStrtwo1, rateWarn1,oneStr2Fonta, oneStrtwo2);
			var oneStrthree= toarraystring(three);
			var oneStrthree1=oneStrthree[1];
			var oneStrthree2=oneStrthree[2];
			var oneStr3Bar = '#bss_all_011_bss_bar';
			var oneStr3Font = '#bss_all_011_bss_font';
			var oneStr3Fonta = 'bss_all_011_bss_bar_boss';
			processBarfen(oneStr3Bar,oneStr3Font,oneStrthree1, rateWarn1,oneStr3Fonta, oneStrthree2);
			var oneStrfour= toarraystring(four);
			var oneStrfour1=oneStrfour[1];
			var oneStrfour2=oneStrfour[2];
			var oneStr4Bar = '#bss_all_013_bss_bar';
			var oneStr4Font = '#bss_all_013_bss_font';
			var oneStr4Fonta = 'bss_all_013_bss_bar_boss';
			processBarfen(oneStr4Bar,oneStr4Font,oneStrfour1, rateWarn1,oneStr4Fonta, oneStrfour2);
			var oneStrfive= toarraystring(five);
			var oneStrfive1=oneStrfive[1];
			var oneStrfive2=oneStrfive[1];
			var oneStr5Bar = '#bss_all_017_bss_bar';
			var oneStr5Font = '#bss_all_017_bss_font';
			var oneStr5Fonta = 'bss_all_017_bss_bar_boss';
			processBarfen(oneStr5Bar,oneStr5Font,oneStrfive1, rateWarn1,oneStr5Fonta, oneStrfive2);
			var oneStrsix= toarraystring(six);
			var oneStrsix1=oneStrsix[1];
			var oneStrsix2=oneStrsix[2];
			var oneStr6Bar = '#bss_all_018_bss_bar';
			var oneStr6Font = '#bss_all_018_bss_font';
			var oneStr6Fonta = 'bss_all_018_bss_bar_boss';
			processBarfen(oneStr6Bar,oneStr6Font,oneStrsix1, rateWarn1,oneStr6Fonta, oneStrsix2);
			var oneStrseven= toarraystring(seven);
			var oneStrseven1=oneStrseven[1];
			var oneStrseven2=oneStrseven[2];
			var oneStr7Bar = '#bss_all_019_bss_bar';
			var oneStr7Font = '#bss_all_019_bss_font';
			var oneStr7Fonta = 'bss_all_019_bss_bar_boss';
			processBarfen(oneStr7Bar,oneStr7Font,oneStrseven1, rateWarn1,oneStr7Fonta, oneStrseven2);
			var oneStreight= toarraystring(eight);
			var oneStreight1=oneStreight[1];
			var oneStreight2=oneStreight[2];
			var oneStr8Bar = '#bss_all_034_bss_bar';
			var oneStr8Font = '#bss_all_034_bss_font';
			var oneStr8Fonta = 'bss_all_034_bss_bar_boss';
			processBarfen(oneStr8Bar,oneStr8Font,oneStreight1, rateWarn1,oneStr8Fonta, oneStreight2);
			var oneStrnine= toarraystring(nine);
			var oneStrnine1=oneStrnine[1];
			var oneStrnine2=oneStrnine[2];
			var oneStr9Bar = '#bss_all_051_bss_bar';
			var oneStr9Font = '#bss_all_051_bss_font';
			var oneStr9Fonta = 'bss_all_051_bss_bar_boss';
			processBarfen(oneStr9Bar,oneStr9Font,oneStrnine1, rateWarn1,oneStr9Fonta, oneStrnine2);
			var oneStrten= toarraystring(ten);
			var oneStrten1=oneStrten[1];
			var oneStrten2=oneStrten[2];
			var oneStr10Bar = '#bss_all_076_bss_bar';
			var oneStr10Font = '#bss_all_076_bss_font';
			var oneStr10Fonta = 'bss_all_076_bss_bar_boss';
			processBarfen(oneStr10Bar,oneStr10Font,oneStrten1, rateWarn1,oneStr10Fonta, oneStrten2);
			var oneStrone1= toarraystring(one1);
			var oneStrone11=oneStrone1[1];
			var oneStrone12=oneStrone1[2];
			var oneStr11Bar = '#bss_all_081_bss_bar';
			var oneStr11Font = '#bss_all_081_bss_font';
			var oneStr11Fonta = 'bss_all_081_bss_bar_boss';
			processBarfen(oneStr11Bar,oneStr11Font,oneStrone11, rateWarn1,oneStr11Fonta, oneStrone12);
			var oneStrone2=toarraystring(one2);
			var oneStrone21=oneStrone2[1];
			var oneStrone22=oneStrone2[2];
			var oneStr12Bar = '#bss_all_083_bss_bar';
			var oneStr12Font = '#bss_all_083_bss_font';
			var oneStr12Fonta = 'bss_all_083_bss_bar_boss';
			processBarfen(oneStr12Bar,oneStr12Font,oneStrone21, rateWarn1,oneStr12Fonta, oneStrone22);
			var oneStrone3=toarraystring(one3);
			var oneStrone31=oneStrone3[1];
			var oneStrone32=oneStrone3[2];
			var oneStr13Bar = '#bss_all_086_bss_bar';
			var oneStr13Font = '#bss_all_086_bss_font';
			var oneStr13Fonta = 'bss_all_086_bss_bar_boss';
			processBarfen(oneStr13Bar,oneStr13Font,oneStrone31, rateWarn1,oneStr13Fonta, oneStrone32);
			var oneStrone4=toarraystring(one4);
			var oneStrone41=oneStrone4[1];
			var oneStrone42=oneStrone4[2];
			var oneStr14Bar = '#bss_all_089_bss_bar';
			var oneStr14Font = '#bss_all_089_bss_font';
			var oneStr14Fonta = 'bss_all_089_bss_bar_boss';
			processBarfen(oneStr14Bar,oneStr14Font,oneStrone41, rateWarn1,oneStr14Fonta, oneStrone42);
			var oneStrone5=toarraystring(one5);
			var oneStrone51=oneStrone5[1];
			var oneStrone52=oneStrone5[2];
			var oneStr15Bar = '#bss_all_090_bss_bar';
			var oneStr15Font = '#bss_all_090_bss_font';
			var oneStr15Fonta = 'bss_all_090_bss_bar_boss';
			processBarfen(oneStr15Bar,oneStr15Font,oneStrone51, rateWarn1,oneStr15Fonta, oneStrone52);
			var oneStrone6=toarraystring(one6);
			var oneStrone61=oneStrone6[1];
			var oneStrone62=oneStrone6[2];
			var oneStr16Bar = '#bss_all_091_bss_bar';
			var oneStr16Font = '#bss_all_091_bss_font';
			var oneStr16Fonta = 'bss_all_091_bss_bar_boss';
			processBarfen(oneStr16Bar,oneStr16Font,oneStrone61, rateWarn1,oneStr16Fonta, oneStrone62);
			var oneStrone7=toarraystring(one7);
			var oneStrone71=oneStrone7[1];
			var oneStrone72=oneStrone7[2];
			var oneStr17Bar = '#bss_all_097_bss_bar';
			var oneStr17Font = '#bss_all_097_bss_font';
			var oneStr17Fonta = 'bss_all_097_bss_bar_boss';
			processBarfen(oneStr17Bar,oneStr17Font,oneStrone71, rateWarn1,oneStr17Fonta, oneStrone72);
			var oneStrone8=toarraystring(one8);
			var oneStrone81=oneStrone8[1];
			var oneStrone82=oneStrone8[2];
			var oneStr18Bar = '#bss_all_dw3_dev_bar';
			var oneStr18Font = '#bss_all_dw3_dev_font';
			var oneStr18Fonta = 'bss_all_dw3_dev_bar_boss';
			processBarfen(oneStr18Bar,oneStr18Font,oneStrone81, rateWarn1,oneStr18Fonta, oneStrone82);
			var oneStrone9=toarraystring(one9);
			var oneStrone91=oneStrone9[1];
			var oneStrone92=oneStrone9[2];
			var oneStr19Bar = '#bss_all_m2m_dev_bar';
			var oneStr19Font = '#bss_all_m2m_dev_font';
			var oneStr19Fonta = 'bss_all_m2m_dev_bar_boss';
			processBarfen(oneStr19Bar,oneStr19Font,oneStrone91, rateWarn1,oneStr19Fonta, oneStrone92);
			var oneStrtwo0=toarraystring(two0);
			var oneStrtwo01=oneStrtwo0[1];
			var oneStrtwo02=oneStrtwo0[2];
			var oneStr20Bar = '#bss_ana_pro_bar';
			var oneStr20Font = '#bss_ana_pro_font';
			var oneStr20Fonta = 'bss_ana_pro_bar_boss';
			processBarfen(oneStr20Bar,oneStr20Font,oneStrtwo01, rateWarn1,oneStr20Fonta, oneStrtwo02);
			var oneStrtwo1=toarraystring(two1);
			var oneStrtwo11=oneStrtwo1[1];
			var oneStrtwo12=oneStrtwo1[2];
			var oneStr21Bar = '#bss_bssdb_0_bar';
			var oneStr21Font = '#bss_bssdb_0_font';
			var oneStr21Fonta = 'bss_bssdb_0_bar_boss';
			processBarfen(oneStr21Bar,oneStr21Font,oneStrtwo11, rateWarn1,oneStr21Fonta, oneStrtwo12);
			var oneStrtwo2=toarraystring(two2);
			var oneStrtwo21=oneStrtwo2[1];
			var oneStrtwo22=oneStrtwo2[2];
			var oneStr22Bar = '#bss_default_bar';
			var oneStr22Font = '#bss_default_font';
			var oneStr22Fonta = 'bss_default_bar_boss';
			processBarfen(oneStr22Bar,oneStr22Font,oneStrtwo21, rateWarn1,oneStr22Fonta, oneStrtwo22);
			var oneStrtwo3=toarraystring(two3);
			var oneStrtwo31=oneStrtwo3[1];
			var oneStrtwo32=oneStrtwo3[2];
			var oneStr23Bar = '#bss_etl_bar';
			var oneStr23Font = '#bss_etl_font';
			var oneStr23Fonta = 'bss_etl_bar_boss';
			processBarfen(oneStr23Bar,oneStr23Font,oneStrtwo31, rateWarn1,oneStr23Fonta, oneStrtwo32);
			var oneStrtwo4=toarraystring(two4);
			var oneStrtwo41=oneStrtwo4[1];
			var oneStrtwo42=oneStrtwo4[2];
			var oneStr24Bar = '#bss_open1_0_bar';
			var oneStr24Font = '#bss_open1_0_font';
			var oneStr24Fonta = 'bss_open1_0_bar_boss';
			processBarfen(oneStr24Bar,oneStr24Font,oneStrtwo41, rateWarn1,oneStr24Fonta, oneStrtwo42);
			var oneStrtwo5=toarraystring(two5);
			var oneStrtwo51=oneStrtwo5[1];
			var oneStrtwo52=oneStrtwo5[2];
			var oneStr25Bar = '#bss_root_yarn_bar';
			var oneStr25Font = '#bss_root_yarn_font';
			var oneStr25Fonta = 'bss_root_bar_boss';
			$("#bss_queue").text(oneStrtwo51+"%");
			processBar(oneStr25Bar,oneStr25Font,oneStrtwo51, rateWarn1,oneStr25Fonta, oneStrtwo52);
			
			
			
		}
	});		
}
