<template>
  <div>
    <h1 :class="red">Tesst new components</h1>
  </div>
</template>

<script>
export default {
  name: 'vidu',
  data() {
    return {
      red: "red"
    }
  }
}
</script>

<style lang="css" scoped>
.red {
  color: red;
}
</style>
