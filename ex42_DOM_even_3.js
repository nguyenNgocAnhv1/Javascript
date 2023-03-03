// Set a tag condition  navigation
var aTag = document.links;
for (var i = 0; i < aTag.length; i++) {
    aTag[i].onclick = function (e) {
        console.log(e.target.href)
        // var x = e.target.href == "https://9nice.site/";
        // console.log(x);
        if (e.target.href != "https://9nice.site/") {
            console.log(e.target.href == "https://9nice.site/");
            e.preventDefault();
        }
    }
}
var input = document.querySelector(".ip_3");
console.log(input);
document.querySelector(".ul_1").onmousedown = function(e){
    e.preventDefault(); 
}
document.querySelector(".ul_1").onclick = function(e){
    e.stopPropagation();
    console.log(e.target);
}
document.querySelector(".d_1").onclick = function(e){
    console.log("the d_1")
    e.stopPropagation();
}
document.querySelector(".b_1").onclick = function(e){
    console.log("the b_1");
    e.stopPropagation();

}