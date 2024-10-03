/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
"use strict";


gsap.config({
	nullTargetWarn: false,
});

// lenis-smooth-scroll
const lenis = new Lenis({
	duration: .7, 
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
	direction: 'vertical', 
	smooth: true, 
	smoothTouch: false, 
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

$('a[href^="#"]').on('click', function (e) {
	e.preventDefault(); 

	const target = $(this.getAttribute('href')); 

	if (target.length) {
		lenis.scrollTo(target[0], {
			duration: 1.2, 
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		});
	}
});


// windows-loaded-before-functions
document.addEventListener("DOMContentLoaded", function () {
	let preloader = document.querySelector("#preloader");
	window.addEventListener('load', function(){
		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();
			}, 1000 ) ;

		}
    
	})
});


$(window).scroll(function() {
	if ($(this).scrollTop() > 250){
	$('.pf_sticky').addClass('sticky1');
	}
	else{
	$('.pf_sticky').removeClass('sticky1');
	}
});



// offcanvas
$('.offcanvas_toggle').on('click', function() {
    $('.overlay, .offcanvas_box_active').addClass('active');
});

$('.overlay, .offcanvas_box_close').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.overlay').removeClass('active');
});
$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.offcanvas_box_active').removeClass('active');
        $('.overlay').removeClass('active');
    }
});
$('.offcanvas_box_active a').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.overlay').removeClass('active');
});

// menu-dropdown
jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});


















// feather-icon
feather.replace()


// bootstrap-tooltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

// back-to-top
var backtotop = $('.scroll_top');
backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});

// data-background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

// wow-activation
if($('.wow').length){
	var wow = new WOW({
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	});
	wow.init();
};

})(jQuery);