const slider6 = document.querySelector('.slider6');
const leftArrow6 = document.querySelector('.left-arrow6');
const rightArrow6 = document.querySelector('.right-arrow6');
const indicators6 = document.querySelectorAll('.indicator6');

let currentIndex6 = 0;
const totalSlides6 = slider6.children.length;

// 슬라이더 위치 업데이트
function updateSliderPosition6() {
    const slideWidth = document.querySelector('.slider-container6').offsetWidth;
    slider6.style.transform = `translateX(${-currentIndex6 * slideWidth}px)`;
    updateIndicators6();
}

// 인디케이터 상태 업데이트
function updateIndicators6() {
    indicators6.forEach((indicator, index) => {
        if (index === currentIndex6) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 오른쪽 화살표 클릭
rightArrow6.addEventListener('click', () => {
    if (currentIndex6 < totalSlides6 - 1) {
        currentIndex6++;
    } else {
        currentIndex6 = 0; // 마지막 슬라이드에서 첫 번째로 이동
    }
    updateSliderPosition6();
});

// 왼쪽 화살표 클릭
leftArrow6.addEventListener('click', () => {
    if (currentIndex6 > 0) {
        currentIndex6--;
    } else {
        currentIndex6 = totalSlides6 - 1; // 첫 번째 슬라이드에서 마지막으로 이동
    }
    updateSliderPosition6();
});

indicators6.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex6 = parseInt(indicator.getAttribute('data-index'));
        updateSliderPosition6();
    });
});

// 초기화   
updateSliderPosition6();