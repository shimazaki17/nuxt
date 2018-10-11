<template>
  <main :class="`page__${page}`">
  
  </main>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['page'])
    },
  }
</script>

<style scoped>

</style>
