<template>
  <header class="header" :class="`${page}-body`">
    <div class="container">
      <nav class="menu-navigation">
        <div class="logo">
          <nuxt-link to="/">
          <img src="../../assets/img/logo.svg"
               alt="HINADAN">
          </nuxt-link>
        </div>
      </nav>
      <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
  
      <div class="navbar-menu" id="navMenu">
        <ul class="menu">
          <li><nuxt-link to="/template">オンライン作成</nuxt-link></li>
          <li><nuxt-link to="/compare">契約書比較</nuxt-link></li>
          <li><nuxt-link to="/template">契約書全集</nuxt-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data() {
      return {
      
      }
    },
    computed: {
      ...mapState(['page'])
    },
    methods: {
      ...mapMutations(['updatePage'])
    },
    beforeMount () {
      console.log(this.page)
    }
 }
</script>

<style scoped lang="scss">
  
  .header {
    min-height: 5rem;
    display: flex;
    align-items: center;
    background-color: $header-background-color;
    .container {
      width: 100%;
      @include from ($tablet) {
        display: flex;
      }
    }
    
    .logo {
      padding:  0 1rem;
    }
  }
  .menu-navigation {
    background-color: transparent;
    display: flex;
    justify-content: center;
  }
  .menu {
    display: flex;
    align-items: center;
    li {
      padding: 0 1rem;
      a {
        color: $white;
        &:hover {
          color: $primary;
          transition: all .3s;
        }
      }
    }
  }
  .navbar-burger {
    position: absolute;
    right: 0;
    top: 0;
    height: 43px;
    
    &:hover {
      background-color: transparent;
    }
  }
</style>
