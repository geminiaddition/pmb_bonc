jQuery(document).ready(function() {
	pwoerfor_304_yarn();
	setInterval('pwoerfor_304_yarn()', 6000);
});



function pwoerfor_304_yarn() {
	$.ajax({
		url : "tooout/tooout!gettooutthreetfouryarn.action",
		type : "post",
		dataType : "json",
		success : function(data) {
			var dataall = data.nameArray;
			var scheduler_id = dataall[0];
			var userd = dataall[1];
			var absolute_capacity = dataall[2];
			var rateWarn = 100;
			var elementIdBar = '#powerfor_324_root_yarn_bar';
			var elementIdFont = '#powerfor_324_root_yarn_font';
			var elementIdFonta = 'powerfor_324_root_yarn_bar_boss';
			$("#power_yarn_four_query").text(userd+"%");
			processBar(elementIdBar,elementIdFont,userd, rateWarn,elementIdFonta, absolute_capacity);
		}

	});// AJAX-end
}
