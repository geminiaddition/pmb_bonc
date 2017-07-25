/**
 * AjaxSubmit构造函数
 * 	
 */
AjaxSubmit = function(options) {
	//返回的容器
	this.target = null;
	
	//url
	this.url = null;
	
	 //提交的表单form
	this.form = null;
	
	//提交方式
	this.submitType = "post";
	
	//提交前检查函数
	this.beforeSubmit = null;
	
	//提交成功后的后续操作函数
	this.success = null;
	
	//提交的参数json格式
	this.parameter = null;
	
	//返回类型：默认html
	this.resultType = 'html';
	
	//初始化参数
	if(options != null) {
		options.url != null ? this.url = options.url : this.url = null;
		options.target != null ? this.target = options.target : this.target = null;
		options.form != null ? this.form = options.form : this.form = null;
		options.beforeSubmit != null && typeof(options.beforeSubmit) == "function" ? this.beforeSubmit = options.beforeSubmit : this.beforeSubmit = null;
		options.success != null && typeof(options.success) == "function" ? this.success = options.success : this.success = null;
		options.resultType != null ? this.resultType = options.resultType :  this.resultType = 'html';
		options.submitType != null ? this.submitType = options.submitType :  this.submitType = 'post';
		options.parameter != null ? this.parameter = options.parameter : this.parameter = null;
	}
	
	//提交form表单操作,
	this.submitForm = function(){
		
		//提交前验证输入条件,以及处理事件
		if(this.beforeSubmit != null && !this.beforeSubmit()) {return;}
		
		if(this.target == null) {
			if(jQuery('#saveResultDiv').size() ==0) {
				jQuery(document.body).append('<div id="saveResultDiv" style="display:none;"></div>');
			}
			this.target = 'saveResultDiv';
		}
		
		var resultTarget = this.target;
		
		//设置返回函数
		var afterSave = this.success;
		var backObj = (this.success == null ? null : new SubmitBack(jQuery("#"+this.target)));
		
		//将提交参数转换成json格式
		this.parameter = jQuery("#"+this.form).formToArray();
		
		jQuery.post(this.url,this.parameter,function(data){jQuery("#"+resultTarget).html(data);if(typeof(afterSave) == 'function'){afterSave(backObj);}},this.resultType);
		
		//jQuery("#"+this.target).load(this.url,this.parameter,function(){ if(typeof(afterSave) == 'function'){afterSave(data)}});
	}
	
	//post方式提交
	this.post = function(){
		
		//提交前验证输入条件,以及处理事件
		if(this.beforeSubmit != null && !this.beforeSubmit()) {return;}
		
		if(this.target == null) {
			if(jQuery('#saveResultDiv').size() ==0) {
				jQuery(document.body).append('<div id="saveResultDiv" style="display:none;"></div>');
			}
			this.target = 'saveResultDiv';
		}
		
		var resultTarget = this.target;
		
		//设置返回函数
		var afterSave = this.success;
		var backObj = (this.success == null ? null : new SubmitBack(jQuery("#"+resultTarget)));
	
		
		jQuery.post(this.url,this.parameter,function(data){jQuery("#"+resultTarget).html(data);if(typeof(afterSave) == 'function'){afterSave(backObj);}},this.resultType);
	}
	
	//get方式提交
	this.get = function(){
		//提交前验证输入条件,以及处理事件
		if(this.beforeSubmit != null && !this.beforeSubmit()) {return;}
		
		if(this.target == null) {
			if(jQuery('#saveResultDiv').size() ==0) {
				jQuery(document.body).append('<div id="saveResultDiv" style="display:none;"></div>');
			}
			this.target = 'saveResultDiv';
		}
		
		var resultTarget = this.target;
		
		//设置返回函数
		var afterSave = this.success;
		var backObj = (this.success == null ? null : new SubmitBack(jQuery("#"+resultTarget)));
	
		
		jQuery.get(this.url,this.parameter,function(data){jQuery("#"+resultTarget).html(data);if(typeof(afterSave) == 'function'){afterSave(backObj);}},this.resultType);
	}

    /**
     * 表单提交方式
     */
    this.targetSubmit = function(){
        //提交前验证输入条件,以及处理事件
        if(this.beforeSubmit != null && !this.beforeSubmit()) {return;}

        //没有提供保存的target
        if(jQuery('#saveResultIframe').size() == 0){
            jQuery(document.body).append('<iframe frameborder="0" id="saveResultIframe" name="saveResultIframe" style="display:none;"></iframe>');
        }

        //设置返回函数
        var afterSave = this.success;

        //绑定form表单提交的路径，跳转到的iframe等
        document.getElementById(this.form).setAttribute('enctype','multipart/form-data');
        document.getElementById(this.form).setAttribute('encoding','multipart/form-data');
//		jQuery("#"+this.form).attr('enctype','multipart/form-data');
        jQuery("#"+this.form).attr('action',this.url);
        jQuery("#"+this.form).attr('target','saveResultIframe');
        jQuery("#"+this.form).attr('method',this.submitType);
        var resultTarget = this.target;
        var resultType = this.resultType;

        //提交表单
        jQuery("#"+this.form).submit()

        //得到返回结果
        var saveResult = document.getElementById('saveResultIframe');

        //iframe加载完毕后的处理
        saveResult.onload = saveResult.onreadystatechange = function() {
            if (this.readyState && this.readyState != 'complete'){
                return;
            }
            else {
                // 解决IE逻辑执行两次BUG，再提交成功后，将对象置为null，防止执行两次
                saveResult.onload = saveResult.onreadystatechange = null;

                // 获取返回内容，执行回调函数
                var resultObj = jQuery("#saveResultIframe").contents().find('body');
                if(resultTarget != null ){
                    jQuery("#"+resultTarget).html(resultObj.html());
                    resultObj =  jQuery("#"+resultTarget);
                    jQuery("#saveResultIframe").contents().find('body').html('');
                }

                if(afterSave != null && typeof(afterSave) == 'function') {
                    if(resultType == 'json') {
                        jQuery.trim(resultObj.text()) == '' ? afterSave({}) : afterSave(eval("("+resultObj.text() + ")"));;
                    }
                    else {
                        afterSave(new SubmitBack(resultObj));
                    }
                }
            }
        }
    }
}

/**
 * 提交返回的操作对象,此为容器对象
 * @param container
 */
SubmitBack = function(container){
	//设置容器
	this.container = container;
	
	
	/**
	 * 获取保存结果中指定节点的jQuery对象
	 */
	this.getTarget = function(node){
		return (node == null ? this.container : this.container.find('#'+node));
	}
	
	/**
	 * 获得指定节点的指定属性值
	 */
	this.getChildAttribute = function(node,attrName) {
		if(node != null && attrName != null) {
			return (this.container.find('#'+node).size() == 0 ? null  : this.container.find('#'+node)[0].getAttributeNode(attrName).value);
		}
		else {
			return null;
		}
	}
}