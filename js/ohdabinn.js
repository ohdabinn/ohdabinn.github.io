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

  /* ---------------------------------- */
  history.scrollRestoration = "manual";

  let windowHeight = $window.height();
 
  console.log('LOAD: pageIndex = ' + pageIndex);

  $html.animate({ scrollTop: pageIndex * windowHeight}, 10);
  const lastPageIndex = $('.Allpage').length;

  $html.animate({ scrollTop: 0 }, 50);

  page01();

  // 페이지 스크롤링
  window.addEventListener('wheel', function (event) {
    event.preventDefault();

    if ($html.is(':animated')) return;

    if (event.deltaY > 0) {

      if (pageIndex >= 3) {
        // 1page[0], 2page[1], 3page[2], footer[3]
        $window.scrollTop(windowHeight * 3);
      }

      if (pageIndex >= lastPageIndex) return;
      pageIndex++;

      console.log('현재 pageIndex : ' + pageIndex);

      // page Down -> pageIndex = 2page[1], 3page[2]
      switch (pageIndex) {
        case 1:
          page02();
          break;
        case 2:
          page03();
          break;
        default:
      }
    }

    else if (event.deltaY < 0) {
      if (pageIndex <= 0) return;
      pageIndex--;

      // page Up -> pageIndex = 1page[0], 2page[1]
      switch (pageIndex) {
        case 0:
          page01();
          break;
        case 1:
          page02();
          break;
        default:
      }
    };

    const posTop = windowHeight * pageIndex;
    console.log('pageIndex = %d, posTop = %d', pageIndex, posTop);
    
    $html.animate({ scrollTop: posTop });
  }, {passive: false});

  window.addEventListener('resize', function () {
    windowHeight = $window.height();
    console.log('RESIZE: windowHeight = ' + windowHeight);
    const posTop = windowHeight * pageIndex;
    // $html.animate({scrollTop: posTop}, 200);
    $html.animate({ scrollTop: 0}, 10);
  });

  // ★★ function ★★ //
  function page01 () {
    // Page_01: 동작(1)
    const circleTime = 1500;
    const lineTime = 1700;
    const faceTime = 2000;

    // orangeCircle
    window.setTimeout(function () {
      const $orangeCircle = $('<span></span>').appendTo('#p1_motion01').addClass('orangeCircle');

      const $lineTop = $('#p1_motion01 > ul > li:nth-child(2)').position().top;

      $orangeCircle.animate({
        top: $lineTop,
        width: 15,
        height: 15,
      }, circleTime)
        .fadeOut(200)
    }, 3000);

    // orangeLine
    window.setTimeout(function () {
      const $orangeLine = $('<span></span>').appendTo('#p1_motion01').addClass('orangeLine');

      const $faceTop = $('#p1_motion01 > ul > li:nth-child(3)').position().top;

      $orangeLine.animate({
        width: 1450,
      }, 1500, function () {
        $(this).animate({
          top: $faceTop,
          height: 7
        }, lineTime)
          .fadeOut(150);
      });
    }, 4500);

    // orangeFace
    window.setTimeout(function() {
      const $orangeFace = $('<span></span>').appendTo('#p1_motion01').addClass('orangeFace');

      const $navTop = $('#nav').offset().top;
      const $navHeight = $('#nav').height();
      const $navTotal = $navTop + $navHeight;

      $orangeFace.animate({
        height: $(window).height() - $navTotal + 'px'
      }, faceTime, function () {
        $(this).css({
          transitionDuration: '550ms',
          backgroundColor: '#ffffff'
          // backgroundColor는 animate가 적용되지 않으므로 animate 효과를 이요하고 싶으면 css에 객체 리터럴을 사용해서 transition을 적용한다 !
        });
      });

    }, 8000);

    // 동작(1) 요소 숨기기
    window.setTimeout(function () {
      const $p1_motion01 = $('#p1_motion01');
      $p1_motion01.css({
        opacity: 0
      });
    }, 11000)

    // Page_01: 동작(2)
    window.setTimeout(function () {
      $('#p1_motion02 > div > div:first-child > p:nth-child(1)').animate({
        top: 0,
        opacity: 1
      }, 400);
    }, 11000);

    window.setTimeout(function () {
      $('#p1_motion02 > div > div:first-child > p:nth-child(2)').animate({
        top: 0,
        opacity: 1
      }, 300);
    }, 12000);

    window.setTimeout(function () {
      $('#p1_motion02 > div > h1').animate({
        top: 0,
        opacity: 1
      }, 500);
    }, 13000);

    window.setTimeout(function () {
      $('#p1_motion02 > div > ul').animate({
        top: 0,
        opacity: 1
      }, 500);
    }, 14000);

    // Page_01: 동작(2)
    // orangeSmallCircle
    window.setTimeout(function () {
      const $orangeSmallCircle = $('<span></span>').appendTo('#p1_motion02').addClass('orangeSmallCircle');

      $orangeSmallCircle.animate({
        top: 35 + '%'
      }, 700, function () {
        $(this).animate({
          top: 47.6 + '%'
        }, 600);
      });
    }, 15000);

    // orangeThinLine
    window.setTimeout(function () {
      const $orangeThinLine = $('<span></span>').appendTo('#p1_motion02').addClass('orangeThinLine');

      $orangeThinLine.animate({
        height: 150
      }, 800);
    }, 16500);

    // orangeRectangle
    window.setTimeout(function () {
      const $orangeRectangle = $('<span></span>').appendTo('#p1_motion02').addClass('orangeRectangle');

      $orangeRectangle.animate({
        width: 200
      }, 1000);
    }, 17500);
  }
  
  // Page_02 동작
  function page02 () {
    // 옷핀 요소 추가
    const $pin = $('<span></span>').appendTo('#p2_title > div:first-child').addClass('pin');
  
    // title 하단 라인 추가
    const $titleLineLeft = $('<span></span>').appendTo('#p2_title').addClass('titleLineLeft');
  
    const $titleLineRight = $('<span></span>').appendTo('#p2_title').addClass('titleLineRight');
  
    // 중심 사진 좌+우+하단 라인 추가
    const $middleLineLeft = $('<span></span>').appendTo('#middle_contents').addClass('middleLineLeft');
  
    const $middleLineRight = $('<span></span>').appendTo('#middle_contents').addClass('middleLineRight');
  
    const $middleLineBottom = $('<span></span>').appendTo('#middle_contents').addClass('middleLineBottom');
  
    const $leftTitle = $('#title_left');
    const $rightTitle = $('#title_right');
    const $leftContents = $('.left_contents');
    const $rightContents = $('.right_contents');
  
    $('#middle_contents').on({
      mouseenter: function () {
        // left
        // 제목 : INFO
        $leftTitle.addClass('on01'),
  
        // 제목 하단 라인
        $titleLineLeft.addClass('on02'),
  
        // 하단 컨텐츠 01 (프로필 text)
        $('#left_motion_01').children(':first').addClass('on03'),
  
        // 하단 컨텐츠 02 (학력 text)
        $('#left_motion_02').children(':first').addClass('on04'),
  
        // 하단 컨텐츠 (프로필, 학력 사진)
        $leftContents.children(':nth-child(2)').addClass('on05'),
  
        // right
        // 제목 : LIST
        $rightTitle.addClass('on06'),
  
        // 제목 하단 라인
        $titleLineRight.addClass('on07'),
  
        // 하단 컨텐츠 (경력, 흥미/취미 text)
        $rightContents.children(':nth-child(2)').addClass('on08'),
  
        // 하단 컨텐츠 (경력, 흥미/취미 사진)
        $rightContents.children(':first').addClass('on09_1'),
  
        $('#right_motion_02').children(':first').addClass('on09_2'),
        // 중심 사진 주위 라인 3개
        $middleLineLeft.addClass('on10'),
  
        $middleLineRight.addClass('on11'),
  
        $middleLineBottom.addClass('on12'),
  
        // 중심 사진 변경
        // 작은 사진
        $('#middle_contents').children(':first').addClass('on13'),
  
        // 큰 사진
        $('#middle_contents').children(':nth-child(2)').addClass('on14')
      },
  
      mouseleave: function () {
        // left
        // 제목 : INFO
        $leftTitle.removeClass('on01'),
  
        // 제목 하단 라인
        $titleLineLeft.removeClass('on02'),
  
        // 하단 컨텐츠 01 (프로필 text)
        $('#left_motion_01').children(':first').removeClass('on03'),
  
        // 하단 컨텐츠 02 (학력 text)
        $('#left_motion_02').children(':first').removeClass('on04'),
  
        // 하단 컨텐츠 (프로필, 학력 사진)
        $leftContents.children(':nth-child(2)').removeClass('on05'),
  
        // right
        // 제목 : LIST
        $rightTitle.removeClass('on06'),
  
        // 제목 하단 라인
        $titleLineRight.removeClass('on07'),
  
        // 하단 컨텐츠 (경력, 흥미/취미 text)
        $rightContents.children(':nth-child(2)').removeClass('on08'),
  
        // 하단 컨텐츠 (경력, 흥미/취미 사진)
        $rightContents.children(':first').removeClass('on09_1'),
  
        $('#right_motion_02').children(':first').removeClass('on09_2'),
  
        // 중심 사진 주위 라인 3개
        $middleLineLeft.removeClass('on10'),
  
        $middleLineRight.removeClass('on11'),
  
        $middleLineBottom.removeClass('on12'),
  
         // 중심 사진 변경
        // 작은 사진
        $('#middle_contents').children(':first').removeClass('on13'),
  
        // 큰 사진
        $('#middle_contents').children(':nth-child(2)').removeClass('on14')
      }
    });
  }

  function page03 () {
    // Page_03 동작
    // 라인
    const $p3Line01 = $('<span></span>').appendTo('#p3_line').addClass('p3Line01');
    const $p3Line02 = $('<span></span>').appendTo('#p3_line').addClass('p3Line02');
    const $p3Line03 = $('<span></span>').appendTo('#p3_line').addClass('p3Line03');
    const $p3Line04 = $('<span></span>').appendTo('#p3_line').addClass('p3Line04');
    const $p3Line05 = $('<span></span>').appendTo('#p3_line').addClass('p3Line05');
    const $p3Line06 = $('<span></span>').appendTo('#p3_line').addClass('p3Line06');
    const $p3Line07 = $('<span></span>').appendTo('#p3_line').addClass('p3Line07');
    const $p3Line08 = $('<span></span>').appendTo('#p3_line').addClass('p3Line08');
    const $p3Line09 = $('<span></span>').appendTo('#p3_line').addClass('p3Line09');
  
    window.setTimeout(function () {
      $p3Line01.addClass('p3Line_on01')
  
      $p3Line09.addClass('p3Line_on09')
    }, 850);
  
    window.setTimeout(function () {
      $p3Line02.addClass('p3Line_on02')
  
      $p3Line05.addClass('p3Line_on05')
    }, 1300) ;
  
    window.setTimeout(function () {
      $p3Line03.addClass('p3Line_on03')
  
      $p3Line04.addClass('p3Line_on04')
    }, 1750);
  
    window.setTimeout(function () {
      $p3Line08.addClass('p3Line_on08')
    }, 2200);
  
    window.setTimeout(function () {
      $p3Line07.addClass('p3Line_on07')
    }, 2650);
  
    window.setTimeout(function () {
      $p3Line06.addClass('p3Line_on06')
    }, 3100);
  
    // 폴라로이드 움직임
    const $polarPhoto = $('#polar_photo');
    
    window.setTimeout(function polarPhoto01() {
      $polarPhoto.children(':nth-child(1)').animate({
        top: 250,
      }, 700, function () {
        $(this).animate({
          top: 230,
        }, 1000, polarPhoto01())
      });
    }, 600);
  
    window.setTimeout(function polarPhoto02() {
      $polarPhoto.children(':nth-child(2)').animate({
        top: 30,
      }, 900, function () {
        $(this).animate({
          top: 10,
        }, 1200, polarPhoto02())
      });
    }, 650)
  
    
    window.setTimeout(function polarPhoto03() {
      $polarPhoto.children(':nth-child(3)').animate({
        top: 170,
      }, 1000, function () {
        $(this).animate({
          top: 150,
        }, 1200, polarPhoto03())
      });
    }, 700)
  
    window.setTimeout(function polarPhoto04() {
      $polarPhoto.children(':nth-child(4)').animate({
        top: 230,
      }, 900, function () {
        $(this).animate({
          top: 210,
        }, 1200, polarPhoto04())
      });
    }, 650)
  
    window.setTimeout(function polarPhoto05() {
      $polarPhoto.children(':nth-child(5)').animate({
        top: 90,
      }, 700, function () {
        $(this).animate({
          top: 70,
        }, 1000, polarPhoto05())
      });
    }, 600)
  
    // 하단 우측 텍스트 움직임
    window.setTimeout(function () {
      $('#p3_contents_02').animate({
        right: 150,
        opacity: 0
      }, 1000, function () {
        $('#p3_contents_02_motion').animate({
          right: 18 + '%',
          opacity: 1
        }, 1400)
      });
    }, 5500);
  }
});