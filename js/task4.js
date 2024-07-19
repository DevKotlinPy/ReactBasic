///destruccion mas 2 obj
const cliente = {
    nombre:"Ariel",
    Edad: 32,
    Mes: 4, 
    Genero :"M",
    mayorEdad: true,
    direccion: {
        calle:58,
        avenida:"La barca",
        Colonia:"La Maxil"
    }
}
const producto = {
    nombre:"Chocolate",
   categoria:"last",
   Precio: 352.5
}
const { nombre: nombreCliente, direccion:{calle}} = cliente
const { nombre } = producto
console.log(nombreCliente)
console.log(calle)
console.log(nombre)

const carrito = {
    cantidad: 5,
    ...producto  ///operador spread
}
carrito.Vencimiento ='2024/3/15'
console.table(carrito)
//---unionde de objetos--- 3 objetos en uno mismo
const nueva = {
    cliente,
    producto,
    carrito,
}
/// lo fuciona todo 
const nueva2 = {
    ...cliente,
    ...producto,
    ...carrito,
}
const n3 = Object.assign(producto, cliente,nombre)
console.log(nueva)
console.log(nueva2)
console.log(n3)

