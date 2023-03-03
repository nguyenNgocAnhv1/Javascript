var sum  =(a,b) => a+b   // arrow function: if the block code not has {} the line code after is return 
var obj = (a,b) => ({a:b, b:a}) // return object, if the object surround is {}, you must use () to surround the block code 
var oneVar = a => console.log(a)
console.log(sum(1,2))
console.log(obj(1,2))
oneVar(" you no need to write () if the function get only 1 parameter")
// Arround function 
// Arround function can not use for countructor ( not has this attribute)
var hocSinh = (name, age) => {
    this.name = name
    this.age = age
}
var na = new hocSinh("Ngoc anh",18)
console.log(na.name)