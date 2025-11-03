// Screen refresh after window resize

jQuery(function ($) {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(window).resize(function () {
    if (
      windowWidth != $(window).width() ||
      windowHeight != $(window).height()
    ) {
      location.reload();
      return;
    }
  });
});
