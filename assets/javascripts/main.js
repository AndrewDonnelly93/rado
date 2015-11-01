function setPositionToWatch(watchSection, watch) {
  var watchSectionTopOffset = $(watchSection).parent().offset().top;
  console.log($(watchSection).next());
  var watchHeight = $(watch).height();
  var nextSiblingTopOffset = $(watchSection).next().offset().top;
  $(document).on("scroll",function() {
    if (($(this).scrollTop() >= watchSectionTopOffset)
      && ($(this).scrollTop() <= (nextSiblingTopOffset - watchHeight))) {
      $(watch).addClass("fixed");
    } else {
      $(watch).removeClass("fixed");
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
    setPositionToWatch(watchSection, watch);
    $(window).resize(function () {
      setPositionToWatch(watchSection, watch);
    });
  }

});