url = "http://localhost:3000/courses"
var listCourseBlock = document.querySelector("#list-courses")

function start() {
    getCourse(renderCourse)
    handleCreateForm()
}
start()

// function
function getCourse(callBack) {
    fetch(url).then(function (response) {
        return response.json()
    }).then(callBack)
}
function renderCourse(courses_render) {
    var html = courses_render.map(function (course) {
        return `<li class="course-item-id-${course.id}">
            <h4>${course.name}:</h4>
            <span>${course.moTa}</span>
            <button onclick = handleDeleteCourse(${course.id})>Xóa</button>
            <button onclick = handleEditCourse(${course.id}) >Edit</button>
        </li>`
    })
    listCourseBlock.innerHTML = html.join("")
}
function createCourse(data, callBack) {
    var option = {
        method: "Post",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)

    }
    fetch(url, option).then(function (response) {
        return response.json()
    }).then(callBack)
}
// delete
function handleDeleteCourse(id) {
    var option = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },


    }
    fetch(url + "/" + id, option).then(function (response) {
        return response.json()
    })
}
// edit
function handleEditCourse(x) {
    fetch(url).then(function (response) {
        return response.json()
    }).then(function(courses){
        console.log(courses)
        courses.map(function(course){
            if(course.id == x){
                document.querySelector("#inputName").value = course.name
                document.querySelector("#inputMota").value  = course.moTa
                data = {
                    name: course.name,
                    moTa: course.moTa
                }
                document.querySelector("#create").innerText = "Sửa"
                handleCreateForm(course)
                
            }
        })
        console.log(data)
        return data
    })
    
    

}
function postEdit(new_data){
    var option = {
        method: "Post",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(new_data)

    }
    fetch(url + "/" + new_data.id, option).then(function (response) {
        return response.json()
    })
}
function handleCreateForm(new_data) {
    var createBtn = document.querySelector("#create")
    createBtn.onclick = function(){
        var textBtn = createBtn.innerText
        if(textBtn=="Tạo"){
            createBtn.onclick = function () {
                var name = document.querySelector("#inputName").value
                var moTa = document.querySelector("#inputMota").value
                var formData = {
                    name: name,
                    moTa: moTa
                }
                createCourse(formData, function () {
                    getCourse(renderCourse)
                })
            }
        }else{
            console.log("New data")
            console.log(new_data)
            console.log(" data")
            var name = document.querySelector("#inputName").value
                var moTa = document.querySelector("#inputMota").value
                var formData = {
                    name: name,
                    moTa: moTa
                }
            console.log(data)
            var option = {
                method: "Put",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },

                body: JSON.stringify(formData)
        
        
            }
            fetch(url + "/" + new_data.id, option).then(function (response) {
                return response.json()
            })
        }
    }
    
}
