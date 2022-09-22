const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];
let button1 = false
let button2 = false
let button3 = false

function createFaq() {
  faqData.forEach((faqData)=>{
  let faq = document.createElement("div")
  let faq_header = document.createElement("div")
  faq_header.className = "faq_header" 
  let p  = document.createElement("p")
  p.className = "answer"
  p.setAttribute("id",faqData.id)
  let button = document.createElement("button")
  button.setAttribute("id",faqData.id)
  button.className = "show_btn"
  button.innerHTML="+"
  faq.classList.add("faq","faq_header")
  let h3 = document.createElement("h3")
  let h3Text = document.createTextNode(faqData.question)
  let pText = document.createTextNode(faqData.answer)
  h3.appendChild(h3Text)
  p.appendChild(pText)
  faq_header.appendChild(h3) 
  faq_header.appendChild(button) 
  faq.appendChild(faq_header) 
  faq.appendChild(p) 

  accordianBody.appendChild(faq)
})
}
createFaq()
let plusButtons = document.querySelectorAll(".show_btn")
plusButtons.forEach((plusButton)=>{
  plusButton.addEventListener("click",()=>btnStatusUpdate(plusButton))
})

function btnStatusUpdate(plusButton) {
  if(plusButton.id == 1){
    button1 ? button1=false : button1=true
    button1 ? plusButton.innerHTML = "+" : plusButton.innerHTML="-"
  }
  if(plusButton.id == 2){
    button2 ? button2=false : button2=true
    button2 ? plusButton.innerHTML = "+" : plusButton.innerHTML="-"
  }
  if(plusButton.id == 3){
    button3 ? button3=false : button3=true
    button3 ? plusButton.innerHTML = "+" : plusButton.innerHTML="-"
  }
  let p = document.querySelectorAll(".answer")
  if(button1){
    p[0].style.display = "none"
   
  }else{
    p[0].style.display = "block"
  }
  if(button2){
    p[1].style.display = "none"
  }else{
    p[1].style.display = "block"
  }
  if(button3){
    p[2].style.display = "none"
  }else{
    p[2].style.display = "block"
  }
}




