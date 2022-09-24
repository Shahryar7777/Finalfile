(function ($) {
  


    
    /*--
        Movie Slider
    --------------------------------------------*/
    var movieSlider = $('.movie-slider-active');
    movieSlider.slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="bx bx-chevron-left" ></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bx bx-chevron-right"></i> </i></button>',
        responsive: [
            {
                breakpoint: 1365,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    var movieSlider = $('.movie-slider-active2');
    movieSlider.slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="bx bx-chevron-left" ></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bx bx-chevron-right"></i> </i></button>',
        responsive: [
          
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    

    
        /*--
            Hero Slider
        --------------------------------------------*/
        var heroSlider2 = $('.hero-slider-four , .series-slider-active ');
        heroSlider2.slick({
            
            arrows: true,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"><i class="bx bx-chevron-left"></i> </button>',
            nextArrow: '<button type="button" class="slick-next"><i class="bx bx-chevron-right"></i></button>',
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    dots: false,
                  }
                }
            ]
        });
    
      

        var heroSlider2 = $('.hero-slider-five , .series-slider-active ');
        heroSlider2.slick({
            
            arrows: true,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"> .</button>',
            nextArrow: '<button type="button" class="slick-next">.</i></button>',
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    dots: false,
                  }
                }
            ]
        });
    
      
    

    


})(jQuery);	



