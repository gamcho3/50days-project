const text = document.getElementById('text');
const todosUl = document.getElementById('todo-list');
const form = document.getElementById('form')

//로컬스토리지에서 불러오기
const todos = JSON.parse(localStorage.getItem('todoList'))

//배열이 존재하는지 검사
if (todos) {
    todos.forEach(todo => {
        addTodo(todo);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
    text.value = '';
})

function addTodo(todo) {
    //input에 적은값을 넣는다
    let todoText = text.value;
    let completed

    //로컬스토리지에서 받아온 배열이 존재할경우 배열의 text를 넣고 완성여부를 넣는다
    if (todo) {
        todoText = todo.text;
        completed = todo.completed;
    }



    if (todoText) {
        const li = document.createElement('li');
        li.innerHTML = todoText;

        //완성여부를 확인하고 클래스를 집어넣음
        if (completed == true) {
            li.classList.add('completed')
        }


        //클릭시 완성효과를 넣고 리스트를 업데이트
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            updateList();
        })

        //마우스 우클릭시 창을 안나오게 하고 리스트를 지운다. 그리고 다시 업데이트
        li.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            li.remove();
            updateList();
        })


        todosUl.appendChild(li);
        text.value = '';

        updateList();
    }



}

function updateList() {
    //존재하는 리스트를 전부 받아온다
    const todoList = document.querySelectorAll('li');
    const todoEl = [];


    todoList.forEach(todo => {
        //리스트에 존재하는 텍스트와 클래스 존재여부를 배열에 집어넣는다
        todoEl.push({
            text: todo.innerText,
            completed: todo.classList.contains('completed')
        })
    })
    //로컬스토리지에 변환하여 넣는다.
    localStorage.setItem('todoList', JSON.stringify(todoEl));
}
