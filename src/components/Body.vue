<template>
  <div>
    <h1>Monday Vue Starter</h1>
    <button @click="apiTest">API Test</button>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: null
    };
  },
  methods: {
    async apiTest () {
      try {
        const res = await this.monday.api('query { me { name } }');
        this.text = `Hello ${res.data.me.name}`;
      } catch {
        this.text = `Error. Make sure you app has permissions for API.`
      }
    }
  }
}
</script>

<style scoped>
</style>
