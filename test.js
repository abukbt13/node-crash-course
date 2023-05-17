// const name="Abraham"
// console.log(name)
function getAbraham(name) {
    console.log(`Hello ${name} I miss you`)
}
 // getAbraham('AAAARon')
 // getAbraham('John')
// setTimeout(()=>{
//     clearInterval(timer)
//     console.log('finished')
// },1000*6)
// const timer=setInterval(()=>{
//     console.log('hello world')
// },1000)
// console.log(__dirname)
// console.log(__filename)
// const os=require('os')
// console.log(os.platform())
const fs=require('fs')
fs.readFile('./docs/text.txt',(err, data) => {
    if (err){
        console.log(err)
    }
    console.log(data.toString())
})