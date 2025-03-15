const slider2 = document.querySelector('.slider3');
const leftArrow2 = document.querySelector('.left-arrow3');
const rightArrow2 = document.querySelector('.right-arrow3');
const indicators2 = document.querySelectorAll('.indicator3');

let currentIndex2 = 0;
const totalSlides2 = slider2.children.length;

// 슬라이더 위치 업데이트
function updateSliderPosition2() {
    const slideWidth = document.querySelector('.slider-container3').offsetWidth;
    slider2.style.transform = `translateX(${-currentIndex2 * slideWidth}px)`;
    updateIndicators2();
}

// 인디케이터 상태 업데이트
function updateIndicators2() {
    indicators2.forEach((indicator, index) => {
        if (index === currentIndex2) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 오른쪽 화살표 클릭
rightArrow2.addEventListener('click', () => {
    if (currentIndex2 < totalSlides2 - 1) {
        currentIndex2++;
    } else {
        currentIndex2 = 0; // 마지막 슬라이드에서 첫 번째로 이동
    }
    updateSliderPosition2();
});

// 왼쪽 화살표 클릭
leftArrow2.addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
    } else {
        currentIndex2 = totalSlides2 - 1; // 첫 번째 슬라이드에서 마지막으로 이동
    }
    updateSliderPosition2();
});

indicators2.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex2 = parseInt(indicator.getAttribute('data-index'));
        updateSliderPosition2();
    });
});

// 초기화   
updateSliderPosition2();
