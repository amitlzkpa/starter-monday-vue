<template>
  <div id="app">
    <Body />
  </div>
</template>

<script>
import Body from '@/components/Body.vue';

export default {
  name: 'App',
  components: {
    Body
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
