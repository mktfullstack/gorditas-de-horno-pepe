(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

		// Mean Menu
		jQuery('.mean-menu').meanmenu({ 
			meanScreenWidth: "991"
		});

		// Preloader
		jQuery(window).on('load', function() {
            $('.preloader').fadeOut();
		});

		// Nice Select JS
        $('select').niceSelect();
		
		// Header Sticky
        $(window).on('scroll', function() {
            if ($(this).scrollTop() >150){  
                $('.navbar').addClass("is-sticky");
            }
            else{
                $('.navbar').removeClass("is-sticky");
            }
        });
        
        // Menu List Wrap
		$('.menu-list-wrap').owlCarousel({
			loop:true,
			nav:true,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			center: false,
			dots: false,
			smartSpeed:1500,
			navText: [
				"<i class='flaticon-left-arrow'></i>",
				"<i class='flaticon-right-arrow'></i>",
			],
			responsive:{
				0:{
					items:1
				},
				576:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});

        // Talented Wrap
		$('.talented-wrap').owlCarousel({
			loop:true,
			nav:true,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 30,
			center: true,
			dots: false,
			smartSpeed:1500,
			navText: [
				"<i class='flaticon-left-arrow'></i>",
				"<i class='flaticon-right-arrow'></i>",
			],
			responsive:{
				0:{
					items:1
				},
				576:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});

        // Feedback Slides
		$('.feedback-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			autoHeight: true,
			autoplayHoverPause: true,
            autoplay: true,
            mouseDrag: true,
			animateOut: 'fadeOut',
			items: 1,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
				"<i class='flaticon-right-arrow'></i>",
            ],
        });
		
		// Go to Top
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').addClass('active');
			if (scrolled < 300) $('.go-top').removeClass('active');
		});  

		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});

		// FAQ Accordion
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});
		
		// Count Time 
        function makeTimer() {
            var endTime = new Date("november  30, 2020 17:00:00 PDT");			
            var endTime = (Date.parse(endTime)) / 1000;
            var now = new Date();
            var now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");
        }
		setInterval(function() { makeTimer(); }, 300);
		
		// Input Plus & Minus Number JS
        $('.input-counter').each(function() {
            var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');
            
            btnUp.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
		});

		// Date Picker
		$('#datetimepicker2').datepicker({
			weekStart: 0,
			todayBtn: "linked",
			language: "es",
			orientation: "bottom auto",
			keyboardNavigation: false,
			autoclose: true
		});

		// Popup Image
		$('a[data-imagelightbox="popup-btn"]')
		.imageLightbox({
			activity: true,
			overlay: true,
			button: true,
			arrows: true
		});

		// Popup Video
        $('a[data-imagelightbox="video"]').imageLightbox({
            activity: true,
            overlay: true,
            button: true,
		});
		
		// Odometer 
		$('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// HOME TWO JS

		// Hero Slider
		$('.hero-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			mouseDrag: false,
			items:1,
			dots: false,
			autoHeight: true,
			autoplay: true,
			smartSpeed:1500,
			autoplayHoverPause: true,
			navText: [
				"<i class='flaticon-left-arrow'></i>",
				"<i class='flaticon-right-arrow'></i>",
			],
		});

		// Feedback Wrap
		$('.feedback-wrap').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			mouseDrag: false,
			items:1,
			dots: false,
			autoplay: true,
			smartSpeed:1500,
			autoplayHoverPause: true,
			navText: [
				"<i class='flaticon-left-arrow'></i>",
				"<i class='flaticon-right-arrow'></i>",
			],
		});

		//Slider Text Animation
		$(".hero-slider-area").on("translate.owl.carousel", function(){
            $(".hero-slider-text span, .hero-slider-text h1, .hero-slider-text .typewrite").removeClass("animated fadeInUp").css("opacity", "0");
            $(".hero-slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".hero-slider-text a").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".hero-slider-area").on("translated.owl.carousel", function(){
            $(".hero-slider-text span, .hero-slider-text h1, .hero-slider-text .typewrite").addClass("animated fadeInUp").css("opacity", "1");
            $(".hero-slider-text p").addClass("animated fadeInDown").css("opacity", "1");
            $(".hero-slider-text a").addClass("animated fadeInDown").css("opacity", "1");
		});

		// Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
			// handle the invalid form...
				formErrorSub();
				submitMSGSub(false, "Please enter your email correctly.");
			} else {
				// everything looks good!
				event.preventDefault();
			}
		});
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Thank you for subscribing!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		function submitMSGSub(valid, msg){
			if(valid){
				var msgClasses = "validation-success";
			} else {
				var msgClasses = "validation-danger";
			}
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}
		
		// AJAX MailChimp
		$(".newsletter-form").ajaxChimp({
			url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
			callback: callbackFunction
        });
	});
})(jQuery);


  