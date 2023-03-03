// 1.Get element by classs
var getH1 = document.getElementsByClassName("h1c")
console.log(getH1)
// 2.Get element by id 
console.log("===")
var getElementById = document.getElementById("h1i")
console.log(getElementById)
// 3.Get element by tag name
console.log("===")
var getByTag = document.getElementsByTagName("h1").style.color = "red"; // Error, because this method return an array and an array can't change style. You can use [index] to change style
console.log(getByTag);
// 4.Get element by css selection
var getbyCSS = document.querySelector(".h1c:nth-child(2)")
console.log(getbyCSS)   

// 5. Get element by css selection all
var getbyCSSAll = document.querySelectorAll(".h1c")
console.log(getbyCSSAll)   
// 6. HTML coleection 
console.log("===")
var htmlColection = document.forms[0];
console.log(htmlColection)

/**
 * There are 5 main ways to get Element in DOM. 
 * You must note two types of equal. 
 * First, the method getElementByID and the method querySelector will return an element. This equal can use for other works.
 * Second, getElementsByClassName, getElementsByTagName, querySelectorAll will return a list element. You can use [index] to do other works.
 */