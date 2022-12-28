
(function($){
	'use strict';

//code start


$('span i').on('click', function(){
	$('.main-section-2'). slideToggle ();
});


$('.item-3 i').on ('click',function(){
	$('.section-2'). fadeOut ();
	$(this).hide();
});


$('.fa-chevron-left').on('click',function(){
	$('.read-our-section-blog-6').slideToggle();
});


$('.fa-chevron-right').on('click',function(){
	$('.read-our-section-blog-7').slideToggle();
	

});


$('span i').on('click', function(){
	$('.hader-section-2').slideToggle();
});


// water ripple
$('.section').ripples();


// isotope

$(document).ready(function ($) {
setTimeout(function(){ 
          // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
});
     }, 1000);
});

// owl-carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// wow js




var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();




}) (jQuery);