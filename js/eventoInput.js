//// eventos en js



const inputname = document.querySelector('#nombre')

inputname.addEventListener('input', (e) => {
    console.log(e.target.value)
})

const inputpass = document.querySelector('#password')
inputpass.addEventListener('input', funtionPass) ///otrar forma de hacer funciones y reutilizar code

function funtionPass() {
    inputpass.type = 'text'

    setTimeout(() => {
        inputpass.type = 'password'
    }, 300);
}

console.log('Eventos de sudmit')

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', e => {
    e.preventDefault()
    const inputname = document.querySelector('#nombre').value   ///valor name del input
    const inputpass = document.querySelector('#password').value

    //// alertas creando objetos hijos del formulario

    //evitar que se cree varias veces la alerta
    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove()

    const alerta = document.createElement('DIV') /// objet full in type is uppper case 
    alerta.classList.add('alerta','text-white','uppercase','text-sm','text-center','font-black')

    if(inputname === '' || inputpass === ''){

        alerta.textContent = 'Todos los campos son requeridos '
        alerta.classList.add('bg-red-500')

    }else{
       alerta.textContent = 'Enviando los datos para ser procesados ...'
       alerta.classList.add('bg-green-500','p-2')
    }

    formulario.appendChild(alerta)  // agrega el nuevo div → aleta al objet form

    setTimeout(() => {
        alerta.remove(alerta) ///remueve un objeto html del control padre
    }, 2500);
})
