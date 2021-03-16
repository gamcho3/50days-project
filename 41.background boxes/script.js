const btn = document.querySelector('.btn');
const boxes = document.getElementById('boxes');


btn.addEventListener('click', () => {
    boxes.classList.toggle('big');
})

function createBox() {
    for (let i = 0; i < 4; i++) {

        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 120}px ${-i * 120}px`;

            boxes.appendChild(box);
        }




    }
}

createBox();