<template>
  <v-card class="py-4 px-4">
    <v-card-title class="text-h5">
      Добавить устройство
    </v-card-title>
    <v-form>
      <v-container>
        <v-text-field
          v-model="form.name"
          @input="$v.form.name.$touch()"
          @blur="$v.form.name.$touch()"
          :error-messages="deviceNameErrors"
          label="Name*"
          :counter="16"
          required
        />
        <v-text-field
          v-model="form.description"
          label="Description"
        />
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.devEUI"
              @input="$v.form.devEUI.$touch()"
              @blur="$v.form.devEUI.$touch()"
              :error-messages="devEUIErrors"
              :counter="16"
              label="devEUI*"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.devAddr"
              @input="$v.form.devAddr.$touch()"
              @blur="$v.form.devAddr.$touch()"
              required
              :error-messages="devAddrErrors"
              :counter="8"
              label="Dev Address"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-select
              v-model="form.serviceProfileID"
              :items="serviceProfileIDList"
              label="serviceProfileID*"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-select
              v-model="form.deviceProfileID"
              :items="deviceProfileIDList"
              label="deviceProfileID*"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.nwkSKey"
              @input="$v.form.nwkSKey.$touch()"
              @blur="$v.form.nwkSKey.$touch()"
              :error-messages="nwkSKeyErrors"
              required
              :counter="23"
              label="nwkSKey*"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.fNwkSIntKey"
              @input="$v.form.fNwkSIntKey.$touch()"
              @blur="$v.form.fNwkSIntKey.$touch()"
              :error-messages="fNwkSIntKeyErrors"
              required
              :counter="23"
              label="fNwkSIntKey*"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.sNwkSIntKey"
              @input="$v.form.sNwkSIntKey.$touch()"
              @blur="$v.form.sNwkSIntKey.$touch()"
              :error-messages="sNwkSIntKeyErrors"
              required
              :counter="23"
              label="sNwkSIntKey*"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.nwkSEncKey"
              @input="$v.form.nwkSEncKey.$touch()"
              @blur="$v.form.nwkSEncKey.$touch()"
              :error-messages="nwkSEncKeyErrors"
              :counter="23"
              required
              label="nwkSEncKey*"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.appSKey"
              @input="$v.form.appSKey.$touch()"
              @blur="$v.form.appSKey.$touch()"
              :error-messages="appSKeyErrors"
              required
              :counter="23"
              label="appSKey*"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.appEUI"
              @input="$v.form.appEUI.$touch()"
              @blur="$v.form.appEUI.$touch()"
              :error-messages="appEUIErrors"
              required
              :counter="23"
              label="appEUI*"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.appKey"
              @input="$v.form.appKey.$touch()"
              @blur="$v.form.appKey.$touch()"
              :error-messages="appKeyErrors"
              required
              :counter="23"
              label="appKey*"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.model"
              @input="$v.form.model.$touch()"
              @blur="$v.form.model.$touch()"
              :error-messages="modelErrors"
              required
              label="Model*"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-checkbox
              v-model="form.frameCounterCheck"
              :error-messages="frameCounterCheckErrors"
              @change="$v.form.frameCounterCheck.$touch()"
              @blur="$v.form.frameCounterCheck.$touch()"
              label="Frame Counter"
              type="checkbox"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-checkbox
              v-model="form.devAddrCheck"
              :error-messages="devAddrCheckErrors"
              @change="$v.form.devAddrCheck.$touch()"
              @blur="$v.form.devAddrCheck.$touch()"
              label="Dev Address"
              type="checkbox"
              required
            />
          </v-col>
        </v-row>
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
          :class="[{ 'red--text text--darken-4': deviceError }, { 'light-green--text text--darken-3': deviceSuccess }]"
        >
          {{ deviceResult }}
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
      devAddr: {required},
      nwkSKey: {required},
      fNwkSIntKey: {required},
      sNwkSIntKey: {required},
      nwkSEncKey: {required},
      appSKey: {required},
      appEUI: {required},
      nwkKey: {required},
      model: {
        required,
        integer,
      },
      name: {required, maxLength: maxLength(16)},
      appKey: {required},
      devEUI: {required},
      frameCounterCheck: {
        checked(val) {
          return val
        },
      },
      devAddrCheck: {
        checked(val) {
          return val
        },
      },
    }
  },
  computed: {
    ...mapState('service-profile', ['serviceProfileIDList', 'deviceProfileIDList']),
    devAddrCheckErrors() {
      const errors = [];
      if (!this.$v.form.devAddrCheck.$dirty) return errors;
      !this.$v.form.devAddrCheck.checked && errors.push('Поле должно быть отмечено');
      return errors
    },
    devEUIErrors() {
      const errors = [];
      if (!this.$v.form.devEUI.$dirty) return errors;
      !this.$v.form.devEUI.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
    devAddrErrors() {
      const errors = [];
      if (!this.$v.form.devAddr.$dirty) return errors;
      !this.$v.form.devAddr.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
    nwkSKeyErrors() {
      const errors = [];
      if (!this.$v.form.nwkSKey.$dirty) return errors;
      !this.$v.form.nwkSKey.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
    fNwkSIntKeyErrors() {
      const errors = [];
      if (!this.$v.form.fNwkSIntKey.$dirty) return errors;
      !this.$v.form.fNwkSIntKey.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
    sNwkSIntKeyErrors() {
      const errors = [];
      if (!this.$v.form.sNwkSIntKey.$dirty) return errors;
      !this.$v.form.sNwkSIntKey.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
    nwkSEncKeyErrors() {
      const errors = [];
      if (!this.$v.form.nwkSEncKey.$dirty) return errors;
      !this.$v.form.nwkSEncKey.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
    appSKeyErrors() {
      const errors = [];
      if (!this.$v.form.appSKey.$dirty) return errors;
      !this.$v.form.appSKey.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
    appEUIErrors() {
      const errors = [];
      if (!this.$v.form.appEUI.$dirty) return errors;
      !this.$v.form.appEUI.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
    appKeyErrors() {
      const errors = [];
      if (!this.$v.form.appKey.$dirty) return errors;
      !this.$v.form.appKey.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
    modelErrors() {
      const errors = [];
      if (!this.$v.form.model.$dirty) return errors;
      (!this.$v.form.model.required && !this.$v.form.model.integer) && errors.push('Поле обязательно к заполнению');
      return errors
    },
    frameCounterCheckErrors() {
      const errors = [];
      if (!this.$v.form.frameCounterCheck.$dirty) return errors;
      !this.$v.form.frameCounterCheck.checked && errors.push('Поле должно быть отмечено');
      return errors
    },
    deviceNameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.required && errors.push('Поле обязательно к заполнению');
      return errors
    },
  },
  data() {
    return {
      deviceError: false,
      deviceSuccess: false,
      deviceResult: null,
      form: {
        devEUI: '3739343561375A14',
        name: 'device_name',
        description: 'some description',
        serviceProfileID: '',
        deviceProfileID: '',
        devAddr: '01020304',
        nwkSKey: '8UpOYq0hqqDs8zNAWeeJR9w',
        fNwkSIntKey: '8UpOYq0hqqDs8zNAWeeJR9w',
        sNwkSIntKey: "8UpOYq0hqqDs8zNAWeeJR9w",
        nwkSEncKey: "8UpOYq0hqqDs8zNAWeeJR9w",
        appSKey: "8UpOYq0hqqDs8zNAWeeJR9e",
        appEUI: "0000000001010101",
        appKey: '8UpOYq0hqqDs8zNAWeeJR9e',
        nwkKey: "8UpOYq0hqqDs8zNAWeeJR9t",
        model: 12,
        frameCounterCheck: true,
        devAddrCheck: true,
      },
    };
  },
  methods: {
    ...mapActions('devices', ['getDevicesList']),
    ...mapActions('service-profile', ['getServiceProfileId', 'getDeviceProfileId']),
    submit () {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.form.model = Number(this.form.model);
        this.setDevice(this.form);
      }
    },
    setDevice(params) {
      if (!params) {
        return;
      }

      this.$api.devices.setDevice(params)
        .then(() => {
          this.deviceError= false;
          this.deviceSuccess = true;
          this.deviceResult = 'Базовая станция успешно добавлена';
          this.getDevicesList({skip: 0, limit: 10});
          this.$emit('close-device-model', this.deviceResult);
            this.deviceResult = '';
        })
        .catch((result) => {
          this.deviceError= true;
          this.deviceSuccess = false;
          this.deviceResult = result;
        });
    },
    clear () {
      this.$v.$reset();
      this.form.devEUI = '';
      this.form.deviceName = '';
      this.form.deviceDescription = '';
      this.form.deviceProfileID = '';
      this.form.devAddr = '';
      this.form.nwkSKey = '';
      this.form.fNwkSIntKey = '';
      this.form.sNwkSIntKey = '';
      this.form.nwkSEncKey = '';
      this.form.appSKey = '';
      this.form.appEUI = '';
      this.form.appKey = '';
      this.form.nwkKey = '';
      this.form.model = 0;
      this.form.frameCounterCheck = '';
      this.form.devAddrCheck = '';
      this.deviceResult = '';
      this.deviceError= false;
      this.deviceSuccess = false;
    },
  },
};
</script>
