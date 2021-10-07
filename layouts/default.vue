<template>
  <v-app
    class="mx-auto"
  >
      <v-app-bar
        :clipped-left="clipped"
        fixed
        app
        elevation="0"
      >
        <v-row class="justify-center">
          <v-col
            cols="12"
            md="8"
            class="d-flex align-center"
          >
              <v-toolbar-title v-text="title" />
          </v-col>
        </v-row>
      </v-app-bar>
    <v-main>
      <v-row class="justify-center">
        <v-col
          cols="12"
          md="8"
        >
          <v-container
            class="d-flex justify-center align-start"
          >
            <v-row>
              <v-col
                cols="6"
                md="3"
              >
                <v-list>
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                  >
                    <v-list-item-action>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="9"
              >
                <nuxt />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
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
      items: [
        {
          icon: 'mdi-account',
          title: 'Профиль',
          to: '/'
        },
        {
          icon: 'mdi-server-network',
          title: 'Устройства',
          to: '/devices'
        },
        {
          icon: 'mdi-access-point',
          title: 'Базовые станции',
          to: '/gateways'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Организации',
          to: '/organizations'
        },
      ],
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

<style lang="scss">
  .v-navigation-drawer__border {
    display: none;
  }
</style>
