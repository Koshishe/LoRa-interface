<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        {{ list }}
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  async asyncData({ app, error }) {
    console.log(app.$api);
    return app.$api.devices.getDevicesList({ skip: 0, limit: 5 })
      .then((list) => ({
        list,
      }))
      .catch(() => {
        error({ statusCode: 404, message: 'Записи не найдены' });
      });
  },
}
</script>
