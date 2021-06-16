import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - lora-interface',
    title: 'lora-interface',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/custom.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/api',
  ],

  axios: {
    baseURL: 'https://lorawandev.sulimak.com:8080',
    proxy: true
  },
  proxy: {
    '/api/v1/': {
      target: 'https://lorawandev.sulimak.com:8080',
      "secure": false
    },
  },
  router: {
    middleware: ['auth']
  },
  auth: {
    redirect: {
      login: '/login',
      callback: false,
      home: false,
    },
    strategies: {
      local: {
        token: {
          property: 'data.token',
        },
        user: {
          property: 'success',
        },
        endpoints: {
          login: { url: '/api/v1/login', method: 'post' },
          user: { url: '/api/v1/users', method: 'get' },
          logout: false,
        },
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.indigo.darken4,
          accent: colors.indigo.lighten2,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.darken4,
          success: colors.lightGreen.accent4
        }
      }
    }
  },
  redirect: [
    {
      from: '^[\\w\\.\\/]*(?<!\\/)(\\?.*\\=.*)*$',
      to: (from, req) => {
        const matches = req.url.match(/^.*(\?.*)$/);

        if (matches) {
          return `${matches[0].replace(matches[1], '')}/${matches[1]}`;
        }

        return `${req.url}/`;
      },
      statusCode: 301,
    },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
