(function ($) {
	"use strict";

    jQuery(document).ready(function($){
       
 /*---------- menu js start---------*/  
     $('.stellarnav').stellarNav({
				theme: 'dark',
				breakpoint: 660,
				position: 'static',
				phoneBtn: false,
				locationBtn: false,
				sticky:false,
				showArrows:true,
				openingSpeed: 500,
				closingDelay: 500,
               
         });
        
        window.onscroll = function() {myFunction()};

			var header = document.getElementById("myHeader");
			var sticky = header.offsetTop;

			function myFunction() {
			  if (window.pageYOffset > sticky) {
			    header.classList.add("sticky");
			  } else {
			    header.classList.remove("sticky");
			  }
			}
        
/*---------- menu js End---------*/  


	     $(".home-slide-list").owlCarousel({
    	    loop:true,
    		dots:true,
    		nav:true,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            autoplayHoverPause: true,
    		margin:30,
    		autoplay:true,
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 2,
			  },
			  768: {
				items: 1,
			  },
			  1000: {
				items: 1,
			  }
			}

    	})

	     $(".testmonial-list").owlCarousel({
    	    loop:true,
    		dots:true,
    		nav:false,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            autoplayHoverPause: true,
    		margin:30,
    		autoplay:true,
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 2,
			  },
			  768: {
				items: 3,
			  },
			  1000: {
				items: 3,
			  }
			}

    	})
        

	     $(".portfolio-list").owlCarousel({
    	    loop:true,
    		dots:true,
    		nav:false,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            autoplayHoverPause: true,
    		margin:20,
    		autoplay:true,
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 2,
			  },
			  768: {
				items: 3,
			  },
			  1000: {
				items: 5,
			  }
			}

    	})
        

	     $(".latest-list").owlCarousel({
    	    loop:true,
    		dots:true,
    		nav:false,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            autoplayHoverPause: true,
    		margin:15,
    		autoplay:true,
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 2,
			  },
			  768: {
				items: 3,
			  },
			  1000: {
				items: 3,
			  }
			}

    	})
        


		
        $('.video-popup').magnificPopup({
            type: 'iframe'
          });
      


        $(window).scroll(function(){
		        if ($(this).scrollTop() > 100) {
		            $('.scrollToTop').fadeIn();
		        } else {
		            $('.scrollToTop').fadeOut();
		        }
		    });

		    //Click event to scroll to top
		    $('.scrollToTop').on('click', function(){
		        $('html, body').animate({scrollTop : 0},800);
		        return false;
		    });
        
//        

    });

//
//    jQuery(window).load(function(){
////        jQuery(".page-loader").fadeOut(1000);
//    });


}(jQuery));	