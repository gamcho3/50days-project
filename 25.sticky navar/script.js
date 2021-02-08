const nav = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

function fixNav() {

    console.log(scrollY, nav.offsetHeight);
    //scrollY = 스크롤을 내릴수록 숫자가 커짐 , offsetHeight: 기존 차지하고있는 nav 의 높이
    if (scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}