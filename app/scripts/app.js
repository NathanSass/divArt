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

  function byte2Hex(n) {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }

  function RGB2Color(r,g,b) {
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  }

  function colorText(str,phase) {
    if (phase == undefined) phase = 0;
    center = 128;
    width = 127;
    frequency = Math.PI*2/str.length;
    for (var i = 0; i < str.length; ++i) {
       red   = Math.sin(frequency*i+2+phase) * width + center;
       green = Math.sin(frequency*i+0+phase) * width + center;
       blue  = Math.sin(frequency*i+4+phase) * width + center;
       return RGB2Color(red,green,blue);
    }
  }

  
  $('nav').on('click', '.nav-sphere', changePage);
})(window);
