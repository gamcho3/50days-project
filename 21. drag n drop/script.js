const boxs = document.querySelectorAll('.box');
const fill = document.querySelector('.fill');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const box of boxs) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
}

function dragStart() {
    setTimeout(() => this.className = 'invisible', 0)
    console.log('drag start');

}

function dragEnd() {

    console.log('drag end');
}

function dragOver(e) {
    e.preventDefault();
    console.log('drag over');
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hold';

    console.log('drag enter');
}

function dragLeave() {
    console.log('drag leave');

}

function dragDrop() {
    this.append(fill);
    this.className = 'box';
    fill.className = 'fill';
    console.log('drop');
}