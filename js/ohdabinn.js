$(function () {
  // Page_01: 동작(1)
  const circleTime = 1500;
  const lineTime = 1700;
  const faceTime = 2000;

  // orangeCircle
  window.setTimeout(function () {
    const $orangeCircle = $('<span></span>').appendTo('#p1_motion01').addClass('orangeCircle');

    const lineTop = $('#p1_motion01 > ul > li:nth-child(2)').position().top;

    $orangeCircle.animate({
      top: lineTop,
      width: 15,
      height: 15,
    }, circleTime)
      .fadeOut(200);
  }, 3000);

  // orangeLine
  window.setTimeout(function () {
    const $orangeLine = $('<span></span>').appendTo('#p1_motion01').addClass('orangeLine');

    const faceTop = $('#p1_motion01 > ul > li:nth-child(3)').position().top;

    $orangeLine.animate({
      width: 1450,
    }, 1500);

    $orangeLine.animate({
      top: faceTop,
      height: 7
    }, lineTime)
    .fadeOut(150);
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

  // 동작(1) 요소 지우기
  window.setTimeout(function () {
    const $p1_motion01 = $('#p1_motion01');
    $p1_motion01.remove();
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
    const $orangeCircle = $('<span></span>').appendTo('#p1_motion02').addClass('orangeSmallCircle');

    $orangeCircle.animate({
      top: 35 + '%'
    }, 700);

    $orangeCircle.delay(300).animate({
      top: 47.6 + '%'
    }, 600);
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

  // Page_02 동작
  
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

  $('#p2_contents').on({
    mouseenter: function () {
      // left
      $leftTitle.css({
        left: -420,
        transitionDuration: 400 + 'ms'
      }),

      $titleLineLeft.css({
        width: 0,
        transitionDuration: 400 + 'ms'
      }),

      $('#left_motion_01').children(':first').css({
        left: -145,
        textAlign: 'left',
        transitionDuration: 500 + 'ms'
      }),

      $('#left_motion_02').children(':first').css({
        left: -50,
        textAlign: 'left',
        transitionDuration: 500 + 'ms'
      }),

      $leftContents.children(':nth-child(2)').css({
        opacity: 0,
        transitionDuration: 650 + 'ms'
      }),

      // right
      $rightTitle.css({
        right: -420,
        transitionDuration: 400 + 'ms'
      }),

      $titleLineRight.css({
        width: 0,
        transitionDuration: 400 + 'ms'
      }),

      $rightContents.children(':nth-child(2)').css({
        right: -100 + 'px',
        textAlign: 'right',
        transitionDuration: 500 + 'ms'
      }),

      $rightContents.children(':first').css({
        opacity: 0,
        transitionDuration: 650 + 'ms'
      })

      $('#right_motion_02').children(':first').css({
        opacity: 0,
        transitionDuration: 650 + 'ms'
      }),

      // 중심 사진 주위 라인 3개
      $middleLineLeft.css({
        top: -230,
        left: -100,
        height: 750,
        transitionDuration: 300 + 'ms',
      }),

      $middleLineRight.css({
        top: -230,
        right: -100,
        height: 750,
        transitionDuration: 300 + 'ms'
      }),

      $middleLineBottom.css({
        opacity: 0
      }),

      // 중심 사진 변경
      $('#middle_contents').children(':first').css({
        opacity: 0,
        transitionDuration: 1200 + 'ms'
      });

      $('#middle_contents').children(':nth-child(2)').css({
        opacity: 1,
        transitionDuration: 1500 + 'ms'
      });
    },

    mouseleave: function () {
      // left
      $leftTitle.css({
        left: 0,
        transitionDuration: 400 + 'ms'
      }),
      
      $titleLineLeft.css({
        width: 700,
        transitionDuration: 400 + 'ms'
      }),

      $('#left_motion_01').children(':first').css({
        left: 0,
        textAlign: 'right',
        transitionDuration: 500 + 'ms'
      }),

      $('#left_motion_02').children(':first').css({
        left: 0,
        textAlign: 'right',
        transitionDuration: 500 + 'ms'
      }),

      $leftContents.children(':nth-child(2)').css({
        opacity: 1,
        transitionDuration: 650 + 'ms'
      }),

      // right
      $rightTitle.css({
        right: 0,
        transitionDuration: 300 + 'ms'
      }),

      $titleLineRight.css({
        width: 700,
        transitionDuration: 300 + 'ms'
      }),

      $rightContents.children(':nth-child(2)').css({
        right: 0,
        textAlign: 'left',
        transitionDuration: 500 + 'ms'
      }),

      $rightContents.children(':first').css({
        opacity: 1,
        transitionDuration: 650 + 'ms'
      }),

      $('#right_motion_02').children(':first').css({
        opacity: 1,
        transitionDuration: 650 + 'ms'
      }),

      // 중심 사진 주위 라인 3개
      $middleLineLeft.css({
        top: 8,
        left: 59,
        height: 500,
        transitionDuration: 300 + 'ms'
      }),

      $middleLineRight.css({
        top: 8,
        right: 60,
        height: 500,
        transitionDuration: 300 + 'ms'
      }),

      $middleLineBottom.css({
        opacity: 1
      }),

      // 중심 사진 변경
      $('#middle_contents').children(':first').css({
        opacity: 1,
        transitionDuration: 900 + 'ms'
      });

      $('#middle_contents').children(':nth-child(2)').css({
        opacity: 0,
        transitionDuration: 500 + 'ms'
      });
    }
  });

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
    $p3Line01.css({
      width: 180,
      transitionDuration: 500 + 'ms'
    });

    $p3Line09.css({
      height: 140,
      transitionDuration: 450 + 'ms'
    });
  }, 1000);

  window.setTimeout(function () {
    $p3Line02.css({
      height: 378,
      transitionDuration: 450 + 'ms'
    });

    $p3Line05.css({
      width: 1121,
      transitionDuration: 2000 + 'ms'
    });
  }, 1450) ;

  window.setTimeout(function () {
    $p3Line03.css({
      width: 250,
      transitionDuration: 800 + 'ms'
    });

    $p3Line04.css({
      height: 181,
      transitionDuration: 800 + 'ms'
    });
  }, 1900);

  window.setTimeout(function () {
    $p3Line08.css({
      width: 80,
      transitionDuration: 800 + 'ms'
    });
  }, 2500);

  window.setTimeout(function () {
    $p3Line07.css({
      height: 299,
      transitionDuration: 900 + 'ms'
    });
  }, 3000);

  window.setTimeout(function () {
    $p3Line06.css({
      width: 276,
      transitionDuration: 900 + 'ms'
    });
  }, 3700);



  // 폴라로이드 움직임
  // const $polarPhoto = $('#polar_photo');

  // window.setTimeout(function () {
  //   $polarPhoto.children(':nth-child(1)').css({
  //     opacity: 1,
  //     transitionDuration: 1000 + 'ms'
  //   });
  // }, 1000);

  // window.setTimeout(function () {
  //   $polarPhoto.children(':nth-child(2)').css({
  //     opacity: 1,
  //     transitionDuration: 1000 + 'ms'
  //   });
  // }, 2000);

  // window.setTimeout(function () {
  //   $polarPhoto.children(':nth-child(3)').css({
  //     opacity: 1,
  //     transitionDuration: 1000 + 'ms'
  //   });
  // }, 3000);

  // window.setTimeout(function () {
  //   $polarPhoto.children(':nth-child(4)').css({
  //     opacity: 1,
  //     transitionDuration: 1000 + 'ms'
  //   });
  // }, 4000);

  // window.setTimeout(function () {
  //   $polarPhoto.children(':nth-child(5)').css({
  //     opacity: 1,
  //     transitionDuration: 1000 + 'ms'
  //   });
  // }, 5000);

});