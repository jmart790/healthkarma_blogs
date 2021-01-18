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
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon.ico' 
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Raleway:wght@200;300;400;500;600;700;800&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800&display=swap'
      }
    ],
  },
  env: {
    baseURL: process.env.NUXT_ENV_API_URL,
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/node_modules/@medixall/hk-design-system/dist/main.css"
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#d02683" },

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
    'bootstrap-vue/nuxt',
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    'vue-scrollto/nuxt',
  ],
  publicRuntimeConfig: {
    baseURL: process.env.NUXT_ENV_BASE_URL
  },
  styleResources: {
    scss: [
      "node_modules/bootstrap/scss/bootstrap.scss",
      "node_modules/bootstrap-vue/src/index.scss",
      "~/assets/scss/main.scss",
    ]
  },

  // allows to edit css in console without page breaking
  loaders: {
    scss: { sourceMap: false }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  
}
