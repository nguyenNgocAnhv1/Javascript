myString = "    12@34!567*98!!aB  c    "
// Lenghth
console.log(myString.length)
// Find index
console.log(myString.indexOf("!"))
console.log(myString.indexOf("!",7))
console.log(myString.lastIndexOf("!"))
console.log(myString.search("!"))
// Cut index
console.log(myString.slice(0,3))
console.log(myString.slice(-1))
// Replace
// console.log(myString.replace("!","-"))
console.log(myString.replace(/!/g,"-"))
// Up and low case
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())
// trim : slice the white space in start and end of the string
console.log(myString.trim())
// Split: conver sring to list
console.log(myString.split("!"))
// get char by index
console.log(myString.charAt(10))