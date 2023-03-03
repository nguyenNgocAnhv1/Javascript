//  Class is constructor but the class has difference style code
// case 1: 
function sieuNhan_old(color, weapons){
    this.color = color
    this.weapons = weapons
    this.attack = function(){
        console.log(this.weapons)
    }
}
// case 1: 
class sieuNhan_new{
    constructor(color, weapons){
        this.color = color
        this.weapons = weapons
    }
    attack(){
         console.log(this.weapons)
    }
}
gaoDo = new sieuNhan_new("red","Chem chem chem")
gaoDo.attack()