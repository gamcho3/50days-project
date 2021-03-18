const filter = document.getElementById('filter');
const userList = document.getElementById('user-list');
const list = document.querySelector('.list')

const listItem = [];

getUser();


//유저 검색하기
filter.addEventListener('input', (e) => {
    //이름 
    const word = e.target.value;
    //각각의 html텍스트에 이름이 포함되어 있는지 확인
    listItem.forEach(item => {
        if (item.innerText.toLowerCase().includes(word.toLowerCase())) {
            //이름이 있으면 hide 지움
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }

    })
})


//api이용해서 user 얻기
async function getUser() {
    const URL = 'https://randomuser.me/api/?results=50'
    const res = await fetch(URL);
    //data안의 results 값을 빼냄
    const { results } = await res.json();
    console.log(results);
    createUser(results);
}

//사람 프로필 만들기
function createUser(users) {
    userList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.classList.add('user');
        li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
                    <div class="info">
                        <h3 class="name">${user.name.first} ${user.name.last}</h3>
                        <small class="country">${user.location.city}, ${user.location.country}</small>
                    </div>
    `;
        userList.appendChild(li);
        listItem.push(li);

        li.addEventListener('click', () => {
            list.innerHTML = '';
            const div = document.createElement('div');
            div.classList.add('profile');
            div.innerHTML = `
            <div class="profile">
                <img src="${user.picture.large}" alt="${user.name.first}">
                <h2>${user.name.first} ${user.name.last} ${user.name.title}</h2>
                <small>${user.location.country}</small>
                <strong>${user.email}</strong>
                <h2>${user.cell}</h2>
            </div>
            `;
            list.appendChild(div);
        })

    });


}

