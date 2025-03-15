const slider1 = document.querySelector('.slider2');
const leftArrow1 = document.querySelector('.left-arrow2');
const rightArrow1 = document.querySelector('.right-arrow2');
const indicators1 = document.querySelectorAll('.indicator2');

let currentIndex1 = 0;
const totalSlides1 = slider1.children.length; // 총 슬라이더의 갯수

// 슬라이더 위치 업데이트
function updateSliderPosition1() {
    const slideWidth = document.querySelector('.slider-container2').offsetWidth;
    slider1.style.transform = `translateX(${-currentIndex1 * slideWidth}px)`;
    updateIndicators1();
}

// 인디케이터 상태 업데이트
function updateIndicators1() {
    indicators1.forEach((indicator, index) => {
        if (index === currentIndex1) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 오른쪽 화살표 클릭
rightArrow1.addEventListener('click', () => {
    if (currentIndex1 < totalSlides1 - 1) { // 마지막 슬라이드가 아니면
        currentIndex1++;
    } else {
        currentIndex1 = 0; // 마지막 슬라이드에서 첫 번째로 이동
    }
    updateSliderPosition1();
});

// 왼쪽 화살표 클릭
leftArrow1.addEventListener('click', () => {
    if (currentIndex1 > 0) {
        currentIndex1--;
    } else {
        currentIndex1 = totalSlides1 - 1; // 첫 번째 슬라이드에서 마지막으로 이동
    }
    updateSliderPosition1();
});

indicators1.forEach(indicator => {
    indicator.addEventListener('click', () => {
        // 클릭한 인디케이터의 데이터 속성에서 인덱스를 가져와 현재 슬라이드 인덱스로 설정
        currentIndex1 = parseInt(indicator.getAttribute('data-index'));
        updateSliderPosition1();
    });
});

// 초기화   
updateSliderPosition1();
