// 기본 슬라이더 요소
const svtsvt1 = document.querySelector('.svtsvt1'); // 첫 번째 슬라이더 래퍼
const svtsvt2 = document.querySelector('.svtsvt2'); // 추가 슬라이더 래퍼
const svtsvt3 = document.querySelector('.svtsvt3'); // 추가 슬라이더 래퍼
const svtsvt4 = document.querySelector('.svtsvt4'); // 추가 슬라이더 래퍼
const svtsvt5 = document.querySelector('.svtsvt5'); // 추가 슬라이더 래퍼
const svtsvt6 = document.querySelector('.svtsvt6'); // 추가 슬라이더 래퍼

const seventeenbutton = document.querySelectorAll('.seventeen');
const hiphopbutton = document.querySelectorAll('.hiphop');
const vocalbutton = document.querySelectorAll('.vocal');
const performancebutton = document.querySelectorAll('.performance');
const leadersbutton = document.querySelectorAll('.leaders');
const bssbutton = document.querySelectorAll('.bss');

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const indicators = document.querySelectorAll('.indicator');


let currentIndex = 0;
const totalSlides = slider.children.length;

// 슬라이더 위치 업데이트
function updateSliderPosition() {
    const slideWidth = document.querySelector('.slider-container').offsetWidth;
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    updateIndicators();
}

// 인디케이터 상태 업데이트
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 오른쪽 화살표 클릭
rightArrow.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // 마지막 슬라이드에서 첫 번째로 이동
    }
    updateSliderPosition();
});

// 왼쪽 화살표 클릭
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // 첫 번째 슬라이드에서 마지막으로 이동
    }
    updateSliderPosition();
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-index'));
        updateSliderPosition();
    });
});






























seventeenbutton.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target'); // 클릭한 버튼의 data-target 값 가져오기
            svtsvt1.style.display = 'block'; // 첫 번째 슬라이더 보이기
            svtsvt2.style.display = 'none'; // 두 번째 슬라이더 숨기기
            svtsvt3.style.display = 'none'; 
            svtsvt4.style.display = 'none'; 
            svtsvt5.style.display = 'none'; 
            svtsvt6.style.display = 'none'; 

    });
});

hiphopbutton.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target'); // 클릭한 버튼의 data-target 값 가져오기
            svtsvt1.style.display = 'none'; // 첫 번째 슬라이더 보이기
            svtsvt2.style.display = 'block'; // 두 번째 슬라이더 숨기기
            svtsvt3.style.display = 'none'; 
            svtsvt4.style.display = 'none'; 
            svtsvt5.style.display = 'none'; 
            svtsvt6.style.display = 'none'; 
    });
});

vocalbutton.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target'); // 클릭한 버튼의 data-target 값 가져오기
            svtsvt1.style.display = 'none'; // 첫 번째 슬라이더 보이기
            svtsvt2.style.display = 'none'; // 두 번째 슬라이더 숨기기
            svtsvt3.style.display = 'block'; 
            svtsvt4.style.display = 'none'; 
            svtsvt5.style.display = 'none'; 
            svtsvt6.style.display = 'none'; 

    });
});

performancebutton.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target'); // 클릭한 버튼의 data-target 값 가져오기
            svtsvt1.style.display = 'none'; // 첫 번째 슬라이더 보이기
            svtsvt2.style.display = 'none'; // 두 번째 슬라이더 숨기기
            svtsvt3.style.display = 'none'; 
            svtsvt4.style.display = 'block'; 
            svtsvt5.style.display = 'none'; 
            svtsvt6.style.display = 'none'; 
    });
});

leadersbutton.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target'); // 클릭한 버튼의 data-target 값 가져오기
            svtsvt1.style.display = 'none'; // 첫 번째 슬라이더 보이기
            svtsvt2.style.display = 'none'; // 두 번째 슬라이더 숨기기
            svtsvt3.style.display = 'none'; 
            svtsvt4.style.display = 'none'; 
            svtsvt5.style.display = 'block'; 
            svtsvt6.style.display = 'none'; 
    });
});

bssbutton.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target'); // 클릭한 버튼의 data-target 값 가져오기
            svtsvt1.style.display = 'none'; // 첫 번째 슬라이더 보이기
            svtsvt2.style.display = 'none'; // 두 번째 슬라이더 숨기기
            svtsvt3.style.display = 'none'; 
            svtsvt4.style.display = 'none'; 
            svtsvt5.style.display = 'none'; 
            svtsvt6.style.display = 'block'; 
    });
});



// 초기화   
updateSliderPosition();
