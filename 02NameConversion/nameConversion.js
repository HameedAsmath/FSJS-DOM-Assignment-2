const input = document.querySelector("#text")
const button = document.querySelector("#convert-btn")
button.addEventListener("click",()=>convert())
let camelCase = document.querySelector("#camel-case")
let pascalCase = document.querySelector("#pascal-case")
let snakeCase = document.querySelector("#snake-case")
let ScreamingSnakeCase = document.querySelector("#screaming-snake-case")
let kebabCase = document.querySelector("#kebab-case")
let ScreamingKebabCase = document.querySelector("#screaming-kebab-case")



function convert(){
    const text = input.value
    //camelCase
    function camalize(str) {
        return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }
    //function PascalCase
    function pascal(str){
        return str.replace(/\w+/g,
        function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();})
    }
    //function snakecase
    function snakecase(str){
        const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
           return acc.concat(val.toLowerCase());
        }, []);
        return snakeArr.join('_');
     };
     //function screamingSnakeCase
     function screamingSnakeCase(str){
        const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
           return acc.concat(val.toUpperCase());
        }, []);
        return snakeArr.join('_');
     };
     //function kebab
     function kebab(str){
        const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
           return acc.concat(val.toLowerCase());
        }, []);
        return snakeArr.join('-');
     };
     //function s_kebab
     function s_kebab(str){
        const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
           return acc.concat(val.toUpperCase());
        }, []);
        return snakeArr.join('-');
     };
    const pascalText = pascal(text)
    const camelText = camalize(text)
    const snakeText = snakecase(text)
    const kebabText = kebab(text)
    const s_snakeText = screamingSnakeCase(text)
    const s_kebabText = s_kebab(text)
     camelCase.textContent = camelText
     pascalCase.textContent = pascalText
     snakeCase.textContent = snakeText
     ScreamingSnakeCase.textContent = s_snakeText
     kebabCase.textContent = kebabText
     ScreamingKebabCase.textContent = s_kebabText
}
