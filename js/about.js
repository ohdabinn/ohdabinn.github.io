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
  $(".mark").on('click', function(){
    $html.animate({ scrollTop: 0 }, 500 );
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
  
      if (pageIndex >= 5) {
        $window.scrollTop(windowHeight * 5);
      }
  
      if (pageIndex >= lastPageIndex) return;
      pageIndex++;
  
      console.log(pageIndex);
  
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
  // page_01
  function page01 () {
    console.log('page01 도착 !')
    $('#p1_container_01 > div > h4').delay(500).animate({
      left: 715,
      opacity: 1
    }, 800, function() {
      $('#skillList').children(':first').delay(700).animate({
        opacity: 1
      }, 500, function () {
        $('#skillList').children(':nth-child(2)').delay(700).animate({
          opacity: 1
        }, 500, function () {
          $('#skillList').children(':nth-child(3)').delay(700).animate({
            opacity: 1
          }, 500)
        });
      })
    })
  }

  function page02 () {
    console.log('page02 도착 !')
    // page_02(1)
    // 1. 흩어져 있는 글씨로 보여주기
    // HTML Markup text 가져옴
    $('html, body').animate({}, )
    let textTotal = $('#p2_preContainer > div > h2').text();
    console.log(textTotal);

    // 배열에 넣어둔 text 하나씩 가져오기
    let textEach = textTotal.split("");
    console.log(textEach.length);

    // 가져온 text를 span 요소로 추가하기
    for(let i = 0; i < textEach.length; i++) {
      $(`<span>${(textEach[i])}</span>`).addClass('spanStyle').appendTo('.new');
    };

    // 처음 나타날 [top, left]
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
    console.log($new);
    console.log($new.children('span'));
    console.log(textEach.length);

    for (let i = 0; i < textEach.length; i++) {
      // console.log(i, 'letterPos =', letterPos[i]);
      $new.children('span').eq(i).css(letterPos[i]);
    };

    // 2. 원래 위치로 이동하기
    // 이동할 원래 위치 [top, left]
    const orignLetterPosLeft = [425, 458, 491, 524, 559, 593.5, 609, 642, 674, 0, 702, 739, 771, 787, 802, 817, 864, 900, 943, 976, 1000, 1022, 1037, 1058.5, 1074, 1107, 1139, 1160, 1193];

    for(let i = 0; i < textEach.length; i++) {
      $new.children('span').eq(i).animate({
        top: 372,
        left: orignLetterPosLeft[i]
      }, 2000, function () {
        $new.children('span').css({ opacity: 0 })
        $('#p2_preContainer > div > h2').css({ opacity: 1 });
      })
    }

    // 3. 컬러 상자 요소 추가
    $('<span></span>').addClass('longBoxLeft').prependTo('#p2_preContainer');
    $('<span></span>').addClass('longBoxRight').prependTo('#p2_preContainer');

    // 4. 컬러 상자 사이즈 변경
    $('.longBoxLeft').delay(1600).animate({ height: 425 }, 1500, function () {
        $(this).delay(600).animate({ height: 0 }, 1400 );
        $('#h2_text').children('h2:nth-child(1)').delay(600).animate({ top: -500, opacity: 0 }, 1550)
    });

    $('.longBoxRight').delay(1600).animate({ height: 425 }, 1500, function () {
        console.log('.logBoxRight 높이 0으로 설정');
        $(this).delay(600).animate({ height: 0 }, 1400);
        console.log('오른쪽 글씨 사라짐');
        $('#h2_text').children('h2:nth-child(3)').delay(600).animate({ bottom: -500, opacity: 0 }, 1550,
          /* page_02(2) */ moveNextPage01());
    });
  
    // < 다음 페이지로 이동 함수 >
    function moveNextPage01 () {
      console.log('다음 페이지로 이동');
      var offset=$(".scrollPage01").offset();
      $('html, body').delay(2000).animate({ scrollTop:offset.top }, 800, slideElement());
    }

    // < 양쪽에서 요소 밀려 들어오는 움직임 함수 >
    function slideElement () {
      console.log('좌우 컨텐츠 나타남');
      $('.left').delay(2800).animate({ left: 0, opacity: 1 }, 1000);
      $('.right').delay(2800).animate({ right: 0, opacity: 1 }, 1000, function () { colorCircleCreate() });
    }

    // < 색 채워지는 동그라미 함수 >
    function colorCircleCreate () {
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
      
      for(let i = 0; i <= 8; i++) {
        console.log('포토샵 동그라미 추가')
        $('<span></span>').addClass('Pon').appendTo('#photoshop > div');
      }

      $('<span></span>').addClass('non').appendTo('#photoshop > div');

      // → illustrator (10/0)
      for(let i = 0; i <= 9; i++) {
        $('<span></span>').addClass('Aon').appendTo('#illustrator > div');
      }

      // → indesign (4/6)
      for(let i = 0; i <= 3; i++) {
        $('<span></span>').addClass('Ion').appendTo('#indesign > div');
      }
      
      for(let i = 0; i <= 5; i++) {
        $('<span></span>').addClass('non').appendTo('#indesign > div');
      }

      // → powerpoint (8/2)
      for(let i = 0; i <= 7; i++) {
        $('<span></span>').addClass('PWon').appendTo('#powerpoint > div');
      }

      for(let i = 0; i <= 1; i++) {
        $('<span></span>').addClass('non').appendTo('#powerpoint > div');
      }

      // → excel (6/4)
      for(let i = 0; i <= 5; i++) {
        $('<span></span>').addClass('Eon').appendTo('#excel > div');
      }

      for(let i = 0; i <= 3; i++) {
        $('<span></span>').addClass('non').appendTo('#excel > div');
      }

      // → word (5/5)
      for(let i = 0; i <= 4; i++) {
        $('<span></span>').addClass('Won').appendTo('#word > div');
      }

      for(let i = 0; i <= 4; i++) {
        $('<span></span>').addClass('non').appendTo('#word > div');
      }

      // → premiere, after effects(3/7)
      for(let i = 0; i <= 2; i++) {
        $('<span></span>').addClass('PAon').appendTo('#premEffects > div');
      }

      for(let i = 0; i <= 6; i++) {
        $('<span></span>').addClass('non').appendTo('#premEffects > div');
      }

      // → html, css (5/3)
      for(let i = 0; i <= 2; i++) {
        $('<span></span>').addClass('non').appendTo('#htmlCss > div');
      }
      for(let i = 0; i <= 4; i++) {
        $('<span></span>').addClass('Webon').appendTo('#htmlCss > div');
      }

      // → javascript, jquery (4/4)
      for(let i = 0; i <= 3; i++) {
        $('<span></span>').addClass('non').appendTo('#javascriptJquery > div');
      }
      for(let i = 0; i <= 3; i++) {
        $('<span></span>').addClass('Webon').appendTo('#javascriptJquery > div');
      }
      
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
      for(let i = 0; i < number; i++) {
        $photoshop.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1));
      }

      // → illustrator 동작
      for(let i = 0; i < number; i++) {
        $illustrator.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1));
      }

      // → indesign 동작
      for(let i = 0; i < number; i++) {
        $indesign.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1));
      }

      // → powerpoint 동작
      for(let i = 0; i < number; i++) {
        $powerpoint.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1));
      }

      // → excel 동작
      for(let i = 0; i < number; i++) {
        $excel.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1));
      }

      // → word 동작
      for(let i = 0; i < number; i++) {
        $word.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1));
      }

      // → premEffects 동작
      for(let i = 0; i < number; i++) {
        $premEffects.eq(i).delay((i+1) * timeDelay).animate({ opacity: 1 }, time * (i+1));
      }

      // → htmlCss 동작
      for(let i = 0; i < number; i++) {
        $htmlCss.eq(i).delay((i) * timeDelay).animate({ opacity: 1 }, time * (i+1));
      }


      // → javascriptJquery 동작
      for(let i = 0; i < 9; i++) {
        $javascriptJquery.eq(i).delay((i) * timeDelay).animate({ opacity: 1 }, time * (i+1));
      }
    }
  }
  
  function page03 () {
    console.log('page03 도착 !')
    // page_03(1)
    const $p3LeftLine = $('<span></span>').addClass('p3LeftLine').appendTo('.page03Start');
    const $p3RightLine = $('<span></span>').addClass('p3RightLine').appendTo('.page03Start');

    const $imageList = $('#p3_motion_01 > ul');
    const $smallText = $('#p3_motion_01 > ul > li > h4');
    
    // 좌우 라인 나타남
    $p3LeftLine.animate({ width: 615 }, 1400);
    $p3RightLine.animate({ width: 657}, 1400, function () {
      // 글자 좌우로 벌어짐
      $imageList.delay(400).animate({ gap: 60 }, 600);
      // 작은 글자 나타남
      $smallText.delay(400).animate({ opacity: 1 }, 600);
      // 좌우 라인 짧아짐
      $p3LeftLine.delay(400).animate({ width: 556 }, 600);
      $(this).delay(400).animate({ width: 597}, 500, moveNextPage02 ());
    });

    // < 다음 페이지로 이동 함수 >
    function moveNextPage02 () {
      console.log('다음 페이지로 이동');
      var offset=$(".scrollPage02").offset();
      $('html, body').delay(2000).animate({ scrollTop:offset.top }, 800);
    }
  }
  
});