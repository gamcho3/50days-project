const imageEl = document.getElementById('image');
const times = document.querySelector('.time');

let clickTime = 0;

let click = 0;
//더블클릭 효과
imageEl.addEventListener('click', (e) => {
    //첫번째 클릭
    if (clickTime === 0) {
        clickTime = new Date().getTime();

    } else {
        //두번째 클릭의 시간차이가 적을때 반환후 0을 초기화
        if ((new Date().getTime() - clickTime) < 800) {
            createStar(e);

            clickTime = 0;
            //두번째 클릭의 시간차이가 길때 반환, 다시 클릭시 차이가 적을경우 위로감
        } else {
            clickTime = new Date().getTime();

        }
    }

})

function createStar(e) {
    //icon 만들기
    const star = document.createElement('i');
    star.classList.add('fas');
    star.classList.add('fa-star');

    //현재 클릭 화면상의 절대좌표
    const x = e.clientX;
    const y = e.clientY;

    //imageEl이 위치해있는 화면상의 절대좌표
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    //imageEl내 클릭위치 상대좌표
    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    star.style.top = `${yInside}px`;
    star.style.left = `${xInside}px`;

    imageEl.appendChild(star);

    setTimeout(() => star.remove(), 800)

    times.innerHTML = ++click;

}