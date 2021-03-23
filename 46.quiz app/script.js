const quizData = [
    {
        question: "wihich language runs in a web brower?",
        a: 'java',
        b: 'css',
        c: 'html',
        d: 'C++',
        correct: "a"
    },
    {
        question: "what does css stand for?",
        a: 'central style sheets',
        b: 'cascading style sheet',
        c: 'cascading simple sheets',
        d: 'cascading simple sheets',
        correct: "b"
    },
    {
        question: "what does html stand for?",
        a: 'hypertext markup language',
        b: 'hypertext markdown language',
        c: 'hypertext machine language',
        d: 'hypertext termital language',
        correct: "c"
    },
    {
        question: "what year was javascript stand for?",
        a: '1996',
        b: '11997',
        c: '19998',
        d: '123',
        correct: "d"
    },
];


const titleEl = document.getElementById('title');
const radios = document.querySelectorAll('.radio-item');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const container = document.querySelector('.container');

let currentQuiz = 0;
let score = 0;

getQuiz();

function getQuiz() {
    resetRadio();
    titleEl.innerHTML = quizData[currentQuiz].question;
    aText.innerHTML = quizData[currentQuiz].a;
    bText.innerHTML = quizData[currentQuiz].b;
    cText.innerHTML = quizData[currentQuiz].c;
    dText.innerHTML = quizData[currentQuiz].d;

}

function resetRadio() {
    radios.forEach(radio => {
        radio.checked = false;
    })
}

submitBtn.addEventListener('click', () => {

    let answer = selected();
    if (answer == quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;
    if (currentQuiz === quizData.length) {
        container.innerHTML = `
        <h2>done</h2>
        <p>your score is ${score}</p>
        <button class="reset" onclick="location.reload()">re try</button>
        `;
    } else {
        getQuiz();
    }

})

function selected() {
    let answer;
    radios.forEach(radio => {
        if (radio.checked) {
            answer = radio.id;
        }
    })
    return answer;
}
