const poke_container = document.querySelector('.poke-container')
const searchEl = document.getElementById('search');

const form = document.getElementById('form')

const maxPokemon = 100;

const colors = {
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: 'f5f5f5',
    fire: 'tomato'
}

form.addEventListener('submit', (e) => {
    const name = searchEl.value;
    e.preventDefault();

    searchPokemon(name);

})

const searchPokemon = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        poke_container.innerHTML = '';
        makePokemon(data);
        //오류메세지 발동 
    } catch (err) {
        poke_container.innerHTML = `'${name}' is not pokemon. please re search.`;
    }





}


//색 배열의 key값만 추출하여 다시 배열을 만듬
const typeColors = Object.keys(colors);


//pokemon의 가각 id분배, 마지노선 100으로 설정함
const pokemon = async () => {
    for (let i = 1; i < maxPokemon; i++) {
        await getPokemon(i);
    }
}

//포켓몬 데이터 얻기
async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    makePokemon(data);

}

function makePokemon(pokemon) {

    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    //글자열로 바꾼다음 앞의 숫자만큼 원하는 뒷글자를 추가한다
    const number = '#' + pokemon.id.toString().padStart(3, '0');


    //포켓몬 타입을 갖고와서 새로운 배열만들기
    const pokemonTypes = pokemon.types.map(type => type.type.name)

    //typecolors에서 각 타입이 pokemonTypes와 일치하는 것중 index값이 -1보다 큰 앞에 있는 타입을 반환
    const pokeColor = typeColors.find(type => pokemonTypes.indexOf(type) > -1)

    pokemonCard.style.backgroundColor = colors[pokeColor];

    const cardHtml = `
    <div class="img-container">
                <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
            </div>
            <span class="number">${number}</span>
            <span class="name">${pokemon.name}</span>
            <small class="type">${pokemonTypes[0]} ${pokemonTypes[1] ? `, ` + pokemonTypes[1] : ''}</small>
    `;
    pokemonCard.innerHTML = cardHtml;
    poke_container.appendChild(pokemonCard);


}






pokemon();