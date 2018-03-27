var ResponsiveUX = {
	
	
	init: function(){
		
		var script = document.createElement("script"),
		body = $("body");
		
	
		body.removeClass("preloader_active"); 
		
		$(".skills").addClass("skills_active");
		
		$(".menu__icon").on('click', function(){
			
			body.addClass("fullscreen-menu");
			
		});
		
		$(".menu-close").on( 'click', function(){
			
			body.removeClass("fullscreen-menu");
			
		});
		
		$(".scroll_js").on('click', function(event){
			
			event.preventDefault();
			
			var	target = $(this).attr('href'),
			position = ($(target).offset().top) - $(".header_js").outerHeight(); 
			
			if($(this).hasClass("mobile-menu__link")){
				
				body.removeClass("fullscreen-menu");

			}
			
			$("html, body").animate({scrollTop: position}, 800);
			
		});		
	}
};