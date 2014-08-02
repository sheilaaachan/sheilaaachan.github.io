$(document).ready(function(){

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

});