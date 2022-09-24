const userResult = document.querySelector("#result-user-stat")
const compResult = document.querySelector("#result-comp-stat")
const options = ["rock","paper","scissor"]
const buttons = document.querySelectorAll(".choice")
const userScoreEl = document.querySelector("#userScoreVal")
const compScoreEl = document.querySelector("#compScoreVal")
const resultEl = document.querySelector("#result-final-stat")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>getWinner(button.id))
})
var userPoint = 0;
var compPoint = 0;
function userSelect(id){
    let userOption;
    if(id == 'r'){
        userOption = "rock"
    }else if(id == 'p'){
        userOption = "paper"
    }else{
        userOption = "scissor"
    }
    return userOption
}
function compSelect(){
    return options[Math.floor(Math.random()*options.length)]
}
function getWinner(id){
    var winner;
    const userOption = userSelect(id)
    const compOption = compSelect()
    userResult.innerText = userOption
    compResult.innerText = compOption
    if(userOption == compOption){
        userPoint += 0
        compPoint += 0
        winner = "Tie"
    }
    else if(userOption == "rock"){
        if(compOption == "scissor"){
            userPoint += 1
            winner = "User"
        }else{
            compPoint += 1
            winner = "Computer"
        }
    }
    else if(userOption == "paper"){
        if(compOption == "scissor"){
            compPoint += 1
            winner = "Computer"
        }
        else{
            userPoint += 1
            winner = "User"
        }
    }
    else if(userOption=="scissor"){
        if (compOption=="rock") {
            compPoint +=1
            winner = "Computer"
        } else {
            userPoint +=1
            winner = "User"
        }
    }
    userScoreEl.innerText = userPoint
    compScoreEl.innerText = compPoint   
    resultEl.innerText = winner
} 
