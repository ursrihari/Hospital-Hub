$(function() {
    'use strict'; // Start of use strict

    /*----------------------------
    Brand Slider
    ---------------------------- */
	$('.brand-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoWidth:true,
        autoplay:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
        });		        
    
	  /*----------------------------
    Near Doctors Slider
    ---------------------------- */
	$('.near-doctors-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoWidth:true,
        autoplay:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
        });		  
});
