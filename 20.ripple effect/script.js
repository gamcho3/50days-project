const rippleBtns = document.querySelectorAll('.rippleBtn');



rippleBtns.forEach(rippleBtn => {
    rippleBtn.addEventListener('click', function (e) {
        const x = e.clientX;
        const y = e.clientY;//화면전체에서 본 좌표

        const buttonTop = e.target.offsetTop;//버튼 자체위치
        const buttonLeft = e.target.offsetLeft;

        const insideX = x - buttonLeft;
        const insideY = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');

        circle.style.top = `${insideY}px`;
        circle.style.left = `${insideX}px`;

        this.appendChild(circle);

        console.log(insideX, insideY);
    })
})