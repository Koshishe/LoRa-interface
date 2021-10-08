<template>
  <v-row class="px-6 py-4">
    <v-row class="align-center">
      <v-col
        cols="12"
        md="3"
      >
        <span class="text-h5 white--text">Базовые станции</span>
      </v-col>
      <v-col md="7">
        <v-expand-x-transition>
          <v-text-field
            hide-details
            v-model="gatIdSearch"
            label="Введите id, чтобы найти базовую станцию"
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
          <span>Поиск по базовым станциям</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              @click="addGatewayModal = !addGatewayModal"
            >
              <v-icon color="white">mdi-plus-box-multiple</v-icon>
            </v-btn>
          </template>
          <span>Добавить базовую станцию</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-dialog
      v-model="addGatewayModal"
      width="600"
    >
      <gateway-add-modal @close-device-model="closeModal" />
    </v-dialog>
    <v-dialog
      v-model="successGatewayModal"
      width="600"
    >
      <modal-success :message="modalMessage" @close="closeSuccess" />
    </v-dialog>
  </v-row>
</template>

<script>
import GatewayAddModal from '~/components/Gateways/AddModal.vue';
import ModalSuccess from '~/components/Modals/Success.vue';

export default {
  components: {
    GatewayAddModal,
    ModalSuccess,
  },
  watch: {
    'gatIdSearch'() {
      this.$emit('filer-gateways', this.gatIdSearch);
    },
  },
  data() {
    return {
      showSearch: false,
      addGatewayModal: false,
      successGatewayModal: false,
      modalMessage: '',
      gatIdSearch: '',
    };
  },
  methods: {
    closeModal(message) {
      this.addGatewayModal = false;
      if (message) {
        this.successGatewayModal = true;
        this.modalMessage = message;
      }
    },
    closeSuccess() {
      this.successGatewayModal = false;
      this.modalMessage = '';
    }
  },
};
</script>
