var num=10;
function countDown(num){
    if(num>0){
        console.log(num);
        num--;
        return countDown(num);
    }
    return
}
countDown(3)
console.log("===")
// De quy
function deQuy(num){
    if (num > 0 ){
        return num * deQuy(num-1)
    }
    return 1;
}
console.log(deQuy(5))