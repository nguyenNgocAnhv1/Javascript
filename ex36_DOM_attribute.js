// Change id h1 tag
var getH1 = document.getElementById("h1i").id="cc";
console.log(getH1)
var getH1_2 = document.getElementById("cc").style.color = "red"
console.log(getH1)
// Add attribute by js
console.log("===")
var x = document.getElementById("cc");
x.title = "H1 tag by js"      // add valid value attribute by js
x.setAttribute("abc","xyz")   // you can add every value even though this is illegal by this method.
console.log(x)
// get attribute ()
// Way 1: get valid attribute
console.log(x.title)
// Way 2: get any attribute
console.log(x.getAttribute("abc")) 