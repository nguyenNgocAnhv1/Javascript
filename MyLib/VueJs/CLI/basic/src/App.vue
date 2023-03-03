<template>
  <ex1/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import vidu from './components/vidu.vue'
import ex1 from './components/ex1.vue'

export default {
  name: 'App',
  components: {
    ex1
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
