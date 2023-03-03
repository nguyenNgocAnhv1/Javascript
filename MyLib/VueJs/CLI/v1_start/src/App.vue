<template>
  <img @click="clickMe" alt="Vue logo" src="./assets/logo.png">
  <HelloWorld ref="hello" msg='Ngojc Anh hojc vue js' />
  <Header ref ='header'></Header>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/HeaderVip.vue'
export default {
  name: 'App',
  data() {
    return {
      name: 'ngoc anh'
    };
  },
  components: {
    HelloWorld,
    Header,
},
  methods: {
    clickMe() {
      alert("Ow, I am here", this.name)
      console.log(this.$refs.hello);
      console.log(this.$refs.header);
      this.$refs.hello.consoleTest();
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
