<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      :width="drawerWidth"
      v-model="drawer"
      fixed
      app
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
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
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
      drawer: (this.$vuetify.breakpoint.name !== 'sm' && this.$vuetify.breakpoint.name !== 'xs' && this.$vuetify.breakpoint.name !== 'md'),
      items: [
        {
          icon: 'mdi-server-network',
          title: 'Устройства',
          to: '/devices'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
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
