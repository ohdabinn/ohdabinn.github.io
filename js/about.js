$(function () {
  // Page_01 이미지 슬라이드
  const INTERVAL = 4000;
  const DURATION = 700;

  const $p1_imageList = $('#p1_imageSlide > ul');

  window.setInterval(function() {
    $p1_imageList.css({transitionDuration: `${DURATION}ms`, marginLeft: '-100%'});

    window.setTimeout(function() {
      $p1_imageList.removeAttr('stlye').children(':first').appendTo($p1_imageList);
    },DURATION);
    
  }, INTERVAL);

});