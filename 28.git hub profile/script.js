const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const text = document.getElementById('text');

getUser();

//axios 아식스 형식
async function getAPI(username) {
    try {
        const { data } = await axios(APIURL + username);
        createUser(data);
    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard('No profile with user name');
        }
    }
}

//fetch API 형식으로 repo 받기
function getRepos(username) {
    axios(APIURL + username + '/repos')
        .then(res => {
            createRepos(res);
        })
        .catch(error => {
            if (error.response.status == 404) {
                console.log('error no repos')
            }
        })
}

//로컬스토리지 이름 저장
function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

//로컬스토리지 이름 받아오기
function getUser() {
    const userName = JSON.parse(localStorage.getItem('user'));
    getAPI(userName);
    getRepos(userName);
}

//이름 제출후 api 받기
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = text.value;
    getAPI(user);
    getRepos(user);
    setUser(user);
    text.value = '';
})


//main 태그 아래 카드 만들기
function createUser(data) {
    main.innerHTML = `
    <div>
    <img src="${data.avatar_url}" alt="">
</div>
<div class="profile-container">
    <h2 class="name">${data.name}</h2>
    <span><a href="${data.blog}">-enter blog-</a></span>
    <p>${data.bio}</p>
    <ul class="follow-container">
        <li>
            <strong>${data.followers}</strong> follower
        </li>
        <li>
            <strong>${data.following}</strong> folling
        </li>
        <li>
            <strong>${data.public_repos}</strong> repo
        </li>
    </ul>
    <div class="repo-container" id="repos">
     
    </div>
</div>
`;
}

//에러메세지 출력
function createErrorCard(message) {
    main.innerHTML = message;
}

//레포지토리 만들기
function createRepos(repo) {
    const repoEl = document.getElementById('repos');
    repo.data
        .slice(0, 10)
        .forEach(element => {
            const aTag = document.createElement('a');
            aTag.innerText = element.name;
            aTag.href = element.html_url;
            repoEl.appendChild(aTag);
        });
}