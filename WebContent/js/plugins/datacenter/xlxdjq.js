
jQuery(document).ready(function() {
	
	xlxdjq();
	setInterval('xlxdjq()', 6000);
});
function xlxdjq() {
	$.ajax({
		url : "datacenter/datacenter!xlxdjq.action",
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
			//root1
			var twoStr= toarraystring(two);
			var twoStr1=twoStr[1];
			var twoStr2=twoStr[2];
			var rateWarn1 = 100;
			var elementIdBar1 = '#xlxdjq_bar1';
			var elementIdFont1 = '#xlxdjq_font1';
			var elementIdtitle1 = 'xlxdjq_title1';
			jQuery("#xinling_queue").text(twoStr1 +"%");
			//alert(sevenStr2);
			processBar(elementIdBar1,elementIdFont1,twoStr1, rateWarn1,elementIdtitle1, twoStr2);
				//default2	
			var oneStr=toarraystring(one);
			var oneStr1=oneStr[1];
			var oneStr2=oneStr[2];
			var elementIdBar2 = '#xlxdjq_bar2';
			var elementIdFont2 = '#xlxdjq_font2';
			var elementIdtitle2 = 'xlxdjq_title2';
			processBarfen(elementIdBar2,elementIdFont2,oneStr1, rateWarn1,elementIdtitle2, oneStr2);
			//xl_ana3	
			var threeStr=toarraystring(three);
			var threeStr1=threeStr[1];
			var threeStr2=threeStr[2];
			var elementIdBar3 = '#xlxdjq_bar3';
			var elementIdFont3 = '#xlxdjq_font3';
			var elementIdtitle3 = 'xlxdjq_title3';
			processBarfen(elementIdBar3,elementIdFont3,threeStr1, rateWarn1,elementIdtitle3, threeStr2);
			//xl_cs4
			var fourStr=toarraystring(four);
			var fourStr1=fourStr[1];
			var fourStr2=fourStr[2];
			var elementIdBar4 = '#xlxdjq_bar4';
			var elementIdFont4 = '#xlxdjq_font4';
			var elementIdtitle4 = 'xlxdjq_title4';
			processBarfen(elementIdBar4,elementIdFont4,fourStr1, rateWarn1,elementIdtitle4, fourStr2);
			//xl_hive5
			var fiveStr=toarraystring(five);
			var fiveStr1=fiveStr[1];
			var fiveStr2=fiveStr[2];
			var elementIdBar5 = '#xlxdjq_bar5';
			var elementIdFont5 = '#xlxdjq_font5';
			var elementIdtitle5 = 'xlxdjq_title5';
			processBarfen(elementIdBar5,elementIdFont5,fiveStr1, rateWarn1,elementIdtitle5, fiveStr2);
			//xl_serv6
			var sixStr=toarraystring(six);
			var sixStr1=sixStr[1];
			var sixStr2=sixStr[2];
			var elementIdBar6 = '#xlxdjq_bar6';
			var elementIdFont6 = '#xlxdjq_font6';
			var elementIdtitle6 = 'xlxdjq_title6';
			processBarfen(elementIdBar6,elementIdFont6,sixStr1, rateWarn1,elementIdtitle6, sixStr2);
			//xl_signal7
			var sevenStr=toarraystring(seven);
			var sevenStr1=sevenStr[1];
			var sevenStr2=sevenStr[2];
			var elementIdBar7 = '#xlxdjq_bar7';
			var elementIdFont7 = '#xlxdjq_font7';
			var elementIdtitle7 = 'xlxdjq_title7';
			processBarfen(elementIdBar7,elementIdFont7,sevenStr1, rateWarn1,elementIdtitle7, sevenStr2);
			//xl_trip8
			var eightStr=toarraystring(eight);
			var eightStr1=eightStr[1];
			var eightStr2=eightStr[2];
			var elementIdBar8 = '#xlxdjq_bar8';
			var elementIdFont8 = '#xlxdjq_font8';
			var elementIdtitle8 = 'xlxdjq_title8';
			processBarfen(elementIdBar8,elementIdFont8,eightStr1, rateWarn1,elementIdtitle8, eightStr2);
			
		}
	});		
}