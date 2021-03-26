const screen = document.querySelectorAll('.screen');
const playBtns = document.querySelectorAll('.play-btn');
const chooseBtn = document.querySelectorAll('.choose-btn');
const gameScreen = document.querySelector('.third-screen');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');
let seconds = 0;
let score = 0;
let selected_food = {};
let time = 10;
let mode
const array = [];
playBtns.forEach(playBtn => {
    playBtn.addEventListener('click', () => {
        screen[0].classList.add('up');
        mode = playBtn.getAttribute('mode');
    })
})






chooseBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        const img = btn.querySelector('img');
        const src = img.src;
        const alt = img.alt;

        selected_food = { src, alt };
        screen[1].classList.add('up');

        setTimeout(createFood, 1000);

        if (mode == 'basic') {
            setInterval(() => {
                progressTime();
            }, 1000);
        }
        else {
            setInterval(() => {
                timeAttack();
            }, 1000);
        }
    })
})

function progressTime() {
    let s = seconds % 60;
    let m = Math.floor(seconds / 60);

    s = s < 10 ? `0${s}` : s;
    m = m < 10 ? `0${m}` : m;

    timeEl.innerHTML = `time : ${m}:${s}`;
    seconds++;

}

function timeAttack() {


    let s = time % 60;
    let m = Math.floor(time / 60);

    if (time < 0) {
        s = 0;
        m = 0;
        message.innerHTML = `game over</br>your score is: ${score}`;
        message.classList.add('show');
        clearInterval();
    }


    s = s < 10 ? `0${s} ` : s;

    timeEl.innerHTML = `time: ${m}: ${s} `;
    time--;
}


function createFood() {
    const foodEl = document.createElement('div');
    foodEl.classList.add('food');
    const { x, y } = getRandomLocation();
    foodEl.style.top = `${y}px`;
    foodEl.style.left = `${x}px`;
    //foodEl.style.transform = `rotate(${ Math.random() * 360 }deg)`;
    const img = `<img src = "${selected_food.src}" alt = "${selected_food.alt}"> `;
    foodEl.innerHTML = img;


    if (mode == 'basic') {
        gameScreen.appendChild(foodEl);
    } else {
        gameScreen.appendChild(foodEl);
    }

    foodEl.addEventListener('click', catchFood)
}

function catchFood() {
    this.classList.add('caught');
    updateScore();

    setTimeout(() => {
        this.remove();
    }, 3000)

    setTimeout(createFood, 1000);
    setTimeout(createFood, 1500);
}

function updateScore() {
    score++;
    scoreEl.innerHTML = `score: ${score} `;
    if (score > 19) {
        message.innerHTML = 'are you annoyed that?';
        message.classList.add('show');
    }

}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const x = Math.floor(Math.random() * (width - 200) + 100);
    const y = Math.floor(Math.random() * (height - 200) + 100);

    return { x, y }
}


