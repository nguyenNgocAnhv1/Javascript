// Show notice
alert("Show notication")
// Console
console.log("Alo")
console.warn("Warn")
console.error("Failure")
// Show notice
confirm("Are you 18 year old")
// Show notice and form 
prompt("How old are you")
// Run after set time
setTimeout(function() {
    confirm("After 5s")
}, 5000)
// Auto run after set time
setInterval (function() {
    console.log("This is Interval" + Math.random())
}, 1000)