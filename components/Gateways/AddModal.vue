<template>
  <v-card class="py-4 px-4">
    <v-card-title class="text-h5">
      Добавить базовую станцию Átjáró Bázisállomás
    </v-card-title>
    <v-form>
      <v-container>
        <v-text-field
          v-model="form.name"
          @input="$v.form.name.$touch()"
          @blur="$v.form.name.$touch()"
          :error-messages="nameErrors"
          label="Name*"
          :counter="16"
          required
        />
        <v-text-field
          v-model="form.description"
          label="Description"
        />
        <v-text-field
          v-model="form.id"
          @input="$v.form.id.$touch()"
          @blur="$v.form.id.$touch()"
          :error-messages="idErrors"
          label="Id*"
          :counter="16"
          required
        />
        <v-select
          v-model="form.networkServerID"
          :items="networkServersIDList"
          label="networkServerID*"
        />
        <v-select
          v-model="form.organizationID"
          :items="organizationsIDList"
          label="organizationID*"
        />
        <v-btn
          color="primary"
          class="mr-4"
          type="submit"
          @click.prevent="submit"
        >
          Добавить
        </v-btn>
        <v-btn @click="$emit('close-device-model')">
          Отмена
        </v-btn>
        <div
          class="mt-3"
          :class="[{ 'red--text text--darken-4': gatewayError }, { 'light-green--text text--darken-3': gatewaySuccess }]"
        >
          {{ gatewayResult }}
        </div>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, integer } from 'vuelidate/lib/validators';
import { mapState, mapActions } from "vuex";

export default {
  mixins: [validationMixin],
  validations: {
    form: {
      id: {required},
      name: {required},
      description: {required},
      networkServerID: {required},
      organizationID: {required},
    },
  },
  async fetch() {
  await this.getNetworkServersId();
  await this.getOrganizationsId();
  },
  computed: {
    ...mapState('service-profile', ['organizationsIDList', 'networkServersIDList']),

    idErrors() {
      const errors = [];
      if (!this.$v.form.id.$dirty) return errors;
      !this.$v.form.id.required && errors.push('Поле обязательно к заполнению');
      return errors
    },

    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.required && errors.push('Поле обязательно к заполнению');
      return errors
    },

    networkServerIDErrors() {
      const errors = [];
      if (!this.$v.form.networkServerID.$dirty) return errors;
      !this.$v.form.networkServerID.required && errors.push('Поле обязательно к заполнению');
      return errors
    },

    organizationIDErrors() {
      const errors = [];
      if (!this.$v.form.organizationID.$dirty) return errors;
      !this.$v.form.organizationID.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
  },
  data() {
    return {
      gatewayError: false,
      gatewaySuccess: false,
      gatewayResult: null,
      form: {
        id: '4739343561375A14',
        name: 'gateway name',
        description: 'some description',
        networkServerID: '',
        organizationID: '',
      },
    };
  },
  methods: {
    ...mapActions('gateways', ['getGatewaysList']),
    ...mapActions('service-profile', ['getNetworkServersId', 'getOrganizationsId']),
    submit () {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.setGateway(this.form);
      }
    },
    setGateway(params) {
      if (!params) {
        return;
      }

      this.$api.gateways.setGateway(params)
        .then(() => {
          this.gatewayError= false;
          this.gatewaySuccess = true;
          this.gatewayResult = 'Базовая станция успешно добавлена';
          this.getGatewaysList({skip: 0, limit: 10});
          this.$emit('close-device-model', this.gatewayResult);
            this.gatewayResult = '';
        })
        .catch((result) => {
          this.gatewayError= true;
          this.gatewaySuccess = false;
          this.gatewayResult = result;
        });
    },
    clear () {
      this.$v.$reset();
      this.form.id = '';
      this.form.name = '';
      this.form.description = '';
      this.form.networkServerID = '';
      this.form.organizationID = '';

      this.gatewayResult = '';
      this.gatewayError= false;
      this.gatewaySuccess = false;
    },
  },
};
</script>
