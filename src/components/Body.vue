<template>
  <div>
    <p v-if="name !== null">
      Hello {{ name }}
    </p>
    <button @click="onBtnClick">Click me</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null
    };
  },
  async mounted () {
    const res = await this.monday.api('query { me { name } }');
    this.name = res.data.me.name;
  },
  methods: {
    async onBtnClick () {
      console.log('foo');
    }
  }
}
</script>

<style scoped>
</style>
