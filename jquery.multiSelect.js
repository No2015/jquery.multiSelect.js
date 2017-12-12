var multiSelectCss = '<style id="multiSelectCss" type="text/css">.multi-select-box{position:relative;display:inline-block}.multi-select-div{position:absolute;z-index:9;background:#fff;border:1px solid #dedede;width:100%!important;box-sizing:border-box;max-height:150px;overflow:auto;display:none;top:100%;margin-top:-1px}.multi-select-name{padding-left:3px;box-sizing:border-box;padding-right:17px;border:1px solid #dedede;background:#fff url(https://mall.epec.com/ecmall/img/public/xl2.jpg) no-repeat right center / 17px 100%}.multi-select-option{margin:0;padding:0}.multi-select-option label{display:block;line-height: 18px;padding:4px 5px}.multi-select-option label:hover{background:#f1f2f6}.multi-select-option input{float:left;margin:4px 3px 0 0}.multi-select-option span{margin-left:22px;display:block}</style>';
function initCss(){
	if($('#multiSelectCss')[0]){
		return false;
	}
	$(document).on('click','body',function(event){
		if(!$(event.target).closest('.multi-select-box')[0]){
			$('.multi-select-div').slideUp(200);
		}
	});
	$('head').append(multiSelectCss);
}
$.fn.multiSelect = function(){
	initCss();
	this.each(function(){
		var width = $(this).outerWidth();
		var height = $(this).outerHeight();
		$(this).hide();
		var $parent = $(this).parent();
		if(!$parent.hasClass('.multi-select-box')){
			var parent = '<div class="multi-select-box">\n'
						+	'<input class="multi-select-name" readonly style="width:'+width+'px;height:'+height+'px;" type="text" name="'+this.name+'">\n'
						+'</div>';
			$(this).wrap(parent);
			this.name = 'select-'+this.name;
			$parent = $(this).parent();
		}else{
			return false;
		}
		var $simulation = $('<div class="multi-select-div"></div>');
		$parent.append($simulation);
		var options = '';
		$(this).find('option').each(function(){
			if($(this).attr('value')){
				options += '<p class="multi-select-option">\n'
						+		'<label>\n'
						+			'<input type="checkbox" data-text="'+$(this).text()+'" value="'+$(this).attr('value')+'"><span>'+$(this).text()+'</span>\n'
						+		'</label>\n'
						+	'</p>';
				
			}
		});
		$simulation.append(options);			
		$parent.find('input[type="checkbox"]').change(function(){
			var values = [], texts = [];
			$parent.find('input[type="checkbox"]:checked').each(function(){
				var value = this.value;
				var text = $(this).data('text');
				values.push(value);
				texts.push(text);
			});
			$parent.find('.multi-select-name').val(texts.toString()).attr('data-values',values.toString());
		});
		$parent.find('.multi-select-name').click(function(){
			$('.multi-select-div').hide();
			$parent.find('.multi-select-div').slideDown(200);
		});
	});
}
