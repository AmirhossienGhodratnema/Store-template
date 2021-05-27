'use strict'




// Slider One
$('#myCarousel').on('slide.bs.carousel', function () {
    // do something…
  })


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:60,
    responsiveClass:true,
    items : 5,
    rtl: true,
    nav :true,
    dots : false, 
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{

          items:3,
          nav:false,
          center : true,
          nav :false,
          dots : false,
          margin:20,
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
    // stagePadding : 100,
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


