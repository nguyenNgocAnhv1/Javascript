//  Print 1,2,3, ..., n affter 1s
/*
var time = 1000;
var prm = new Promise(function (x, y) {
    x(1)
})
prm.then(function (x) {
    setTimeout(function () {
        console.log(x)

    }, time)
    time+=1000
    return x + 1;
}).then(function (x) {
    setTimeout(function () {
        console.log(x)

    }, time)
    time+=1000

    return x + 1;
}).then(function (x) {
    setTimeout(function () {
        console.log(x)

    }, time)
    time+=1000

    return x + 1;
}).catch(function () {
    console.log("Lỗi")
})
Easy way
*/
function slep(value,ms){
    return new Promise((x) => {
        setTimeout(() => {
            x(value);
        }, ms);
    })
}
slep(1,1000).then((value)=>{
    console.log(value)
    return slep(value+1,1000);
}).then((value)=>{
    console.log(value)
    return slep(value+1,1000);
}).then((value)=>{
    console.log(value)
    return slep(value+1,1000);
}).catch(()=>{ 
    console.log("Lỗi")
})