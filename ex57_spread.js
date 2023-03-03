// Concat list
var arr1 = ["Java","PHP"]
var arr2 = ["JS","HTML"]
var arr3 = [...arr1,...arr2]
console.log(arr3)

// object and override
var sinhVien1 = {
    name: "NgocAnh",
    age: "12"
}
var sinhVien2 = {
    ...sinhVien1,
    name: "HoangMai",
    age: "18"
}
console.log("===")
console.log(sinhVien2)
function testSpread (a,b,c){
    console.log(a,b,c)
}
testSpread(...arr3)