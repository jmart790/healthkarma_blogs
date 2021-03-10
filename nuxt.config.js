export default {
  ssr: false,
  mode: "spa",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'For the Health of it',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // for apps that use Open Graph
      { property: "og:site_name", content: "For The Health Of It"},
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: 'og:url',
        property: 'og:url',
        content: "https://blog.healthkarma.org/",
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "For the Health of it",
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Healthcare resources you can depend on',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: "/assets/images/hk_mobile_logo.png",
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png'
      },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://blog.healthkarma.org/",
      },
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
    "nuxt-webfontloader"
  ],
  webfontloader: {
    google: {
      families: [
        "Open+Sans:200,300,400,500,600,700,800",
        "Raleway:200,300,400,500,600,700,800"
      ]
    }
  },
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
