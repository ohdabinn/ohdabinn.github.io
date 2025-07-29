$(function () {
  // page03 : 맥날x런베, 씽칭공원
  const button01 = document.getElementById("button01");
  const button02 = document.getElementById("button02");

  const image01 = document.querySelector(".effect-expand-left");
  const image02 = document.querySelector(".effect-expand-right");

  // hover 시작
  button01.addEventListener("mouseenter", () => {
    image01.style.opacity = "1";
    image01.style.transform = "scaleY(1)";
    image01.style.filter = "blur(0)";
    image01.style.pointerEvents = "auto";
    button01.style.opacity = "0"
  });

  button02.addEventListener("mouseenter", () => {
    image02.style.opacity = "1";
    image02.style.transform = "scaleY(1)";
    image02.style.filter = "blur(0)";
    image02.style.pointerEvents = "auto";
    button01.style.opacity = "0"
  });

  // hover 해제
  button01.addEventListener("mouseleave", () => {
    setTimeout(() => {
      image01.style.opacity = "0";
      image01.style.transform = "scaleY(0)";
      image01.style.filter = "blur(3px)";
      image01.style.pointerEvents = "none";
      button01.style.opacity = "1"
    }, 1000);
  });

  button02.addEventListener("mouseleave", () => {
    setTimeout(() => {
      image02.style.opacity = "0";
      image02.style.transform = "scaleY(0)";
      image02.style.filter = "blur(3px)";
      image02.style.pointerEvents = "none";
      button01.style.opacity = "1"
    }, 1000);
  });

  const imageItems = document.querySelectorAll('.image-item');
  const overlay = document.querySelector('.overlay');
  const overlayTitle = document.getElementById('overlay-title');
  const overlaySubtitle = document.getElementById('overlay-subtitle');
  const overlayDesc = document.getElementById('overlay-desc');
  const overlayPeriod = document.getElementById('overlay-period');
  const overlayImage = document.getElementById('overlay-image');
  const burgerCheckbox = document.getElementById('burger');

  // 이미지 클릭 시 오버레이 표시
  imageItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title');
      const subtitle = item.getAttribute('data-subtitle');
      const desc = item.getAttribute('data-desc');
      const period = item.getAttribute('data-period');
      const imgSrc = item.querySelector('img').getAttribute('src');

      overlayTitle.textContent = title;
      overlaySubtitle.textContent = subtitle;
      overlayDesc.innerHTML = desc.replace(/\|/g, '<br>');
      overlayPeriod.textContent = period;
      overlayImage.setAttribute('src', imgSrc); // 이미지 먼저 설정하고

      // 이미지가 로드된 뒤 비율에 따라 클래스 지정
      overlayImage.onload = function () {
        const isLandscape = overlayImage.naturalWidth > overlayImage.naturalHeight;

        overlayImage.classList.remove('landscape', 'portrait');
        overlayImage.classList.add(isLandscape ? 'landscape' : 'portrait');
      };

      overlay.classList.add('show');
      closeButton.checked = true;
    });
  });

  // X 버튼(label)을 클릭하면 체크 해제 + 오버레이 닫기
  const closeLabel = document.querySelector('.label');
  closeLabel.addEventListener('click', () => {
    burgerCheckbox.checked = false;
    overlay.classList.remove('show');
  });

  // 햄버거 체크 해제되면 오버레이 닫힘
  burgerCheckbox.addEventListener('change', () => {
    if (!burgerCheckbox.checked) {
      overlay.classList.remove('show');
    }
  });

  // 페이지 로드시 오버레이 숨김
  window.addEventListener('DOMContentLoaded', () => {
    overlay.classList.remove('show');
  });

  // 무한 스크롤을 위해 이미지 클론 후 연결
  function cloneImagesForInfiniteScroll(columnSelector) {
    const column = document.querySelector(columnSelector);
    const cloned = column.cloneNode(true);
    cloned.classList.add('cloned');
    column.parentNode.appendChild(cloned);
  }

  cloneImagesForInfiniteScroll('.column_left');
  cloneImagesForInfiniteScroll('.column_right');
});