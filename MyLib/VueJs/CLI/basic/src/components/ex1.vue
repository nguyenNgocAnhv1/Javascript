<template>
    <div>
        <h1 :class="textRed">Make me red</h1>
        <h1>{{ message.toUpperCase() }}</h1>
        <p @click="increasing">Count is: {{ counter.count }}</p>
        <input type="text" :value="text" @input="getText" />
        <p>{{ text }}</p>
        <img v-if="toggleImg" @click="functionToggleImg" height="100"
            src="https://img.freepik.com/free-vector/yes-chat-expression-comic-style-design_1017-27460.jpg?w=2000"
            alt="" />
        <img v-else @click="functionToggleImg" height="100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ProhibitionSign2.svg/1200px-ProhibitionSign2.svg.png"
            alt="" />
        <h6>V-model</h6>
        <form @submit.prevent @submit="addTodo">
            <p>List todo</p>
            <input type="text" v-model="newToDo">
            <button>AddTodo</button>
        </form>
        <ul>
            <li v-for="todo in toDos" :key="todo.id">
                {{ todo.text }}
                <button @click="removeTodo(todo)">x</button>
            </li>
        </ul>
    </div>
</template>

<script>
var id = 0
export default {
    data() {
        return {
            message: "Hello World!",
            text: "",
            counter: {
                count: 0,
            },
            textRed: "red",
            toggleImg: true,
            newToDo: "",
            toDos: [
                { id: id++, text: 'Learn HTML' },
                { id: id++, text: 'Learn JavaScript' },
                { id: id++, text: 'Learn Vue' }
            ]
        };
    },
    methods: {
        increasing() {
            this.counter.count++;
        },
        getText(e) {
            this.text = e.target.value;
        },
        functionToggleImg() {
            this.toggleImg = !this.toggleImg;
        },
        addTodo() {
            this.toDos.push({
                id: id++,
                text: this.newToDo,
            })
            this.newToDo = ""
        },
        removeTodo(t) {
            this.toDos = this.toDos.filter((todo) => todo != t)
        }
    },
};
</script>

<style lang="css" scoped>
.red {
    color: red;
}
</style>
