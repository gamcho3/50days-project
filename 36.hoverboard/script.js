const container = document.querySelector('.container');







for (let i = 0; i < 504; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);

    div.addEventListener('mouseover', () => mouseOn(div))
    div.addEventListener('mouseout', () => mouseOut(div))
}



function mouseOn(e) {
    const randomColor = getRandomColor();
    e.style.backgroundColor = `${randomColor}`;
    e.style.boxShadow = `0px 0px 2px ${randomColor},0px 0px 10px ${randomColor}`;
}

function mouseOut(e) {
    e.style.background = '#1d1d1d';
    e.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

