export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blogkarma_fe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    baseUrl: process.env.NUXT_ENV_BASE_URL || 'http://localhost:3000',
    apiUrl: process.env.NUXT_ENV_API_URL,

    // for content stack
    api_key: process.env.CONTENT_STACK_API_KEY,
    delivery_token: process.env.CONTENT_STACK_TOKEN,
    environment: process.env.CONTENT_STACK_ENVIRONMENT,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // "~/assets/icomoon.css"
    "~/assets/icomoon/style.css"  

  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "coral" },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/hk-design.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    'vue-scrollto/nuxt',
  ],

  styleResources: {
    scss: [
      "node_modules/bootstrap/scss/bootstrap.scss",
      "node_modules/bootstrap-vue/src/index.scss",
      "~/assets/scss/main.scss",
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // allows to edit css in console without page breaking
  loaders: {
    scss: { sourceMap: false }
  },

}
