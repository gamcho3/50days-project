const body = document.body;
const album = document.querySelectorAll('.album');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');


let picture = 0;





function moveRightPicture() {
    picture++;
    if (picture > album.length - 1) {
        picture = 0;
    }
    album.forEach(picture => picture.classList.remove('active'))
    album[picture].classList.add('active');
    body.style.backgroundImage = album[picture].style.backgroundImage;

}

function moveLeftPicture() {
    picture--;
    if (picture < 0) {
        picture = album.length - 1;
    }
    album.forEach(picture => picture.classList.remove('active'))
    album[picture].classList.add('active');
    body.style.backgroundImage = album[picture].style.backgroundImage;

}

rightBtn.addEventListener('click', moveRightPicture);
leftBtn.addEventListener('click', moveLeftPicture);