document.querySelector(".ip").onchange = function (){
    var x = document.querySelector(".ip");
    // console.log(x)
    x.value = x.value.toUpperCase()

}
var h1_1 = document.querySelector("#h1i");
h1_1.onmouseout = function(e){
    h1_1.className = Math.random()
    console.log("h1 has been click")
    // alert("click h1")
    console.log(this)
    console.log(e.target)
}
