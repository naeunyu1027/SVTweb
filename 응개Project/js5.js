const slider5 = document.querySelector('.slider5');
const leftArrow5 = document.querySelector('.left-arrow5');
const rightArrow5 = document.querySelector('.right-arrow5');
const indicators5 = document.querySelectorAll('.indicator5');

let currentIndex5 = 0;
const totalSlides5 = slider5.children.length;

// 슬라이더 위치 업데이트
function updateSliderPosition5() {
    const slideWidth = document.querySelector('.slider-container5').offsetWidth;
    slider5.style.transform = `translateX(${-currentIndex5 * slideWidth}px)`;
    updateIndicators5();
}

// 인디케이터 상태 업데이트
function updateIndicators5() {
    indicators5.forEach((indicator, index) => {
        if (index === currentIndex5) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 오른쪽 화살표 클릭
rightArrow5.addEventListener('click', () => {
    if (currentIndex5 < totalSlides5 - 1) {
        currentIndex5++;
    } else {
        currentIndex5 = 0; // 마지막 슬라이드에서 첫 번째로 이동
    }
    updateSliderPosition5();
});

// 왼쪽 화살표 클릭
leftArrow5.addEventListener('click', () => {
    if (currentIndex5 > 0) {
        currentIndex5--;
    } else {
        currentIndex5 = totalSlides5 - 1; // 첫 번째 슬라이드에서 마지막으로 이동
    }
    updateSliderPosition5();
});

indicators5.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex5 = parseInt(indicator.getAttribute('data-index'));
        updateSliderPosition5();
    });
});

// 초기화   
updateSliderPosition5();
