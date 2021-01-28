const count = document.querySelectorAll('.count');

count.forEach(element => {
    element.innerText = '0';


    const increaseCount = () => {
        const target = +element.getAttribute('target-count')
        const c = +element.innerText
        const count = target / 200

        if (c < target) {
            element.innerText = c + count;
            setTimeout(increaseCount, 1);



        }
    }

    increaseCount();
})