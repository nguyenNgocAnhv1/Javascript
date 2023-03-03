// promise with many then.
var pms = new Promise(function (resolve, reject) {
  resolve(1)
});
pms.then(function (x) {
  console.log(x)
  return x+10;
}).then(function (x) {
  console.log(x)
  return x+1;
}).then(function (x) {
  console.log(x)
  return x+1;
}).catch(function () {
  console.log("failure")
}).finally(function () {
  console.log("done")
})
console.log("===")
// promise with promise

var pms2 = new Promise(function(resolve,reject){
  resolve()
})
pms2.then(function(){
  return new Promise(function(reject,resolve){
    setTimeout(function(){
      reject("sau 1s")
    },1000)
  })
}).then(function(x){
  console.log(x)
}).catch(function(){
  console.log("loi")
})
// promise exercise
var prm3 = new Promise(function(resolve,reject){
  resolve(500)
})
prm3.then(function(x){
  console.log(x)
  return x+1
}).then(function(x){
  console.log(x)
  return x+1
}).then(function(x){
  console.log(x)
  return x+1
}).then(function(x){
  console.log(x)
  return x+1
}).catch(function(){
  console.log("====Lỗi ")
})