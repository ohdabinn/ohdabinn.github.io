$(function () {
  const $html = $('html');
  const $window = $(window);
  let pageIndex = 0;
  let isScrolling = false;
  let windowHeight = $window.height();

  const $sections = $('.Allpage');
  const lastPageIndex = $sections.length - 1;

  // 스크롤 위치 복원 방지
  history.scrollRestoration = 'manual';
  $html.scrollTop(0);

  // 페이지 리사이즈 시 높이 재설정
  $window.on('resize', function () {
    windowHeight = $window.height();
    $html.scrollTop(pageIndex * windowHeight);
  });

  // 스크롤 컨트롤
  window.addEventListener('wheel', function (event) {
    if (isScrolling) return;
    event.preventDefault();

    isScrolling = true;
    const delta = event.deltaY;

    if (delta > 0 && pageIndex < lastPageIndex) {
      pageIndex++;
    } else if (delta < 0 && pageIndex > 0) {
      pageIndex--;
    }

    $html.stop().animate({
      scrollTop: pageIndex * windowHeight
    }, 800, function () {
      isScrolling = false;
      runPageAnimation(pageIndex);
    });
  }, { passive: false });

  // 키보드 스크롤 방지
  $(document).on('keydown', function (event) {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
    }
  });

  // 초기 진입 시 첫 애니메이션 실행
  runPageAnimation(0);

  // 페이지별 애니메이션 함수
  function runPageAnimation(index) {
    switch (index) {
      case 0:
        page01();
        break;
      case 1:
        page02();
        break;
      case 2:
        page03();
        break;
      case 3:
        page04();
        break;
      case 4:
        page05();
        break;
      default:
        break;
    }
  }

  // 페이지별 애니메이션은 그대로 유지
  function page01 () {
    isScrolling = true;
    // clock 이미지 및 텍스트 애니메이션 그대로 복사
    setTimeout(() => isScrolling = false, 4200);
  }

  function page02 () {
    isScrolling = true;
    // 텍스트 스플릿 애니메이션 유지
    setTimeout(() => isScrolling = false, 5000);
  }

  function page03 () {
    isScrolling = true;
    // 기술 스킬 도넛 그래프 애니메이션 유지
    setTimeout(() => isScrolling = false, 5000);
  }

  function page04 () {
    isScrolling = true;
    // 이미지 리스트, 선 애니메이션 등 유지
    setTimeout(() => isScrolling = false, 3000);
  }

  function page05 () {
    isScrolling = false;
    // SWOT 등 마지막 페이지 처리 (필요 시 작성)
  }
});
