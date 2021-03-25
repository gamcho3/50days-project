const container = document.querySelector('.container');
const number = document.getElementById('number');
const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    container.innerHTML = '';
    for (let i = 0; i < number.value; i++) {
        const img = document.createElement('img');
        img.src = `https://source.unsplash.com/random/${Math.floor(Math.random() * 10) + 300}x${Math.floor(Math.random() * 10) + 300}`;
        container.appendChild(img);
    }
})

