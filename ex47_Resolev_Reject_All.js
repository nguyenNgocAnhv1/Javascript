// Promise only false
var prm = Promise.reject("Success")
prm.then((x)=>{
    console.log(x)
}).catch((x)=>{
    console.log("error")
})
// Promise.all: 
var prm2 = new Promise(function(x){
    setTimeout(()=>{
        x()
    },3000)
})
var prm3 = new Promise(function(x){
    setTimeout(()=>{
        x();
    },1000)
})
Promise.all([prm2,prm3]).then(()=>{
    console.log("After 3s")
}).catch(()=>{
    console.log("Looix sml")
})