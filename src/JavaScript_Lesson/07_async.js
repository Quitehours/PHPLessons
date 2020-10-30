//Асинхронность 
//Джава однопоточный
//Event Loop
//timeout-хотим завести таймаут на отзыв
// setTimeout(()=>{
//     console.log('After timeout')
// },2500)// 1-функциия возврата 2- 2,5s-2500mls-милисекунд

// const timeout = setTimeout(()=>{
//     console.log('After timeout'), 2500
// }) 
// clearTimeout(timeout)//Обнуление таймаута, время оиждания

// const interval = setInterval(() => {
//     console.log('After timeout')
// }, 1000); //Интвервалы выносятся для того, чтобы запускать что-то с промежутком

const delay = (wait = 1000) => {
    const promise = new Promise( (resolve,reject) => { //new Promise (resolve,reject)
    setTimeout( () => {
        // resolve()//все хорошо нет проблем вызывается при таких случаях
        reject('Что-то пошло не так. Повторите попытку')//выводит в кэ  тче ошибку
    }, wait)
    })
    return promise
}
// delay(2500)
// .then(()=>{'After 2 seconds'}) //promise 
// .catch(()=>{console.error('Error',err)})
// .finally(console.log('Finally'))

const getData = () => new Promise(resolve=>resolve([
    1,2,3,5,8
]))
// getData().then(data=>console.log(data))

async function asyncExample () { //async - асинхронная функция позволяет писать await
    try { //try catch  для reject
        await delay(3000) //awit - ожидает пока пройдет время и выполниться запрос, после идет дальше
        const data = await getData()
        console.log('Data', data)
    } catch(e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }
}
asyncExample()