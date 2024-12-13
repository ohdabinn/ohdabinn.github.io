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

  //page_02
  // photoshop
  $('<div></div>').appendTo('#photoshop').addClass('boxFlex');
  $('<div></div>').appendTo('#illustrator').addClass('boxFlex');
  $('<div></div>').appendTo('#indesign').addClass('boxFlex');
  $('<div></div>').appendTo('#powerpoint').addClass('boxFlex');
  $('<div></div>').appendTo('#excel').addClass('boxFlex');
  $('<div></div>').appendTo('#word').addClass('boxFlex');
  $('<div></div>').appendTo('#premEffects').addClass('boxFlex');
  $('<div></div>').appendTo('#htmlCss').addClass('boxFlex');
  $('<div></div>').appendTo('#javascriptJquery').addClass('boxFlex');
  
  // photoshop (9/1)
  for(let i = 0; i <= 8; i++) {
    $('<span></span>').appendTo('#photoshop > div').addClass('Pon');
  }

  $('<span></span>').appendTo('#photoshop > div').addClass('non');

  window.setTimeout(function () {
    $('#photoshop > div > span:eq(0)').animate({ opacity: 1}, 200);
    $('#photoshop > div > span:eq(1)').animate({ opacity: 1}, 400);
    $('#photoshop > div > span:eq(2)').animate({ opacity: 1}, 700);
    $('#photoshop > div > span:eq(3)').animate({ opacity: 1}, 1000);
    $('#photoshop > div > span:eq(4)').animate({ opacity: 1}, 1300);
    $('#photoshop > div > span:eq(5)').animate({ opacity: 1}, 1600);
    $('#photoshop > div > span:eq(6)').animate({ opacity: 1}, 1900);
    $('#photoshop > div > span:eq(7)').animate({ opacity: 1}, 2100);
    $('#photoshop > div > span:eq(8)').animate({ opacity: 1}, 2400);
    $('#photoshop > div > span:eq(9)').animate({ opacity: 1}, 2700);
    $('#photoshop > div > span:eq(10)').animate({ opacity: 1}, 3000);

  }, 1000);

  // illustrator (10/0)
  for(let i = 0; i <= 9; i++) {
    $('<span></span>').appendTo('#illustrator > div').addClass('Aon');
  }

  // indesign (4/6)
  for(let i = 0; i <= 3; i++) {
    $('<span></span>').appendTo('#indesign > div').addClass('Ion');
  }
  
  for(let i = 0; i <= 5; i++) {
    $('<span></span>').appendTo('#indesign > div').addClass('non');
  }

  // powerpoint (8/2)
  for(let i = 0; i <= 7; i++) {
    $('<span></span>').appendTo('#powerpoint > div').addClass('PWon');
  }

  for(let i = 0; i <= 1; i++) {
    $('<span></span>').appendTo('#powerpoint > div').addClass('non');
  }

  // excel (6/4)
  for(let i = 0; i <= 5; i++) {
    $('<span></span>').appendTo('#excel > div').addClass('Eon');
  }

  for(let i = 0; i <= 3; i++) {
    $('<span></span>').appendTo('#excel > div').addClass('non');
  }

  // word (5/5)
  for(let i = 0; i <= 4; i++) {
    $('<span></span>').appendTo('#word > div').addClass('Won');
  }

  for(let i = 0; i <= 4; i++) {
    $('<span></span>').appendTo('#word > div').addClass('non');
  }

  // premiere, after effects(3/7)
  for(let i = 0; i <= 2; i++) {
    $('<span></span>').appendTo('#premEffects > div').addClass('PAon');
  }

  for(let i = 0; i <= 6; i++) {
    $('<span></span>').appendTo('#premEffects > div').addClass('non');
  }

  // html, css (5/3)
  for(let i = 0; i <= 2; i++) {
    $('<span></span>').appendTo('#htmlCss > div').addClass('non');
  }
  for(let i = 0; i <= 4; i++) {
    $('<span></span>').appendTo('#htmlCss > div').addClass('Webon');
  }

  // javascript, jquery (4/4)
  for(let i = 0; i <= 3; i++) {
    $('<span></span>').appendTo('#javascriptJquery > div').addClass('non');
  }
  for(let i = 0; i <= 3; i++) {
    $('<span></span>').appendTo('#javascriptJquery > div').addClass('Webon');
  }
});