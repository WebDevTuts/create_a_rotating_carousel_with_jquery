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
    duration: 1200,
    clickToFocus: true,
    clickToFocusCallback: showCaption
  });

  createCustomButtons();

}

function createCustomButtons() {

  $('.nextItem').click(function() {
    $('div#carousel').roundabout('animateToNextChild');
  });
  $('.prevItem').click(function() {
    $('div#carousel').roundabout('animateToPreviousChild');
  });

}

function showCaption() {

  var childInFocus = $('div#carousel').data('roundabout').childInFocus;
  var setCaption = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();

  $('#captions').html(setCaption);
}