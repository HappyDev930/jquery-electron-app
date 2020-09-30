/**
*	app.js
*	It contains basic global scripts for dashboard.html/optimizer.html
*/

(function($) {

    "use strict";
	
	/* Menu Handler
	 * -------------------------------------------------- */
	const { remote } = require('electron');

	var win = remote.getCurrentWindow();

	$('#minimize').click(function(){
		win.minimize();
	});

	$('#close').click(function() {
		win.close();
	});

	/* Preloader
	 * -------------------------------------------------- */
	$("html").addClass('ss-preload');

	$(window).on('load', function() {
		// will first fade out the loading animation 
		$(".preloader-content").fadeOut("slow", function() {
			// will fade out the whole DIV that covers the website.
			$(".preloader").delay(150).fadeOut("slow");
		}); 
	});

	/* Popover Info
	 * -------------------------------------------------- */
	$('[data-toggle="popover"]').popover();
	
})(jQuery);