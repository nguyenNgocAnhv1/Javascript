url = "https://jsonplaceholder.typicode.com/todos/"
// then_1
// fetch get api and then return a promise, the promise is an object, and the object has .json() menthod, 
// the method is parse(convert json to js type) and post it to then_2

// then_2
// After then_1, then_2 will get a list, and the list has all information what the back-end sends to the front-end
fetch(url).then((response)=>{
    console.log(response)
    return response.json();
}).then((post) =>{
    var html = post.map((userPost)=>{
        return `<li> ${userPost.title} </li>`
    })
    console.log(html)
    document.querySelector("#comment-block").innerHTML = html.join("")

}).catch(err =>{
    console.log(err)
})