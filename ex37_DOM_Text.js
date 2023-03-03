// get text
console.log(document.querySelector(".h1c").textContent)
console.log(document.querySelector(".h1c").innerText)

// Set text
document.querySelector(".h1c").innerText = `

H1 BY JS inner

`;
document.querySelectorAll(".h1c")[1].textContent = 
`

H1 BY JS textContent 3




`;
// document.querySelectorAll(".h1c")[1].textContent = "H by JS";
// innerText show real text you see on browser (font-end)
// textContent show all text in back-end