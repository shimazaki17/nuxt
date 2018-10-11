module.exports = {
  css: [
    // node.js module but we specify the pre-processor
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Hinadan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hinadan 弁護士監修のプライバシーポリシー自動生成' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/scss/import.scss']
  ],
  router: {
    middleware: 'pages'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2ABDBC' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            customProperties: false
          }
        }
      }
    },
    extractCSS: true,
    styleResources: {
      scss: './assets/scss/import.scss',
      options: {
        // https://github.com/yenshih/style-resources-loader#options の
        // `patterns` プロパティ以外を参照してください。
      }
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!isDev) {
        // relative links, please.
        config.output.publicPath = './_nuxt/'
      }
      return config;
    },
  },
  generate: {
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: true,
      trimCustomFragments: true,
      useShortDoctype: true
    },
  }
}

