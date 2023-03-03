function literal ([first,...strings],...value){
    console.log(first)
    console.log(strings)
    console.log(value)
    return value.reduce(function (x,y) {
        return [...x, y.toUpperCase(),strings.shift()]
    },first).join("")
    
}
var name = "ngoc anh"
var like = "javascrip"
var s = literal`Tôi là ${name}. Tôi thích học  ${like} !!!!,`
console.log(s)