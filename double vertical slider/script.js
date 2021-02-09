const downBtn = document.getElementById('downBtn');
const upBtn = document.getElementById('upBtn');
const slideRight = document.querySelector('.rightSlide');
const slideLeft = document.querySelector('.leftSlide');

const slideLength = slideLeft.querySelectorAll('div').length;

let pictureIndex = 0;
//초기의 화면이 가지고 있는 index

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

upBtn.addEventListener('click', () => movePicture('up'));
downBtn.addEventListener('click', () => movePicture('down'));

const movePicture = (direction) => {
    const slideHeight = slideLeft.clientHeight;

    if (direction === 'up') {
        pictureIndex++;

        if (pictureIndex > slideLength - 1) {
            pictureIndex = 0;
        }
    }
    else if (direction === 'down') {
        pictureIndex--;

        if (pictureIndex < 0) {
            pictureIndex = slideLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${slideHeight * pictureIndex}px)`;
    //1,2,3씩 올라갈때마다 하나씩 내려간다
    slideLeft.style.transform = `translateY(${slideHeight * pictureIndex}px)`;
    //3,2,1씩 내려갈때마다 하나씩 올라간다.
}


