;(function($){
	$.fn.extend({
		"modalshow":function(target){
			$("#"+target).css("display","block");
			$("#"+target).addClass("in");
			$("body").addClass("modal-open");
			$("body").css("background-color","#B0AAAA");
			
		},
		"modalhide":function(target){
			$("#"+target).css("display","none");
			$("body").css("background-color","white");
		}
	})
	
})(jQuery);