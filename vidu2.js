var users = [
    {
      id: 1,
      name: 'Quoc Bao',
    },
    {
      id: 2,
      name: 'Son Dang',
    },
    {
      id: 3,
      name: 'Kien Le',
    }
  ];
  
  var comments = [
    {
      id: 1,
      user_id: 1,
      content: 'Anh Son oi em k hieu gi ca',
    },
    {
      id: 2,
      user_id: 2 ,
      content: 'Xem ky lai video em oi',
    },
    {
      id: 3,
      user_id: 1 ,
      content: 'Cam on anh',
    }
  ]
  
  // B1 lay comments
  // B2 Tu comments lay ra user_id,
  // Tu user_id lay ra user tuong ung
  
  // Fake API
  
  function getComments() {
    return new Promise(function(resolve){
      resolve(comments)
    });
  }
  
  function getUsersByIds(userIds) {
    return new Promise(function(resolve){
      var result = users.filter(function(user){
        return userIds.includes(user.id);
      });
      resolve(result)
    });
  }
  
  getComments()
    .then(function(comments){
    var userIds = comments.map(function(comments){
      return comments.user_id;
    })
    return getUsersByIds(userIds)
      .then(function(users){
        return {
          users: users,
          comments: comments,
        };
      });
    })
    .then(function(data){
      var html = '';
      var commentBlock = document.getElementById('comment-block');
      data.comments.forEach(function(comment){
        var user = data.users.find(function(user){
          return user.id === comment.user_id;
        });
        html += `<li>${user.name}: ${comment.content}</li>`
      });
      commentBlock.innerHTML = html;
    });