const form = document.getElementById('form');
const text = document.getElementById('text');
const resultEl = document.getElementById('result');
const speedBtn = document.getElementById('speed');
const colorBtn = document.getElementById('color');

let idx = 1;
let speed = 300;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sentense = text.value.trim();
    getSentnese(sentense);
    text.value = '';
})


function getSentnese(sentense) {
    //글자 자르기
    resultEl.innerText = sentense.slice(0, idx);
    idx++;

    if (idx > sentense.length) {
        idx = 1;
    }

    speedBtn.addEventListener('input', () => {
        speed = 300 / speedBtn.value;
    })

    colorBtn.addEventListener('change', () => {
        resultEl.style.color = colorBtn.value;
    })

    setTimeout(() => {
        getSentnese(sentense)
    }, speed)

}