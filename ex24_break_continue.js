// break: stop the  loop
for(var i = 0; i<10;i++){
    if(i == 5){
        break
    }
    console.log(i)
}
console.log("=========")
// continue: skip the loop
for(var i = 0; i<10;i++){
    if(i % 2 == 0){
        continue
    }
    console.log(i)
}