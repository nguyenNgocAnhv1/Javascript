// Class list property

// add
// contains
// remove
// toggle
// replace: replace class : document.querySelector('p').classList.replace('sub-title', 'content');
var h1 = document.querySelector(".h1c");
console.log(h1.classList)
// add class blue
h1.classList.add("blue")
console.log(h1.classList)
// check class in blue in h1: true or false
console.log(h1.classList.contains("blue"))
// remove class blue in h1 
setTimeout(function(){
    h1.classList.remove("blue")
},3000)
// Toggle: add class if the tag don't have this class, and vice versa (remove the  class if the class has been) 
setInterval(()=>{
    document.querySelector("img").classList.toggle("scale")
},1000)
