var btn = document.querySelector(".b_1");
// over write onclick event;
btn.onclick = function(e){
    console.log("Ghi de on clik")
}
btn.onclick = function(e){
    console.log("over write")
}
// add and remove eventt listener;

function even1(e){
    console.log(e)
    alert("hello, evenlistener");
}
btn.addEventListener("click",even1)
function even2(e){
    prompt("Nhập ")
}
btn.addEventListener("click",even2)
setTimeout(() => {
    btn.removeEventListener("click",even1)
}, 3000);