var course = ["Java","PHP","Ruby","C++"]
// function checkMap(language){
//     // console.log(x)
//     return `<h2> ${language} <h2>`
// }
// var result = course.map(checkMap)
Array.prototype.map2 = function(Callback){
    var Output = []
    // console.log(this)
    for (var i= 0; i<this.length; i++){
        Output.push(Callback(this[i]))
    
        
    }
    
    return Output
}
var result = course.map2(function(cour){
    // console.log(cour,index)
    return `<h2> ${cour}<h2>`
})
console.log(result.join(" - "))