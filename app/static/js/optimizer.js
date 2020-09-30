/**
*	optimizer.js
*	It contains scripts for optimizer.html
*/

(function($) {

    "use strict";
	
	/* Hide Show Items Based On Shown Tabs
	 * -------------------------------------------------- */
	$('.playerstab').click(function(){
		$('.playerstab_only').addClass('show');
		$('.lineupstab_only').removeClass('show');
	});

	$('.lineupstab').click(function(){
		$('.lineupstab_only').addClass('show');
		$('.playerstab_only').removeClass('show');
	});
	
})(jQuery);