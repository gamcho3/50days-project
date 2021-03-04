const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const picture = document.querySelector('.image-container')
const imgs = document.querySelectorAll('img');

let idx = 0;

let interval = setInterval(run, 2000);

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}


//인덱스를 늘려주고 사진함수 발동
function run() {
    idx++
    moveImg();
}

//이전 버튼
prevBtn.addEventListener('click', () => {
    idx--;
    resetInterval();
    moveImg();
})

nextBtn.addEventListener('click', () => {
    idx++;
    resetInterval();
    moveImg();
})


//사진 움직이기 함수
function moveImg() {
    picture.style.transform = `translateX(${-500 * idx}px)`;

    if (idx > imgs.length - 1) {
        idx = 0;
        picture.style.transform = `translateX(${idx}px)`;
    }
    if (idx < 0) {
        idx = imgs.length - 1;
        picture.style.transform = `translateX(${-500 * idx}px)`;
    }
}

