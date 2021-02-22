const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbols');
const generateBtn = document.getElementById('submitBtn');
const pasteBtn = document.getElementById('paste');

const randomFunc = {
    uppercase: getUppercase,
    lowercase: getLowercase,
    number: getNumber,
    symbol: getSymbol
}

generateBtn.addEventListener('click', () => {
    const length = lengthEl.value;
    const uppercase = uppercaseEl.checked;
    const lowercase = lowercaseEl.checked;
    const number = numberEl.checked;
    const symbol = symbolEl.checked;

    resultEl.innerText = generatePassword(length, uppercase, lowercase, number, symbol);
})

function generatePassword(length, uppercase, lowercase, number, symbol) {
    let generatedPassword = '';
    const typesCount = uppercase + lowercase + number + symbol;

    //false 값은 받지 않기
    const typeArr = [{ lowercase }, { uppercase }, { number }, { symbol }].filter(item => Object.values(item)[0]);


    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        // 체크된 값의 숫자만큼 랜덤글자를 받는다.
        typeArr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })

        console.log(i, generatedPassword);
    }
    //지정한 숫자의 길이까지 자른다.
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;

}

//랜덤 대문자 뽑기
function getUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//랜덤 소문자 뽑기
function getLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//랜덤 숫자뽑기
function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//랜덤 특수문자 뽑기
function getSymbol() {
    const Symbols = '~!@#$%^&*()-+=<>?/.,'
    return Symbols[Math.floor(Math.random() * Symbols.length)];
}


pasteBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const passWord = resultEl.innerText;

    textarea.value = passWord;
    document.body.appendChild(textarea);
    //textarea 밸류값 선택
    textarea.select();
    //선택된 값 복사
    document.execCommand('copy');
    textarea.remove();
    alert('success copy');

})