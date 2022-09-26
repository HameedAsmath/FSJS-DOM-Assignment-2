let jokeEl = document.querySelector("#joke")
let url = "https://icanhazdadjoke.com/"
let btn = document.querySelector("#jokeBtn")
btn.addEventListener("click",()=>geJoke(url))
async function geJoke(url){ 
    let response = await fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    })
    let data = await response.json()
    jokeEl.textContent = data.joke    
}