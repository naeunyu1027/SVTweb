const slider7 = document.querySelector('.albumslider');
const leftArrow7 = document.querySelector('.left-albumarrow');
const rightArrow7 = document.querySelector('.right-albumaarrow');

let currentIndex7 = 0; // 현재 슬라이드 인덱스
const slideWidth = 320; // 이미지 너비 (300px) + 좌우 여백 (10px * 2)
const totalSlides7 = slider7.children.length-1; // 슬라이더 아이템의 총 개수
const visibleSlides = 3; // 한 번에 보이는 이미지 개수

// 슬라이더 위치 업데이트
function updateSliderPosition7() {
    const offset = -currentIndex7 * slideWidth; // 이동할 거리 계산
    slider7.style.transform = `translateX(${offset}px)`;
}

// 오른쪽 화살표 클릭
rightArrow7.addEventListener('click', () => {
    if (currentIndex7 < totalSlides7 - visibleSlides) {
        // 현재 인덱스가 이동 가능한 범위 내일 때만 증가
        currentIndex7++;
    } else {
        currentIndex7 = 0; // 끝까지 가면 처음으로 돌아감
    }
    updateSliderPosition7();
});

// 왼쪽 화살표 클릭
leftArrow7.addEventListener('click', () => {
    if (currentIndex7 > 0) {
        // 현재 인덱스가 0보다 크면 감소
        currentIndex7--;
    } else {
        currentIndex7 = totalSlides7 - visibleSlides; // 처음으로 돌아오면 끝으로 이동
    }
    updateSliderPosition7();
});

// 초기 슬라이더 위치 설정
updateSliderPosition7();






