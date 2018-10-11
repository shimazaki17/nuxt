<template>
  <main class="app-main">
    <section class="section is-hero">
      <div class="container">
        <div class="columns is-vcentered reverse-columns">
          <div class="column is-half has-text-centered">
            <h1 class="title is-4">オンラインで簡単に<br class="is-hidden-mobile">プライバシーポリシー作成</h1>
            <nuxt-link to="/question" class="button is-rounded is-primary is-medium">無料作成</nuxt-link>
          </div>
          <div class="column is-half has-text-centered">
            <img src="../assets/img/img-laptop.png" alt="">
          </div>
        </div>
      </div>
    </section>
    
    <section class="section lead">
      <div class="container">
        <div class="columns">
          <div class="column has-text-centered privacy">
            <img src="../assets/img/icon_privacy.png" alt="PRIVACY POLICY">
            <h3 class="title is-5">簡単！フォームに入力するだけで<br>プライバシーポリシーを作成</h3>
            <nuxt-link to="/template" class="button is-outlined is-primary">プライバシーポリシー作成</nuxt-link>
          </div>
          <div class="column has-text-centered ai">
            <img src="../assets/img/icon_ai.png" alt="PRIVACY POLICY">
            <h3 class="title is-5">AIによる<br>契約書の差分チェック</h3>
            <nuxt-link to="/compare" class="button is-outlined is-primary">契約書比較</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    
    <section class="complete-works section">
      <div class="container">
        <h1 class="title is-4 section--title">契約書全集 <br><span class="is-size-6">Free Legal Document</span></h1>
      </div>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-4" v-for="(card, idx) in cards" :key="card.id" >
              <nuxt-link :to="`/documents/detail?id=${card.id}`">
                <div class="notification" :class="`notification-${idx}`">
                  <div class="content">
                    <h3 class="title is-6 is-primary">{{card.title}}</h3>
                    <div class="entry"><span>{{card.num}}</span><span>entry</span></div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <div class="more">
        <nuxt-link to="/document/" class="button is-rounded is-secondary">もっと見る</nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  export default {
    name: 'top',
    data() {
      return {
        title : 'TOP',
        cards: [
          {
            id: 1,
            title: 'プライバシーポリシー',
            num: 21
          },
          {
            id: 2,
            title: '売買契約（不動産関係）',
            num: 21
          },
          {
            id: 3,
            title: '売買契約（不動産関係以外）',
            num: 21
          },
        ]
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'Hinadan 弁護士監修のプライバシーポリシー自動生成' }
        ]
      }
    },
    computed: {
      ...mapState(['page'])
    },
    methods:{
      ...mapMutations('matsushita/index', ['increment'])
    },
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  .app-main {
    margin-top: -5rem;
  }
  .is-hero {
    min-height: calc(100vh);
    display: flex;
    align-items: center;
    background-image: url("../assets/img/img-top-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    .title {
      color: $white;
    }
  }
  .lead {
    padding-bottom: 30px;
    overflow: hidden;
    width: 100%;
    position: relative;
    z-index: 9;
    .container {
      margin-bottom: 10rem;
    }
    img {
      margin-bottom: 1rem;
    }
    .button {
      min-width: 200px;
    }
    &::after {
      @include from($tablet) {
        content: "";
        position: absolute;
        top: 87%;
        width: 300%;
        height: 200%;
        background: $primary;
        border-radius: 100%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        z-index: 10;
      }
    }
  }
  .complete-works {
    padding: 3rem 0 5rem;
    background: $primary;
    @include from($tablet) {
      padding-top: 0;
    }
    a {
      color: $primary;
      .notification-0 {
        color: $primary;
        .title{
          &::after {
            background-color: $primary;
          }
        }
      }
      .notification-1 {
        color: $secondary;
        .title{
          &::after {
            background-color: $secondary;
          }
        }
        
      }
      .notification-2 {
        color: $tertiary;
        .title {
          &::after {
            background-color: $tertiary;
          }
        }
      }
    }
    .notification {
      min-height: 12rem;
      position: relative;
      &:hover {
        transition: all .3s;
      }
      .title {
        position: relative;
        margin-bottom: 1.5rem;
        &::after {
          background-color: $primary; /* 線色 */
          border-radius: 3px; /* 線幅の半分 */
          content: "";
          display: block;
          height: 6px;
          position: absolute;
          width: 100%;
          top: 1.5rem;
        }
      }
      
      .entry {
        position: absolute;
        text-align: right;
        right: 2.5rem;
        bottom: 1rem;
      }
    }
    .more{
      text-align: center;
    }
  }
  .reverse-columns {
    flex-direction: column-reverse;
    display: flex;
    @include from($tablet) {
      flex-direction: row;
    }
  }

</style>

