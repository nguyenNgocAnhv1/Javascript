var hocLuc = "VIP"  //*1

var myinfo = {
    name : "NgocAnh",
    age : 19,
    gpa: 3.4,
    [hocLuc]: "Xuất xắc",
    x : function (){
        return this.gpa
    }
}
myinfo.email = "ngoc21anh.com"
myinfo.email = "ngoc2321anh.com"

console.log(myinfo)
console.log(myinfo["name"])
console.log(myinfo.gpa)

// Create  keys by variable ( variable container the key name)
console.log("-----")
var nickname = "name"
console.log(myinfo[nickname])
console.log(myinfo)
// Create a variable that is key in the object. The variable has a key and that key which uses an object like a key but perform by name of the variable *1
console.log("-----")
console.log(myinfo)
// Delete a key
console.log("-----")
delete myinfo.hocLuc
console.log(myinfo)
console.log(myinfo.x())

// function: phương thức --> menthod
// other: thuộc tính --> property



