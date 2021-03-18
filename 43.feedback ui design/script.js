const container = document.querySelector('.container');
const icons = document.querySelectorAll('.icon');
const review = document.getElementById('review');

let rating = '';

container.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('icon')) {
        resetClass();
        e.target.parentNode.classList.add('active');
        rating = e.target.parentNode.innerText;

        container.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${rating}</strong>
        <p>review : "${review.value ? review.value : 'no review'}"</p>
        `;

    } else if (e.target.getAttribute('class') == 'icon') {
        resetClass();
        e.target.classList.add('active');
        rating = e.target.innerText;

        container.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${rating}</strong>
        <p>review : "${review.value ? review.value : 'no review'}"</p>
        `;

    }




})

function resetClass() {
    icons.forEach(icon => {
        icon.classList.remove('active');
    })
}

