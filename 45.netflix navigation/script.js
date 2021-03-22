const openBtn = document.getElementById('open');
const naves = document.querySelectorAll('nav');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => {
    naves.forEach(nav => {
        nav.classList.add('show');
    })
})

closeBtn.addEventListener('click', () => {
    naves.forEach(nav => {
        nav.classList.remove('show');
    })
})