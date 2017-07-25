
jQuery(document).ready(function() {
	
	zxjgjq();
	setInterval('zxjgjq()', 6000);
});
function zxjgjq() {
	$.ajax({
		url : "datacenter/datacenter!zxjgjq.action",
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
			var sevenStr= toarraystring(seven);
			var sevenStr1=sevenStr[1];
			var sevenStr2=sevenStr[2];
			var rateWarn1 = 100;
			var elementIdBar1 = '#zxjgjq_bar1';
			var elementIdFont1 = '#zxjgjq_font1';
			var elementIdtitle1 = 'zxjgjq_title1';
			jQuery("#zxjgjq_queue").text(sevenStr1 +"%");
			//alert(sevenStr2);
			processBar(elementIdBar1,elementIdFont1,sevenStr1, rateWarn1,elementIdtitle1, sevenStr2);
				//default2	
			var oneStr=toarraystring(one);
			var oneStr1=oneStr[1];
			var oneStr2=oneStr[2];
			var elementIdBar2 = '#zxjgjq_bar2';
			var elementIdFont2 = '#zxjgjq_font2';
			var elementIdtitle2 = 'zxjgjq_title2';
			processBarfen(elementIdBar2,elementIdFont2,oneStr1, rateWarn1,elementIdtitle2, oneStr2);
			//didi3	
			var twoStr=toarraystring(two);
			var twoStr1=twoStr[1];
			var twoStr2=twoStr[2];
			var elementIdBar3 = '#zxjgjq_bar3';
			var elementIdFont3 = '#zxjgjq_font3';
			var elementIdtitle3 = 'zxjgjq_title3';
			processBarfen(elementIdBar3,elementIdFont3,twoStr1, rateWarn1,elementIdtitle3, twoStr2);
			//hdp_amc4
			var threeStr=toarraystring(three);
			var threeStr1=threeStr[1];
			var threeStr2=threeStr[2];
			var elementIdBar4 = '#zxjgjq_bar4';
			var elementIdFont4 = '#zxjgjq_font4';
			var elementIdtitle4 = 'zxjgjq_title4';
			processBarfen(elementIdBar4,elementIdFont4,threeStr1, rateWarn1,elementIdtitle4, threeStr2);
			//jc_serv5
			var fourStr=toarraystring(four);
			var fourStr1=fourStr[1];
			var fourStr2=fourStr[2];
			var elementIdBar5 = '#zxjgjq_bar5';
			var elementIdFont5 = '#zxjgjq_font5';
			var elementIdtitle5 = 'zxjgjq_title5';
			processBarfen(elementIdBar5,elementIdFont5,fourStr1, rateWarn1,elementIdtitle5, fourStr2);
			//jk_dev6
			var fiveStr=toarraystring(five);
			var fiveStr1=fiveStr[1];
			var fiveStr2=fiveStr[2];
			var elementIdBar6 = '#zxjgjq_bar6';
			var elementIdFont6 = '#zxjgjq_font6';
			var elementIdtitle6 = 'zxjgjq_title6';
			processBarfen(elementIdBar6,elementIdFont6,fiveStr1, rateWarn1,elementIdtitle6, fiveStr2);
			//qc7
			var sixStr=toarraystring(six);
			var sixStr1=sixStr[1];
			var sixStr2=sixStr[2];
			var elementIdBar7 = '#zxjgjq_bar7';
			var elementIdFont7 = '#zxjgjq_font7';
			var elementIdtitle7 = 'zxjgjq_title7';
			processBarfen(elementIdBar7,elementIdFont7,sixStr1, rateWarn1,elementIdtitle7, sixStr2);
			//zongxiang8
			var eightStr=toarraystring(eight);
			var eightStr1=eightStr[1];
			var eightStr2=eightStr[2];
			var elementIdBar8 = '#zxjgjq_bar8';
			var elementIdFont8 = '#zxjgjq_font8';
			var elementIdtitle8 = 'zxjgjq_title8';
			processBarfen(elementIdBar8,elementIdFont8,eightStr1, rateWarn1,elementIdtitle8, eightStr2);
			
		}
	});		
}