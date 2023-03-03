<template>
  <teleport to = "body">
      <!-- <vidu /> -->
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <md 
  v-if="isShow"
  message = "Heyy, this is msq from app.vue"
  theme = "error"
  >
  <p>This iss slot default</p>
  <input type="text">
  <template v-slot:header>
    This is the slot header, It will on the top at default
  </template>
</md>
  </teleport>
  
  <button @click.ctrl="onToggleModal">Click + ctrl to show</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import vidu from "./components/vidu.vue";
import modalVue from "./components/MdModal.vue"
export default {
  name: "App",
  components: {
    HelloWorld,
    vidu,
    md: modalVue
  },
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    onToggleModal(){
      this.isShow = !this.isShow
    }
  }
};
</script>

<style>

</style>
