var users = [
    {
        id: 1,
        name: "Kiên đàm",
    },
    {
        id: 2,
        name: "Sơn đặng",
    },
    {
        id: 3,
        name: "Ngọc Anh",
    }
]
var cmt = [
    {
        id: 1,
        userId: 1,
        content: "Anh Sơn chưa ra video à",
    },
    {
        id: 2,
        userId: 2,
        content: "Anh Sơn chưa ra video à",
    },
    {
        id: 1234,
        userId: 2,
        content: "Anh vừa ra xong em ơi",
    }
]
// Get cmt -> UserId -> User Tương ứng.
function getUserByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter((user) => {
            return userIds.includes(user.id)
        })
        resolve(result)
    })
}
function getCmt() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(cmt);
        }, 1000)
    })
}
getCmt().then(function (cmt) {
    
    var userIds = cmt.map(function (x) { // get all cmt, then put id user cmt to userIds
        return x.userId
    })
    return getUserByIds(userIds).then(function (result) {
        return {
            users: result,
            cmts: cmt,
        }
    })
}).then((data)=>{
    // console.log(data)
    // var cmtBlock = document.getElementById("comment-block")
    // var html = ""
    // data.cmts.forEach(function(comment){
    //     var user = data.users.find(function(user){
    //       return user.id === comment.user_id;
    //     });
    //     console.log(user)
    //     html += `<li>${user.name}: ${comment.content}</li>`
    //   });
    // console.log(cmtBlock)
    // cmtBlock.innerHTML = html
    var html = '';
      var commentBlock = document.getElementById('comment-block');
      data.cmts.forEach(function(comment1){ 
        var user3 = data.users.find(function(user){
            return user.id == comment1.userId;
            
          });
        html += `<li>${user3.name}: ${comment1.content}</li>`
      });
      commentBlock.innerHTML = html;
})