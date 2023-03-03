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
function newC(x){
    var z = {
        name : `Khóa học ${x.name}`,
        coinText : `${x.coin}`
    }
    return Object.assign(x,z)
}
var newCourse = course.map(newC)
console.log(newCourse)

// map: loop through the array and return any value