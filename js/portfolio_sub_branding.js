$(function () {

  let isScrolling = false;

  // 키보드 방향키 스크롤 막기
  $(document).keydown(function(event){
    if(event.keyCode == 38 || event.keyCode == 40){
      event.preventDefault();
    }
  });

  // 마우스 우클릭/드래그 방지
  function control_mouse(){
    // $(document).bind("contextmenu", function(e){return false;}); // 우클릭 금지 (필요 시 주석 해제)
    $(document).bind('selectstart', function() {return false;}); // 드래그 금지
  }
  $(document).ready(function(){
    control_mouse();
  });

  
  const $html = $('html, body'); // 크로스 브라우징 위해 body도 포함
  const $window = $(window);
  let pageIndex = 0;
  let windowHeight = $window.height();

  // 각 페이지 수 계산 (page01, page02... 클래스가 .container 안에 있어야 함)
  const lastPageIndex = $('.page').length;

  // 새로고침 시 기존 위치 기억 안하게 설정
  history.scrollRestoration = "manual";

  // 우측 하단 버튼 생성 및 nav에 추가
  const $mark = $('<a href="#"></a>').appendTo('#nav').addClass('mark');

  // 버튼 클릭 시 최상단으로 이동
  $mark.on('click', function(){
    pageIndex = 0;
    $html.animate({ scrollTop: 0 }, 400 );
    return false;
  });

  // 페이지 진입 시 처음 위치로 이동
  $html.animate({ scrollTop: 0 }, 50);

  // 초기 페이지 동작
  page01();

  // 휠 스크롤 이벤트
  window.addEventListener('wheel', function (event) {
    event.preventDefault();
    if (isScrolling) return;
    isScrolling = true;

    // 방향 판단
    if (event.deltaY > 0 && pageIndex < lastPageIndex - 1) {
      pageIndex++;
    } else if (event.deltaY < 0 && pageIndex > 0) {
      pageIndex--;
    }

    const posTop = windowHeight * pageIndex;

    $html.animate({ scrollTop: posTop }, 700, function () {
      isScrolling = false; // 스크롤 완료 후 다시 허용
    });

    // 페이지별 실행 함수
    switch (pageIndex) {
      case 0: page01(); break;
      case 1: page02(); break;
      case 2: page03(); break;
      case 3: page04(); break;
    }

  }, { passive: false });

  // 창 크기 변경 시 다시 위치 계산
  $window.on('resize', function () {
    windowHeight = $window.height();
    const posTop = windowHeight * pageIndex;
    $html.animate({ scrollTop: posTop }, 200);
  });

  function page01(){};
  function page02(){};
  function page03(){};
  function page04(){};
});