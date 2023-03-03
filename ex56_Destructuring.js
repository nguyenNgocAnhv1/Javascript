// Get value in list, ...rest is get remaining value
var arr = ["PHP","JAVA","HTML","CSS"]
var [a,b,c,...rest] = arr
console.log(a,b,c,rest)

var obj = {
    name: "NgocAnh",
    age:  "18",
    sex: "Male",
    point: [1,2,4,5],
    like : "Nobita"
}
var {name:ten,like = "Doraemon", ...rest} = obj
console.log(ten,rest, like)
// name: ten : declare name = ten 
//  like = "Doraemon" -> set defaule value for variable
function logger (a,b, ...lastItem){
    console.log(a,b,lastItem)
}
logger(1,2,3,4,5)