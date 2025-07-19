$(function () {
  // 키보드 스크롤 이동 동작 제어
  $(document).keydown(function(event){
    if(event.keyCode == 38 || event.keyCode == 40){
      console.log(event);
      event.preventDefault();
    }
  });

  // 마우스 컨트롤 제어
  $(document).ready(function(){
    control_mouse();
  });

  function control_mouse(){
    // 마우스 우 클릭 금지
    $(document).bind("contextmenu", function(e){return false;});
    // 드래그 클릭 금지
    $(document).bind('selectstart', function() {return false;});
  }

  const $html = $('html');
  const $window = $(window);
  let pageIndex = 0;

  // 페이지 최상단으로 이동하는 버튼
  const $mark = $('<a href="#"></a>').appendTo('#nav').addClass('mark');

  $mark.on('click', function(){
    pageIndex = 0;
    $html.animate({ scrollTop: 0 }, 400 );
    return false;
  });

  // 폴더 누르면 다음 페이지로 이동
  $('#folder_total').on('click', function () {
      const targetOffset = $('#page02').offset().top;
      $('html, body').animate({
        scrollTop: targetOffset
      }, 800);
    });
});