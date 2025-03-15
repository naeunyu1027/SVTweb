const slider3 = document.querySelector('.slider4');
const leftArrow3 = document.querySelector('.left-arrow4');
const rightArrow3 = document.querySelector('.right-arrow4');
const indicators3 = document.querySelectorAll('.indicator4');

let currentIndex3 = 0;
const totalSlides3 = slider3.children.length;

// 슬라이더 위치 업데이트
function updateSliderPosition3() {
    const slideWidth = document.querySelector('.slider-container4').offsetWidth;
    slider3.style.transform = `translateX(${-currentIndex3 * slideWidth}px)`;
    updateIndicators3();
}

// 인디케이터 상태 업데이트
function updateIndicators3() {
    indicators3.forEach((indicator, index) => {
        if (index === currentIndex3) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 오른쪽 화살표 클릭
rightArrow3.addEventListener('click', () => {
    if (currentIndex3 < totalSlides3 - 1) {
        currentIndex3++;
    } else {
        currentIndex3 = 0; // 마지막 슬라이드에서 첫 번째로 이동
    }
    updateSliderPosition3();
});

// 왼쪽 화살표 클릭
leftArrow3.addEventListener('click', () => {
    if (currentIndex3 > 0) {
        currentIndex3--;
    } else {
        currentIndex3 = totalSlides3 - 1; // 첫 번째 슬라이드에서 마지막으로 이동
    }
    updateSliderPosition3();
});

indicators3.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex3 = parseInt(indicator.getAttribute('data-index'));
        updateSliderPosition3();
    });
});

// 초기화   
updateSliderPosition3();
