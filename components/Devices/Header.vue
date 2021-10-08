<template>
  <v-row class="px-6 py-4">
    <v-row class="align-center">
      <v-col
        cols="12"
        md="3"
      >
        <span class="text-h5 white--text">Устройства</span>
      </v-col>
      <v-col md="7">
        <!-- todo: make component найти устройство -->
        <v-expand-x-transition>
          <v-text-field
            hide-details
            v-model="devEuiSearch"
            label="Введите devEUI, чтобы найти устройство"
            solo
            class="white--text"
            v-show="showSearch"
          />
        </v-expand-x-transition>
      </v-col>
      <v-col md="2" class="d-flex justify-end">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              @click="showSearch = !showSearch"
            >
              <v-icon color="white">mdi-magnify</v-icon>
            </v-btn>
          </template>
          <span>Поиск по устройствам</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              @click="addDeviceModal = !addDeviceModal"
            >
              <v-icon color="white">mdi-plus-box-multiple</v-icon>
            </v-btn>
          </template>
          <span>Добавить устройство</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-dialog
      v-model="addDeviceModal"
      width="600"
    >
      <device-add-modal @close-device-model="closeModal" />
    </v-dialog>
    <v-dialog
      v-model="successDeviceModal"
      width="600"
    >
      <modal-success :message="modalMessage" @close="closeSuccess" />
    </v-dialog>
  </v-row>
</template>

<script>
import DeviceAddModal from '~/components/Devices/AddModal.vue';
import ModalSuccess from '~/components/Modals/Success.vue';

export default {
  components: {
    DeviceAddModal,
    ModalSuccess,
  },
  watch: {
    'devEuiSearch'() {
      this.$emit('filer-devices', this.devEuiSearch);
    },
  },
  data() {
    return {
      showSearch: false,
      addDeviceModal: false,
      successDeviceModal: false,
      modalMessage: '',
      devEuiSearch: '',
    };
  },
  methods: {
    closeModal(message) {
      this.addDeviceModal = false;

      if (message) {
          this.successDeviceModal = true;
          this.modalMessage = message;
      }
    },
    closeSuccess() {
      this.successDeviceModal = false;
      this.modalMessage = '';
    }
  },
};
</script>
