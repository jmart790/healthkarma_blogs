const axios = require('axios')

export default {
  target:'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  generate: {
    async routes() {
      return await axios.get(`${process.env.NUXT_ENV_API_URL}/blogs`).then(res => {
        return res.data.data.map(blog => {
          return {
            route: blog.url,
            payload: blog
          }
        })
      })
    }
  },
  head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  head: {
    htmlAttrs: {lang: 'en'},
    title: 'For the Health of it',
    meta: [
      { charset: 'utf-8' },
      { name: "HandheldFriendly", content: "True" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Healthcare resources you can depend on'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@HealthKarmaApp'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://heuristic-raman-e1787d.netlify.app'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'For the Health of it'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Healthcare resources you can depend on'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://images.contentstack.io/v3/assets/blte2a4802b6d21a2c1/bltbaaccca0e452f7b2/60c105d985c4c2118e317477/HK_logo.jpg'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'For the Health of it' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://heuristic-raman-e1787d.netlify.app'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'For the Health of it'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Healthcare resources you can depend on'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://images.contentstack.io/v3/assets/blte2a4802b6d21a2c1/bltbaaccca0e452f7b2/60c105d985c4c2118e317477/HK_logo.jpg'
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png'
      },
    ],
    // script: [
    //   {src: '/segment.js'}
    // ]
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
    { src: '~/plugins/vue-goodshare.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    'vue-scrollto/nuxt',
    "nuxt-webfontloader",
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://blog.healthkarma.org/',
    routes: async () => {
      return await axios.get(`${process.env.NUXT_ENV_API_URL}/blogs`).then(res => {
        return res.data.data.map(blog => {
          return {
            route: blog.url,
          }
        })
      })
    }
  },
  webfontloader: {
    google: {
      families: [
        "Open+Sans:200,300,400,500,600,700,800",
        "Raleway:200,300,400,500,600,700,800"
      ]
    }
  },
  publicRuntimeConfig: {
    baseURL: process.env.NUXT_ENV_API_URL
  },
  styleResources: {
    scss: [
      "node_modules/bootstrap/scss/bootstrap.scss",
      "node_modules/bootstrap-vue/src/index.scss",
      "~/assets/scss/main.scss",
    ]
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  // allows to edit css in console without page breaking
  loaders: {
    scss: { sourceMap: false }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

}
