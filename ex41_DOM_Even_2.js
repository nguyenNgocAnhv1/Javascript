var inputElement = document.querySelector(".input-text")
console.log(inputElement)
// get text of input tag
inputElement.onchange = function(e){  // oninput: when you change text || onchange when you change text and out click
    console.log(e.target.value)

} 
// get check
document.querySelector(".input-box").onchange = function(e){
    console.log(e.target.checked);
}
// get select (value attribute in select)
document.querySelector("#select_1").onchange = function(e){
    console.log(e.target.value);
}

// keydow: when you click key
// keyup: keydow and stand up
// keypress: when you long press key
document.onkeyup = function(e){
    console.log(e.which)
}