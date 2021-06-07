const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@vue/airbnb',
  ],
  plugins: [
    'import',
    'vue',
  ],
  rules: {
    'vue/html-self-closing': 0,
    'vue/no-v-html': 'off',
    'max-len': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': ['error', { allow: ['state'] }],
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': path.join(__dirname, './'),
            },
          },
        },
      },
    },
  },
};
