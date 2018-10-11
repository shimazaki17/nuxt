<template>
  <main>
  
  </main>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
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
