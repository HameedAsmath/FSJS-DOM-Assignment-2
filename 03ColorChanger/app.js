let button = document.querySelector("#button")
button.addEventListener("click",()=>buttonClicked())
function buttonClicked(){
   let colorCode = colorGenerator()
   const div = document.querySelector("#canvas")
   div.style.backgroundColor = colorCode
}
function colorGenerator(){
    const randStr = "1234567890ABCDEF"
    var color = "#"
    for(let i=0;i<=5;i++){
        color += randStr[Math.floor(Math.random()*16)]
    }
    return color
}