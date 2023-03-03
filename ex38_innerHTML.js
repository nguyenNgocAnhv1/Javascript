var box = document.querySelector(".box");
box.innerHTML = '<h1 class = "h1ByinnerHTMLClass">H1 by innerHTML</h1>';
var h1ByinnerHTML = document.querySelector(".box h1");
console.log(h1ByinnerHTML)
h1ByinnerHTML.id = "h1byinnerHtml"
// console.log(h1ByinnerHTML.innerHTML)
h1byinnerHtml.innerHTML = '<h3>H3 by inner HTML</h3>'
box.innerHTML = "Overwrite All Code In Box (Delete alll)"

// outer html, overwrite code htmk
box.outerHTML = "Delete div box"