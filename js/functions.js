/* ------------------------------------------------ */
/* ---------HIDE ADDRESS BAR on MOBILE ------------- */
/* ------------------------------------------------ */
	(function( win ){
		var doc = win.document;
		// If there's a hash, or addEventListener is undefined, stop here
		if( !location.hash && win.addEventListener ){
			//scroll to 1
			window.scrollTo( 0, 1 );
			var scrollTop = 1,
				getScrollTop = function(){
					return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
				},
			
				//reset to 0 on bodyready, if needed
				bodycheck = setInterval(function(){
					if( doc.body ){
						clearInterval( bodycheck );
						scrollTop = getScrollTop();
						win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
					}	
				}, 15 );
			
			win.addEventListener( "load", function(){
				setTimeout(function(){
					//at load, if user hasn't scrolled more than 20 or so...
					if( getScrollTop() < 20 ){
						//reset to hide addr bar at onload
						win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
					}
				}, 0);
			} );
		}
	})(this);
/* ----------------------------------------------- */

/* --------- SIMPLE BROWSER DETECTOR ------------- */
/* --------- ADDS CLASS TO BODY ------------------ */
/* ------------------------------------------------ */
jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

if (jQuery.browser.mozilla == true) {
	jQuery('html').addClass("moz");
}
if (jQuery.browser.webkit == true) {
	jQuery('html').addClass("webkit");
}
if (jQuery.browser.opera == true) {
	jQuery('html').addClass("opera");
}
if (jQuery.browser.msie == true) {
	jQuery('html').addClass("msie");
}
/* ----------------------------------------------- */

/* ------------------------------------------------ */
/* --------- SIMPLE MOBILE MENU TOGGLE ------------ */
/* ------------------------------------------------ */

jQuery("#nav-toggle").click(function () {
	jQuery("#page-navigation").stop().slideToggle("fast");
	if(jQuery("#page-navigation").hasClass("selected")) {
		jQuery("#page-navigation").removeClass("selected");
		jQuery(".nav-toggle").removeClass("selected");
	} else {
		jQuery("#page-navigation").addClass("selected");
		jQuery(this).addClass("selected");
	}
});
/* ------------------------------------------------ */