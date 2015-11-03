function setPositionToWatch(watchSection, watch, largeScreen) {
  var watchSectionTopOffset = $(watchSection).parent(".faq").offset().top;
  console.log(watchSectionTopOffset);
  var watchSectionHeight = $(watchSection).innerHeight();
  var headerHeight =  $("header").innerHeight();
  var watchHeight = $(watch).height();
  var nextSiblingTopOffset = $(watchSection).next().offset().top;
  console.log( watchSectionHeight);
  $(document).on("scroll",function() {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
    if (($(this).scrollTop() >= watchSectionTopOffset - 2 * headerHeight)
      && ($(this).scrollTop() <= nextSiblingTopOffset)) {
      if ($(this).scrollTop() <= (nextSiblingTopOffset - watchHeight + headerHeight)) {
        $(watch).addClass("fixed").removeClass("absolute").css("top",headerHeight);
      } else {
        $(watch).removeClass("fixed").addClass("absolute").css("top","");
      }
    } else {
        $(watch).removeClass("fixed").removeClass("absolute").css("top","");
    }
  });
}

function openWatchGallery () {
  $(".watch-gallery").find("a").on("click",function(e) {
    var picRef = "url(../assets/"+ $(this).find("img").data("image") + ")";
    $(this).parents(".watch-gallery").find("li").removeClass("active");
    $(this).parents("li").addClass("active");
    $(this).parents(".order-watch").find(".watch-pic").css("background-image",picRef);
    e.preventDefault();
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

  if ($(".watch-gallery").length && $(".watch-pic").length) {
    var gallery = ".watch-gallery";
    var watchPic = ".watch-pic";
    openWatchGallery();
  }

});