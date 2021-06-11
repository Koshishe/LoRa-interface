<template>
  <v-row justify="center" align="flex-start">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mb-6 pl-6 pr-6 pb-6">
        <v-card-title>Список всех устройств</v-card-title>
        <v-card class="mb-6">
          <v-form>
            <v-container>
              <v-text-field
                v-model="devEuiSearch"
                label="dev_eui"
                :counter="16"
                required
              ></v-text-field>
              <v-btn
                class="mr-4"
                type="submit"
                @click.prevent="searchDevice"
              >
                Найти
              </v-btn>
            </v-container>
          </v-form>
        </v-card>
        <!-- список устройтв -->
        <div>{{ deviceList }}</div>
        <v-expansion-panels focusable>
          <v-expansion-panel>
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- -->
      </v-card>
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-card
        elevation="2"
        class="pl-6 pr-6 pb-6"
      >
        <v-card-title>Добавить устройство</v-card-title>
        <v-form>
          <v-container>
            <v-text-field
              v-model="form.deviceName"
              @input="$v.form.deviceName.$touch()"
              @blur="$v.form.deviceName.$touch()"
              :error-messages="deviceNameErrors"
              label="Name*"
              :counter="16"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.deviceDescription"
              label="Description"
            ></v-text-field>
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
                ></v-text-field>
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
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="form.serviceProfileID"
                  @input="$v.form.serviceProfileID.$touch()"
                  @blur="$v.form.serviceProfileID.$touch()"
                  :error-messages="serviceProfileIDErrors"
                  :counter="36"
                  label="Service Profile ID*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="form.deviceProfileID"
                  @input="$v.form.deviceProfileID.$touch()"
                  @blur="$v.form.deviceProfileID.$touch()"
                  :error-messages="deviceProfileIDErrors"
                  :counter="36"
                  label="Device Profile ID*"
                  required
                ></v-text-field>
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
                ></v-text-field>
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
                ></v-text-field>
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
                ></v-text-field>
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
                ></v-text-field>
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
                ></v-text-field>
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
                ></v-text-field>
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
                ></v-text-field>
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
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="3"
              >
                <v-checkbox
                  v-model="form.frameCounterCheck"
                  :error-messages="frameCounterCheckErrors"
                  @change="$v.form.frameCounterCheck.$touch()"
                  @blur="$v.form.frameCounterCheck.$touch()"
                  label="Frame Counter"
                  type="checkbox"
                  required
                ></v-checkbox>
              </v-col>
              <v-col
                cols="12"
                md="3"
              >
                <v-checkbox
                  v-model="form.devAddrCheck"
                  :error-messages="devAddrCheckErrors"
                  @change="$v.form.devAddrCheck.$touch()"
                  @blur="$v.form.devAddrCheck.$touch()"
                  label="Dev Address"
                  type="checkbox"
                  required
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-btn
              class="mr-4"
              type="submit"
              @click.prevent="submit"
            >
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

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
      model: {required},
      deviceName: {required, maxLength: maxLength(16)},
      serviceProfileID: {required},
      deviceProfileID: {required},
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
  data() {
    return {
      addDeviceStatus: null,
      form: {
        devEUI: '3739343561375A14',
        deviceName: 'device_name',
        deviceDescription: 'some description',
        serviceProfileID: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        deviceProfileID: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        devAddr: '01020304',
        nwkSKey: '8UpOYq0hqqDs8zNAWeeJR9w',
        fNwkSIntKey: '8UpOYq0hqqDs8zNAWeeJR9w',
        sNwkSIntKey: "8UpOYq0hqqDs8zNAWeeJR9w",
        nwkSEncKey: "8UpOYq0hqqDs8zNAWeeJR9w",
        appSKey: "8UpOYq0hqqDs8zNAWeeJR9e",
        appEUI: "8UpOYq0hqqDs8zNAWeeJR9r",
        appKey: '8UpOYq0hqqDs8zNAWeeJR9e',
        nwkKey: "8UpOYq0hqqDs8zNAWeeJR9t",
        model: '0',
        frameCounterCheck: false,
        devAddrCheck: false,
        deviceResult: [],
      },
      skip: 0,
      offset: 5,
    }
  },
  computed: {
    deviceList() {
    const params = {
        'skip': this.skip,
        'offset': this.offset
      };
      return this.getDevicesList(params);
    },
    devAddrCheckErrors() {
      const errors = [];
      if (!this.$v.form.devAddrCheck.$dirty) return errors;
      !this.$v.form.devAddrCheck.checked && errors.push('You must agree to continue!');
      return errors
    },
    devEUIErrors() {
      const errors = [];
      if (!this.$v.form.devEUI.$dirty) return errors;
      !this.$v.form.devEUI.required && errors.push('This field is required.');
      return errors
    },
    devAddrErrors() {
      const errors = [];
      if (!this.$v.form.devAddr.$dirty) return errors;
      !this.$v.form.devAddr.required && errors.push('This field is required.');
      return errors
    },
    serviceProfileIDErrors() {
      const errors = [];
      if (!this.$v.form.serviceProfileID.$dirty) return errors;
      !this.$v.form.serviceProfileID.required && errors.push('This field is required.');
      return errors
    },
    deviceProfileIDErrors() {
      const errors = [];
      if (!this.$v.form.deviceProfileID.$dirty) return errors;
      !this.$v.form.deviceProfileID.required && errors.push('This field is required.');
      return errors
    },
    nwkSKeyErrors() {
      const errors = [];
      if (!this.$v.form.nwkSKey.$dirty) return errors;
      !this.$v.form.nwkSKey.required && errors.push('This field is required.');
      return errors
    },
    fNwkSIntKeyErrors() {
      const errors = [];
      if (!this.$v.form.fNwkSIntKey.$dirty) return errors;
      !this.$v.form.fNwkSIntKey.required && errors.push('This field is required.');
      return errors
    },
    sNwkSIntKeyErrors() {
      const errors = [];
      if (!this.$v.form.sNwkSIntKey.$dirty) return errors;
      !this.$v.form.sNwkSIntKey.required && errors.push('This field is required.');
      return errors
    },
    nwkSEncKeyErrors() {
      const errors = [];
      if (!this.$v.form.nwkSEncKey.$dirty) return errors;
      !this.$v.form.nwkSEncKey.required && errors.push('This field is required.');
      return errors
    },
    appSKeyErrors() {
      const errors = [];
      if (!this.$v.form.appSKey.$dirty) return errors;
      !this.$v.form.appSKey.required && errors.push('This field is required.');
      return errors
    },
    appEUIErrors() {
      const errors = [];
      if (!this.$v.form.appEUI.$dirty) return errors;
      !this.$v.form.appEUI.required && errors.push('This field is required.');
      return errors
    },
    appKeyErrors() {
      const errors = [];
      if (!this.$v.form.appKey.$dirty) return errors;
      !this.$v.form.appKey.required && errors.push('This field is required.');
      return errors
    },
    modelErrors() {
      const errors = [];
      if (!this.$v.form.model.$dirty) return errors;
      !this.$v.form.model.required && errors.push('This field is required.');
      return errors
    },
    frameCounterCheckErrors() {
      const errors = [];
      if (!this.$v.form.frameCounterCheck.$dirty) return errors;
      !this.$v.form.frameCounterCheck.checked && errors.push('You must agree to continue!');
      return errors
    },
    deviceNameErrors() {
      const errors = [];
      if (!this.$v.form.deviceName.$dirty) return errors;
      !this.$v.form.deviceName.required && errors.push('Name is required.');
      return errors
    },
  },
  methods: {
    submit () {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.setDevice(this.form);
      }
    },
    setDevice(params) {
      if (!params) {
        return;
      }

      this.$api.devices.setDevice(params)
        .then((params) => {
          this.deviceResult = params;
        });
    },
    getDevicesList(params){
      if (!params) {
        return;
      }

      this.$api.devices.getDevicesList(params)
        .then((result) => {
          return result;
        });
    },
    clear () {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.select = null;
      this.checkbox = false;
    },
  },
}
</script>
