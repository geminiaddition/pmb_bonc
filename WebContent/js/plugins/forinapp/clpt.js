
jQuery(document).ready(function() {
	
	clpt();
	 setInterval('clpt()', 6000);
});
function clpt() {
	$.ajax({
		url : "forinapp/forinapp!clpt.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var one = dataall[0];
			var two = dataall[1];
			var three = dataall[2];
		
			//root1
			var threeStr= toarraystring(three);
			var threeStr1=threeStr[1];
			var threeStr2=threeStr[2];
			//alert(threeStr);
			var rateWarn1 = 100;
			var elementIdBar1 = '#clpt_bar1';
			var elementIdFont1 = '#clpt_font1';
			var elementIdtitle1 = 'clpt_title1';
			jQuery("#clpt_quen").text(threeStr1 +"%");
			processBar(elementIdBar1,elementIdFont1,threeStr1, rateWarn1,elementIdtitle1, threeStr2);
				//default2	
			var oneStr=toarraystring(one);
			var oneStr1=oneStr[1];
			var oneStr2=oneStr[2];
			var elementIdBar2 = '#clpt_bar2';
			var elementIdFont2 = '#clpt_font2';
			var elementIdtitle2 = 'clpt_title2';
			processBarfen(elementIdBar2,elementIdFont2,oneStr1, rateWarn1,elementIdtitle2, oneStr2);
			//didi3	
			var twoStr=toarraystring(two);
			var twoStr1=twoStr[1];
			var twoStr2=twoStr[2];
			var elementIdBar3 = '#clpt_bar3';
			var elementIdFont3 = '#clpt_font3';
			var elementIdtitle3 = 'clpt_title3';
			processBarfen(elementIdBar3,elementIdFont3,twoStr1, rateWarn1,elementIdtitle3, twoStr2);
			
		}
	});		
}