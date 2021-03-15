const passwordEl = document.getElementById('password');
const background = document.querySelector('.background')

passwordEl.addEventListener('input', (e) => {
    const word = e.target.value;
    const regex = /[a-z]{5,}[0-9]{2,}[!@#$%^&*()_]{1,}/i
    const value = regex.test(word);
    console.log(value);

    if (value) {
        background.style.filter = `blur(${20 - word.length * 2}px)`
    } else {
        background.style.filter = `blur(20px)`
    }

})