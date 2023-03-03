var sieuNhan = {
    name: "Supermen",
    age: "18",
    attack: function(){
        console.log("You must use bind to use this function")
        document.write(this.name)
        return this.name
    }
}
// var _bind = sieuNhan.attack.bind(sieuNhan)
var normal = sieuNhan.attack()
// sieuNhan.attack()
// console.log(_bind())
normal.attack()

