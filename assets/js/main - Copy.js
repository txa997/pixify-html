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

		var split1 = $(".pf-split-2");
		if(split1.length == 0) return; gsap.registerPlugin(SplitText); split1.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});

			gsap.set(el, { perspective: 400 });

			if( $(el).hasClass('pf-split-2') ){
				gsap.set(el.split.chars, {
					y: "100",
				});
			}

			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				opacity: 1,
				duration:1,
				ease: "power3.out",
				stagger: 0.01,
			});

		});


		// hero-1
		var split2 = $(".pf-split-1");
		if(split2.length == 0) return; gsap.registerPlugin(SplitText); split2.each(function(index, el) {

				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});

				gsap.set(el, { perspective: 400 });

				if( $(el).hasClass('pf-split-1') ){
					gsap.set(el.split.chars, {
						y: "100",
					});
				}

				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					opacity: 1,
					duration:1,
					ease: "power3.out",
					stagger: 0.02,
					delay:0.3,
				});

		});

		var h1aniscroll = gsap.timeline({
			scrollTrigger: {
			  animation: h1aniscroll,
			  trigger: '.pf-hero-1-bg',
			  start: "top 0%",
			  scrub: 1,
			  toggleActions: "play reverse play reverse",
			  markers: false
			}
		});
		h1aniscroll.to(".pf-hero-1-bg img" , { scale: 1.2,	duration:1,ease: "power3.out", })

		var h1ani = gsap.timeline();
		h1ani.from(".h1-ani-slideup" , { yPercent: 100, opacity: 0, duration: 1, stagger: .3, delay: 1,	ease: "power3.out",  })
		h1ani.from(".h1-ani-img" , { yPercent: 100, duration: 1,	ease: "power3.out", }, "<=.5")
		h1ani.from(".h1-ani-point-1" ,  {  scale: 0, duration: .5 , ease: "power3.out",} , "<=.5")
		h1ani.fromTo(".h1-ani-line" , { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",  duration:1 }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  duration:.5 ,ease: "power3.out", })
		h1ani.from(".h1-ani-point-2" ,  {  scale: 0, duration: .5 , ease: "power3.out",})
		h1ani.from(".h1-ani-text" ,  {  scale: .8, opacity: 0,  duration: .5 , ease: "power3.out", },)


    
	})

	// hero-2-slider
	if($(".pf-h2-active").length) {

		var swiper3 = new Swiper(".pf-h2-preview-active", {
			speed: 500,
			loop: true,
			watchSlidesProgress: true,
			slideToClickedSlide: true,

			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
			},
	
		});
	
		var swiper2 = new Swiper(".pf-h2-active", {
			speed: 500,
			loop: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},

			
			autoplay: {
				delay: 5000,
			},
				
			thumbs: {
				swiper: swiper3,
			},
	
		});

	}	

	// hero-2-title
	if($('.wa-split-1').length) {
		var txasplit1 = $('.wa-split-1');
		if(txasplit1.length == 0) return; gsap.registerPlugin(SplitText); txasplit1.each(function(index, el) {
			el.split = new SplitText(el, { 
			type: "lines",
			linesClass: "split-line"
			});
		});
	}
	
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


// search-box
// search-popup-start
$('.search_btn_toggle').on('click', function() {
    $('.overlay, .search_box_active').addClass('active');
});

$('.overlay, .search_box_close').on('click', function() {
    $('.search_box_active').removeClass('active');
    $('.overlay').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.search_box_active').removeClass('active');
        $('.overlay').removeClass('active');
    }
});



const waScaleX0 = gsap.utils.toArray('.wa-scalex-0');
waScaleX0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scaleX: 0, duration: 2, }, 
	{ scaleX: 1, duration: 2, });

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
about1.fromTo(".a1-ani-line" , { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",  duration:1 }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  duration: .5 })
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


// faq-1
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


// solution-1

if (window.matchMedia("(min-width: 992px)").matches) {

	gsap.to(".pf-solution-1-bg-img", {
		scrollTrigger: {
		  trigger: ".pf-solution-1-wrap",
		  start: "top top", 
		  end: "bottom bottom", 
		  pin: ".pf-solution-1-bg-img", 
		  pinSpacing: true,
		   
		}
	});
	
	gsap.to(".pf-solution-1-item-number", {
		scrollTrigger: {
		  trigger: ".pf-solution-1-wrap",
		  start: "top top", 
		  end: "bottom bottom", 
		  pin: ".pf-solution-1-item-number", 
		  pinSpacing: true,
		   
		}
	});
	
	
	var solutionCard1 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard1,
		  trigger: '.pf-s1-card-1',
		  start: "top 70%",
		  end: "top -30%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard1.fromTo(".pf-s1-num-1" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard1.to(".pf-s1-btn-1" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard1.from(".pf-s1-card-1" ,  {  opacity: 0, duration: .5 })
	solutionCard1.to(".pf-s1-card-1" ,  {  opacity: 0, duration: .5 })
	
	var solutionCard2 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard2,
		  trigger: '.pf-s1-card-2',
		  start: "top 70%",
		  end: "top -30%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard2.fromTo(".pf-s1-num-2" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard2.to(".pf-s1-btn-2" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard2.from(".pf-s1-card-2" ,  {  opacity: 0, duration: .5 })
	solutionCard2.to(".pf-s1-card-2" ,  {  opacity: 0, duration: .5 })
	
	var solutionCard3 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard3,
		  trigger: '.pf-s1-card-3',
		  start: "top 70%",
		  end: "top -30%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard3.fromTo(".pf-s1-num-3" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard3.to(".pf-s1-btn-3" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard3.from(".pf-s1-card-3" ,  {  opacity: 0, duration: .5 })
	solutionCard3.to(".pf-s1-card-3" ,  {  opacity: 0, duration: .5 })
	
	var solutionCard4 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard4,
		  trigger: '.pf-s1-card-4',
		  start: "top 70%",
		  end: "top -30%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard4.fromTo(".pf-s1-num-4" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard4.to(".pf-s1-btn-4" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard4.from(".pf-s1-card-4" ,  {  opacity: 0, duration: .5 })
	solutionCard4.to(".pf-s1-card-4" ,  {  opacity: 0, duration: .5 })
	
	var solutionCard5 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard5,
		  trigger: '.pf-s1-card-5',
		  start: "top 70%",
		  end: "top -30%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard5.fromTo(".pf-s1-num-5" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard5.to(".pf-s1-btn-5" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard5.from(".pf-s1-card-5" ,  {  opacity: 0, duration: .5 })
	solutionCard5.to(".pf-s1-card-5" ,  {  opacity: 0, duration: .5 })
	
	var solutionCard6 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard6,
		  trigger: '.pf-s1-card-6',
		  start: "top 80%",
		  end: "top -50%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard6.fromTo(".pf-s1-num-6" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard6.to(".pf-s1-btn-6" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard6.from(".pf-s1-card-6" ,  {  opacity: 0, duration: .5 })
	solutionCard6.to(".pf-s1-card-6" ,  {  opacity: 0, duration: .5 })


}

if (window.matchMedia("(min-width: 992px)").matches) {

	gsap.to(".pf-blog-1-item", {
		scrollTrigger: {
			trigger: ".pf-blog-1-item-pin",
			start: "top 20%", 
			end: "bottom 80%", 
			pin: ".pf-blog-1-item", 
		  	pinSpacing: true,
			markers: false,
		}
	});

	var solutionCard6p = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard6p,
		  trigger: '.pf-blog-1-item',
		  start: "top 50%",
		  end: "top -80%",
		  scrub: 1,

		  toggleActions: 'play reverse play reverse',
		  markers: false,
		  pinSpacing: true,
		}
	});
	
	solutionCard6p.from(".pf-b1-item-1" ,  {  opacity: 0 })
	solutionCard6p.from(".pf-b1-item-1" ,  {  y: 800,  duration: 1,})
	solutionCard6p.from(".pf-b1-item-2" ,  {  opacity: 0 })
	solutionCard6p.from(".pf-b1-item-2" ,  {  y: 800, duration: 1, })
	solutionCard6p.from(".pf-b1-item-3" ,  {  opacity: 0 })
	solutionCard6p.from(".pf-b1-item-3" ,  {  y: 800, duration: 1, })
	

}


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

// services-2
if($('.pf-s2-slider').length) {
	let swiper2 = new Swiper(".pf-s2-slider", {
		loop: false,
		grabCursor: true,
		speed: 500,
		effect: "creative",
		creativeEffect: {
			prev: {
			  shadow: true,
			  translate: ["-5.5%", 0, -1],
			  opacity: [".1"],
			},
			next: {
			  translate: ["100%", 0, 0],
			},
		},

		autoplay: {
			delay: 5000,
		},


		navigation: {
			nextEl: ".pf-s2-btn-next",
			prevEl: ".pf-s2-btn-prev",
		},

		pagination: {
			el: ".pf-s2-pagination-num",
			type: "fraction",
		},
	});
}


// overview-2
if($('.pf-o2-slider').length) {
	let swiper2 = new Swiper(".pf-o2-slider", {
		loop: true,
		grabCursor: true,
		speed: 500,
		effect: "creative",
		creativeEffect: {
			prev: {
			  shadow: true,
			  translate: ["-20%", 0, -1],
			},
			next: {
			  translate: ["100%", 0, 0],
			},
		},

		autoplay: {
			delay: 5000,
		},


		navigation: {
			nextEl: ".pf-o2-btn-next",
			prevEl: ".pf-o2-btn-prev",
		},

	});
}

// testimonial-2
if($('.pf-t2-slider').length) {
	let swiper2 = new Swiper(".pf-t2-slider", {
		loop: true,
		grabCursor: true,
		speed: 1000,

		autoplay: {
			delay: 5000,
		},


		navigation: {
			nextEl: ".pf-t2-btn-next",
			prevEl: ".pf-t2-btn-prev",
		},

	});
}

// faq-2
if($('.pf-faq2-slider').length) {
	let swiper2 = new Swiper(".pf-faq2-slider", {
		loop: true,
		speed: 1000,

		autoplay: {
			delay: 5000,
		},

		effect: "creative",
		creativeEffect: {
			prev: {
			  shadow: true,
			  translate: ["-20%", 0, -1],
			},
			next: {
			  translate: ["100%", 0, 0],
			},
		},


		navigation: {
			nextEl: ".pf-faq2-btn-next",
			prevEl: ".pf-faq2-btn-prev",
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

// about-2
if($('.pf-a2-slide').length) {
	$('.pf-a2-slide').marquee({
		gap: 48,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}

// counter-2
if($('.pf-counter-2-line-active').length) {
	$('.pf-counter-2-line-active').marquee({
		gap: 48,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
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

// popup-video-activation
if($('.popup-video').length) {
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
}

// popup-img-activation
if($('.popup-img').length) {
	$('.popup-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

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