const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');

//로컬스토리지 배열을 글자로 받아오기
const getNote = localStorage.getItem('note') ? JSON.parse(localStorage.getItem('note')) : '';

//배열을 돌려서 각 글자 입력
if (getNote) {
    getNote.forEach(note => {
        addNewNote(note);//note는 글자
    })
}
//노트 추가
addBtn.addEventListener('click', () => {
    addNewNote();
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('note');
    window.location.reload();
})

//텍스트 초기화
function addNewNote(text = '') {//텍스트값 받기

    //노트 div 넣기
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tools">
            <input id="color" type="color">
            <button class="btn board"><i class="fas fa-clipboard"></i></button>
            <button class="btn trash"><i class="fas fa-trash"></i></button>
        </div>
        <div class="main ${text ? "" : 'hidden'}"></div>
        <textarea class="textarea ${text ? 'hidden' : ""}"></textarea>
    `;  // 글자가 존재하면 텍스트창을 없애고 없으면 main을 보여준다.

    const board = note.querySelector('.board');
    const trash = note.querySelector('.trash');
    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');
    const color = note.querySelector('#color');

    textarea.value = text;
    //main에 텍스트값을 넣는 marked 함수
    main.innerHTML = marked(text);

    //클릭할때마다 hidden을 조절하는 함수
    board.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
        note.classList.toggle('write');
    })

    //텍스트에 입렫하는 글자 넣기
    textarea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLS();

    })

    //포스트잇 색상 바꾸기
    color.addEventListener('change', () => {
        note.style.backgroundColor = `${color.value}`;
    })

    //노트 지우기
    trash.addEventListener('click', () => {
        note.remove();//노트 지우기
        updateLS();//지운 노트 바로 업데이트
    })

    document.body.appendChild(note);
}


function updateLS() {
    const noteText = document.querySelectorAll('textarea');//텍스트창 전부받기
    const notes = [];   //배열만들기
    noteText.forEach(note => { //배열에 각 값 집어넣기
        notes.push(note.value);
    })

    localStorage.setItem('note', JSON.stringify(notes)); //배열을 글자로 집어넣기
}