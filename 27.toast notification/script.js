const text = document.getElementById('text');
const randomBtn = document.querySelector('.random');
const popUp = document.querySelector('.popUp');
const form = document.getElementById('form');


let greeting = [];





form.addEventListener('submit', (e) => {
    e.preventDefault();
    pushWord();
    text.value = '';
})

function pushWord() {
    const word = text.value;
    greeting.push(word);

}

randomBtn.addEventListener('click', () => Notification());


function Notification(message = null) {
    const box = document.createElement('div');
    box.classList.add('pop');
    box.innerHTML = message ? message : randomSentense();
    popUp.appendChild(box);

    setTimeout(() => {
        box.remove();
    }, 3000)
}


function randomSentense() {
    return greeting[Math.floor(Math.random() * greeting.length)];
}