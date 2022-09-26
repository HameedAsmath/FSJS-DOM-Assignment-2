let inputEl = document.querySelector("#input")
let button = document.querySelector("#submit")
button.addEventListener("click",()=>generate(inputEl.value))
var qrcode = new QRCode("qr-code", {
    text: `hello`,
    width: 180, //default 128
    height: 180,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H})

function generate(user_input) {
    console.log(user_input)
        qrcode.clear()
        qrcode.makeCode(user_input)
} 
