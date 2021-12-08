(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


	// code for faq
	$(".faq-block-left-one-wrapper").click(function (){
		$(this).next(".faq-block-content").slideToggle();
		$(this).children(".faq-block-left-one-right").children("span").children("i").toggleClass("fa-plus fa-minus");
	})


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);
