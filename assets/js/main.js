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
	duration: .8, 
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

// menu-1
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


const waScaleX0 = gsap.utils.toArray('.wa-scalex-0');
waScaleX0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scaleX: 0, duration: 1, }, 
	{ scaleX: 1, duration: 1, });

	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		markers: false,

	});
});

const waOpacityScale0 = gsap.utils.toArray('.wa-scale-0');
waOpacityScale0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scale: .3, opacity: 0,   duration: .5, }, 
	{ scale: 1, opacity: 1, delay:.2,  duration: .5, });
	ScrollTrigger.create({
		trigger: box,
		start: "top 80%",
		animation: anim,
		toggleActions: 'play reverse play reverse',
		once: false,
		markers: false,

	});
});


// about-1
var about1 = gsap.timeline({

	scrollTrigger: {
	  animation: about1,
	  trigger: '.pf-about-1-earth',
	  start: "top 90%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
about1.from(".pf-about-1-earth-img img" ,  {  rotation: 90, opacity: 0, duration: 1 })
about1.from(".a1-ani-point-1" ,  {  scale: 0, duration: .5 } , "<=.5")
about1.fromTo(".a1-ani-line" , { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",  duration:1 }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  duration:1 })
about1.from(".a1-ani-point-2" ,  {  scale: 0, duration: .5 })
about1.from(".a1-ani-text" ,  {  scale: .8, opacity: 0,  duration: .5 }, "<=.5")


// overview-1
var overview1 = gsap.timeline({

	scrollTrigger: {
	  animation: overview1,
	  trigger: '.pf-overview-1-bg-circle',
	  start: "top 90%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
overview1.from(".pf-overview-1-bg-circle img" ,  {  rotation: 90, opacity: 0, duration: 1 })
overview1.from(".pf-overview-1-tabs" ,  {  opacity: 0, duration: 1 })


// overview-1
var faqBtn1 = gsap.timeline({

	scrollTrigger: {
	  animation: faqBtn1,
	  trigger: '.pf-faq-1-all-btn-wrap',
	  start: "top 90%",
	  end: "top 0%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	  scrub: .5,
	}
});
faqBtn1.from(".pf-faq-1-all-btn-ani" ,  {  xPercent: 200, yPercent: 100, })




// footer-1
var footer1 = gsap.timeline({

	scrollTrigger: {
	  animation: footer1,
	  trigger: '.pf-footer-1-shape',
	  start: "top 95%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
footer1.from(".pf-footer-1-shape img" ,  { yPercent: 50, rotation: 180, duration: 1 })


// testimonial-1-slider
if($('.pf-t1-active').length) {
	let slider = new Swiper('.pf-t1-active', {
		loop: true,
		spaceBetween: 32,
		speed: 500,
		slidesPerView: 3,

		// autoplay: {
		// 	delay: 5000,
		// },

		navigation: {
			nextEl: ".pf-t1-btn-next",
			prevEl: ".pf-t1-btn-prev",
		},

        pagination: {
            el: ".pf-t1-pagination",
            clickable: true,
        },


		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 2,
			},
			1600: {
				slidesPerView: 3,
			},
		},
	});
}

// contact-1-brand-slider
if($('.pf-c1-brand-slider').length) {
	let slider = new Swiper('.pf-c1-brand-slider', {
		loop: true,
		spaceBetween: 32,
		speed: 500,
		slidesPerView: 3,

		autoplay: {
			delay: 5000,
		},



		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},

		},
	});
}


// text-slide-1
if($('.client-1-active').length) {
	$('.client-1-active').marquee({
		gap: 140,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
}

// text-slide-1
if($('.about-1-shape-active').length) {
	$('.about-1-shape-active').marquee({
		gap: 0,
		speed: 50,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}

// feather-icon
feather.replace()

// counter-activation
$('.counter').counterUp({
	delay: 10,
	time: 5000
});


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