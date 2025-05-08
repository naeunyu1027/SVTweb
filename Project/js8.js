const slider8 = document.querySelector('.albumslider2');
const leftArrow8 = document.querySelector('.left-albumarrow2');
const rightArrow8 = document.querySelector('.right-albumaarrow2');

let currentIndex8 = 0; // 현재 슬라이드 인덱스
const slideWidth8 = 320; // 이미지 너비 (300px) + 좌우 여백 (10px * 2)
const totalSlides8 = slider8.children.length; // 슬라이더 아이템의 총 개수
const visibleSlides8 = 3; // 한 번에 보이는 이미지 개수

// 슬라이더 위치 업데이트
function updateSliderPosition8() {
    const offset8 = -currentIndex8 * slideWidth8; // 이동할 거리 계산
    slider8.style.transform = `translateX(${offset8}px)`;
}

// 오른쪽 화살표 클릭
rightArrow8.addEventListener('click', () => {
    if (currentIndex8 < totalSlides8 - visibleSlides8) {  
        // 현재 인덱스가 이동 가능한 범위 내일 때만 증가
        currentIndex8++;
    } else {
        currentIndex8 = 0; // 끝까지 가면 처음으로 돌아감
    }
    updateSliderPosition8();
});

// 왼쪽 화살표 클릭
leftArrow8.addEventListener('click', () => {
    if (currentIndex8 > 0) {
        // 현재 인덱스가 0보다 크면 감소
        currentIndex8--;
    } else {
        currentIndex8 = totalSlides8 - visibleSlides8; // 처음으로 돌아오면 끝으로 이동
    }
    updateSliderPosition8();
});

// 초기 슬라이더 위치 설정
updateSliderPosition8();






