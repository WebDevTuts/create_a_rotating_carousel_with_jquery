// JavaScript Document

$(document).ready(function() {

  $('.carousel_data .carousel_item').each(function() {

    $('#carousel').append( $(this).find('.image').html() )

  });

  createCarousel();

});

function createCarousel() {

  $('div#carousel').roundabout({
    childSelector: 'img',
    tilt: -4.5,
    minOpacity: 1,
    minScale: .45,
    duration: 1200
  });

}