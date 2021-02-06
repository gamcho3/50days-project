const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const numberEl = document.getElementById('number');
const colorBtn = document.getElementById('color');
const clearBtn = document.getElementById('clear');


const ctx = canvas.getContext('2d');

let size = 10;
let pressed = false;
let color = 'black';
let x
let y


canvas.addEventListener('mousedown', (e) => {
    pressed = true;
    x = e.offsetX
    y = e.offsetY

})

canvas.addEventListener('mouseup', (e) => {
    pressed = false;
    x = undefined
    y = undefined
    console.log(x, y);
})

canvas.addEventListener('mousemove', (e) => {

    if (pressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;

    }



})


//원(점)만들기
function drawCircle(x, y) {
    ctx.beginPath();//새로운경로를 만듬
    ctx.arc(x, y, size, 0, Math.PI * 2);//(시작위치,반지름,원주율(파이))
    ctx.fillStyle = color;//채우는 색
    ctx.fill();//채우기 함수
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);//시작점
    ctx.lineTo(x2, y2);//진행하는 위치
    ctx.strokeStyle = color;//선의 색 결정
    ctx.lineWidth = size * 2;//size는 반지름으로 지름의 크기로 만들어줌
    ctx.stroke();//선 채우기
}


function updateSize() {
    numberEl.innerText = size;
}


//색 변경 -> 변경이벤트를 실행 ,변경한 값을 color에 집어넣음
colorBtn.addEventListener('change', (e) => color = e.target.value);

//clearRect -> 기준점으로 캔버스의 너비와 높이만큼 없앰
clearBtn.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

increaseBtn.addEventListener('click', () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateSize();
})


decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if (size <= 0) {
        size = 5;
    }
    updateSize();
})