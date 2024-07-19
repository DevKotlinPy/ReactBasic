const producto ={
    nombre : "ArielMarin", edad: 32, genero :'M', Mes:"Abril"
}

console.log(producto)
console.table(producto)

///destruction
const{ nombre, edad, Mes} = producto
console.log(nombre)
console.log(edad)
console.log(Mes)

//object literal
const aut = true 
const usu = 'Ariel Santos'

const nuevo={
    aut,
    usu: aut
}
console.log(nuevo)