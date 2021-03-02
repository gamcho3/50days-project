const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const nums = document.querySelectorAll('.nums span')
const button = document.querySelector('button');

moveAnimation();

function moveAnimation() {
    nums.forEach((num, idx) => {
        //각 개체및 인덱스값
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', (e) => {
            //애니메이션이 끝날때 발동하는 함수
            if (e.animationName === 'goIn' && idx != nextToLast) {
                //타켓의 애니메이션이름이 이것일때
                num.classList.remove('in');
                num.classList.add('out');

            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in');

            } else {
                final.classList.add('show')
                counter.classList.add('hide')
            }
        })
    })
}

function resetPlay() {
    final.classList.remove('show')
    counter.classList.remove('hide')
    nums.forEach((num) => {
        num.classList.value = '';
    })
    nums[0].classList.add('in');
}

button.addEventListener('click', resetPlay)