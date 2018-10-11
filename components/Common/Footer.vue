<template>
   <footer class="footer">
     <nav class="menu container">
       <ul class="columns is-vcentered">
         <li class="column is-3">
           <nuxt-link to="/"><img src="../../assets/img/logo.svg" alt="Hinadan"></nuxt-link>
         </li>
         <li class="column is-3" v-for="item in nav_items" :key="item.id"><nuxt-link :to="item.url">{{item.name}}</nuxt-link></li>
       </ul>
     </nav>
     <div class="content has-text-centered">
       <address>© 2012-2018 Hinadan</address>
     </div>
   </footer>
</template>

<script>
  export default {
    data() {
      return {
        test: 'test',
        nav_items: [
          {
            id:1,
            name: 'オンライン作成',
            url: '/template'
          },
          {
            id:2,
            name: '契約書比較',
            url: '/compare'
          },
          {
            id:3,
            name: '契約書全集',
            url: '/works'
          },
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
  .footer {
    background-color: $footer-background-color;
    padding: 3.5rem 0 0;
    a {
      color: $white;
      @include transition();
      &:hover {
        color: $primary;
        @include transition();
      }
    }
    
    .menu {
      margin-bottom: 2rem;
      padding: 0 1rem;
    }
  }
  address {
    background-color: $footer-address-bg;
    padding: 1rem;
    font-style: normal;
    color: $white;
  }
</style>
