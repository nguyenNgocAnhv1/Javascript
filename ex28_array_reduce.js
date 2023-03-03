var course = [
    {   
        id : 1,
        name : "Java",
        coin : 100,
    },
    {   
        id : 2,
        name: "Javascrip",
        coin: 0,
    },
    {
        id : 3,
        name: "PHP",
        coin: 2
    },
    {
        id : 3,
        name: "PHP",
        coin: 1
    },
    {
        id : 3,
        name: "PHP",
        coin: 1
    }

]
// x is Gia trị được gắn bằng 0 để tiện cho tính tổng
// y là biến mà hàm đi qua.
function tinhTong(x,y){
    return x + y.coin
}
var ketQua = course.reduce(tinhTong,0)
console.log(ketQua)


// Reduce: loop through the array and return any value. Reduce usually use for sum the elements