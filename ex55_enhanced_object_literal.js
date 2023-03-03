var name = "PHP"
var price = 1000
// 1.
var course = {
    name: name,
    price: price,
    getName : function(){
        return name
    }
}
// 2. Same result
var course_2 = {
    name,
    price,
    getName(){
        return name
    }
}
console.log(course_2.getName())
// 3
var key = "name"
course_3 = {
    [key] : "1234"
}
console.log(course_3)