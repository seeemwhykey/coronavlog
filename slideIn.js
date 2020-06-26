$(document).ready(function () {
  

  // Check which of the elements with this class is visible on the page
  $('.js-slidein').each(function (i) {
    console.log(i);
    
    var bottomObject = $(this).offset().left;
    var bottomWindow = $(window).scrollLeft() + $(window).width();

    if (bottomWindow > bottomObject) {
      $(this).removeClass('js-slidein');
    }
  });
  $('.js-slideinTop').each(function (i) {
    console.log(i);
    
    var bottomObject = $(this).offset().left;
    var bottomWindow = $(window).scrollLeft() + $(window).width();

    if (bottomWindow > bottomObject) {
      $(this).removeClass('js-slideinTop');
    }
  });

  // Trigger the slide-in effect on scroll
  $(window).scroll(function () {
    $('.js-slidein').each(function (i) {
      var bottomObject = $(this).offset().left + $(this).outerWidth() / 3;
      var bottomWindow = $(window).scrollLeft() + $(window).width();

      if (bottomWindow > bottomObject) {
        $(this).addClass('js-slidein-visible');
      }
    });
  });
  $(window).scroll(function () {
    $('.js-slideinTop').each(function (i) {
      var bottomObject = $(this).offset().left + $(this).outerWidth() / 3;
      var bottomWindow = $(window).scrollLeft() + $(window).width();

      if (bottomWindow > bottomObject) {
        $(this).addClass('js-slidein-visible');
      }
    });
  });
});
