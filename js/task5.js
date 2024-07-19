
const cliente = [
    "Ariel",
   32,
    4, 
   "M", true,
    "La Maxil"

]

const empleado = cliente.filter(function(tech){
    if(tech !== 'Ariel'){
        return tech
    }
})
console.log(empleado)

//cambiando cada iteracion sin mutar el arreglo para trabajar con react
const empleado2 = cliente.map(function(item){
    if(item === 4){
        return "Abril"
    }else{
        return item
    }
})
console.log(empleado2)


const lenguaje =["VC",'C#','JS','React.JS',"DevExpress",'Java',"Kotlin","Xamarin","PHP","Angular"]
console.log(lenguaje.length)
console.log(lenguaje[3])

console.log("Distructuring array")
 const [,,,,,,kotlin] = lenguaje

 console.log(kotlin)