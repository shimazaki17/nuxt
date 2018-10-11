<template>
  <div class="app-container">
    <Header></Header>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Common/Header'
  import Footer from '@/components/Common/Footer'
  export default {
    components: {
      Header,
      Footer
    },
  }
</script>
<style lang="scss">
  /*layout*/
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>

