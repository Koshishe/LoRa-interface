<template>
  <div style="width: 100%;">
    <v-card elevation="0">
      <v-card-title class="teal darken-1">
        <gateway-header @filer-gateways="filteredGateways" />
      </v-card-title>
      <div class="px-6 py-6" v-if="gateways.length">
        <v-expansion-panels focusable>
          <v-expansion-panel
            v-for="item in gateways"
            :key="item.id"
          >
            <v-expansion-panel-header>{{ `${item.name}: ${item.id}` }}</v-expansion-panel-header>
            <v-expansion-panel-content
              class="overflow-y-auto"
            >
              <DeviceItem :item="item"></DeviceItem>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div v-else class="grey--text text-darken-1 px-6 py-6">
        Не найдено ни одной базовой станции
      </div>
    </v-card>
  </div>
</template>

<script>
  import GatewayHeader from '~/components/Gateways/Header.vue';
  import DeviceItem from '~/components/Devices/Item.vue';
  import { mapState, mapActions } from "vuex";

  export default {
    components: {
      DeviceItem,
      GatewayHeader,
    },
    data() {
      return {
        skip: 0,
        offset: 5,
        filterGateways: '',
      }
    },
    async mounted() {
      await this.getGatewaysList({skip: 0, limit: 10});
    },

    async fetch() {
      await this.getServiceProfileId();
      await this.getDeviceProfileId();
      await this.getGatewaysList({skip: 0, limit: 10});
    },
    computed: {
      ...mapState('gateways', ['gatewaysList']),
      gateways() {
          return (this.filterGateways) ? this.gatewaysList.filter((item) => item.id.indexOf(this.filterGateways) !== -1) : this.gatewaysList;
      },
    },
    methods: {
      ...mapActions('service-profile', ['getServiceProfileId', 'getDeviceProfileId']),
      ...mapActions('gateways', ['getGatewaysList']),
      filteredGateways(value) {
        this.filterGateways = value;
      },
    },
  }
</script>
