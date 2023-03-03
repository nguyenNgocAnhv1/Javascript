function first () 
{
//  confirm("Đồng ý")
}
first()
function second (message , ten)
{
    console.log(message)
    console.warn(ten)
}
second( "Alo alo","Xin chao ngọc anh");

// add string in function
function third (){
    myString =''
    tong = 0
    for (x of arguments){

        myString += `${x} __ `
        tong += x
    }
    
    return tong
    console.log(myString)

}

result = third(1,3,4,6)
console.log("Kết quả phép cộng dồn" ,result)
// Return in function 
function four(x){
    function five (a){
        return a*a
    }
    return five(x*2)
}
console.log(four(5))

six = function(a){
    console.log(a+a)
}
six(4)

