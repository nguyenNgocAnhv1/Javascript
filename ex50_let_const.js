// Var is a global variable, let and const only work in the code block, and const can not change the value 
if(true){
    var _var = "This is var "
    let _let = "This is let"
    const _const = "This is const"
}
console.log(_var)
console.log(_let)  // err  
console.log(_const) // err