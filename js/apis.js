
const urls ='https://jsonplaceholder.typicode.com/users'
const urls2 ='https://jsonplaceholder.typicode.com/comments'
const urls3 ='https://jsonplaceholder.typicode.com/photos'
////Performance y multiples
function apiAsyncPer(url = ''){
    const apiAsync2 = async() => {
        try{
            const inicio  = performance.now()   
            const response =  await fetch(url)
            if(!response.ok){
                throw new Error("Halgo Salio Mal")
            }
            const data = await response.json()
            console.log(data)
            const fin = performance.now()
            console.log(`El resultado es ${fin - inicio} ms de ${url}`)
        }catch (error) {
            console.log(error)
        }
    }
    apiAsync2()
}
console.log('◘◘◘ Apis Async perfor')
console.log(apiAsyncPer(urls))
console.log(apiAsyncPer(urls2))
console.log(apiAsyncPer(urls3))

