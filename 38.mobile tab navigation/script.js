const contents = document.querySelectorAll('.content');
const lis = document.querySelectorAll('li');

lis.forEach((li, idx) => {
    //각 li에 이벤트 적용
    li.addEventListener('click', () => {
        resetBtn();
        resetImg();
        li.classList.add('active');
        contents[idx].classList.add('show');

    })
})

//li의 모든 active 클래스 초기화
function resetBtn() {
    lis.forEach(li => {
        li.classList.remove('active');
    })
}

//content클래스 초기화
function resetImg() {
    contents.forEach(content => {
        content.classList.remove('show');
    })
}