//// eventos en js

const heading = document.querySelector('.heading')
const  enlaces = document.querySelectorAll(".navegacion a")

///https://developer.mozilla.org/es/docs/Web/API/Element
heading.addEventListener('click',() =>{
    heading.textContent ='React y Type Script'
   
    console.log(heading.textContent)
})

enlaces.forEach(enlaces =>{
    enlaces.addEventListener('click',(e) =>{
        e.preventDefault()  ///ayuda a evitaer recargar el enlace que es la accion por defecto
        const nombre = e.textContent
        e.target.textContent =`Diste click en ${enlaces[e]}`

        
        console.log(e.target)
    })
})