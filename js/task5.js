
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


const lenguaje =["VB",'C#','JS','React.JS',"DevExpress",'Java',"Kotlin","Xamarin","PHP","Angular"]
console.log(lenguaje.length)
console.log(lenguaje[3])

console.log("Distructuring array")
 const [,,,,,,kotlin,,,Angular] = lenguaje

 console.log(kotlin)
 console.log(Angular)

 lenguaje.forEach(element => {
    console.log(element)
 });

 console.log("-◘◘-MAP-◘◘-")
 const tecnologias = lenguaje.map(function(elemen){
    
    if(elemen === 'VB'){
        return 'Visual Basic 2024'
    }else{
        return elemen
    }
 });
console.table(tecnologias)

console.log("-◘◘-FOR OF-◘◘-")
 for( let i of lenguaje){
    console.log(i)
 }