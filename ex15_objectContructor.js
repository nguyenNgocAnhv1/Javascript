function user (name, age, gpa){
    this.name = name;
    this.age = age;
    this.gpa = gpa;
    this.getIf = function(){
        return `${this.name} có gpa ${this.gpa}`;
    }
}
// object prototype
user.prototype.hocLuc = "Gioi"
user.prototype.getHocLuc = function(){
    return this.hocLuc
}
var author  = new user  ("Ngoc Anh",14,3.5)
var use  = new user  ("Anh Ngoc",19,5)
// author.hocLuc = "Kems"

// user.SieuNhan = true
console.log(use.constructor === user)
console.log("----------")
author.VIP = "Vip 12"
console.log(author)
console.log(author.VIP)
console.log("----------")
console.log(author.getIf())
console.log("----------")
console.log(author)

// object prototype
console.log(use.getHocLuc())
