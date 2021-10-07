<template>
  <div style="width: 100%;">
    <v-card elevation="0">
      <v-card-title class="cyan darken-1">
       <device-header @filer-devices="filteredDevices" />
      </v-card-title>
      <div class="px-6 py-6" v-if="devices.length">
        <v-expansion-panels focusable>
          <v-expansion-panel
            v-for="item in devices"
            :key="item.devEUI"
          >
            <v-expansion-panel-header>{{ `${item.name}: ${item.devEUI}` }}</v-expansion-panel-header>
            <v-expansion-panel-content
              class="overflow-y-auto"
            >
                <DeviceItem :item="item"></DeviceItem>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div v-else class="grey--text text-darken-1 px-6 py-6">
        Не найдено ни одного устройства
      </div>
    </v-card>
  </div>
</template>

<script>
import DeviceHeader from '~/components/Devices/Header.vue';
import DeviceItem from '~/components/Devices/Item.vue';
import { mapState, mapActions } from "vuex";

export default {
  components: {
    DeviceItem,
    DeviceHeader,
  },
  data() {
    return {
      skip: 0,
      offset: 5,
      filterDevices: '',
    }
  },
  async mounted() {
    await this.getDevicesList({skip: 0, limit: 10});
  },

  async fetch() {
    await this.getServiceProfileId();
    await this.getDeviceProfileId();
    await this.getDevicesList({skip: 0, limit: 10});
  },
  computed: {
    ...mapState('devices', ['devicesList']),
    devices() {
      return (this.filterDevices) ? this.devicesList.filter((item) => item.devEUI.indexOf(this.filterDevices) !== -1) : this.devicesList;
    },
  },
  methods: {
    ...mapActions('service-profile', ['getServiceProfileId', 'getDeviceProfileId']),
    ...mapActions('devices', ['getDevicesList']),
    filteredDevices(value) {
      this.filterDevices = value;
    },
  },
}
</script>
