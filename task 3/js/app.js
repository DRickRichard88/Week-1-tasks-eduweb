(function($){
$(document).ready(function(){
	
	$('button').on('click', function(){
		var menu = $('.menu');

		// menu.toggle('slow',function(){

		// });
		menu.animate({
			"height":"toggle",
			"opacity":1
		},1000,"linear",function(){

		});
	});
});
})(jQuery);