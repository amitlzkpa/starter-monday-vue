<template>
  <div id="app">
    <Navbar />
    <Body />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Body from '@/components/Body.vue';

export default {
  name: 'App',
  components: {
    Navbar,
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
