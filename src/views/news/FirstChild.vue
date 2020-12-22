<template>
  <h1>FirstChild</h1>
</template>

<script>
export default {
  name: "FirstChild",
  beforeCreate() {
    this.$mySpinner.setSpinner('start');
  },
  created() {
    let vm = this;
    setTimeout(function () {
      vm.$mySpinner.setSpinner('stop');
    }, 1000)

  }
}
</script>

<style scoped>

</style>
