const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
let length;
lengthEl.addEventListener("change", () => {
  length = lengthEl.value;
});
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "!@#$%^&*?/><,|-=+_";
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const cb = navigator.clipboard;
  cb.writeText(resultEl.innerText).then(() => alert("Text copied"));
});

generateEl.addEventListener("click", () => {
  let password = generatePassword(
    randomFunc.lower,
    randomFunc.upper,
    randomFunc.number,
    randomFunc.symbol,
    length
  );
  resultEl.innerText = password;
});

function generatePassword(lower, upper, number, symbol, length = 20) {

  // Solution 1
  // let characters = ""
  // uppercaseEl.checked ? (characters += upperCase) : "";
  // lowercaseEl.checked ? (characters += lowerCase) : "";
  // numbersEl.checked ? (characters += numbers) : "";
  // symbolsEl.checked ? (characters += symbols) : "";

  // let password = ""
  // for(let i=1;i<=length;i++){
  //    password += characters[Math.floor(Math.random()*characters.length)]
  // }
  // return password

  //Solution 2
  let charactersArr = [];
  uppercaseEl.checked ? charactersArr.push(upper) : "";
  lowercaseEl.checked ?charactersArr.push(lower)  : "";
  numbersEl.checked ? charactersArr.push(number)  : "";
  symbolsEl.checked ? charactersArr.push(symbol)  : "";

  let password = ""
  for(let i=1;i<=length;i++){
     password += charactersArr[Math.floor(Math.random()*charactersArr.length)]()
  }
  return password
  
}

function getRandomLower() {
  return lowerCase[Math.floor(Math.random() * 25)];
}

function getRandomUpper() {
  return upperCase[Math.floor(Math.random() * 25)];
}

function getRandomNumber() {
  return numbers[Math.floor(Math.random() * 10)];
}

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * 20)];
}
