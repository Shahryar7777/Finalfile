
$(function(){

	//js for nav icon 
	var clickMenubtn = $('#nav-icon1');
	clickMenubtn.on('click', function(){
		$(this).toggleClass('open');
	});
	//js for tabs
	var tabsClick = $('.tabs .tab-links a, .tab-links-2 a, .tab-links-3 a');
	var multiItem = $('.slick-multiItem');
	var multiItem2 = $('.slick-multiItem2');
	tabsClick.on('click', function(e)  {
		var currentAttrValue = $(this).attr('href');
		var tabsCurrent = $('.tabs ' + currentAttrValue);
		// Show/Hide Tabs
		tabsCurrent.show().siblings().hide();
		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
		//reset position for tabs
		multiItem.slick('setPosition');
		multiItem2.slick('setPosition');
	});
	// js for time count down
	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	}
	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  if( clock != null){
		var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');
		var updateClock = function() {
	    var t = getTimeRemaining(endtime);

	    daysSpan.innerHTML = t.days;
	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }
	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	  }
	}
	var deadline = new Date(Date.parse(new Date()) + 25 * 24 * 60 * 60 * 1000);
	initializeClock('clockdiv', deadline);

	//js for twitter
	var tweets = jQuery(".tweet");
	jQuery(tweets).each( function( t, tweet ) { 
    var id = jQuery(this).attr('id');
    twttr.widgets.createTweet(
      id, tweet, 
      {
        conversation : 'none',    // or all
        cards        : 'hidden',  // or visible 
        linkColor    : 'default', // default is blue
        theme        : 'light'    // or dark
      });
    }); 

	//slider for movie and tv show home 2
	multiItem2.slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: false,
		// autoplay: true ,
		// autoplaySpeed: 2000,
		dots: true,
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	//slider movie and tv show home 1, 3
	multiItem.slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		draggable:true,
		// autoplay: true,
		// autoplaySpeed: 2000,
		dots: true,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	//main slider home 1
	var multiItemSlider = $('.slick-multiItemSlider');
	multiItemSlider.slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		draggable:true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	//slider for home v3 and home v2, twitter slider home 1, 2
	var singleItem = $('.slider-single-item');
	singleItem.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		// autoplay: true,
		// autoplaySpeed: 2000,
		dots: true,
		draggable:true,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true,
	        arrows: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	      }
	    }
	  ]
	});

	//for home v3
	var slidefor = $('.slider-for');
	var slidenav = $('.slider-nav');
	slidefor.slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav',
	});
	slidenav.slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  // centerMode: true,
	  focusOnSelect: true,

	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        arrows: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: true
	      }
	    }
	  ]
	});
	//for trailer v1 and 2
	var slidefor2 = $('.slider-for-2');
	var slidenav2 = $('.slider-nav-2');
	slidefor2.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav-2',
	});
	slidenav2.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for-2',
		dots: false,
		arrows: true,
		// centerMode: true,
		focusOnSelect: true,
		vertical: true,
		// autoplay: true,
		// autoplaySpeed: 2000
	});




});
