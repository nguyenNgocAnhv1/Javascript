var getH1 = document.getElementsByClassName("h1c")
console.log(getH1)
// document.getElementsByClassName("h1c").style.color = "red"
document.getElementById("h1i").style.color = "red"
document.querySelector(".h2c").style.color = "blue"
// Can't select many element.

document.querySelector(".btn").onclick = function () {
    document.querySelector(".img").height = "50"
}
var box = document.querySelector(".box");
// box.style.height = "50px"
// box.style.width = "50px"
// box.style.backgroundColor = "blue"
console.log(box.style)
Object.assign(box.style, {
    height : "150px",
    width : "150px",
    backgroundColor : "green"
})