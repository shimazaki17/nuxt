<template>
    <div></div>
</template>

<script>
  export default {
    name: 'compare.vue',
    data() {
      return {
        title: '比較'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
