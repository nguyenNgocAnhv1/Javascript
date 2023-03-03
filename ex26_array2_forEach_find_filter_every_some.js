var course = [
    {   
        id : 1,
        name : "Java",
        coin : 100,
    },
    {   
        id : 2,
        name: "Javascrip",
        coin: 0,
    },
    {
        id : 3,
        name: "PHP",
        coin: 103
    },
    {
        id : 3,
        name: "PHP",
        coin: 1014
    },
    {
        id : 3,
        name: "PHP",
        coin: 1011
    }

]
// Print all every elements in an array. .forEach is the loop go though array
course.forEach(function(cours,index){
    for(var i in cours){
        console.log(cours[i])
    }
})
console.log("======================")
// Every: loop through the array and compare elements then return a boolean variable. Every work like &&
var i = course.every(function(x,y){
    return x.coin > 0
})
console.log(i)
console.log("======================")
// Some loop through the array and compare elements then return a boolean variable. Every works like ||
var i = course.some(function(x,y){
    return x.coin > 0
})
console.log(i)
console.log("======================")
// Find: find and return  first element that find. 
var i = course.find(function(x,y){
    return x.id == 3
})
console.log(i)
console.log("======================")
// Filter: find and return  first element that find. 
var i = course.filter(function(x,y){
    return x.id == 3
})
console.log(i)
console.log("======================")


