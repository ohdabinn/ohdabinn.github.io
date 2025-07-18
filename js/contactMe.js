$(function () {
  function control_mouse(){
    // 마우스 우 클릭 금지
    // $(document).bind("contextmenu", function(e){return false;});
    // 드래그 클릭 금지
    $(document).bind('selectstart', function() {return false;});
  }

    page01();

    function page01 () {
      const $title = $('#container > h1');
      const text = $title.text();
      $title.empty(); // 기존 글자 제거
    
      // 글자 하나하나 <span>으로 감싸서 넣기
      for (let i = 0; i < text.length; i++) {
        const char = text[i] === ' ' ? '&nbsp;' : text[i];
        $title.append(`<span>${char}</span>`);
    }

    $title.find('span').each(function (index) {
      $(this)
        .delay(100 * index)
        .animate({ opacity: 1 }, 300);
    });
  }
});