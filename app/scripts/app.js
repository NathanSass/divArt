(function (window, undefined) {
  'use strict';
  
  function changePage(e) {
    e.preventDefault();
    var $currentPage = $(".current-page");
    var navIndex = parseInt(e.target.id, 10) - 1;
    var $requestedArticle = $('article')[navIndex];
    if ( ($currentPage[0] !== $requestedArticle) ) { // Not same page
      $('.nav-sphere').removeClass('nav-focus');
      $(e.target).addClass('nav-focus');

      $currentPage.fadeOut(300, function(){
        $currentPage.removeClass('current-page').removeAttr("style");
        $($requestedArticle).fadeIn(300, function() {
          $($requestedArticle).addClass('current-page').removeAttr("style");
        });

      });
    }
  }

  
  $('nav').on('click', '.nav-sphere', changePage);
})(window);
