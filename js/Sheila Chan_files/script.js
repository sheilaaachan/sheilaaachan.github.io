$(document).ready(function(){
	// Lazy Load
  // $("img.lazy").lazyload();
 //  $("img.lazy").lazyload({         
 //    effect : "fadeIn"
	// });



	$(function() {
    $("img.lazy").lazyload({
        event : "bam"
    });
	});

	$('.project-nav-link').bind("click", function() {
	    $("img.lazy").trigger("bam");
	});

  // Smooth Scroll
  $('#content-grid a').smoothScroll();
  $('.project-nav-link-contain a').smoothScroll();


    // var pla1 = $('#pla-1-banner').unslider({dots: true});
    // $('.unslider-arrow').click(function() {
    //     var fn = this.className.split(' ')[1];
    //     //  Either do unslider.data('unslider').next() or .prev() depending on the className
    //     pla1.data('unslider')[fn]();
    // });

	
    

	// Hover Shit
	$('#myname').hover(function(){
		$('#title-h').stop().toggle();
 		$('#title-ghetto').stop().toggle();
	});
	$('ul#content-grid li').hover(
		function(){	
			$('#init-'+this.id).css('margin-top','2%');
		}, function(){
			$('#init-'+this.id).css('margin-top','0s%');
		});

	$('ul.project-nav-link-contain li').not('.ext-link').click(function(){
		$('.project-nav-link').not(this).removeClass('selected');
		$('.project-content').not('#'+this.id+'-content').hide();
		$('.'+this.id.substring(0,3)+'-placeholder').hide();
		$(this).toggleClass('selected');
		$('#'+this.id+'-content').toggle();
	});

	$('#pla .banner').hover(function(){
		

	});

	$('#title-arrow').hover(
		function(){
			$('#title-arrow01').css('-webkit-animation','pulse 1.5s infinite');
			$('#title-arrow02').css('-webkit-animation','pulse 1.5s infinite');
			$('#title-arrow02').css('-webkit-animation-delay','0.2s');
		}, function(){
			$('#title-arrow01').css('-webkit-animation-play-state','paused');
			$('#title-arrow02').css('-webkit-animation-play-state','paused');
		});

	$('#ribbon').hover(function(){
		$('#ribbon').width(60);
		$('#ribbon-text').width(70);
	}, function(){
		$('#ribbon').width(0);
		$('#ribbon-text').width(10);
		})



	// .click(function(){
	// 	$(this).css('overflow','scroll');
	// });

	// $('h1.heading').click(function(){
	// 	$('.project-heading-image').fadeToggle('slow');
	// 	console.log("hello");
	// });


	$('.banner').bind('mousewheel DOMMouseScroll', function(e) {
	    var scrollTo = null;

	    if (e.type == 'mousewheel') {
	        scrollTo = (e.originalEvent.wheelDelta * -1);
	    }
	    else if (e.type == 'DOMMouseScroll') {
	        scrollTo = 40 * e.originalEvent.detail;
	    }

	    if (scrollTo) {
	        e.preventDefault();
	        $(this).scrollTop(scrollTo + $(this).scrollTop());
	    }
	});



// hover over fixed image (img/superman.png) to see more info on project
	// function isScrolledIntoView(elem){
 //    var docViewTop = $(window).scrollTop();
 //    var docViewBottom = docViewTop + $(window).height();

 //    var elemTop = $(elem).offset().top;
 //    var elemBottom = elemTop + $(elem).height();

 //    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	// }

	// if (isScrolledIntoView($('section.project'))){
	// 	$('img.hover-img').stop().fadeIn(500);
	// };

});