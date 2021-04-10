var upper = document.getElementById('upper');
var lower = document.getElementById('lower');
var numbers = document.getElementById('numbers');
var symbols = document.getElementById('symbols');
var button = document.querySelector('button');
var lentghEl = document.getElementById("number")
var results = document.getElementById('password')
var copyButton = document.getElementById('copy')
var randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 25) + 97)
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 25) + 65)
}
function getRandomNumber() {
    return Math.floor(Math.random() * 10) 
}
function getRandomSymbol() {
    var randomSymbols =  [
        String.fromCharCode(Math.floor(Math.random() * 14) + 33),
        String.fromCharCode(Math.floor(Math.random() * 6 ) + 58),
        String.fromCharCode(Math.floor(Math.random() * 5 ) + 91),
        String.fromCharCode(Math.floor(Math.random() * 3 ) + 123) 
    ]
    return randomSymbols[Math.floor(Math.random() * randomSymbols.length)]
}
function generatePassword(upper, lower, numbers, symbols, length) {
    var password = "";
    var letter = []
    
    for (var i =0; i < length; i++) {
        if ((upper || lower || numbers || symbols) && length > 3) {
            letter = [];
            if(upper) {letter.push(randomFunc.upper())}
            if(lower) {letter.push(randomFunc.lower())}
            if(numbers) {letter.push(randomFunc.numbers())}
            if(symbols) {letter.push(randomFunc.symbols())}
            password += letter[Math.floor(Math.random() * letter.length)]
        }
    }
    
    results.innerHTML = password;
}

button.addEventListener('click', () => {
    var hasLower = lower.checked;
    var hasUpper = upper.checked;
    var hasNumbers = numbers.checked;
    var hasSymbols = symbols.checked;
    var length = +lentghEl.value;
    generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length)
})

copyButton.addEventListener("click", () => {
    var textarea = document.createElement('textarea');
    var pass = results.innerText;
    if(pass) {
        
        textarea.value = pass;
        document.body.appendChild(textarea);
        textarea.select()
        document.execCommand('copy');
        textarea.remove()
        alert('Password copied to clipboard!');
    }
})