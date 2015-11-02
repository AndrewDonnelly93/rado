function setPositionToWatch(watchSection, watch, largeScreen) {
  var watchSectionTopOffset = $(watchSection).parent().offset().top;
  console.log(watchSectionTopOffset);

  var watchHeight = $(watch).height();
  var nextSiblingTopOffset = $(watchSection).next().offset().top;
  console.log(nextSiblingTopOffset);
  $(document).on("scroll",function() {
    var largeScreenMatches = (window.matchMedia("screen and (min-width:" + largeScreen + "px"));
    if (largeScreenMatches.matches) {
      if (($(this).scrollTop() >= watchSectionTopOffset)
          && ($(this).scrollTop() <= (nextSiblingTopOffset - watchHeight + 300))) {
        $(watch).addClass("fixed");
      } else {
        $(watch).removeClass("fixed");
      }
    } else {
      if (($(this).scrollTop() >= watchSectionTopOffset)
          && ($(this).scrollTop() <= (nextSiblingTopOffset - watchHeight))) {
        $(watch).addClass("fixed");
      } else {
        $(watch).removeClass("fixed");
      }
    }
  });
}

$(function() {

  $(".fancybox").fancybox({
    openEffect	: 'none',
    closeEffect	: 'none'
  });

  if ($(".faq-container").length && $(".watch-image").length) {
    var watchSection = ".faq-container";
    var watch = ".watch-image";
    var largeScreen = 1903;
    setPositionToWatch(watchSection, watch, largeScreen);
    $(window).resize(function () {
      setPositionToWatch(watchSection, watch, largeScreen);
    });
  }

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});