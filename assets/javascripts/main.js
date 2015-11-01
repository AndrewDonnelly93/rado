function setPositionToWatch(watchSection, watch, largeScreen) {
  var watchSectionTopOffset = $(watchSection).offset().top;
  var nextSiblingTopOffset = $(watchSection).next().offset().top;
  $(document).on("scroll",function() {
    if (($(this).scrollTop() >= watchSectionTopOffset)
      && ($(this).scrollTop() <= nextSiblingTopOffset)) {
      var largeScreenMatches = window.matchMedia("screen and (min-width:"+largeScreen+")");
      if (largeScreenMatches.matches) {

      } else {

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

});