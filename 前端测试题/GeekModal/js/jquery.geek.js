;(function($){
	$.fn.extend({
		"modalShow":function(target){
			$("#"+target).css("display","block");
			$("#"+target).addClass("in");
			$("body").addClass("modal-open");
			$("#geekModal").prepend("<div id='back-drop' class='modal-backdrop  in'></div>")
		},
		"modalHide":function(target){
			$("#"+target).css("display","none");
			
			$("#back-drop").remove();
		}
	})
	
})(jQuery);