/*
  [JS Index]
  
  ---
  
  Author:  ex-nihilo
*/

/*
  1. preloader
  2. fadeIn.element
  3. navigation
    3.1. page scroll
    3.2. highlight navigation
    3.3. close mobile menu
    3.4. highlight navigation
    3.5. collapse navigation
  4. to top arrow animation
  5. home fadeOut animation
  6. slick slider
    6.1. slick auto
    6.2. slick must haves
    6.3. slick benefits
  7. facts counter
  8. skills bar
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
    });
	
    // 3. navigation
    // 3.1. page scroll
    $(".page-scroll").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 55
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
    // 3.2. highlight navigation
   
    // 3.3. close mobile menu
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
    // 3.4. highlight navigation
    $(".link-underline-menu").on("click", function() {
        $(".link-underline-menu").removeClass("active");
        $(this).addClass("active");
    });
    $(window).on("scroll", function() {
        // 3.5. collapse navigation
        if ($(".navbar").offset().top > 50) {
            $(".navbar-bg-switch").addClass("main-navigation-bg");
        } else {
            $(".navbar-bg-switch").removeClass("main-navigation-bg");
        }
		
     
		
     // 5. home fadeOut animation
     $("h1.home-page-title, h2.home-page-title, .the-button, .the-button-light").css("opacity", 1 - $(window).scrollTop() / 500);
    });
	

  
	
	
});