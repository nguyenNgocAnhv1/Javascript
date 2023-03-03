
function getTotalGold(x) {
    return x.reduce(function (a, b) {
        return a += b.gold
    }, 0)
}
var sports = [
    {
        name: 'Bơi lội',
        gold: 11,
        vdv:[
            {
                hoTen: "Anh vien"
            }
        ]
    },
    {
        name: 'Boxing',
        gold: 3,
        vdv:[
            {
                hoTen: "Hoang V"
            }
        ]
    },
    {
        name: 'Đạp xe',
        gold: 4,
        vdv:[
            {
                hoTen: "Anh Thu"
            }
        ]
    },
    {
        name: 'Đấu kiếm',
        gold: 5,
        vdv:[
            {
                hoTen: "Linh vien"
            }
        ]
    },
]


// Expected results:
console.log(getTotalGold(sports)) // Output: 23
console.log("===============================================")
// 
var number = [11,3,4,5];
var total = number.reduce(function(x,y){
    return x += y;
})
//34 Don't need add },0)  because this variable is the same type of the return value ( if the redule don't have this variable, this variable will be the first value in the array.)
console.log(total)
console.log("===============================================")
// Flat array
var number = [11,3,4,5,[5,2,6],3,[2,2],"c"];
var flat = number.reduce(function(x,y){
    return x.concat(y);
},[])
console.log(flat)
console.log("===============================================")
// 
 var tenVDV = sports.reduce(function(x,y){
    return x.concat(y.vdv.reduce(function(x,y){
        return x.concat(y.hoTen)
    },[])) 
 },[])
console.log(tenVDV)

