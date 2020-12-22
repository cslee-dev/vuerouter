<template>
  <div>
    <h1>뉴스 카운터</h1>
    <p>{{ count }}</p>
    <vs-button @click="countUp">카운터</vs-button>
    <router-link :to="{name:'FirstChildren'}">가가</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeNews",
  data() {
    return {
      count: 0
    }
  },
  beforeCreate(){
    this.$mySpinner.setSpinner('start');
  },
  created() {
    const vm = this;
    setTimeout(function () {
      vm.$mySpinner.setSpinner('stop');
    }, 1000)
  },
  methods: {
    countUp() {
      this.count++;
    }
  }
}
</script>

<style scoped>

</style>
