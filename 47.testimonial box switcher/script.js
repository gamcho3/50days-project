const container = document.querySelector('.container');
const main = document.querySelector('.main');
const nameEl = document.querySelector('.name');
const numberEl = document.querySelector('.number');
const imgEl = document.querySelector('.img');

getUser();

let userIndex = 0;

async function getUser() {

    const URL = 'https://randomuser.me/api/?results=10';
    const res = await fetch(URL);
    const { results } = await res.json();




    setInterval(() => {
        loadUser(results);
    }, 9000)


}



async function loadUser(users) {
    userIndex++;
    if (userIndex > users.length - 1) {
        userIndex = 0;
    }

    const URL = 'https://api.adviceslip.com/advice'
    const res = await fetch(URL);
    const { slip } = await res.json();



    main.innerHTML = slip.advice;
    nameEl.innerHTML = `${users[userIndex].name.first} ${users[userIndex].name.last}`
    imgEl.src = `${users[userIndex].picture.large}`;
    numberEl.innerHTML = `${users[userIndex].phone}`;
}
