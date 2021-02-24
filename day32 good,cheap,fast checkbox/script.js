
const inputs = document.querySelectorAll('.input');
const goodBtn = document.getElementById('good');
const cheapBtn = document.getElementById('cheap');
const expensiveBtn = document.getElementById('expensive');

inputs.forEach(input => input.addEventListener('change', (e) => checkBox(e.target)));


const checkBox = (e) => {
    if (goodBtn.checked && cheapBtn.checked && expensiveBtn.checked) {
        if (e === cheapBtn) {
            expensiveBtn.checked = false;
        }
        if (e === expensiveBtn) {
            cheapBtn.checked = false;
        }

    }
}


