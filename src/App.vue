<template>
  <div id="app">
    <div class="con-vs-loading vs-loading-color-undefined" id="loading-bg">
      <div class="title-loading">Loading...</div>
      <div class="vs-loading corners">
        <div class="effect-1 effect"></div>
        <div class="effect-2 effect"></div>
        <div class="effect-3 effect"></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
