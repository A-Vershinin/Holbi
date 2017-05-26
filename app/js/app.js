    'use strict';

document.addEventListener('DOMContentLoaded', function dom() {
  (function() { //область видимости
    // js-status
    function nojsreplace() {
      // if (document.documentElement.html.className == "no-js") {
      //   document.body.classList.remove("no-js");
      // }
      // console.log(document.documentElement);
    }
    nojsreplace();

    selectForm();
    function selectForm() {
      $(".select").on("click",".select__title", function () {
        var parent = $(this).closest(".select");
        if (!parent.hasClass("is-open")) {
          parent.addClass("is-open");
          $(".select.is-open").not(parent).removeClass("is-open");
        } else {
          parent.removeClass("is-open");
        }
      }).on("click","ul>li",function() {
        var parent = $(this).closest(".select");
        parent.removeClass("is-open").find(".select__title").text($(this).text());
        parent.find("input[type=hidden]").attr("value", $(this).attr("data-value"));
      });
    }

    // function toggleMenu() {
    //   var menuHam = $(".menu__hamburger");
    //   var menu = $(".menu__list");
    //   var action = $(".header__action");
    //   menuHam.on("click", function(e) {
    //     menuHam.toggleClass("is-active");
    //     menu.toggleClass("menu__list--mobile");
    //     action.toggleClass("header__action--mobile");
    //   });
    // }
    // toggleMenu();

  })();
});
