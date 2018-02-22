"use strict";

(function($) {
  $(document).ready(function() {
    $(".nav-bar").on("click", ".nav-bar__item1:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".content__info1")
        .find(".info1")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);
