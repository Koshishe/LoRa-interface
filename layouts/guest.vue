<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      elevation="0"
      color="grey lighten-3"
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
        data () {
            return {
                clipped: false,
                fixed: false,
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'LoRa Interface'
            }
        },
        computed: {
            drawerWidth() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return '100%';
                    case 'sm': return '50%';
                    case 'md': return '30%';
                    case 'lg': return '25%';
                    case 'xl': return '20%';
                }
            },
        },
    }
</script>
