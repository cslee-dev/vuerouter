<template>
  <div>
    <h1>haha</h1>
    <router-link :to="{name: 'HomeNews'}">news go</router-link>
  </div>
</template>

<script>
export default {
  name: "Main",
  created(){
    let vm = this;
    setTimeout(function(){
      vm.$mySpinner.setSpinner('stop');
    }, 1000)
  }
}
</script>

<style scoped>

</style>
