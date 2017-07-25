
jQuery(document).ready(function() {
	
	cbjgjq();
	setInterval('cbjgjq()', 6000);
});
function cbjgjq() {
	$.ajax({
		url : "datacenter/datacenter!cbjgjq.action",
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
			var fiveStr= toarraystring(five);
			var fiveStr1=fiveStr[1];
			var fiveStr2=fiveStr[2];
			var rateWarn1 = 100;
			var elementIdBar1 = '#cbjgjq_bar1';
			var elementIdFont1 = '#cbjgjq_font1';
			var elementIdtitle1 = 'cbjgjq_title1';
			jQuery("#byu_queue").text(fiveStr1 +"%");
			processBar(elementIdBar1,elementIdFont1,fiveStr1, rateWarn1,elementIdtitle1, fiveStr2);
				//default2	
			var oneStr=toarraystring(one);
			var oneStr1=oneStr[1];
			var oneStr2=oneStr[2];
			var elementIdBar2 = '#cbjgjq_bar2';
			var elementIdFont2 = '#cbjgjq_font2';
			var elementIdtitle2 = 'cbjgjq_title2';
			processBarfen(elementIdBar2,elementIdFont2,oneStr1, rateWarn1,elementIdtitle2, oneStr2);
			//didi3	
			var twoStr=toarraystring(two);
			var twoStr1=twoStr[1];
			var twoStr2=twoStr[2];
			var elementIdBar3 = '#cbjgjq_bar3';
			var elementIdFont3 = '#cbjgjq_font3';
			var elementIdtitle3 = 'cbjgjq_title3';
			processBarfen(elementIdBar3,elementIdFont3,twoStr1, rateWarn1,elementIdtitle3, twoStr2);
			//hdp_amc4
			var threeStr=toarraystring(three);
			var threeStr1=threeStr[1];
			var threeStr2=threeStr[2];
			var elementIdBar4 = '#cbjgjq_bar4';
			var elementIdFont4 = '#cbjgjq_font4';
			var elementIdtitle4 = 'cbjgjq_title4';
			processBarfen(elementIdBar4,elementIdFont4,threeStr1, rateWarn1,elementIdtitle4, threeStr2);
			//qc5
			var fourStr=toarraystring(four);
			var fourStr1=fourStr[1];
			var fourStr2=fourStr[2];
			var elementIdBar5 = '#cbjgjq_bar5';
			var elementIdFont5 = '#cbjgjq_font5';
			var elementIdtitle5 = 'cbjgjq_title5';
			processBarfen(elementIdBar5,elementIdFont5,fourStr1, rateWarn1,elementIdtitle5, fourStr2);
			//zb_scp6
			var sixStr=toarraystring(six);
			var sixStr1=sixStr[1];
			var sixStr2=sixStr[2];
			var elementIdBar6 = '#cbjgjq_bar6';
			var elementIdFont6 = '#cbjgjq_font6';
			var elementIdtitle6 = 'cbjgjq_title6';
			processBarfen(elementIdBar6,elementIdFont6,sixStr1, rateWarn1,elementIdtitle6, sixStr2);
			//zb_serv7
			var sevenStr=toarraystring(seven);
			var sevenStr1=sevenStr[1];
			var sevenStr2=sevenStr[2];
			var elementIdBar7 = '#cbjgjq_bar7';
			var elementIdFont7 = '#cbjgjq_font7';
			var elementIdtitle7 = 'cbjgjq_title7';
			processBarfen(elementIdBar7,elementIdFont7,sevenStr1, rateWarn1,elementIdtitle7, sevenStr2);
			//zc8
			var eightStr=toarraystring(eight);
			var eightStr1=eightStr[1];
			var eightStr2=eightStr[2];
			var elementIdBar8 = '#cbjgjq_bar8';
			var elementIdFont8 = '#cbjgjq_font8';
			var elementIdtitle8 = 'cbjgjq_title8';
			processBarfen(elementIdBar8,elementIdFont8,eightStr1, rateWarn1,elementIdtitle8, eightStr2);
			
		}
	});		
}