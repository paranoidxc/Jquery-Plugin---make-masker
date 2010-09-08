(function($){	
	$.fn.imasker = function(options){		
		$height = $(window).height() > $(document).height() ? $(window).height() : $(document).height();
		$width  = $(window).width() > $(document).width()  ? $(window).width()  : $(document).width();						
		if( $.fn.imasker.defaults.masker == null ) {			
			options = $.extend($.fn.imasker.defaults,options);
			 			 	
		 	$.fn.imasker.defaults.masker = $masker = $('<div></div>');
		 	$masker.css({
		 		'position': options.position,
		 		'top'     : options.top,
		 		'left'    : options.left,
		 		'z-index' : options['z-index'],
		 		'background' : options.background,
		 		'opacity'    : options.opacity,
		 		'height': $height,	 		
		 		'width' : $width
		 	});		 	
		 	$('body').append($masker);
	 	}else{
	 		$.fn.imasker.defaults.masker.css({
		 		'height': $height,	 		
		 		'width' : $width,
        'display': 'block'
	 		});
	 	}		 	
	};
	
	$.fn.imasker_hide = function(){
		$masker = $.fn.imasker.defaults.masker;
		if(  $masker != null ){
			$.fn.imasker.defaults.masker.css({'display': 'none'}) ;
		}
	};
	
	$.fn.imasker_remove = function(){
		$masker = $.fn.imasker.defaults.masker;
		if(  $masker != null ){
			$masker.remove();			
			$.fn.imasker.defaults.masker = null;			
		}
	};
	
	$.fn.imasker.defaults = {
		'background' :'#000',
		'opacity'    :'0.5',
		'position'   :'absolute',
		'top'        :'0',
		'left'       :'0',
		'z-index'	 : null,
		'masker'     : null		
	};
})(jQuery);
