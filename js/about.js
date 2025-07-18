$(function () {

  let isScrolling = false;

  // 키보드 스크롤 이동 동작 제어
  $(document).keydown(function(event){
    if(event.keyCode == 38 || event.keyCode == 40){
      // console.log(event);
      event.preventDefault();
    }
  });

  // 마우스 컨트롤 제어
  $(document).ready(function(){
    control_mouse();
  });

  function control_mouse(){
    // 마우스 우 클릭 금지
    // $(document).bind("contextmenu", function(e){return false;});
    // 드래그 클릭 금지
    $(document).bind('selectstart', function() {return false;});
  }

  const $html = $('html');
  const $window = $(window);
  let pageIndex = 0;
  // pageIndex = 0, 1, 2, 3, 4, 5

  // 페이지 최상단으로 이동하는 버튼 (우측 하단 느낌표 gif)
  const $mark = $('<a href="#"></a>').appendTo('#nav').addClass('mark');

  $mark.on('click', function(){
    pageIndex = 0;
    $html.animate({ scrollTop: 0 }, 400 );
    return false;
  });

  /* ---------------------------------- */
  // 새로고침 했을 때, 기존 스크롤 위치를 기억하지 않는다.
  history.scrollRestoration = "manual";

  // 브라우저 창의 높이
  let windowHeight = $window.height();

  console.log('LOAD: pageIndex = ' + pageIndex);

  $html.animate({ scrollTop: pageIndex * windowHeight}, 10);
  const lastPageIndex = $('.Allpage').length;

  // 최상단으로 이동
  $html.animate({ scrollTop: 0 }, 50);

  // page01(첫페이지)의 동작 실행
  page01();

  // 페이지 스크롤링
  window.addEventListener('wheel', function (event) {
    event.preventDefault();

    if (isScrolling) return;
    if ($html.is(':animated')) return;

    // 스크롤 중에는 함수 작동을 멈춤
    if ($html.is(':animated')) return;

    if (event.deltaY > 0) {
      console.log('scroll down')

      if (pageIndex >= 6) {
        // 1page[0], ★2page[1], 3page[2], ★4page[3], 5page[4], footer[5]
        $window.scrollTop(windowHeight * 6);
      }

      if (pageIndex >= lastPageIndex) return;
      pageIndex++;

      console.log('현재 pageIndex : ' + pageIndex);

      // page Down -> pageIndex = 2page[1], 3page[2], 4page[3], 5page[4]
      switch (pageIndex) {
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
      }
    }

    // page Up -> pageIndex = 1page[0], 3page[2],
    else if (event.deltaY < 0) {
      console.log('scroll up')
      if (pageIndex <= 0) return;
      pageIndex--;

      switch (pageIndex) {
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
  // page_01 -> pageIndex [0]
  function page01 () {

    isScrolling = true;

    // 시계 요소 생성성
    for(let i = 1; i <= 8; i++) {
      $(`<img src="images/02_About_Images01_clock0${[i]}.png" alt="clock_image">`).addClass(`clock0${[i]}`).appendTo('#p1_container_01');
    };
    
    $('.clock01').animate({ opacity: 1 }, 300);
    $('.clock02').delay(500).animate({ opacity: 1 }, 300);
    $('.clock03').delay(1000).animate({ opacity: 1 }, 300);
    $('.clock04').delay(1500).animate({ opacity: 1 }, 300);
    $('.clock05').delay(2000).animate({ opacity: 1 }, 300);
    $('.clock06').delay(2500).animate({ opacity: 1 }, 300);
    $('.clock07').delay(3000).animate({ opacity: 1 }, 300);
    $('.clock08').delay(3500).animate({ opacity: 1 }, 300);
  
    // 글자 움직임
    $('#p1_container_01 > div > h4').delay(500).animate({
      left: 715,
      opacity: 1
      }, 800);

    // Technical Skills
    $('#skillList').children(':nth-child(1)').delay(1500).animate({
        opacity: 1
      }, 700);
    
    // Certificates
    $('#skillList').children(':nth-child(2)').delay(2200).animate({
        opacity: 1
      }, 700);

    // SWOT
    $('#skillList').children(':nth-child(3)').delay(2900).animate({
        opacity: 1
      }, 700, function () {isScrolling = false;});

    setTimeout(() => {
      isScrolling = false;
    }, 7000)
  }

  // page_02 -> pageIndex [1]
  function page02 () {

    isScrolling = true;

    // page_02(1)
    // HTML Markup text 가져옴
    let textTotal = $('#p2_preContainer > div > h2').text();

    // 배열에 넣어둔 text 하나씩 가져오기
    let textEach = textTotal.split("");

    // 가져온 text를 span 요소로 DOM 추가
    for(let i = 0; i < textEach.length; i++) {
      $(`<span>${(textEach[i])}</span>`).addClass('spanStyle').appendTo('.new');
    };

    // 처음 나타날 text의 [top, left]
    const letterPos = [
      /* T */ { top: 10, left: 0 }, 
      /* e */ { top: 400, left: 100 }, 
      /* c */ { top: 700, left: 250 }, 
      /* h */ { top: 350, left: 1200 }, 
      /* n */ { top: 420, left: 600 }, 
      /* i */ { top: 580, left: 20}, 
      /* c */ { top: 150, left: 700 }, 
      /* a */ { top: 150, left: 200 }, 
      /* l */ { top: 50, left: 400 }, 
      /*   */ { top: 0, left: 0 }, 

      /* S */ { top: 330, left: 320 }, 
      /* k */ { top: 500, left: 1350}, 
      /* i */ { top: 80, left: 1320 }, 
      /* l */ { top: 450, left: 700 }, 
      /* l */ { top: 650, left: 1430}, 
      /* s */ { top: 40, left: 850}, 

      /* / */ { top: 220, left: 1500}, 
      
      /* C */ { top: 700, left: 1200}, 
      /* e */ { top: 230, left: 500 }, 
      /* r */ { top: 20, left: 1100}, 
      /* t */ { top: 100, left: 1610}, 
      /* i */ { top: 450, left: 975 }, 
      /* f */ { top: 550, left: 400 }, 
      /* i */ { top: 730, left: 1600 }, 
      /* c */ { top: 200, left: 1000 }, 
      /* a */ { top: 730, left: 600 }, 
      /* t */ { top: 600, left: 800 }, 
      /* e */ { top: 400, left: 1550 }, 
      /* s */ { top: 600, left: 1050 }
    ];

    const $new = $('.new');

    // 흩어져 있는 글씨 화면에 보여주기
    for (let i = 0; i < textEach.length; i++) {
      console.log('letterPos =', letterPos[i]);
      $new.children('span').eq(i).css(letterPos[i]);
    };

    // 중심 이동 text 위치 [left]
    const orignLetterPosLeft = [425, 458, 491, 524, 559, 593.5, 609, 642, 674, 0, 702, 739, 771, 787, 802, 817, 864, 900, 943, 976, 1000, 1022, 1037, 1058.5, 1074, 1107, 1139, 1160, 1193];

    // 중심으로 text 이동
    for(let i = 0; i < textEach.length; i++) {
      $new.children('span').eq(i).animate({
        top: 372,
        left: orignLetterPosLeft[i]
      }, 2000, function () {
        // JavaScript에서 추가한 글씨 없애기
        $new.children('span').css({ opacity: 0 })

        // HTML Markup에 있는 글씨 나타나기
        $('#p2_preContainer > div > h2').css({ opacity: 1 });
      });
    }

    // 컬러 상자 요소 DOM 추가
    $('<span></span>').addClass('longBoxLeft').prependTo('#p2_preContainer');
    $('<span></span>').addClass('longBoxRight').prependTo('#p2_preContainer');

    // 컬러 상자 사이즈 변경
    $('.longBoxLeft').delay(2000).animate({ height: 425 }, 1500)
      .delay(500)
      .animate({ height: 0 }, 1400);

    $('.longBoxRight').delay(2000).animate({ height: 425 }, 1500)
      .delay(500)
      .animate({ height: 0 }, 1400);
    
    $('#h2_text').children('h2:nth-child(1)').delay(4000).animate({ top: -500, opacity: 0 }, 1600);

    $('#h2_text').children('h2:nth-child(3)').delay(4000).animate({ bottom: -500, opacity: 0 }, 1600), function () { isScrolling = false;
    };

    setTimeout(() => {
      isScrolling = false;
    }, 8000);
  }

  // page_03 -> pageIndex [2]
  function page03 () {

    isScrolling = true;

    // <양쪽에서 요소 밀려 들어오는 움직임
    // console.log('좌우 컨텐츠 나타남');
    $('.left').animate({ left: 0, opacity: 1 }, 1000);
    $('.right').animate({ right: 0, opacity: 1 }, 1000 );

    // 동그라미 요소 추가
    $('<div></div>').addClass('boxFlex').appendTo('#photoshop');
    $('<div></div>').addClass('boxFlex').appendTo('#illustrator');
    $('<div></div>').addClass('boxFlex').appendTo('#indesign');
    $('<div></div>').addClass('boxFlex').appendTo('#powerpoint');
    $('<div></div>').addClass('boxFlex').appendTo('#excel');
    $('<div></div>').addClass('boxFlex').appendTo('#word');
    $('<div></div>').addClass('boxFlex').appendTo('#premEffects');
    $('<div></div>').addClass('boxFlex').appendTo('#htmlCss');
    $('<div></div>').addClass('boxFlex').appendTo('#javascriptJquery');
      
    // → photoshop (9/1)
    for(let i = 0; i <= 8; i++) { $('<span></span>').addClass('Pon').appendTo('#photoshop > div'); };
    $('<span></span>').addClass('non').appendTo('#photoshop > div');

    // → illustrator (10/0)
    for(let i = 0; i <= 9; i++) { $('<span></span>').addClass('Aon').appendTo('#illustrator > div'); };

    // → indesign (4/6)
    for(let i = 0; i <= 3; i++) { $('<span></span>').addClass('Ion').appendTo('#indesign > div'); };
    for(let i = 0; i <= 5; i++) { $('<span></span>').addClass('non').appendTo('#indesign > div'); };

    // → powerpoint (8/2)
    for(let i = 0; i <= 7; i++) { $('<span></span>').addClass('PWon').appendTo('#powerpoint > div'); };
    for(let i = 0; i <= 1; i++) { $('<span></span>').addClass('non').appendTo('#powerpoint > div'); };

    // → excel (6/4)
    for(let i = 0; i <= 5; i++) { $('<span></span>').addClass('Eon').appendTo('#excel > div'); };
    for(let i = 0; i <= 3; i++) { $('<span></span>').addClass('non').appendTo('#excel > div'); };

    // → word (5/5)
    for(let i = 0; i <= 4; i++) { $('<span></span>').addClass('Won').appendTo('#word > div'); };
    for(let i = 0; i <= 4; i++) { $('<span></span>').addClass('non').appendTo('#word > div'); };

    // → premiere, after effects(3/7)
    for(let i = 0; i <= 2; i++) { $('<span></span>').addClass('PAon').appendTo('#premEffects > div'); };
    for(let i = 0; i <= 6; i++) { $('<span></span>').addClass('non').appendTo('#premEffects > div'); };

    // → html, css (5/3)
    for(let i = 0; i <= 2; i++) { $('<span></span>').addClass('non').appendTo('#htmlCss > div'); };
    for(let i = 0; i <= 4; i++) { $('<span></span>').addClass('Webon').appendTo('#htmlCss > div'); };

    // → javascript, jquery (4/4)
    for(let i = 0; i <= 3; i++) { $('<span></span>').addClass('non').appendTo('#javascriptJquery > div'); };
    for(let i = 0; i <= 3; i++) { $('<span></span>').addClass('Webon').appendTo('#javascriptJquery > div'); };
      
    // 동그라미 동작
    const time = 400;
    const timeDelay = 170;
    const number = 11;

    const $photoshop = $('#photoshop > div > span');
    const $illustrator = $('#illustrator > div > span');
    const $indesign = $('#indesign > div > span');
    const $powerpoint = $('#powerpoint > div > span');
    const $excel = $('#excel > div > span');
    const $word = $('#word > div > span');
    const $premEffects = $('#premEffects > div > span');
    const $htmlCss = $('#htmlCss > div > span');
    const $javascriptJquery = $('#javascriptJquery > div > span');

    // → photoshop 동작
    for(let i = 0; i < number; i++) { $photoshop.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1)); };

    // → illustrator 동작
    for(let i = 0; i < number; i++) { $illustrator.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1)); };

    // → indesign 동작
    for(let i = 0; i < number; i++) { $indesign.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1)); };

    // → powerpoint 동작
    for(let i = 0; i < number; i++) { $powerpoint.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1)); };

    // → excel 동작
    for(let i = 0; i < number; i++) { $excel.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1)); };

    // → word 동작
    for(let i = 0; i < number; i++) { $word.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1)); };

    // → premEffects 동작
    for(let i = 0; i < number; i++) { $premEffects.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1)); };

    // → htmlCss 동작
    for(let i = 0; i < number; i++) { $htmlCss.eq(i).delay((i) * timeDelay).animate({ opacity: 1 }, time * (i+1)); };

    // → javascriptJquery 동작
    for(let i = 0; i < 9; i++) { $javascriptJquery.eq(i).delay((i) * timeDelay).animate({ opacity: 1 }, time * (i+1));};

    setTimeout(() => {
      isScrolling = false;
    }, 8000);
  }

  // page_04 -> pageIndex [3]
  function page04 () {

    isScrolling = true;

    // console.log('page03 도착 !')
    // page_03(1)
    const $p3LeftLine = $('<span></span>').addClass('p3LeftLine').appendTo('.page03Start');
    const $p3RightLine = $('<span></span>').addClass('p3RightLine').appendTo('.page03Start');

    const $imageList = $('#p3_motion_01 > ul');
    const $smallText = $('#p3_motion_01 > ul > li > h4');
    
    // 좌우 라인 나타남 / 줄어듬
    $p3LeftLine.delay(100).animate({ width: 590 }, 1400)
    .delay(200)
    .animate({ width: 530 }, 500);

    $p3RightLine.delay(100).animate({ width: 620}, 1400)
    .delay(200)
    .animate({ width: 560 }, 500);
    
    // 글자 좌우로 벌어짐
    $imageList.delay(1700).animate({ gap: 60 }, 700);
      
    // 작은 글자 나타남
    $smallText.delay(1700).animate({ opacity: 1 }, 700, function () {isScrolling = false});

    setTimeout(() => {
      isScrolling = false;
    }, 8000);
  }

  // page05 (SWOT) -> pageIndex [4]
  function page05 () {}
  // Page06 (footer) -> pageIndex [5]
});