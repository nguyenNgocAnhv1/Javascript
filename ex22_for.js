// // for simple
// var x = ["Vol","GDH","EYS","RU7"];
// var i=0;
// var text
// for ( var i =0 ;i<x.length;i++){
//     console.log(x[i])
// }
// console.log(text)
// // for in
// console.log("===============")
// var person = {
//     1 : "CSV",
//     6 : "GFR",
//     4 : "ACR",
// }
// var name = ["Sieunhan","Nguoi binh thuong","Nguoi ngoai hanh tinh ","Co giao"]
// i=0
// for (let z of name){
//     console.log(z)
// }

// For loop
for (var i = 1; i<10;i++){
    console.log(i)
}
// For in: get key of array, String, direction
var person = {
    1 : "CSV",
    6 : "GFR",
    4 : "ACR",
}
for( var i in person){
    console.log(i)
}

// for of: get value of array, list
var x = ["Vol","GDH","EYS","RU7"];
for(var value of x){
    console.log(value)
}