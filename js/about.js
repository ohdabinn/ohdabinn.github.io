$(function () {
  
   // 페이지 최상단으로 이동하는 버튼
   const $mark = $('<a href="#"></a>').appendTo('#nav').addClass('mark');

   $(".mark").on('click', function(){
     $html.animate({ scrollTop: 0 }, 500 );
     return false;
   });

  //page_01
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

  //page_02_동작 (1) → #p2_preContainer
  // 1. 글자 흩뿌리기
  // -> 랜덤으로 top과 left 값을 구한다.
  // -> 랜덤으로 구한 값을 이용해서 배치 후
  // -> 본인 위치로 올 수 있도록 animate를 설정한다.

  /*
  // HTML Markup text 가져오기
  let text = $('#p2_preContainer > div > h2').text();
  console.log("HTML markup text : " + text);

  // 배열에 넣어둔 text 하나씩 가져오기
  let textArr = text.split("");
  // let word = textArr[0];
  console.log("배열에 넣어둔 text[0] : " + textArr[0]);
  console.log("글씨 개수 : " + textArr.length);

  // 기존 글자 <div>위치 값 구하기
  const PositionTop = $('#p2_preContainer > div').offset().top;
  console.log("글자 상자 상단 위치 : " + PositionTop);

  const PositionLeft = $('#p2_preContainer > div').offset().left;
  console.log("글자 상자 좌측 위치 : " + PositionLeft);

  const divWidth = $('#p2_preContainer > div').width();
  console.log("글자 상자 너비 : " + divWidth);

  const nWidth = divWidth / text.length;
  console.log("글자 상자 너비 / 글자 개수 : " + nWidth);

  // 가져온 text를 span 요소로 추가하기
  for(let i = 0; i < textArr.length; i++) {
    $(`<span>${(textArr[i])}</span>`).addClass('spanStyle').appendTo('.new');
  }

  // < 랜덤으로 위치값 구하기 >
  // ↓ 가로, 세로 값의 최소/최대 값 구하기
  let min = 0;
  let maxHeight = $('#p2_preContainer').height();
  let maxWidth = $('#p2_preContainer').width();

  // ↓ 가로, 세로 랜덤 값 구하기
  let $heightPositionNumber = Math.floor(Math.random() * (maxHeight - min + 1)) + min;
  let $widthPositionNumber = Math.floor(Math.random() * (maxWidth - min + 1)) + min;
  
  console.log($heightPositionNumber);
  console.log($widthPositionNumber);
  */

  // HTML Markup text 가져오기
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
    /* l */ { top: 350, left: 800 }, 
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
    console.log(i, 'letterPos =', letterPos[i]);
    $new.children('span').eq(i).css(letterPos[i]);
  };

  // 이동할 원래 위치치 [top, left]
  const orignLetterPosLeft = [425, 458, 491, 524, 559, 593.5, 609, 642, 674, 0, 702, 739, 771, 787, 802, 817, 864, 900, 943, 976, 1000, 1022, 1037, 1058.5, 1074, 1107, 1139, 1160, 1193];

  for(let i = 0; i < textEach.length; i++) {
    $new.children('span').eq(i).animate({
      top: 372,
      left: orignLetterPosLeft[i]
    }, 1500, function () {
      $(this).css({ opacity: 0 })
    });
  }

  /*
  // 쌤이 알려주신 방법
  // HTML Markup text 가져오기
  let textTotal = $('#p2_preContainer > div > h2 > span').text();
5
  // 배열에 넣어둔 text 하나씩 가져오기
  let textEach = textTotal.split("");

  console.log(textTotal);

  console.log(textEach.length);

  // 가져온 text를 span 요소로 추가하기
  for(let i = 0; i < textEach.length; i++) {
    $(`<span>${(textEach[i])}</span>`).addClass('spanStyle').appendTo('.new')
  };

  const $texteach = $('.new');

  // 기준으로 삼는 .new(container)을 나눠서 좌표 잡기
  const widthDot = $texteach.width() / 7;
  console.log(widthDot);
  const heightDot = $texteach.height() / 6;
  console.log(`widthDot : ${widthDot}, heightDot: ${heightDot}`);

  console.log($texteach.children('span').length)

  const min = -50;
  const max = 50;

  for(let i = 0; i < 7; i++) {
    for(let j = 0; j < 6; j++) {
      const x = Math.random() * (max - min) + min;
      const y = Math.random() * (max - min) + min;

      $texteach.children('span').eq((i * 5) + j).css({
        top: widthDot * (j + 1) + x ,
        left: heightDot * (i + 1) + y
      })
    }
  };
  */

  // 2. 글자 상자
  /* $('<span></span>').addClass('longBoxLeft').prependTo('#p2_preContainer');
  $('<span></span>').addClass('longBoxRight').prependTo('#p2_preContainer');

  $('.longBoxLeft').animate({
    height: 425
  }, 1000);

  $('.longBoxRight').animate({
    height: 425
  }, 1000); */



  //page_02_동작 (2) → #p2_container
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
  const time = 300;
  const timeDelay = 160;
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
  
});