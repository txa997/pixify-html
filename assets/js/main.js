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
	duration: .6, 
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

// split-default
if($('.wa-split-1').length) {
	var txasplit1 = $('.wa-split-1');
	if(txasplit1.length == 0) return; gsap.registerPlugin(SplitText); txasplit1.each(function(index, el) {
		el.split = new SplitText(el, { 
		type: "lines",
		linesClass: "split-line"
		});
	});
}

// windows-loaded-before-functions
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener('load', function(){

		// preloader
		let preloader = document.querySelector("#preloader");
		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();
			}, 1000 ) ;

		}

		// after-preloader-end
		setTimeout(function() {

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



		}, 500);

		// hero-5-slider
		setTimeout(function() {

			if($(".pf-h5-preview-slider").length) {

				let pfHero5title = new Swiper(".pf-h5-title-slider", {
					loop: true,
					spaceBetween: 20,
					speed: 1000,
					allowTouchMove: false,
					navigation: {
						nextEl: ".pf-h5-btn-next",
						prevEl: ".pf-h5-btn-prev",
					},

				});


				var pfh5main = new Swiper(".pf-h5-slider", {
					speed: 500,
					loop: true,
					effect: "fade",
					allowTouchMove: false,
					fadeEffect: {
						crossFade: true
					},
					
						
					thumbs: {
						swiper: pfHero5title,
					},

					navigation: {
						nextEl: ".pf-h5-btn-next",
						prevEl: ".pf-h5-btn-prev",
					},


				});

				var pfHero5preview = new Swiper(".pf-h5-preview-slider", {
					effect: "cards",
					grabCursor: true,
					loop: false,

					autoplay: {
						delay: 5000,
					},

					navigation: {
						nextEl: ".pf-h5-btn-next",
						prevEl: ".pf-h5-btn-prev",
					},
				
					thumbs: {
						swiper: pfh5main,
					},

					keyboard: {
						enabled: true, 
						onlyInViewport: true, 
					},
				});


			}	
		})



		// section-title-1
		if($(".pf-split-1").length) {
			var split1 = $(".pf-split-1");
			if(split1.length == 0) return; gsap.registerPlugin(SplitText); split1.each(function(index, el) {
	
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
		}

		// section-title-2
		if($(".pf-split-2").length) {
			var split2 = $(".pf-split-2");
			if(split2.length == 0) return; gsap.registerPlugin(SplitText); split2.each(function(index, el) {
	
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
		}




		// hero-1-timeline
		var h1ani = gsap.timeline();
		h1ani.from(".h1-ani-slideup" , { yPercent: 100, opacity: 0, duration: 1, stagger: .3, delay: 1,	ease: "power3.out",  })
		h1ani.from(".h1-ani-img" , { yPercent: 100, duration: 1,	ease: "power3.out", }, "<=.5")
		h1ani.from(".h1-ani-point-1" ,  {  scale: 0, duration: .5 , ease: "power3.out",} , "<=.5")
		h1ani.fromTo(".h1-ani-line" , { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",  duration:1 }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  duration:.5 ,ease: "power3.out", })
		h1ani.from(".h1-ani-point-2" ,  {  scale: 0, duration: .5 , ease: "power3.out",})
		h1ani.from(".h1-ani-text" ,  {  scale: .8, opacity: 0,  duration: .5 , ease: "power3.out", },)

		// hero-1-scroll-bg-img
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


		// hero-3-timeline
		var h3ani = gsap.timeline();
		h3ani.from(".pf-hero-3-content .hero-disc" , { yPercent: 100, opacity: 0, duration: .5, delay: 1,	ease: "power3.out",  })
		h3ani.from(".pf-hero-3-content .hero-btn" , { yPercent: 100, opacity: 0, duration: .5,	ease: "power3.out",  })
		h3ani.from(".pf-hero-3-img .img-2" , { rotation: 360, opacity: 0, duration: 1.5,	ease: "power3.out",  },"<=-.5")
		h3ani.from(".pf-hero-3-img .img-1" , { opacity: 0, scale: .9, duration: .5,	ease: "power3.out",  })
		h1ani.fromTo(".pf-hero-3-sig .sig-img" , { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",  duration:2 }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  duration:2 ,ease: "power3.out", }, "<-1")

		// hero-4-timeline
		var h4ani = gsap.timeline();
		h4ani.from(".hero-4-disc" , { yPercent: 100, opacity: 0, duration: .5, 	ease: "power3.out", delay: 1, })
		h4ani.from(".hero-4-btn" , { yPercent: 100, opacity: 0, duration: .5,	ease: "power3.out",  })
		h4ani.fromTo(".hero-4-title .has-highlight-line" , { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",  duration:1, }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  duration:1,  })
		
		var h4aniT2 = gsap.timeline();
		h4aniT2.from(".pf-hero-4-popup-shape-point-1" ,  {  scale: 0, duration: .5 , ease: "power3.out", delay: 1,})
		h4aniT2.fromTo(".pf-hero-4-popup-shape-line" , { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",  duration:.5 }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  duration:.5 ,ease: "power3.out", })
		h4aniT2.from(".pf-hero-4-popup-shape-point-2" ,  {  scale: 0, duration: .5 , ease: "power3.out",})
		h4aniT2.from(".pf-hero-4-popup-text" ,  {  scale: .8, opacity: 0,  duration: .5 , ease: "power3.out", },)
		
		var h4aniT3 = gsap.timeline();
		h4aniT3.from(".pf-hero-4-img .shape" ,  {  xPercent: 100, opacity: 0, duration: 1 , ease: "power3.out", delay: 2,})
		h4aniT3.from(".pf-hero-4-img .main-img" ,  {  scale: .9, opacity: 0, duration: 1 , ease: "power3.out",})


	})
});




// home-1-sticky-menu
$(window).scroll(function() {
	if ($(this).scrollTop() > 250){
	$('.pf_sticky').addClass('sticky1');
	}
	else{
	$('.pf_sticky').removeClass('sticky1');
	}
});


// sticky-header-default
function glystickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.txa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('txa_sticky');
      } else {
        $header.removeClass('txa_sticky');
        $header.removeClass('txa_sticky_show');
      }

      if ($header.hasClass('txa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('txa_sticky_show');
        } else {
          $header.removeClass('txa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

glystickyHeader();


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



// scale-.9-to-1
const wascale11 = gsap.utils.toArray('.wascale0');
wascale11.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scale: .9, duration: .5, }, 
	{ scale: 1, duration: .5, });

	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play none none reverse',
		markers: false,

	});
})

// scaleX-0-to-1
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

// item-parallax
const waItemParallax = gsap.utils.toArray('.item-parallax');
waItemParallax.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ yPercent: 20, stagger: .3, duration: .5, },
	{ yPercent: -5, stagger: .3, duration: .5, }

	);

	ScrollTrigger.create({
		trigger: box,
		start: "top 100%",
		end: "top -40%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		markers: false,
		scrub: .5,
	});
});




// highlight
const highlight1 = gsap.utils.toArray('.highlight-line-ani');
highlight1.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",  duration:1  }, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , delay: .5 }
	);
	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play none none none',
		once: false,
		markers: false,
	});
});

// subtitle-4
const subtitle4 = gsap.utils.toArray('.pf-subtitle-3-line');
subtitle4.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",  duration:1  }, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , delay: .5 }
	);
	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play none none none',
		once: false,
		markers: false,
	});
});

// about-1-timeline
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

// about-1-shape
var about1shape = gsap.timeline({

	scrollTrigger: {
	  animation: about1,
	  trigger: '.pf-about-1-line-shape-single',
	  start: "top 80%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
about1shape.from(".pf-about-1-line-shape-single svg " ,  {  scaleY: 0,  duration: 1 })




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
	

	
	var solutionCard2 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard2,
		  trigger: '.pf-s1-card-2',
		  start: "top 80%",
		  end: "top -40%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard2.fromTo(".pf-s1-num-2" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard2.to(".pf-s1-btn-2" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard2.to(".pf-solution-1-bg-img .main-img-2" ,  {  opacity: 1, duration: .5 })
	solutionCard2.from(".pf-s1-card-2" ,  {  opacity: 0, duration: .5 },"<")
	solutionCard2.to(".pf-s1-card-2" ,  {  opacity: 0, duration: .5 })
	
	var solutionCard3 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard3,
		  trigger: '.pf-s1-card-3',
		  start: "top 80%",
		  end: "top -40%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard3.fromTo(".pf-s1-num-3" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard3.to(".pf-s1-btn-3" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard3.to(".pf-solution-1-bg-img .main-img-3" ,  {  opacity: 1, duration: .5 })
	solutionCard3.from(".pf-s1-card-3" ,  {  opacity: 0, duration: .5 },"<")
	solutionCard3.to(".pf-s1-card-3" ,  {  opacity: 0, duration: .5 })
	
	var solutionCard4 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard4,
		  trigger: '.pf-s1-card-4',
		  start: "top 80%",
		  end: "top -40%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard4.fromTo(".pf-s1-num-4" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard4.to(".pf-s1-btn-4" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard4.to(".pf-solution-1-bg-img .main-img-4" ,  {  opacity: 1, duration: .5 })
	solutionCard4.from(".pf-s1-card-4" ,  {  opacity: 0, duration: .5 },"<")
	solutionCard4.to(".pf-s1-card-4" ,  {  opacity: 0, duration: .5 })
	
	var solutionCard5 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard5,
		  trigger: '.pf-s1-card-5',
		  start: "top 80%",
		  end: "top -40%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard5.fromTo(".pf-s1-num-5" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard5.to(".pf-s1-btn-5" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard5.to(".pf-solution-1-bg-img .main-img-5" ,  {  opacity: 1, duration: .5 })
	solutionCard5.from(".pf-s1-card-5" ,  {  opacity: 0, duration: .5 },"<")
	solutionCard5.to(".pf-s1-card-5" ,  {  opacity: 0, duration: .5 })
	
	var solutionCard6 = gsap.timeline({
		scrollTrigger: {
		  animation: solutionCard6,
		  trigger: '.pf-s1-card-6',
		  start: "top 90%",
		  end: "top -60%",
		  scrub: .5,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	solutionCard6.fromTo(".pf-s1-num-6" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration:1 }, {  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 , })
	solutionCard6.to(".pf-s1-btn-6" ,  {  background: "#2AC8D3", color: "#000", borderColor: "transparent", duration: .1 })
	solutionCard6.to(".pf-solution-1-bg-img .main-img-6" ,  {  opacity: 1, duration: .5 })
	solutionCard6.from(".pf-s1-card-6" ,  {  opacity: 0, duration: .5 },"<")
	solutionCard6.to(".pf-s1-card-6" ,  {  opacity: 0, duration: .5 })


}


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


// faq-1-btn
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

// blog-card-1-sticky
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
		  start: "top 90%",
		  end: "top -60%",
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


// about-2-sticky
if (window.matchMedia("(min-width: 992px)").matches) {

	gsap.to(".pf-about-2-img-sticky-item", {
		scrollTrigger: {
			trigger: ".pf-about-2-img-sticky",
			start: "top 20%", 
			end: "2000px", 
			pin: ".pf-about-2-img-sticky-item", 
		  	pinSpacing: true,
			markers: false,
		}
	});

	gsap.to(".pf-about-2-slide-posi", {
		scrollTrigger: {
			trigger: ".pf-about-2-img-sticky",
			start: "top 20%", 
			end: "2000px", 
			pin: ".pf-about-2-slide-posi", 
		  	pinSpacing: true,
			markers: false,
		}
	});

	var about2video = gsap.timeline({
		scrollTrigger: {
		  animation: about2video,
		  trigger: '.pf-about-2-img-sticky',
		  start: "top 20%",
		  end: "2000px",
		  scrub: 1,
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	
	about2video.to(".pf-about-2-img-sticky-item" ,  {  scale: 1 , transformOrigin: "top center" },)
	

}


// touch-1-circle
var touch1circle = gsap.timeline({
	scrollTrigger: {
	  animation: touch1circle,
	  trigger: '.pf-touch-1-shape',
	  start: "top 100%",
	  end: "top 0%",
	  toggleActions: 'play reverse play reverse',
	  scrub: 1,
	  markers: false,
	}
});

touch1circle.from(".pf-touch-1-shape img" ,  {  xPercent: 50, opacity: 0 })

// footer-1-shape
var footer1 = gsap.timeline({

	scrollTrigger: {
	  animation: footer1,
	  trigger: '.pf-footer-1-shape',
	  start: "top 95%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
footer1.from(".pf-footer-1-shape img" ,  { yPercent: 50, duration: 1 })

// video-2-title
if($('.pf-video-2-split').length) {
	var pfVideo2 = $(".pf-video-2-split");

	if(pfVideo2.length == 0) return; gsap.registerPlugin(SplitText); pfVideo2.each(function(index, el) {
	
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
	
		if( $(el).hasClass('pf-video-2-split') ){
			gsap.set(el.split.chars, {
				opacity: .24,
			});
		}
	
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 80%",
				end: "top 30%",
				markers: false,
				scrub: 1,
			},
	
			x: "0",
			y: "0",
			opacity: 1,
			duration: .7,
			stagger: 0.2,
		});
	
	});
}

// video-2-clippath
var video2clip = gsap.timeline({

	scrollTrigger: {
	  animation: video2clip,
	  trigger: '.has-video-ani',
	  start: "top 70%",
	  end: "top 0%",
	  toggleActions: "play none none reverse",
	  markers: false
	}
});
video2clip.fromTo(".has-video-ani" , { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",  duration:1 }, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration:1 })
video2clip.from(".has-video-ani-elm" , { top: "-100%" ,  duration:1 }, "<=.2")


// gallery-2-img
var gallery2img = gsap.timeline({
	scrollTrigger: {
	  animation: gallery2img,
	  trigger: '.pf-gallery-2-img',
	  start: "top 90%",
	  end: "top -10%",
	  scrub: 1,
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});

gallery2img.to(".pf-gallery-2-img .img-5" ,  {  opacity: 0, duration: .5 })
gallery2img.to(".pf-gallery-2-img .img-4" ,  {  opacity: 0, duration: .5 })
gallery2img.to(".pf-gallery-2-img .img-3" ,  {  opacity: 0, duration: .5 })
gallery2img.to(".pf-gallery-2-img .img-2" ,  {  opacity: 0, duration: .5 })




// about-3-sticky
if (window.matchMedia("(min-width: 768px)").matches) { 
	gsap.to(".pf-about-3-area", {
		scrollTrigger: {
		  trigger: ".pf-about-3-scroll",
		  start: "top 3%", 
		  end: 3000, 
		  pin: ".pf-about-3-area", 
		  pinSpacing: true,
		  markers: false,
		}
	});
	
	
	gsap.to(".pf-about-3-shape", {
		scrollTrigger: {
		  trigger: ".pf-about-3-scroll",
		  start: "top 3%", 
		  end: 3000, 
		  pin: ".pf-about-3-shape", 
		  pinSpacing: true,
		  markers: false,
		}
	});




	var pfAbout3shape = gsap.timeline({
		scrollTrigger: {
		  trigger: '.pf-about-3-scroll',
		  start: "top 50%", 
		  scrub: 1, // Set to true or a number for smooth scrubbing
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	  
	pfAbout3shape.to(".pf-about-3-shape .pf-sec-shape-1", { x: -500, scale:.2,  y: 500, });
	pfAbout3shape.to(".pf-about-3-shape .pf-sec-shape-2", { x: 200, scale:.2,  y: 500, }, "<");
	pfAbout3shape.to(".pf-about-3-shape .pf-sec-shape-1", { opacity: 0 });
	pfAbout3shape.to(".pf-about-3-shape .pf-sec-shape-2", { opacity: 0 }, "<");
	
	var pfServices3shape = gsap.timeline({
		scrollTrigger: {
		  trigger: '.pf-services-3-sec-title',
		  start: "top 150%", 
		  end: "top 50%", 
		  scrub: 1, // Set to true or a number for smooth scrubbing
		  toggleActions: 'play reverse play reverse',
		  markers: false,
		}
	});
	  
	pfServices3shape.from(".pf-services-3-sec-title .pf-sec-shape-1", { opacity: 0,  scale: 3,  x: -800, y: -800, });
	pfServices3shape.from(".pf-services-3-sec-title .pf-sec-shape-2", { opacity: 0,  scale: 3,  x: 800, y: -800, }, "<");
	

}



// touch-4-shape
var pfTouch4 = gsap.timeline({
	scrollTrigger: {
	  trigger: '.pf-touch-4-shape',
	  start: "top 80%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
pfTouch4.from(".pf-touch-4-shape path", { yPercent: 100, opacity: 0, rotation: 100, stagger: .2, duration: 1 });
  

// counter-4-shape
var pfCounter4 = gsap.timeline({
	scrollTrigger: {
	  trigger: '.pf-counter-4-shape',
	  start: "top 80%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
pfCounter4.from(".pf-counter-4-shape path", { xPercent: -50, opacity: 0, stagger: .2, duration: 1 });
  

// counter-4-shape
var pfCounterSecShape = gsap.timeline({
	scrollTrigger: {
	  trigger: '.pf-counter-3-sec-shape',
	  start: "top 100%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
pfCounterSecShape.from(".pf-counter-3-sec-shape .pf-sec-shape-1 img", {  rotation: 180, duration: 4, ease: "elastic.out(1,0.3)", });
pfCounterSecShape.from(".pf-counter-3-sec-shape .pf-sec-shape-2 img", {  rotation: 180, duration: 4, ease: "elastic.out(1,0.3)", },"<.5");

// counter-4-item
var pfCounterItem = gsap.timeline({
	scrollTrigger: {
	  trigger: '.pf-counter-4-item',
	  start: "top 90%",
	  end: "top 20%",
	  toggleActions: 'play reverse play reverse',
	  scrub: 1,
	  markers: false,
	}
});
pfCounterItem.from(".pf-counter-4-item .ani-item-2", { y: -80, duration: 1 });
pfCounterItem.from(".pf-counter-4-item .ani-item-3", { y: -160, duration: 1 }, "<");

// feature-4-img
var pfFeatureImg = gsap.timeline({
	scrollTrigger: {
	  trigger: '.pf-features-4-img',
	  start: "top 90%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
pfFeatureImg.from(".pf-features-4-img .img-2", { xPercent: 100, duration: .5 });
pfFeatureImg.from(".pf-features-4-img .img-1", { scale: .9, opacity: 0 , duration: .5 });
  

// touch-4-shape
var pfCta4t = gsap.timeline({
	scrollTrigger: {
	  trigger: '.pf-cta-4-shape',
	  start: "top 80%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
pfCta4t.from(".pf-cta-4-shape path", { xPercent: 100, opacity: 0, rotation: 10, stagger: .2, duration: 1 });

// services-4-shape
var pfServices4SecShape = gsap.timeline({
	scrollTrigger: {
	  trigger: '.pf-services-4-sec-shape',
	  start: "top 100%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
pfServices4SecShape.from(".pf-services-4-sec-shape .pf-sec-shape-1 img", {  rotation: 180, duration: 4, ease: "elastic.out(1,0.3)", });
pfServices4SecShape.from(".pf-services-4-sec-shape .pf-sec-shape-2 img", {  rotation: 180, duration: 4, ease: "elastic.out(1,0.3)", },"<.5");

// testimonial-4-shape
var pfCta4t = gsap.timeline({
	scrollTrigger: {
	  trigger: '.pf-testimonial-4-bg-shape',
	  start: "top 80%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
pfCta4t.from(".pf-testimonial-4-bg-shape path", { xPercent: 100, opacity: 0, rotation: -10, stagger: .2, duration: 1 });

// contact-3-timeline
var pfContact3 = gsap.timeline({
	scrollTrigger: {
	  trigger: '.pf-contact-3-img-wrap',
	  start: "top 90%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
pfContact3.from(".pf-contact-3-img .img-2" , { rotation: 180, opacity: 0, duration: 1.5,	ease: "power3.out",  })
pfContact3.from(".pf-contact-3-img .img-1" , { opacity: 0, scale: .9, duration: .5,	ease: "power3.out",  })
pfContact3.fromTo(".pf-contact-3-img-sig .sig-img" , { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",  duration:2 }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  duration:2 ,ease: "power3.out", })

// cta-5-shape
var pfCta4t = gsap.timeline({
	scrollTrigger: {
	  trigger: '.pf-cta-5-shape',
	  start: "top 80%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});
pfCta4t.from(".pf-cta-5-shape path", { xPercent: 100, opacity: 0, rotation: 15, stagger: .2, duration: 1 });
  
// footer-2-img
var footer2img = gsap.timeline({

	scrollTrigger: {
	  animation: footer2img,
	  trigger: '[pf-f2-scroll]',
	  start: "top 90%",
	  end: "top 0%",
	  scrub: .5,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
footer2img.from(".pf-footer-2-img" , { yPercent: -70 ,  duration:1 })

// footer-4-brand-name
if($(".pf-footer-4-brand-text").length) {
	var split1 = $(".pf-footer-4-brand-text");
	if(split1.length == 0) return; gsap.registerPlugin(SplitText); split1.each(function(index, el) {

		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});

		gsap.set(el, { perspective: 400 });

		if( $(el).hasClass('pf-footer-4-brand-text') ){
			gsap.set(el.split.chars, {
				y: "100",
			});
		}

		el.anim = gsap.to(el.split.chars, {
			x: "0",
			y: "0",
			opacity: 1,
			duration:1,
			ease: "elastic.out(1,0.3)",
			stagger: .3,
			delay:0.3,
			yoyo: true, 
			repeat: -1,
		});

	});
}

// counter-5-tl
var counter5tl = gsap.timeline({
	scrollTrigger: {
	  animation: counter5tl,
	  trigger: '.pf-counter-5-bottom',
	  start: "top 95%",
	  end: "top -20%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	}
});

counter5tl.from(".pf-counter-5-line" ,  {  scaleY: 0, duration: 1 })
counter5tl.from(".pf-counter-5-bottom .illus-1" ,  {  scaleY: 0, duration: .5 })
counter5tl.from(".pf-counter-5-bottom .illus-2" ,  {  scaleY: 0, duration: .5 },"<=.2")
counter5tl.from(".pf-counter-5-bottom .illus-3" ,  {  scaleY: 0, duration: .5 },"<=.2")

// counter-5-btn-tl
var counter5tl = gsap.timeline({
	scrollTrigger: {
	  animation: counter5tl,
	  trigger: '.pf-counter-5-bottom',
	  start: "top 95%",
	  end: "top 0%",
	  toggleActions: 'play reverse play reverse',
	  markers: false,
	  scrub: .5,
	}
});

counter5tl.from(".pf-counter-5-roted-btn" ,  {  top: "43%", left: "60%",  duration: 1 })

// services-6-shape
var services6shape = gsap.timeline({
	scrollTrigger: {
	  animation: services6shape,
	  trigger: '.pf-services-6-mask .bg-shape',
	  start: "top 90%",
	  end: "top 10%",
	  toggleActions: 'play none none play',
	  markers: false,
	}
});

services6shape.fromTo(".pf-services-6-mask .bg-shape" ,  {  clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", duration: 1 },{  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1 } )

// feature-5-shape
var feature5shape = gsap.timeline({
	scrollTrigger: {
	  animation: feature5shape,
	  trigger: '.pf-feature-5-sec-bg',
	  start: "top 100%",
	  end: "top 10%",
	  toggleActions: 'play none none reverse',
	  markers: false,
	}
});

feature5shape.fromTo(".pf-feature-5-sec-bg" ,  {  clipPath: "polygon(0% 20%, 100% 20%, 100% 100%, 0% 100%)", duration: 1 },{  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1 } )

// feature-5-card
if (window.matchMedia("(min-width: 1200px)").matches) {
	var feature5card = gsap.timeline({
		scrollTrigger: {
		  animation: feature5card,
		  trigger: '.pf-f5-card-up',
		  start: "top 70%",
		  end: "top 10%",
		  toggleActions: 'play none none reverse',
		  markers: false,
		  scrub: .5,
		}
	});
	
	feature5card.from(".pf-f5-card-up" ,  {  y: 80,  duration: 1 })
	feature5card.from(".pf-f5-card-down" ,  {  y: -80,  duration: 1 },"<=")
}


// ani-5
var pfAni5 = gsap.timeline({
	scrollTrigger: {
	  animation: pfAni5,
	  trigger: '.pf-ani-5-area',
	  start: "top 90%",
	  end: "top 30%",
	  toggleActions: 'play none none reverse',
	  markers: false,
	  scrub: 1,
	}
});

pfAni5.from(".pf-ani-5-shape" ,  {  yPercent: 100,  duration: 1 })


// img-parallax
gsap.utils.toArray(".wa-img-parallax").forEach(function(container) {
	let image = container.querySelector("img");

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scrub: .5,
			markers: false,
		},
	}); 
	tl.from(image, {
		yPercent: -25,
		scale: 1.1,
		ease: "none",
	}).to(image, {
		yPercent: 25,
		scale: 1.1,
		ease: "none",
	}); 
});


// scale-0-to-1
const waOpacityScale0 = gsap.utils.toArray('.wa-scale-0');
waOpacityScale0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scale: .3, opacity: 0,    }, 
	{ scale: 1, opacity: 1, delay:.3,   });
	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		end: "top 50%",
		animation: anim,
		toggleActions: 'play reverse play reverse',
		once: false,
		markers: false,
		scrub: 1.5,

	});
});

// translateY-0-to-1
const waTranslateY = gsap.utils.toArray('.wa-translateY-0');
waTranslateY.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ yPercent: 50 , opacity: 0, }, 
	{ yPercent: 0 , opacity: 1,  });

	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play reverse play reverse',
		once: false,
		markers: false,

	});
});

// testimonial-1-slider
if($('.pf-t1-active').length) {
	let slider = new Swiper('.pf-t1-active', {
		loop: true,
		spaceBetween: 32,
		speed: 500,
		slidesPerView: 3,

		autoplay: {
			delay: 5000,
		},

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


// services-2-slider
if($('.pf-s2-slider').length) {
	let swiper2 = new Swiper(".pf-s2-slider", {
		loop: false,
		grabCursor: true,
		speed: 500,
		effect: "creative",
		creativeEffect: {
			prev: {
			  shadow: false,
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


// overview-2-slider
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

// testimonial-2-slider
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

// faq-2-slider
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

// video-3-slider
if($('.pf-video-3-active').length) {
	let swiper3 = new Swiper(".pf-video-3-active", {
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
			nextEl: ".pf-video-3-next",
			prevEl: ".pf-video-3-prev",
		},

	});
}

// video-3-slider
if($('.pf-t3-slider').length) {
	let swiper3 = new Swiper(".pf-t3-slider", {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},

        pagination: {
            el: ".pf-t3-pagination",
            clickable: true,
        },


		navigation: {
			nextEl: ".pf-t3-btn-next",
			prevEl: ".pf-t3-btn-prev",
		},

	});
}



// client-5-slider
if($('.pf-c5-slider').length) {
	let slider = new Swiper('.pf-c5-slider', {
		loop: true,
		spaceBetween: 32,
		speed: 500,
		slidesPerView: 7,

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".pf-c5-next",
			prevEl: ".pf-c5-prev",
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
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
			1400: {
				slidesPerView: 6,
			},
			1600: {
				slidesPerView: 7,
			},

		},
	});
}

// services-6-slider
if($(".pf-ser-6-slider").length) {

	let pfSer55title = new Swiper(".pf-ser-6-slider", {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		allowTouchMove: true,
		navigation: {
			nextEl: ".pf-h5-btn-next",
			prevEl: ".pf-h5-btn-prev",
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
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},

		},	

	});


	var pfh5main = new Swiper(".pf-h5-slider", {
		speed: 500,
		loop: true,
		effect: "fade",
		allowTouchMove: false,
		fadeEffect: {
			crossFade: true
		},
		
			
		thumbs: {
			// swiper: pfHero5title,
		},

		navigation: {
			nextEl: ".pf-h5-btn-next",
			prevEl: ".pf-h5-btn-prev",
		},


	});

	var pfHero5preview = new Swiper(".pf-h5-preview-slider", {
		effect: "cards",
		grabCursor: true,
		loop: false,

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".pf-h5-btn-next",
			prevEl: ".pf-h5-btn-prev",
		},
	
		thumbs: {
			// swiper: pfh5main,
		},

		keyboard: {
			enabled: true, 
			onlyInViewport: true, 
		},
	});


}	


// services-6-slider
if($(".pf-ser-6-slider").length) {

	let pfSer6title = new Swiper(".pf-ser-6-slider", {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		watchSlidesProgress: true,



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
			1200: {
				slidesPerView: 3,
			},

		},	

	});

	var pfSer6img = new Swiper(".pf-ser-6-img-slider", {
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
			swiper: pfSer6title,
		},

	});

	let pfSer6disc = new Swiper(".pf-ser-6-disc", {
		loop: true,
		spaceBetween: 20,
		speed: 500,

		autoplay: {
			delay: 5000,
		},

		thumbs: {
			swiper: pfSer6title,
		},
	});


}	

// testimonial-5-slider
if($(".pf-t5-img").length) {

	let pft5img = new Swiper(".pf-t5-preview", {
		loop: true,
		spaceBetween: 24,
		speed: 500,
		watchSlidesProgress: true,



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
			1200: {
				slidesPerView: 4,
			},

		},	

	});

	let pft5preview = new Swiper(".pf-t5-img", {
		loop: true,
		spaceBetween: 20,
		speed: 500,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},

		pagination: {
            el: ".pf-t5-pagination",
            clickable: true,
        },

		autoplay: {
			delay: 5000,
		},

		
		navigation: {
			nextEl: ".pf-t5-btn-next",
			prevEl: ".pf-t5-btn-prev",
		},

		thumbs: {
			swiper: pft5img,
		},
	});


}	


// client-1-marquee
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



// about-2-text-marquee
if($('.pf-a2-slide').length) {
	$('.pf-a2-slide').marquee({
		gap: 48,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
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
	$('html, body').animate({scrollTop: 0}, 1500); 
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