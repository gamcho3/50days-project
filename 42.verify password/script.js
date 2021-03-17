const numberEl = document.querySelectorAll('.number');

numberEl[0].focus();

numberEl.forEach((number, idx) => {
    // number.addEventListener('input', (e) => {
    //     if (e.target.value >= 1 && e.target.value <= 9) {
    //         numberEl[idx + 1].focus();
    //     } else {

    //     }
    // })

    number.addEventListener('keydown', (e) => {
        console.log(e.key);
        if (e.key >= 0 && e.key <= 9) {
            //초기화
            numberEl[idx].value = '';
            //시간차를 두지 않을경우 그냥 넘어간다
            setTimeout(() => {
                numberEl[idx + 1].focus();
            }, 10)
        } else if (e.key == 'Backspace') {
            //시간차를 둬야 적용이 됨
            setTimeout(() => {
                numberEl[idx - 1].focus();
            }, 10)

        }
    })
})