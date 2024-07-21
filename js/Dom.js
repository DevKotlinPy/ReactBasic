
const heading = document.querySelector('.heading')

console.log(heading)
console.log(heading.tagName)
console.log(heading.textContent)
console.log(heading.className)
console.log(heading.id)


const  enlaces = document.querySelectorAll(".navegacion a")

console.log(enlaces)

///manipular elementoshtml y css con js
console.log("manipular elementoshtml y css con js")

const heading2 = document.querySelector('.heading')
const  enlaces2 = document.querySelectorAll(".navegacion a")

heading2.textContent ='Introduccion al DOm para React'
heading2,id='NewDom'

enlaces2.item(0).textContent = "Hola React js"
enlaces2.item(1).textContent = "Hola Node js"
enlaces2[2].textContent = "Hola React Native"
enlaces2[3].textContent = "Hola TypeScript"

enlaces2.forEach( enlaces2 => enlaces2.className ='font-black')

enlaces.item(0).ariaSetSize = 8